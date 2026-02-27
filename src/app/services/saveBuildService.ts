import { inject, Injectable } from "@angular/core";
import { LocalStorageService } from "./data/localStorageService";
import { BehaviorSubject, catchError, combineLatest, filter, map, Observable, of, switchMap, take, tap } from "rxjs";
import { KeyEnum } from "../models/enum/keyEnum";
import { Build } from "../models/data/build";
import { LevelFormService } from "./form/levelFormService";
import { ItemChooseService } from "./itemChooseService";
import { ClasseFormService } from "./form/classeFormService";
import { CodeAptitudesService } from "./codeAptitudesService";
import { SortFormService } from "./form/sortFormService";
import { ChasseFormService } from "./form/chasseFormService";
import { ElementSelectorService } from "./elementSelectorService";
import { SupabaseService } from "./supabase/supabaseService";
import { Router } from "@angular/router";
import { ClassIdEnum } from "../models/enum/classIdEnum";
import { Statistics } from "../models/data/statistics";
import { RecapStatsService } from "./recapStatsService";
import { NO_BUILD } from "../models/utils/utils";

@Injectable({ providedIn: 'root' })
export class SaveBuildService {

    private readonly localStorageService = inject(LocalStorageService);
    private readonly levelFormService = inject(LevelFormService);
    private readonly itemChooseService = inject(ItemChooseService);
    private readonly classeFormService = inject(ClasseFormService);
    private readonly codeAptitudesService = inject(CodeAptitudesService);
    private readonly sortFormService = inject(SortFormService);
    private readonly chasseFormService = inject(ChasseFormService);
    private readonly elementSelectorService = inject(ElementSelectorService);
    private readonly supabaseService = inject(SupabaseService);
    private readonly router = inject(Router);
    private readonly recapStatsService = inject(RecapStatsService);

    private readonly buildList = new BehaviorSubject<Build[]>([]);
    public readonly buildList$ = this.buildList.asObservable();
    private readonly currentBuildId = new BehaviorSubject<string | null>(null);
    private readonly currentTokenBuild = new BehaviorSubject<string | null>(null);
    private readonly statisticsId = new BehaviorSubject<string | null>(null);

    private readonly buildLoading = new BehaviorSubject<boolean>(false);
    public readonly buildLoading$ = this.buildLoading.asObservable();

    constructor() {
        const savedBuilds = this.localStorageService.getItem<Build[]>(KeyEnum.KEY_SAVE_BUILD_ALL) || [];
        this.buildList.next(savedBuilds);
        this.currentBuildId.subscribe(buildId => {
            const routerSplit = this.router.url.split("/");
            if (buildId && buildId !== NO_BUILD) {
                this.router.navigate(["/", buildId || NO_BUILD, ...routerSplit.slice(2)]); // Met à jour l'URL avec le nouvel id de build sans recharger la page
            }
        }
        )
    }

    /**
     * Initialise le build à partir de l'URL, si l'URL contient un id de build valide, sinon ne fait rien
     */
    public initId(buildId: string): void {
        if (buildId === NO_BUILD || !buildId) {
            return;
        }
        this.currentBuildId.next(buildId);
        this.supabaseService.getStatisticsByBuildId(buildId).pipe(
            take(1),
            tap(statistics => {
                if (statistics) {
                    this.statisticsId.next(statistics.id || null);
                }
            })
        ).subscribe();
    }

    /**
     * Regarde si le build existe, sinon le crée et navigue vers ce build
     * Si le build existe on charge les données de ce build
     * @param buildId
     */
    public createBuildIfNotExistsElseLoadIt(buildId: string): void {
        if (buildId === NO_BUILD || !buildId) {
            this.createAndNavigate();
        } else {
            this.supabaseService.getBuildById(buildId)
                .pipe(take(1),
                    tap(build => {
                        if (build) {
                            this.loadBuild(build);
                        }
                    }),
                    switchMap(build => {
                        if (build) {
                            return this.supabaseService.getStatisticsByBuildId(build.id || '').pipe(
                                tap(statistics => {
                                    if (statistics) {
                                        this.statisticsId.next(statistics.id || null);
                                    }
                                })
                            );
                        }
                        return [];
                    }),
                    catchError(() => {
                        this.createAndNavigate();
                        return [];
                    })).subscribe();
        }
    }

