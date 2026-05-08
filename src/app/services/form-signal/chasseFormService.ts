import { inject, Injectable, signal } from "@angular/core";
import { KeyEnum } from "../../models/enum/keyEnum";
import { form } from "@angular/forms/signals";
import { AbstractSignalFormService } from "./abstractSignalFormService";
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
import { coutEclat } from "../../models/utils/utils";
import { TranslateService } from "@ngx-translate/core";

@Injectable({ providedIn: 'root' })
export class ChasseFormService extends AbstractSignalFormService<Enchantement> {
    public static readonly DEFAULT_VALUE = () => {
        const initialChasses: ChasseCombinaison[] = [];
        for (let i = 0; i < 10; i++) {
            initialChasses.push(createEmptyChasseCombinaison());
        }
        return { chasseCombinaison: initialChasses };
    };

    private readonly translateService = inject(TranslateService);

    private readonly recapChassesEffect = new BehaviorSubject<RecapStats[]>([]);
    public readonly recapChassesEffect$ = this.recapChassesEffect.asObservable();

    private readonly enchantement = new BehaviorSubject<Enchantement>(ChasseFormService.DEFAULT_VALUE());
    public readonly enchantement$ = this.enchantement.asObservable();

    private readonly sublimationsIdToLevel = new BehaviorSubject<Map<number, number>>(new Map());
    public readonly sublimationsIdToLevel$ = this.sublimationsIdToLevel.asObservable();

    private readonly coutEclatTotal = new BehaviorSubject<number>(0);
    public readonly coutEclatTotal$ = this.coutEclatTotal.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_ENCHANTEMENT;
    protected readonly model = signal<Enchantement>(ChasseFormService.DEFAULT_VALUE());

    public readonly form = form(this.model);

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

    public generateCodeBuild(value: Enchantement): string {
        const parts: string[] = [];

        value.chasseCombinaison.forEach(combinaison => {
            const chassesParts: string[] = [];

            combinaison.chasses.forEach(chasse => {
                if (chasse.color === IdChassesEnum.NON_CHASSE) {
                    chassesParts.push('0');
                } else {
                    const jokerFlag = chasse.joker ? '1' : '0';
                    const idAction = chasse.idAction || 0;
                    chassesParts.push(`${chasse.color}.${chasse.lvl}.${idAction}.${jokerFlag}`);
                }
            });

            let combinaisonStr = chassesParts.join('-');

            if (combinaison.sublimation) {
                combinaisonStr += `_${combinaison.sublimation.id}.${combinaison.sublimation.level}`;
            }

            parts.push(combinaisonStr);
        });

        let result = parts.join('|');

        if (value.epique) {
            result += `|E${value.epique.id}`;
        }
        if (value.relique) {
            result += `|R${value.relique.id}`;
        }

        return result;
    }

