import { inject, Injectable } from "@angular/core";
import { KeyEnum } from "../../models/enum/keyEnum";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";
import { ChasseCombinaison, createEmptyChasseCombinaison } from "../../models/data/chasseCombinaison";
import { Chasse } from "../../models/data/chasse";
import { ItemTypeEnum } from "../../models/enum/itemTypeEnum";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { RecapStats } from "../../models/data/recap-stats";
import { getValueTacleEsquiveByLevel } from "../../models/enum/effetTacleEsquiveChassesEnum";
import { getValueInitiativesByLevel } from "../../models/enum/effetInitiavesChassesEnum";
import { getValueVieByLevel } from "../../models/enum/effetVieChassesEnum";
import { getValueMaitriseElemByLevel } from "../../models/enum/effetMaitriseElemChassesEnum";
import { getValueResistancesByLevel } from "../../models/enum/effetResistancesChassesEnum";
import { getValueMaitrisesByLevel } from "../../models/enum/effetMaitrisesChassesEnum";
import { Sublimation } from "../../models/data/sublimation";
import { IdChassesEnum } from "../../models/enum/idChassesEnum";
import { Enchantement } from "../../models/data/enchantement";
import { SublimationsEpiqueRelique } from "../../models/data/sublimationEpiqueRelique";
import { SublimationsDescriptions } from "../../models/data/sublimationsDescriptions";
import { SublimationService } from "../data/sublimationService";

@Injectable({providedIn: 'root'})
export class ChasseFormService extends AbstractFormService<FormControl<Enchantement>> {
    public static readonly DEFAULT_VALUE = () => {
        const initialChasses: ChasseCombinaison[] = [];
        for (let i = 0; i < 10; i++) {
          initialChasses.push(createEmptyChasseCombinaison());
        }
        return { chasseCombinaison: initialChasses };
    };

    private readonly recapChassesEffect = new BehaviorSubject<RecapStats[]>([]);
    public readonly recapChassesEffect$ = this.recapChassesEffect.asObservable();

    private readonly enchantement = new BehaviorSubject<Enchantement>(ChasseFormService.DEFAULT_VALUE());
    public readonly enchantement$ = this.enchantement.asObservable();

    private readonly sublimationsIdToLevel = new BehaviorSubject<Map<number, number>>(new Map());
    public readonly sublimationsIdToLevel$ = this.sublimationsIdToLevel.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_ENCHANTEMENT;
    public readonly form =  new FormControl<Enchantement>(ChasseFormService.DEFAULT_VALUE(), { nonNullable: true });

    private readonly sublimationService = inject(SublimationService);

    private readonly indexToItemType = new Map<number, ItemTypeEnum>([
        [0, ItemTypeEnum.CASQUE],
        [1, ItemTypeEnum.AMULETTE],
        [2, ItemTypeEnum.PLASTRON],
        [3, ItemTypeEnum.ANNEAU],
        [4, ItemTypeEnum.ANNEAU],
        [5, ItemTypeEnum.BOTTES],
        [6, ItemTypeEnum.CAPE],
        [7, ItemTypeEnum.EPAULETTES],
        [8, ItemTypeEnum.CEINTURE],
        [9, ItemTypeEnum.UNE_MAIN],
    ]);

