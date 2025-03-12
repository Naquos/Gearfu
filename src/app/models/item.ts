import { EquipEffects } from "./equipEffects";

export interface Item {
    id: number;
    level: number;
    rarity: number;
    itemTypeId: number;
    equipEffects: EquipEffects[];
    title: string;
    idImage: number;
}