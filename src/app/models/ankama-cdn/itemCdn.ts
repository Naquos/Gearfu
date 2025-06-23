export interface ItemCdn {
    definition: {
        item: {
            id: number;
            level: number;
            baseParameters: {
                rarity: number;
                itemTypeId: number;
            };
            graphicParameters: {
                gfxId: number;
            };
        };
        equipEffects: {
            effect: {
                definition: {
                    id: number;
                    actionId: number;
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