    private readonly doubleEffect = new Map<IdActionsEnum, [ItemTypeEnum, ItemTypeEnum]>([
        [IdActionsEnum.MAITRISES_ELEMENTAIRES, [ItemTypeEnum.PLASTRON, ItemTypeEnum.CAPE]],
        [IdActionsEnum.MAITRISES_SOIN, [ItemTypeEnum.AMULETTE, ItemTypeEnum.EPAULETTES]],
        [IdActionsEnum.MAITRISES_MELEE, [ItemTypeEnum.CASQUE, ItemTypeEnum.CAPE]],
        [IdActionsEnum.MAITRISES_DISTANCES, [ItemTypeEnum.CEINTURE, ItemTypeEnum.UNE_MAIN]],
        [IdActionsEnum.MAITRISES_BERZERK, [ItemTypeEnum.AMULETTE, ItemTypeEnum.CAPE]],
        [IdActionsEnum.MAITRISES_CRITIQUES, [ItemTypeEnum.EPAULETTES, ItemTypeEnum.UNE_MAIN]],
        [IdActionsEnum.MAITRISES_DOS, [ItemTypeEnum.CEINTURE, ItemTypeEnum.BOTTES]],
        [IdActionsEnum.TACLE, [ItemTypeEnum.ANNEAU, ItemTypeEnum.ANNEAU]],
        [IdActionsEnum.ESQUIVE, [ItemTypeEnum.ANNEAU, ItemTypeEnum.ANNEAU]],
        [IdActionsEnum.INITIATIVE, [ItemTypeEnum.AMULETTE, ItemTypeEnum.CAPE]],
        [IdActionsEnum.RESISTANCES_FEU, [ItemTypeEnum.PLASTRON, ItemTypeEnum.CEINTURE]],
        [IdActionsEnum.RESISTANCES_EAU, [ItemTypeEnum.PLASTRON, ItemTypeEnum.EPAULETTES]],
        [IdActionsEnum.RESISTANCES_AIR, [ItemTypeEnum.PLASTRON, ItemTypeEnum.CAPE]],
        [IdActionsEnum.RESISTANCES_TERRE, [ItemTypeEnum.PLASTRON, ItemTypeEnum.BOTTES]],
        [IdActionsEnum.POINT_DE_VIE, [ItemTypeEnum.CASQUE, ItemTypeEnum.UNE_MAIN]],
    ]);
    
    constructor() {
        super();
        this.init();
    }

    
    private equalChasses(c1: Chasse, c2: Chasse): boolean {
        return c1.color === c2.color && c1.lvl === c2.lvl && c1.idAction === c2.idAction;
    }

    public removeEpic(): void {
        const enchantement = this.getValue();
        enchantement.epique = undefined;
        this.setValue(enchantement);
    }

    public removeRelic(): void {
        const enchantement = this.getValue();
        enchantement.relique = undefined;
        this.setValue(enchantement);
    }

    public applySublimationEpicRelic(sublimation: SublimationsEpiqueRelique): void {
        const enchantement = this.getValue();
        if(sublimation.epique) {
            enchantement.epique = {
                id: sublimation.id,
                idImage: sublimation.idImage,
                title: {...sublimation.title},
                epique: true,
                relique: false
            };
            this.setValue(enchantement);
        } else if(sublimation.relique) {
            enchantement.relique = {
                id: sublimation.id,
                idImage: sublimation.idImage,
                title: {...sublimation.title},
                epique: false,
                relique: true
            };
            this.setValue(enchantement);
        }
    }

    public applySumblimation(posY: number, sublimation: Sublimation): void {
        const enchantement = this.getValue();
        const currentChasses = enchantement.chasseCombinaison;
        const chasseToUpdate = currentChasses[posY];
        chasseToUpdate.sublimation = sublimation;
        chasseToUpdate.sublimation.isValid = this.canApplySublimation(chasseToUpdate, sublimation);
        this.setValue(enchantement);
    }

    public removeSublimation(posY: number): void {
        const enchantement = this.getValue();
        const currentChasses = enchantement.chasseCombinaison;
        const chasseToUpdate = currentChasses[posY];
        chasseToUpdate.sublimation = undefined;
        this.setValue(enchantement);
    }

    public applyEffect(posX: number, posY: number, chasse: Chasse): void {
        const enchantement = this.getValue();
        const currentChasses = enchantement.chasseCombinaison;
        const chasseToUpdate = currentChasses[posY];
        if (this.equalChasses(chasseToUpdate.chasses[posX], chasse)) {
            this.clearEffect(posX, posY);
        } else {
            chasseToUpdate.chasses[posX] = chasse;
        }
        if (chasseToUpdate.sublimation) {
            chasseToUpdate.sublimation.isValid = this.canApplySublimation(chasseToUpdate, chasseToUpdate.sublimation);
        }
        this.setValue(enchantement);
    }