    /**
     * Crée un nouveau build vide et navigue vers la page d'accueil avec ce build dans l'url
     */
    public createAndNavigate(): void {
        this.supabaseService.createEmptyBuild()
            .pipe(
                switchMap(newBuild =>
                    this.supabaseService.createEmptyStatistics(newBuild?.id || '').pipe(
                        tap(newStatistics => this.statisticsId.next(newStatistics?.id || null)),
                        map(() => newBuild)
                    )
                )
            )
            .subscribe(newBuild => {
                if (!newBuild?.id) {
                    return;
                }
                this.loadBuild(newBuild);
                this.router.navigate(["/", newBuild.id]);
            });
    }

    /**
     * Ecoute les changements sur les différents services et sauvegarde le build à chaque changement sur Supabase
     * et dans le localStorage pour la liste des builds sauvegardés
     */
    public listenBuildChanges(): void {
        combineLatest([
            this.levelFormService.level$,
            this.itemChooseService.idItems$,
            this.classeFormService.classe$,
            this.codeAptitudesService.code$,
            this.sortFormService.codeBuild$,
            this.chasseFormService.enchantement$,
            this.buildLoading$
        ]).pipe(
            filter(([, , , , , , buildLoading]) => !buildLoading), // Ne pas sauvegarder pendant le chargement d'un build
            tap(() => {
                const token_build = this.currentTokenBuild.getValue();
                const token_user = this.localStorageService.getItem<string>(KeyEnum.KEY_TOKEN);
                if (token_build && token_user && token_build !== token_user) {
                    return; // Ne pas sauvegarder si le token du build actuel ne correspond pas au token de l'utilisateur (sécurité pour éviter d'écraser un build qui ne nous appartient pas)
                }
                this.saveCurrentBuild();
                this.saveBuildToSupabase();
            })
        ).subscribe();
    }

    private saveBuildToSupabase(): void {
        const id = this.currentBuildId.getValue();
        if (!id || id === NO_BUILD) {
            return; // Si on n'a pas d'id de build, on ne peut pas sauvegarder sur Supabase
        }
        const build: Build = {
            id,
            nameBuild: this.getNameFromBuild(),
            level: this.levelFormService.getValue(),
            itemsId: this.itemChooseService.getIdItems(),
            classe: this.classeFormService.getValue(),
            aptitudes: this.codeAptitudesService.getCode(),
            sorts: this.sortFormService.getCodeBuild(),
            enchantement: this.chasseFormService.getCodeBuild(),
            elementSelector: this.elementSelectorService.encodeForBuild(),
            compressed: false
        };
        this.supabaseService.updateBuild(build).pipe(
            switchMap(() => this.updateOrCreateStatistics(build))).subscribe();
    }

    /**
     * Met à jour ou crée les statistiques pour un build donné
     * @param build 
     */
    private updateOrCreateStatistics(build: Build): Observable<void> {
        const statsistics: Statistics = {
            ...this.recapStatsService.getCurrentStatistics(),
            id: this.statisticsId.getValue() || undefined,
            buildId: build.id,
            token: this.localStorageService.getItem<string>(KeyEnum.KEY_TOKEN) || ''
        } as Statistics;
        return this.supabaseService.updateOrCreateStatistics(statsistics);
    }

    /**
     * Recupère le nom du builds s'il existe
     * @returns 
     */
    private getNameFromBuild(): string {
        const id = this.currentBuildId.getValue() || '';
        const currentBuilds = this.buildList.getValue();
        const build = currentBuilds.find(b => b.id === id);
        return build?.nameBuild || this.generateDefaultName();
    }


    /**
     * Sauvegarde le build actuel depuis l'etat des services dans le localStorage
     */
    public saveCurrentBuild(nameBuild?: string): void {
        const build: Build = {
            id: this.currentBuildId.getValue() || '',
            nameBuild: nameBuild || this.getNameFromBuild(),
            level: this.levelFormService.getValue(),
            itemsId: this.itemChooseService.getIdItems(),
            classe: this.classeFormService.getValue(),
            aptitudes: this.codeAptitudesService.getCode(),
            sorts: this.sortFormService.getCodeBuild(),
            enchantement: this.chasseFormService.getCodeBuild(),
            elementSelector: this.elementSelectorService.encodeForBuild(),
            compressed: false,
            createdAt: Date.now()
        };
        if (!build.id || build.id === NO_BUILD) {
            return; // Si on n'a pas d'id de build, on ne peut pas sauvegarder dans le localStorage
        }
        this.addBuildToLocalStorage(build);
    }

