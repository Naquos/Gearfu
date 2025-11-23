import { RarityItemEnum } from "../enum/rarityItemEnum";

export interface JobsItemCdn {
    definition: {
        id: number;
        level: number;
        rarity: RarityItemEnum;
        itemTypeId: number;
        graphicParameters: {
            gfxId: number;
            femaleGfxId: number;
        }
    },
    title: {
        fr: string;
        en: string;
        es: string;
        pt: string;
    },
    description: {
        fr: string;
        en: string;
        es: string;
        pt: string;
    }
}