    public clearChasseCombinaison(posY: number): void {
        const enchantement = this.getValue();
        const currentChasses = enchantement.chasseCombinaison;
        currentChasses[posY] = createEmptyChasseCombinaison();
        this.setValue(enchantement);
    }

    public clearEffect(posX: number, posY: number): void {
        const enchantement = this.getValue();
        const currentChasses = enchantement.chasseCombinaison;
        const chasseToUpdate = currentChasses[posY];
        chasseToUpdate.chasses[posX] = createEmptyChasseCombinaison().chasses[0];
        if (chasseToUpdate.sublimation) {
            chasseToUpdate.sublimation.isValid = this.canApplySublimation(chasseToUpdate, chasseToUpdate.sublimation);
        }
        this.setValue(enchantement);
    }

    public changeJokerState(posX: number, posY: number): void {
        const enchantement = this.getValue();
        const currentChasses = [...enchantement.chasseCombinaison];
        const chasseToUpdate = {...currentChasses[posY]};
        const chasses = [...chasseToUpdate.chasses];
        const chasse = {...chasses[posX]};
        if (!chasse.idAction) { return; }
        chasse.joker = !chasse.joker;
        chasses[posX] = chasse;
        chasseToUpdate.chasses = chasses;
        currentChasses[posY] = chasseToUpdate;
        this.setValue({...enchantement, chasseCombinaison: currentChasses});
    }

    private getChasseEffectValue(chasse: Chasse): number {
        if (!chasse.idAction) { return 0; }
        if([IdActionsEnum.TACLE, IdActionsEnum.ESQUIVE].includes(chasse.idAction)) {
            return getValueTacleEsquiveByLevel(chasse.lvl);
        } else if([IdActionsEnum.INITIATIVE].includes(chasse.idAction)) {
            return getValueInitiativesByLevel(chasse.lvl);
        } else if([IdActionsEnum.POINT_DE_VIE].includes(chasse.idAction)) {
            return getValueVieByLevel(chasse.lvl);
        } else if([IdActionsEnum.MAITRISES_ELEMENTAIRES].includes(chasse.idAction)) {
            return getValueMaitriseElemByLevel(chasse.lvl);
        } else if([IdActionsEnum.MAITRISES_SOIN, IdActionsEnum.MAITRISES_MELEE, IdActionsEnum.MAITRISES_DISTANCES,
                    IdActionsEnum.MAITRISES_BERZERK, IdActionsEnum.MAITRISES_CRITIQUES, IdActionsEnum.MAITRISES_DOS
                ].includes(chasse.idAction)) {
            return getValueMaitrisesByLevel(chasse.lvl);
        } else if([IdActionsEnum.RESISTANCES_FEU, IdActionsEnum.RESISTANCES_EAU, IdActionsEnum.RESISTANCES_AIR,
             IdActionsEnum.RESISTANCES_TERRE].includes(chasse.idAction)) {
            return getValueResistancesByLevel(chasse.lvl);
        }
        return 0;
    }

    protected override handleChanges(value: Enchantement): void {
        const recapStats: RecapStats[] = [];

        value.chasseCombinaison.forEach((chasseCombinaison, indexCombinaison) => {
            chasseCombinaison.chasses.forEach((chasse) => {
                if (!chasse.idAction) { return; }
                const itemType = this.indexToItemType.get(indexCombinaison);
                if (!itemType) { return; }
                const multiplicateur = this.doubleEffect.get(chasse.idAction)?.includes(itemType) ? 2 : 1;
                recapStats.push({
                    id: chasse.idAction,
                    value: multiplicateur * this.getChasseEffectValue(chasse),
                    params: []
                });
            });
        });

        const sublimationList = value.chasseCombinaison.filter(x => !!x.sublimation).map(x => x.sublimation) as Sublimation[];

        const mapIdToLevel = this.calculMaxSublimationLevel(sublimationList);
        if(value.epique) {
            mapIdToLevel.set(value.epique.id, 1);
        }
        if(value.relique) {
            mapIdToLevel.set(value.relique.id, 1);
        }

        this.sublimationsIdToLevel.next(mapIdToLevel);
        this.enchantement.next(value);
        this.recapChassesEffect.next(recapStats);
    }