    public decodeAndSaveCodeBuild(codeBuild: string): void {
        try {
            const enchantement: Enchantement = {
                chasseCombinaison: [],
                epique: undefined,
                relique: undefined
            };

            for (let i = 0; i < 10; i++) {
                enchantement.chasseCombinaison.push(createEmptyChasseCombinaison());
            }

            const mainParts = codeBuild.split('|');

            const combinaisonParts: string[] = [];
            const specialParts: string[] = [];

            for (const part of mainParts) {
                if (part.startsWith('E') || part.startsWith('R')) {
                    specialParts.push(part);
                } else if (part.trim()) {
                    combinaisonParts.push(part);
                }
            }

            for (let i = 0; i < Math.min(10, combinaisonParts.length); i++) {
                const part = combinaisonParts[i];
                const [chassesPart, sublimationPart] = part.split('_');
                const chassesData = chassesPart.split('-');

                const combinaison = createEmptyChasseCombinaison();

                for (let j = 0; j < Math.min(4, chassesData.length); j++) {
                    const chasseData = chassesData[j];
                    if (chasseData === '0' || !chasseData) {
                        continue;
                    }

                    const chasseParts = chasseData.split('.');
                    if (chasseParts.length >= 4) {
                        const [color, lvl, idAction, joker] = chasseParts.map(x => parseInt(x, 10));
                        combinaison.chasses[j] = {
                            color: color as IdChassesEnum,
                            lvl: lvl,
                            idAction: idAction as IdActionsEnum,
                            joker: joker === 1
                        };
                    }
                }

                if (sublimationPart) {
                    const [subId, subLevel] = sublimationPart.split('.').map(x => parseInt(x, 10));
                    const sublimation = this.sublimationService.getSublimationById(subId);
                    if (sublimation) {
                        combinaison.sublimation = {
                            id: subId,
                            title: { ...sublimation.title },
                            slotColorPattern: sublimation.slotColorPattern,
                            level: subLevel,
                            isValid: true
                        };
                    } else {
                        console.warn(`Sublimation ${subId} not found in database`);
                    }
                }

                enchantement.chasseCombinaison[i] = combinaison;
            }

            for (const part of specialParts) {
                if (part.startsWith('E')) {
                    const epiqueId = parseInt(part.substring(1), 10);
                    const epiqueSub = this.sublimationService.getSublimationById(epiqueId);
                    if (epiqueSub) {
                        enchantement.epique = {
                            id: epiqueSub.id,
                            idImage: epiqueSub.gfxId,
                            title: { ...epiqueSub.title },
                            epique: true,
                            relique: false
                        };
                    }
                } else if (part.startsWith('R')) {
                    const reliqueId = parseInt(part.substring(1), 10);
                    const reliqueSub = this.sublimationService.getSublimationById(reliqueId);
                    if (reliqueSub) {
                        enchantement.relique = {
                            id: reliqueSub.id,
                            idImage: reliqueSub.gfxId,
                            title: { ...reliqueSub.title },
                            epique: false,
                            relique: true
                        };
                    }
                }
            }

            this.setValue(enchantement);
        } catch (error) {
            console.error('Error decoding enchantement from URL:', error);
        }
    }

    private getLevelSublimation(level: number): string {
        const levelStr = ["I", "II", "III"];
        return levelStr[level - 1] || "";
    }

    public getSublimations(code: string): string {
        if (!code) {
            return "";
        }
        const codeParts = code.split('|');
        const sublimations: string[] = [];
        for (const part of codeParts) {
            if (!part.startsWith('E') && !part.startsWith('R')) {
                const partSublimation = part.split('_')[1];
                const [subId, subLevel] = partSublimation ? partSublimation.split('.').map(x => parseInt(x, 10)) : [undefined, undefined];
                const sub = this.sublimationService.getSublimationById(subId ?? 0);
                if (sub) {
                    sublimations.push(`${sub.title[this.translateService.currentLang as keyof typeof sub.title]} ${this.getLevelSublimation(subLevel ?? 0)}`);
                }
            }
        }
        return sublimations.join('\n');
    }

    public getSublimationEpiqueByCode(code: string): SublimationsEpiqueRelique | undefined {
        if (!code) {
            return undefined;
        }
        const codeParts = code.split('|');
        for (const part of codeParts) {
            if (part.startsWith('E')) {
                const epiqueId = parseInt(part.substring(1), 10);
                const epiqueSub = this.sublimationService.getSublimationById(epiqueId);
                if (epiqueSub) {
                    return {
                        id: epiqueSub.id,
                        idImage: epiqueSub.gfxId,
                        title: { ...epiqueSub.title },
                        epique: true,
                        relique: false
                    };
                }
            }
        }
        return undefined;
    }

    public getSublimationReliqueByCode(code: string): SublimationsEpiqueRelique | undefined {
        if (!code) {
            return undefined;
        }
        const codeParts = code.split('|');
        for (const part of codeParts) {
            if (part.startsWith('R')) {
                const reliqueId = parseInt(part.substring(1), 10);
                const reliqueSub = this.sublimationService.getSublimationById(reliqueId);
                if (reliqueSub) {
                    return {
                        id: reliqueSub.id,
                        idImage: reliqueSub.gfxId,
                        title: { ...reliqueSub.title },
                        epique: false,
                        relique: true
                    };
                }
            }
        }
        return undefined;
    }