    /**
     * Ajoute un build à la liste
     */
    public addBuildToLocalStorage(build: Build): void {


        // On enlève le build actuel s'il existe déjà pour éviter les doublons
        const current = this.buildList.getValue().find(b => b.id === build.id);
        if (current) {
            build.codeZenith = current.codeZenith; // Conserver le code zenith si le build existe déjà pour éviter de le perdre lors de l'import depuis l'URL qui ne contient pas forcément le code zenith
        }
        const currentBuilds = this.buildList.getValue().filter(b => b.id !== build.id);
        // Si le build ne contient plus d'item, alors on le supprime sans sauvegarder un build vide
        if (!build.itemsId) {
            this.buildList.next(currentBuilds);
            this.localStorageService.setItem(KeyEnum.KEY_SAVE_BUILD_ALL, currentBuilds);
            return; // Éviter d'ajouter des builds vides
        }
        currentBuilds.unshift(build);
        // Limiter à 50 builds max pour éviter de surcharger le localStorage
        if (currentBuilds.length > 50) {
            currentBuilds.pop();
        }
        this.buildList.next(currentBuilds);
        this.localStorageService.setItem(KeyEnum.KEY_SAVE_BUILD_ALL, currentBuilds);
    }

    public createBuild(build: Build): void {
        this.supabaseService.createBuild(build).subscribe(createdBuild => {
            if (createdBuild?.id) {
                this.statisticsId.next(null);
                this.addBuildToLocalStorage({ ...createdBuild, ...build });
                this.loadBuild(createdBuild, true);
            }
        });
    }

    /**
     * Charge un build et met à jour l'URL
     * @param build
     * @param saveStatistics indique si on doit sauvegarder les statistiques du build actuel
     */
    public loadBuild(build: Build, saveStatistics = false): void {
        this.buildLoading.next(true);
        this.currentBuildId.next(build.id ?? '');
        this.currentTokenBuild.next(build.token || this.localStorageService.getItem<string>(KeyEnum.KEY_TOKEN) || '');
        this.levelFormService.setValue(build.level ?? LevelFormService.DEFAULT_VALUE);
        this.elementSelectorService.decodeAndApplyFromBuild(build.elementSelector ?? "");
        this.itemChooseService.setIdItemsFromBuild(build.itemsId ?? "");
        this.classeFormService.setValue(build.classe ?? ClassIdEnum.Eniripsa);
        this.codeAptitudesService.saveCode(build.aptitudes ?? "");
        this.sortFormService.decodeAndSaveCodeBuild(build.sorts ?? "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");
        this.chasseFormService.decodeAndSaveCodeBuild(build.enchantement ?? "");

        of(saveStatistics).pipe(switchMap(save => {
            if (save) {
                return this.updateOrCreateStatistics(build);
            }
            return of(undefined);
        })).subscribe(() => {
            this.buildLoading.next(false);
        });
    }

    /**
     * Supprime un build par son index
     */
    public removeBuildByIndex(index: number): void {
        const currentBuilds = this.buildList.getValue();
        if (index >= 0 && index < currentBuilds.length) {
            currentBuilds.splice(index, 1);
            this.buildList.next(currentBuilds);
            this.localStorageService.setItem(KeyEnum.KEY_SAVE_BUILD_ALL, currentBuilds);
        }
    }

    /**
     * Supprime un build
     */
    public removeBuild(build: Build): void {
        const currentBuilds = this.buildList.getValue();
        const index = currentBuilds.findIndex(b =>
            b.itemsId === build.itemsId
        );

        if (index !== -1) {
            this.removeBuildByIndex(index);
        }
    }

    /**
     * Génère un nom par défaut pour le build
     */
    private generateDefaultName(): string {
        const now = new Date();
        return `Build ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
    }
}