    private calculMaxSublimationLevel(sublimationList: Sublimation[]): Map<number, number> {
        const mapIdToMaxLevel = new Map<number, number>();
        sublimationList.forEach(sublimation => {
            const current = mapIdToMaxLevel.get(sublimation.id);
            if (current === undefined) {
                mapIdToMaxLevel.set(sublimation.id, sublimation.level);
            } else {
                mapIdToMaxLevel.set(sublimation.id, current + sublimation.level);
            }
        });
        mapIdToMaxLevel.forEach((level, id) => {
            const levelMax = this.sublimationService.getSublimationById(id)?.levelMax;
            if (levelMax !== undefined && level > levelMax) {
                mapIdToMaxLevel.set(id, Math.min(level, levelMax));
            }
        });
        return mapIdToMaxLevel;
    }
    
    public override setValue(value: Enchantement | null): void {
        const val = value ?? ChasseFormService.DEFAULT_VALUE();
        this.form.setValue(val);
        this.enchantement.next(val);
    }
    public override setDefaultValue(): void {
        this.form.setValue(ChasseFormService.DEFAULT_VALUE());
    }

    public getValue(): Enchantement {
        return this.enchantement.getValue();
    }

    public canApplySublimationWithItem(chasseCombinaison: ChasseCombinaison, sublimation: SublimationsDescriptions): boolean {
        return this.canApplySublimation(chasseCombinaison, {
            id: sublimation.id,
            title: {...sublimation.title},
            slotColorPattern: sublimation.slotColorPattern,
            isValid: false,
            level: sublimation.linkSublimation[0].level
        });
    }

    /**
     * Vérifie si une sublimation peut être appliquée sur une combinaison de chasses
     * @param chasseCombinaison La combinaison de chasses de l'item
     * @param sublimation La sublimation à vérifier
     * @returns true si la sublimation peut être appliquée, false sinon
     */
    public canApplySublimation(chasseCombinaison: ChasseCombinaison, sublimation: Sublimation): boolean {
        const chasses = chasseCombinaison.chasses;
        const pattern = sublimation.slotColorPattern;
        
        // Si le pattern est plus long que le nombre de chasses, impossible
        if (pattern.length > chasses.length) {
            return false;
        }

        // Essayer de faire correspondre le pattern à chaque position possible
        for (let startPos = 0; startPos <= chasses.length - pattern.length; startPos++) {
            if (this.matchPattern(chasses, pattern, startPos)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Vérifie si le pattern correspond aux chasses à partir d'une position donnée
     */
    private matchPattern(chasses: Chasse[], pattern: IdChassesEnum[], startPos: number): boolean {
        for (let i = 0; i < pattern.length; i++) {
            const chasse = chasses[startPos + i];
            const requiredColor = pattern[i];

            // Si la chasse est vide (NON_CHASSE), elle ne peut pas matcher
            if (chasse.color === IdChassesEnum.NON_CHASSE) {
                return false;
            }

            // Si c'est un joker, il peut remplacer n'importe quelle couleur (sauf NON_CHASSE et JAUNE)
            if (chasse.joker && this.isValidJokerReplacement(requiredColor)) {
                continue;
            }

            // Sinon, la couleur doit correspondre exactement
            if (chasse.color !== requiredColor) {
                return false;
            }
        }

        return true;
    }

    /**
     * Vérifie si une couleur peut être remplacée par un joker
     */
    private isValidJokerReplacement(color: IdChassesEnum): boolean {
        return color === IdChassesEnum.BLEU || 
               color === IdChassesEnum.ROUGE || 
               color === IdChassesEnum.VERT;
    }
}