import { inject, Injectable, PLATFORM_ID } from "@angular/core";
import { ItemsService } from "../data/itemsService";
import { isPlatformBrowser } from "@angular/common";
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { catchError, from, map, Observable, of, switchMap } from "rxjs";
import { Build } from "../../models/data/build";
import { KeyEnum } from "../../models/enum/keyEnum";
import { LocalStorageService } from "../data/localStorageService";
import { Statistics } from "../../models/data/statistics";
import { ClassIdEnum } from "../../models/enum/classIdEnum";
import { OrderBySearchBuildEnum } from "../../models/enum/orderBySearchBuildEnum";

const SUPABASE_URL = 'https://nsxhzgbzihkpltpsqpip.supabase.co';
const SUPABASE_KEY = 'sb_publishable_4twYhHBfyncLO2Fq8YLSLA_GaUjMka1';

let browserSupabaseClient: SupabaseClient | null = null;
const BUILDS_PAGE_SIZE = 100;
const MINIMUM_BUILDS_COUNT = 50;
const MAXIMUM_BUILDS_COUNT = 100;

type BuildStatisticsRow = Statistics & {
    build: Build | Build[] | null;
};

type StatisticsFilterQuery = ReturnType<ReturnType<SupabaseClient['from']>['select']>;

interface FilterQueryParams {
    lvlMin: number;
    lvlMax: number;
    classe: ClassIdEnum | null;
    PA: number;
    PM: number;
    PW: number;
    PO: number;
    CC: number;
    parade: number;
    sublimationEpique: string;
    sublimationRelique: string;
    idItems: string[][];
    sublimations: string[];
    name: string;
}

@Injectable({ providedIn: 'root' })
export class SupabaseService {
    private readonly platformId = inject(PLATFORM_ID);
    private readonly isBrowser = isPlatformBrowser(this.platformId);
    private readonly localStorageService = inject(LocalStorageService);
    private readonly itemsService = inject(ItemsService);
    private readonly supabase: SupabaseClient | null;

