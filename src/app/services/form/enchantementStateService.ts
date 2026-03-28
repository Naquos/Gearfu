import { Injectable, signal } from "@angular/core";
import { ItemTypeEnum } from "../../models/enum/itemTypeEnum";
import { IdChassesEnum } from "../../models/enum/idChassesEnum";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { Chasse } from "../../models/data/chasse";
import { SublimationsDescriptions } from "../../models/data/sublimationsDescriptions";

export interface EffetDescription {
    id: number;
    chasse: Chasse;
    libelle: string;
    logos: [ItemTypeEnum, ItemTypeEnum];
}

@Injectable({ providedIn: 'root' })
export class EnchantementStateService {

    readonly effectToApply = signal<EffetDescription | undefined>(undefined);
    readonly sublimationToApply = signal<SublimationsDescriptions | undefined>(undefined);
    readonly levelSublimationToApply = signal<number | undefined>(undefined);
    readonly indexItemTypeSelected = signal<number>(-1);
    readonly itemTypeSelected = signal<ItemTypeEnum | undefined>(undefined);

    readonly effetsDescription: EffetDescription[] = [
        { id: 0, chasse: { color: IdChassesEnum.BLEU, lvl: 11, idAction: IdActionsEnum.MAITRISES_ELEMENTAIRES }, libelle: "enchantement.maitrise-elementaire", logos: [ItemTypeEnum.PLASTRON, ItemTypeEnum.CAPE] },
        { id: 1, chasse: { color: IdChassesEnum.BLEU, lvl: 11, idAction: IdActionsEnum.RESISTANCES_EAU }, libelle: "enchantement.resistance-eau", logos: [ItemTypeEnum.PLASTRON, ItemTypeEnum.EPAULETTES] },
        { id: 2, chasse: { color: IdChassesEnum.BLEU, lvl: 11, idAction: IdActionsEnum.MAITRISES_SOIN }, libelle: "enchantement.maitrise-soin", logos: [ItemTypeEnum.AMULETTE, ItemTypeEnum.EPAULETTES] },
        { id: 3, chasse: { color: IdChassesEnum.BLEU, lvl: 11, idAction: IdActionsEnum.RESISTANCES_AIR }, libelle: "enchantement.resistance-air", logos: [ItemTypeEnum.PLASTRON, ItemTypeEnum.CAPE] },
        { id: 4, chasse: { color: IdChassesEnum.ROUGE, lvl: 11, idAction: IdActionsEnum.MAITRISES_MELEE }, libelle: "enchantement.maitrise-melee", logos: [ItemTypeEnum.CASQUE, ItemTypeEnum.CAPE] },
        { id: 5, chasse: { color: IdChassesEnum.ROUGE, lvl: 11, idAction: IdActionsEnum.RESISTANCES_TERRE }, libelle: "enchantement.resistance-terre", logos: [ItemTypeEnum.PLASTRON, ItemTypeEnum.BOTTES] },
        { id: 6, chasse: { color: IdChassesEnum.ROUGE, lvl: 11, idAction: IdActionsEnum.MAITRISES_DISTANCES }, libelle: "enchantement.maitrise-distance", logos: [ItemTypeEnum.CEINTURE, ItemTypeEnum.UNE_MAIN] },
        { id: 7, chasse: { color: IdChassesEnum.VERT, lvl: 11, idAction: IdActionsEnum.RESISTANCES_FEU }, libelle: "enchantement.resistance-feu", logos: [ItemTypeEnum.PLASTRON, ItemTypeEnum.CEINTURE] },
        { id: 12, chasse: { color: IdChassesEnum.ROUGE, lvl: 11, idAction: IdActionsEnum.MAITRISES_BERZERK }, libelle: "enchantement.maitrise-berserk", logos: [ItemTypeEnum.AMULETTE, ItemTypeEnum.CAPE] },
        { id: 9, chasse: { color: IdChassesEnum.BLEU, lvl: 11, idAction: IdActionsEnum.POINT_DE_VIE }, libelle: "enchantement.vie", logos: [ItemTypeEnum.CASQUE, ItemTypeEnum.UNE_MAIN] },
        { id: 10, chasse: { color: IdChassesEnum.VERT, lvl: 11, idAction: IdActionsEnum.MAITRISES_DOS }, libelle: "enchantement.maitrise-dos", logos: [ItemTypeEnum.CEINTURE, ItemTypeEnum.BOTTES] },
        { id: 11, chasse: { color: IdChassesEnum.BLEU, lvl: 11, idAction: IdActionsEnum.TACLE }, libelle: "enchantement.tacle", logos: [ItemTypeEnum.ANNEAU, ItemTypeEnum.ANNEAU] },
        { id: 8, chasse: { color: IdChassesEnum.VERT, lvl: 11, idAction: IdActionsEnum.MAITRISES_CRITIQUES }, libelle: "enchantement.maitrise-critique", logos: [ItemTypeEnum.EPAULETTES, ItemTypeEnum.UNE_MAIN] },
        { id: 13, chasse: { color: IdChassesEnum.VERT, lvl: 11, idAction: IdActionsEnum.ESQUIVE }, libelle: "enchantement.esquive", logos: [ItemTypeEnum.ANNEAU, ItemTypeEnum.ANNEAU] },
        { id: 14, chasse: { color: IdChassesEnum.VERT, lvl: 11, idAction: IdActionsEnum.INITIATIVE }, libelle: "enchantement.initiative", logos: [ItemTypeEnum.AMULETTE, ItemTypeEnum.CAPE] },
    ];

    selectItemType(itemType: ItemTypeEnum, index: number): void {
        if (this.itemTypeSelected() === itemType && this.indexItemTypeSelected() === index) {
            this.indexItemTypeSelected.set(-1);
            this.itemTypeSelected.set(undefined);
        } else {
            this.indexItemTypeSelected.set(index);
            this.itemTypeSelected.set(itemType);
        }
    }

    chooseEffet(effet: EffetDescription): void {
        this.levelSublimationToApply.set(undefined);
        this.sublimationToApply.set(undefined);
        this.effectToApply.set(effet);
    }

    chooseSublimation(sublimation: SublimationsDescriptions, level: number): void {
        this.effectToApply.set(undefined);
        this.sublimationToApply.set(sublimation);
        this.levelSublimationToApply.set(level);
    }
}
