import { IdActionsEnum } from "../enum/idActionsEnum";
import { ItemTypeDefinitionEnum } from "../enum/itemTypeDefinitionEnum";
import { RarityItemEnum } from "../enum/rarityItemEnum";

export interface ItemCdn {
    definition: {
        item: {
            id: number;
            level: number;
            baseParameters: {
                rarity: RarityItemEnum;
                itemTypeId: ItemTypeDefinitionEnum;
            };
            graphicParameters: {
                gfxId: number;
            };
        };
        equipEffects: {
            effect: {
                definition: {
                    id: number;
                    actionId: IdActionsEnum;
                    params: number[];
                };
            };
        }[];
    };
    title: {
        fr: string;
        en: string;
        es: string;
        pt: string;
    };
    description: {
        fr: string;
        en: string;
        es: string;
        pt: string;
    };
}