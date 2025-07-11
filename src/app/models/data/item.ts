import { EquipEffects } from "./equipEffects";

export interface Item {
    id: number;
    level: number;
    rarity: number;
    itemTypeId: number;
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
}