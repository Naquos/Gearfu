import { EquipEffects } from "./equipEffects";

export interface Item {
    id: number;
    level: number;
    rarity: number;
    itemTypeId: number;
    equipEffects: EquipEffects[];
    title: {
        fr: string;
        en: string;
        es: string;
        pt: string;
    };
    idImage: number;
    weightForSort: number;
    craftable: boolean;
    dropable: boolean;
    weight: number;
}