    /**
     * Initialise le client Supabase uniquement en environnement navigateur (SSR safe)
     */
    constructor() {
        if (!this.isBrowser) {
            this.supabase = null;
            return;
        }

        if (!browserSupabaseClient) {
            browserSupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
                auth: {
                    persistSession: false,
                    autoRefreshToken: false,
                    detectSessionInUrl: false,
                },
            });
        }

        this.supabase = browserSupabaseClient;
    }

    /**
     * Récupère le jeton d'authentification utilisateur stocké localement
     */
    private get userToken(): string {
        return this.localStorageService.getItem<string>(KeyEnum.KEY_TOKEN) || '';
    }

    /**
     * Récupère la liste complète de tous les builds
     * @returns Observable contenant la liste des builds
     */
    public getBuildsList(): Observable<Build[]> {
        if (!this.isBrowser || !this.supabase) {
            return of([]);
        }
        return from(this.supabase.from('build').select('*')).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                return (data ?? []) as Build[];
            })
        );
    }

    /**
     * Récupère la liste des builds triée par le nombre de maitrises décroissant
     * avec leur statistiques associées
     * @param lvlMin niveau minimum du build (optionnel)
     * @param lvlMax niveau maximum du build (optionnel)
     * @param classe classe du build (optionnel)
     * @param orderBy critère de tri des builds (par défaut maitrises)
     * @param PA nombre minimum de PA (optionnel)
     * @param PM nombre minimum de PM (optionnel)
     * @param PW nombre minimum de PW (optionnel)
     * @param PO nombre minimum de PO (optionnel)
     * @param CC nombre minimum de CC (optionnel) 
     * @param parade nombre minimum de parade (optionnel)
     * @param sublimationEpique id de la sublimation épique présente dans le build (optionnel)
     * @param sublimationRelique id de la sublimation relique présente dans le build (optionnel)
     * @param idItems liste d'id d'items présents dans le build (optionnel)
     * @param sublimations liste de sublimations présentes dans le build (optionnel)
     * @param name nom du build (optionnel)
     * @returns Observable contenant la liste des builds filtrés avec leurs statistiques associées
     */
    public getBuildsListByFilter(
        lvlMin = 200,
        lvlMax = 245,
        classe: ClassIdEnum | null = null,
        orderBy: OrderBySearchBuildEnum = OrderBySearchBuildEnum.maitrises,
        PA = 6,
        PM = 3,
        PW = 6,
        PO = 0,
        CC = 0,
        parade = 0,
        sublimationEpique = '',
        sublimationRelique = '',
        idItems: string[][] = [],
        sublimations: string[] = [],
        name = '',
    ): Observable<{ build: Build, statistics: Statistics | null }[]> {
        if (!this.isBrowser || !this.supabase) {
            return of([]);
        }

        const filterParams: FilterQueryParams = {
            lvlMin, lvlMax, classe, PA, PM, PW, PO, CC, parade,
            sublimationEpique, sublimationRelique, idItems, sublimations, name
        };

        const createQuery = () => this.createBuildsQuery(filterParams);
        const levelMax = !lvlMax || lvlMax <= 0 ? 999 : lvlMax;

        return from(this.fetchFilteredBuilds(createQuery, orderBy, levelMax));
    }

    /**
     * Construit la requête de base Supabase pour la recherche filtrée de builds
     * @param params Paramètres de filtrage des builds
     * @returns Instance du builder de requête Supabase
     */
    private createBuildsQuery(params: FilterQueryParams): StatisticsFilterQuery {
        const PA = !params.PA || params.PA <= 0 ? -100 : params.PA;
        const PM = !params.PM || params.PM <= 0 ? -100 : params.PM;
        const PW = !params.PW || params.PW <= 0 ? -100 : params.PW;
        const PO = !params.PO || params.PO <= 0 ? -100 : params.PO;
        const CC = !params.CC || params.CC <= 0 ? -100 : params.CC;
        const parade = !params.parade || params.parade <= 0 ? -100 : params.parade;
        const levelMin = !params.lvlMin || params.lvlMin <= 0 ? 0 : params.lvlMin;
        const levelMax = !params.lvlMax || params.lvlMax <= 0 ? 999 : params.lvlMax;
        const subEpique = !params.sublimationEpique ? '%%' : `%E${params.sublimationEpique}%`;
        const subRelique = !params.sublimationRelique ? '%%' : `%R${params.sublimationRelique}%`;
        const nameFilter = !params.name ? '%%' : `%${params.name}%`;

        const request = this.supabase!.from('statistics')
            .select('*, build!inner(*)')
            .eq('build.hide', false)
            .neq('build.itemsId', '')
            .gte('build.level', levelMin)
            .lte('build.level', levelMax)
            .gt('maitrises', 40)
            .gte('PA', PA)
            .gte('PM', PM)
            .gte('PW', PW)
            .gte('PO', PO)
            .gte('CC', CC)
            .gte('parade', parade)
            .like('build.enchantement', subEpique)
            .like('build.enchantement', subRelique)
            .ilike('build.nameBuild', nameFilter);

        if (params.classe) {
            request.eq('build.classe', params.classe);
        }

        this.applyItemAndSublimationFilters(request, params.idItems, params.sublimations);

        return request;
    }

    /**
     * Applique les filtres d'équipements et de sublimations sur la requête
     * @param request Requête Supabase
     * @param idItems Liste des groupes d'ID d'équipements
     * @param sublimations Liste des sublimations recherchées
     */
    private applyItemAndSublimationFilters(
        request: StatisticsFilterQuery,
        idItems: string[][],
        sublimations: string[]
    ): void {
        idItems.forEach((group) => {
            const orGroup = group
                .filter(id => !!id)
                .map(id => `itemsId.like.%${id}%`)
                .join(',');

            if (orGroup) {
                request.or(orGroup, { referencedTable: 'build' });
            }
        });

        sublimations.forEach((sublimation) => {
            if (sublimation) {
                request.like('build.enchantement', `%${sublimation}%`);
            }
        });
    }

    /**
     * Exécute les requêtes paginées jusqu'à obtenir le nombre requis de builds éligibles
     * @param createQuery Fonction générant une nouvelle sous-requête
     * @param orderBy Critère de tri
     * @param levelMax Niveau maximum autorisé pour les objets du build
     * @returns Liste des builds filtrés avec leurs statistiques
     */
    private async fetchFilteredBuilds(
        createQuery: () => StatisticsFilterQuery,
        orderBy: OrderBySearchBuildEnum,
        levelMax: number
    ): Promise<{ build: Build; statistics: Statistics | null }[]> {
        const builds: { build: Build; statistics: Statistics | null }[] = [];
        let pageStart = 0;
        let hasNextPage = true;

        while (builds.length < MINIMUM_BUILDS_COUNT && hasNextPage) {
            const { data, error } = await createQuery()
                .order(orderBy, { ascending: false })
                .range(pageStart, pageStart + BUILDS_PAGE_SIZE - 1);

            if (error) {
                throw error;
            }

            const rows = (data ?? []) as BuildStatisticsRow[];
            hasNextPage = rows.length === BUILDS_PAGE_SIZE;
            pageStart += BUILDS_PAGE_SIZE;

            this.processBuildRows(rows, builds, levelMax);
        }

        return builds;
    }

    /**
     * Filtre et ajoute les lignes de builds valides au tableau de résultats
     * @param rows Lignes retournées par la requête
     * @param builds Tableau accumulateur de résultats
     * @param levelMax Niveau maximum autorisé
     */
    private processBuildRows(
        rows: BuildStatisticsRow[],
        builds: { build: Build; statistics: Statistics | null }[],
        levelMax: number
    ): void {
        rows.forEach(({ build, ...statistics }) => {
            const currentBuild = Array.isArray(build) ? build[0] : build;
            if (currentBuild && this.hasEligibleItems(currentBuild, levelMax) && builds.length < MAXIMUM_BUILDS_COUNT) {
                builds.push({ build: currentBuild, statistics });
            }
        });
    }

    /**
     * Vérifie si tous les objets équipés dans un build respectent le niveau maximum
     * @param build Build à vérifier
     * @param levelMax Niveau maximum autorisé
     * @returns `true` si tous les objets sont éligibles
     */
    private hasEligibleItems(build: Build, levelMax: number): boolean {
        const itemsId = build.itemsId?.split(',').map(id => Number(id)) ?? [];
        return itemsId.every(id => {
            const item = this.itemsService.getItem(id);
            return item ? item.level <= levelMax : true;
        });
    }

    /**
     * Récupère un build par son identifiant unique
     * @param id Identifiant du build
     * @returns Observable émettant le build ou `null` s'il n'existe pas
     */
    public getBuildById(id: string): Observable<Build | null> {
        if (!this.isBrowser || !this.supabase) {
            return of(null);
        }
        return from(this.supabase.from('build').select('*').eq('id', id).single()).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                return (data as Build) ?? null;
            })
        );
    }

    /**
     * Crée un nouveau build dans la base de données à partir d'un objet Build sans id 
     * (l'id est généré automatiquement par Supabase)
     * @param build
     * @returns 
     */
    public createBuild(build: Omit<Build, 'id'>): Observable<Build | null> {
        if (!this.isBrowser || !this.supabase) {
            return of(null);
        }
        return from(this.supabase.from('build').insert([build]).select()).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                return (data?.[0] as Build) ?? null;
            })
        );
    }

    /**
     * Crée un build vide par défaut avec des valeurs initiales
     * @returns Observable émettant le build créé ou `null` en cas d'erreur
     */
    public createEmptyBuild(): Observable<Build | null> {
        if (!this.isBrowser || !this.supabase) {
            return of(null);
        }
        const newBuild: Omit<Build, 'id'> = {
            nameBuild: 'Nouveau build',
            classe: 1,
            level: 200,
            itemsId: '',
            aptitudes: '',
            aptitudesManual: '',
            sorts: '0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0',
            enchantement: '',
            elementSelector: '',
            compressed: false,
            token: this.userToken,
            hide: false
        };
        return from(this.supabase.from('build').insert([newBuild]).select()).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                return (data?.[0] as Build) ?? null;
            })
        );
    }

    /**
     * Met à jour un build existant dans la base de données
     * @param build Build à mettre à jour (doit posséder un `id`)
     * @returns Observable complété lorsque la mise à jour est terminée
     */
    public updateBuild(build: Build): Observable<void> {
        if (!this.isBrowser || !this.supabase) {
            return of(undefined);
        }
        if (!build.id) {
            throw new Error('Build ID is required for update');
        }
        const token = this.userToken;
        return from(this.supabase.from('build').update(build).eq('id', build.id).eq('token', token)).pipe(
            map(({ error }) => {
                if (error) {
                    throw error;
                }
            })
        );
    }

    /**
     * Crée une nouvelle entrée de statistiques pour un build donné
     * @param buildId
     * @returns 
     */
    public createEmptyStatistics(buildId: string): Observable<Statistics | null> {
        if (!this.isBrowser || !this.supabase) {
            return of(null);
        }
        const newStatistics: Omit<Statistics, 'id'> = {
            buildId: buildId,
            PA: 0,
            PM: 0,
            PW: 0,
            PO: 0,
            CC: 0,
            parade: 0,
            maitrises: 0,
            resistances: 0,
            poids: 0,
            token: this.userToken,
        };
        return from(this.supabase.from('statistics').insert([newStatistics]).select()).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                return (data?.[0] as Statistics) ?? null;
            })
        );
    }

    /**
     * Crée les statistiques d'un build à partir d'un objet Statistics
     * @param statistics 
     * @returns 
     */
    public createStatistics(statistics: Statistics): Observable<Statistics | null> {
        if (!this.isBrowser || !this.supabase) {
            return of(null);
        }
        const newStatistics: Omit<Statistics, 'id'> = {
            token: this.userToken,
            buildId: statistics.buildId || '',
            PA: statistics.PA,
            PM: statistics.PM,
            PW: statistics.PW,
            PO: statistics.PO,
            CC: statistics.CC,
            parade: statistics.parade,
            maitrises: statistics.maitrises,
            resistances: statistics.resistances,
            poids: statistics.poids,
        };
        return from(this.supabase.from('statistics').insert([newStatistics]).select()).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                return (data?.[0] as Statistics) ?? null;
            })
        );
    }


    /**
     * Met à jour les statistiques d'un build s'il existe ou les crée sinon
     * @param statistics 
     * @returns 
     */
    public updateOrCreateStatistics(statistics: Statistics): Observable<void> {
        if (!this.isBrowser || !this.supabase) {
            return of(undefined);
        }
        if (!statistics.id) {
            return this.getStatisticsByBuildId(statistics?.buildId ?? "").pipe(
                switchMap(existingStats => {
                    if (existingStats) {
                        return this.updateOrCreateStatistics({ ...statistics, id: existingStats.id });
                    }
                    return this.createStatistics(statistics).pipe(map(() => undefined));
                }),
                catchError(() =>
                    this.createStatistics(statistics).pipe(map(() => undefined))
                )
            );
        }
        const token = this.userToken;
        return from(this.supabase.from('statistics').update(statistics).eq('id', statistics.id).eq('token', token)).pipe(
            map(({ error }) => {
                if (error) {
                    throw error;
                }
            })
        );
    }

    /**
     * Récupère les statistiques d'un build donné
     * @param buildId
     * @returns
     */
    public getStatisticsByBuildId(buildId: string): Observable<Statistics | null> {
        if (!this.isBrowser || !this.supabase) {
            return of(null);
        }
        return from(this.supabase.from('statistics').select('*').eq('buildId', buildId).limit(1).single()).pipe(
            map(({ data, error }) => {
                if (error) {
                    throw error;
                }
                return (data as Statistics) ?? null;
            })
        );
    }

    /**
     * Récupère les sublimations pour une classe donnée à partir des builds les plus récents
     * @param classe 
     * @returns 
     */
    public getSublimationsConseillees(classe: ClassIdEnum): Observable<string[]> {
        if (!this.isBrowser || !this.supabase) {
            return of([]);
        }
        return from(this.supabase.from('build')
            .select('enchantement')
            .eq('classe', classe)
            .neq('enchantement', '0-0-0-0|0-0-0-0|0-0-0-0|0-0-0-0|0-0-0-0|0-0-0-0|0-0-0-0|0-0-0-0|0-0-0-0|0-0-0-0')
            .order('createdAt', { ascending: false })
            .limit(100)).pipe(
                map(({ data, error }) => {
                    if (error) {
                        throw error;
                    }
                    return (data ?? [])
                        .map((item: Build) => item.enchantement as string)
                        .filter(x => x);
                })
            );
    }

    /**
     * Récupère les sorts conseillés pour une classe donnée à partir des builds les plus récents
     * @param classe 
     * @returns 
     */
    public getSortsConseillees(classe: ClassIdEnum): Observable<string[]> {
        if (!this.isBrowser || !this.supabase) {
            return of([]);
        }
        return from(this.supabase.from('build')
            .select('sorts')
            .eq('classe', classe)
            .filter('sorts', 'not.ilike', '%0-0%') // On filtre pour n'avoir que les builds avec un certain nombre de sorts renseignés
            .order('createdAt', { ascending: false })
            .limit(100)).pipe(
                map(({ data, error }) => {
                    if (error) {
                        throw error;
                    }
                    return (data ?? [])
                        .map((item: Build) => item.sorts as string)
                        .filter(x => x);
                })
            );
    }
}