    public getSublimationIdsByCode(code: string): string[] {
        if (!code) {
            return [];
        }
        const codeParts = code.split('|');
        const sublimationIds: string[] = [];
        for (const part of codeParts) {
            if (!part.startsWith('E') && !part.startsWith('R')) {
                const partSublimation = part.split('_')[1];
                const subId = partSublimation ? partSublimation.split('.')[0] : undefined;
                if (subId) {
                    sublimationIds.push(subId);
                }
            }
        }
        return sublimationIds;
    }

    public getSublimationIdEpiqueByCode(code: string): string | undefined {
        if (!code) {
            return undefined;
        }
        const codeParts = code.split('|');
        for (const part of codeParts) {
            if (part.startsWith('E')) {
                const epiqueId = parseInt(part.substring(1), 10);
                return epiqueId.toString();
            }
        }
        return undefined;
    }

    public getSublimationIdReliqueByCode(code: string): string | undefined {
        if (!code) {
            return undefined;
        }
        const codeParts = code.split('|');
        for (const part of codeParts) {
            if (part.startsWith('R')) {
                const reliqueId = parseInt(part.substring(1), 10);
                return reliqueId.toString();
            }
        }
        return undefined;
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
        if (sublimation.epique) {
            enchantement.epique = {
                id: sublimation.id,
                idImage: sublimation.idImage,
                title: { ...sublimation.title },
                epique: true,
                relique: false
            };
            this.setValue(enchantement);
        } else if (sublimation.relique) {
            enchantement.relique = {
                id: sublimation.id,
                idImage: sublimation.idImage,
                title: { ...sublimation.title },
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
        const chasseToUpdate = { ...currentChasses[posY] };
        const chasses = [...chasseToUpdate.chasses];
        const chasse = { ...chasses[posX] };
        if (!chasse.idAction) { return; }
        chasse.joker = !chasse.joker;
        chasses[posX] = chasse;
        chasseToUpdate.chasses = chasses;
        currentChasses[posY] = chasseToUpdate;
        if (chasseToUpdate.sublimation) {
            chasseToUpdate.sublimation.isValid = this.canApplySublimation(chasseToUpdate, chasseToUpdate.sublimation!);
        }
        this.setValue({ ...enchantement, chasseCombinaison: currentChasses });
    }

    private getChasseEffectValue(chasse: Chasse): number {
        if (!chasse.idAction) { return 0; }
        if ([IdActionsEnum.TACLE, IdActionsEnum.ESQUIVE].includes(chasse.idAction)) {
            return getValueTacleEsquiveByLevel(chasse.lvl);
        } else if ([IdActionsEnum.INITIATIVE].includes(chasse.idAction)) {
            return getValueInitiativesByLevel(chasse.lvl);
        } else if ([IdActionsEnum.POINT_DE_VIE].includes(chasse.idAction)) {
            return getValueVieByLevel(chasse.lvl);
        } else if ([IdActionsEnum.MAITRISES_ELEMENTAIRES].includes(chasse.idAction)) {
            return getValueMaitriseElemByLevel(chasse.lvl);
        } else if ([IdActionsEnum.MAITRISES_SOIN, IdActionsEnum.MAITRISES_MELEE, IdActionsEnum.MAITRISES_DISTANCES,
        IdActionsEnum.MAITRISES_BERZERK, IdActionsEnum.MAITRISES_CRITIQUES, IdActionsEnum.MAITRISES_DOS
        ].includes(chasse.idAction)) {
            return getValueMaitrisesByLevel(chasse.lvl);
        } else if ([IdActionsEnum.RESISTANCES_FEU, IdActionsEnum.RESISTANCES_EAU, IdActionsEnum.RESISTANCES_AIR,
        IdActionsEnum.RESISTANCES_TERRE].includes(chasse.idAction)) {
            return getValueResistancesByLevel(chasse.lvl);
        }
        return 0;
    }

    public valueChasse(chasse: Chasse, itemType: ItemTypeEnum): number {
        if (!chasse.idAction || !itemType) { return 0; }
        const multiplicateur = this.doubleEffect.get(chasse.idAction)?.includes(itemType) ? 2 : 1;
        return multiplicateur * this.getChasseEffectValue(chasse);
    }

    protected override handleChanges(value: Enchantement): void {
        const recapStats: RecapStats[] = [];
        let coutEclatTotalVal = 0;

        value.chasseCombinaison.forEach((chasseCombinaison, indexCombinaison) => {
            chasseCombinaison.chasses.forEach((chasse) => {
                if (!chasse.idAction) { return; }
                const itemType = this.indexToItemType.get(indexCombinaison);
                if (!itemType) { return; }
                recapStats.push({
                    id: chasse.idAction,
                    value: this.valueChasse(chasse, itemType),
                    params: []
                });
                coutEclatTotalVal += coutEclat(chasse.lvl);
            });
        });

        const sublimationList = value.chasseCombinaison.filter(x => !!x.sublimation).map(x => x.sublimation) as Sublimation[];

        const mapIdToLevel = this.calculMaxSublimationLevel(sublimationList);
        if (value.epique) {
            mapIdToLevel.set(value.epique.id, 1);
        }
        if (value.relique) {
            mapIdToLevel.set(value.relique.id, 1);
        }

        this.sublimationsIdToLevel.next(mapIdToLevel);
        this.enchantement.next(value);
        this.recapChassesEffect.next(recapStats);
        this.coutEclatTotal.next(coutEclatTotalVal);
    }

    public getCodeBuild(): string {
        return this.generateCodeBuild(this.enchantement.getValue());
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
        const val: Enchantement = value ?? ChasseFormService.DEFAULT_VALUE() as Enchantement;
        const cleanValue: Enchantement = {
            chasseCombinaison: val.chasseCombinaison.map(combo => ({
                chasses: [...combo.chasses],
                sublimation: combo.sublimation ? { ...combo.sublimation } : undefined
            })),
            epique: val.epique ? { ...val.epique } : undefined,
            relique: val.relique ? { ...val.relique } : undefined
        };
        this.model.set(cleanValue);
    }

    public override setDefaultValue(): void {
        this.model.set(ChasseFormService.DEFAULT_VALUE());
    }

    public getValue(): Enchantement {
        return this.model();
    }

    public canApplySublimationWithItem(chasseCombinaison: ChasseCombinaison, sublimation: SublimationsDescriptions): boolean {
        return this.canApplySublimation(chasseCombinaison, {
            id: sublimation.id,
            title: { ...sublimation.title },
            slotColorPattern: sublimation.slotColorPattern,
            isValid: false,
            level: sublimation.linkSublimation[0].level
        });
    }

    public canApplySublimation(chasseCombinaison: ChasseCombinaison, sublimation: Sublimation): boolean {
        const chasses = chasseCombinaison.chasses;
        const pattern = sublimation.slotColorPattern;

        if (pattern.length > chasses.length) {
            return false;
        }

        const emptyChasses = chasses.filter(c => c.color === IdChassesEnum.NON_CHASSE);
        if (emptyChasses.length >= 2) {
            return true;
        }

        for (let startPos = 0; startPos <= chasses.length - pattern.length; startPos++) {
            if (this.matchPattern(chasses, pattern, startPos)) {
                return true;
            }
        }

        return false;
    }

    private matchPattern(chasses: Chasse[], pattern: IdChassesEnum[], startPos: number): boolean {
        for (let i = 0; i < pattern.length; i++) {
            const chasse = chasses[startPos + i];
            const requiredColor = pattern[i];

            if (chasse.color === IdChassesEnum.NON_CHASSE || (chasse.joker && this.isValidJokerReplacement(requiredColor))) {
                continue;
            }

            if (chasse.color !== requiredColor) {
                return false;
            }
        }
        return true;
    }

    private isValidJokerReplacement(color: IdChassesEnum): boolean {
        return color !== IdChassesEnum.NON_CHASSE && color !== IdChassesEnum.JAUNE;
    }
}
