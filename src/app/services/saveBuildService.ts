import { inject, Injectable } from "@angular/core";
import { LocalStorageService } from "./data/localStorageService";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../models/enum/keyEnum";
import { Build } from "../models/data/build";
import { UrlServices } from "./urlServices";
import { LevelFormService } from "./form/levelFormService";
import { ItemChooseService } from "./itemChooseService";
import { ClasseFormService } from "./form/classeFormService";
import { CodeAptitudesService } from "./codeAptitudesService";
import { SortFormService } from "./form/sortFormService";
import { ChasseFormService } from "./form/chasseFormService";

@Injectable({providedIn: 'root'})
export class SaveBuildService {
    
    private readonly localStorageService = inject(LocalStorageService);
    private readonly urlServices = inject(UrlServices);
    private readonly levelFormService = inject(LevelFormService);
    private readonly itemChooseService = inject(ItemChooseService);
    private readonly classeFormService = inject(ClasseFormService);
    private readonly codeAptitudesService = inject(CodeAptitudesService);
    private readonly sortFormService = inject(SortFormService);
    private readonly chasseFormService = inject(ChasseFormService);
    
    private readonly buildList = new BehaviorSubject<Build[]>([]);
    public readonly buildList$ = this.buildList.asObservable();
    
    constructor() {
        const savedBuilds = this.localStorageService.getItem<Build[]>(KeyEnum.KEY_SAVE_BUILD_ALL) || [];
        this.buildList.next(savedBuilds);
    }

    /**
     * Sauvegarde le build actuel depuis l'URL
     */
    public saveCurrentBuild(nameBuild?: string): void {
        const build: Build = {
            nameBuild: nameBuild || this.generateDefaultName(),
            level: this.urlServices.getLevelFromUrl(),
            itemsId: this.urlServices.getItemsIdFromUrl(),
            classe: this.urlServices.getClasseFromUrl(),
            aptitudes: this.urlServices.getAptitudesFromUrl(),
            sorts: this.urlServices.getSortsFromUrl(),
            enchantement: this.urlServices.getEnchantementFromUrl(),
            compressed: this.urlServices.isCompressed(),
            createdAt: Date.now()
        };
        
        this.addBuild(build);
    }

    /**
     * Ajoute un build à la liste
     */
    public addBuild(build: Build): void {
        // Vérifier qu'il y a au moins des items ou des paramètres valides
        if (!build.itemsId && !build.aptitudes && !build.sorts && !build.enchantement) {
            return; // Éviter d'ajouter des builds vides
        }
        
        const currentBuilds = this.buildList.getValue();
        
        // Vérifier si ce build existe déjà (comparaison par contenu)
        const isDuplicate = currentBuilds.some(b => 
            b.itemsId === build.itemsId &&
            b.level === build.level &&
            b.classe === build.classe &&
            b.aptitudes === build.aptitudes &&
            b.sorts === build.sorts &&
            b.enchantement === build.enchantement
        );
        
        if (!isDuplicate) {
            currentBuilds.unshift(build);
            // Limiter à 50 builds max pour éviter de surcharger le localStorage
            if (currentBuilds.length > 50) {
                currentBuilds.pop();
            }
            this.buildList.next(currentBuilds);
            this.localStorageService.setItem(KeyEnum.KEY_SAVE_BUILD_ALL, currentBuilds);
        }
    }

    /**
     * Charge un build et met à jour l'URL
     */
    public loadBuild(build: Build): void {
        if (build.level !== undefined) {
            this.levelFormService.setValue(build.level);
        }
        if (build.itemsId) {
            this.itemChooseService.setIdItemsFromBuild(build.itemsId);
        }
        if (build.classe !== undefined) {
            this.classeFormService.setValue(build.classe);
        }
        if (build.aptitudes) {
            this.codeAptitudesService.saveCode(build.aptitudes);
        }
        if (build.sorts) {
            this.sortFormService.decodeAndSaveCodeBuild(build.sorts);
        }
        if (build.enchantement) {
            this.chasseFormService.decodeAndSaveCodeBuild(build.enchantement);
        }
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
     * Supprime un build (pour compatibilité)
     */
    public removeBuild(build: Build): void {
        const currentBuilds = this.buildList.getValue();
        const index = currentBuilds.findIndex(b => 
            b.itemsId === build.itemsId &&
            b.level === build.level &&
            b.classe === build.classe &&
            b.aptitudes === build.aptitudes &&
            b.sorts === build.sorts &&
            b.enchantement === build.enchantement &&
            b.createdAt === build.createdAt
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