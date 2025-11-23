import { ItemTypeDefinitionEnum } from "../enum/itemTypeDefinitionEnum";
import { RarityItemEnum } from "../enum/rarityItemEnum";
import { EquipEffects } from "./equipEffects";

export interface Item {
    id: number;
    level: number;
    rarity: RarityItemEnum;
    itemTypeId: ItemTypeDefinitionEnum;
    equipEffects: EquipEffects[];
    description: {
        fr: string;
        en: string;
        es: string;
        pt: string;
    }
    title: {
        fr: string;
        en: string;
        es: string;
        pt: string;
    };
    idImage: number;
    weightForSort: number;
    weight: number;
    maitrise: number;
    resistance: number;
    isCraftable: boolean;
    isDropable: boolean;
    isDropableOnBoss: boolean;
    isDropableOnArchi: boolean;
}