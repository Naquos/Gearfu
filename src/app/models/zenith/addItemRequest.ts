export interface AddItemRequest {
    equipment: {
        id_equipment: number;
        level: number;
        id_rarity: number;
        ap_cost: number;
        mp_cost: number;
        wp_cost: number;
        min_range: number;
        max_range: number;
        name_equipment: string;
        line_of_sight: number;
        name_equipment_type: string;
        image_equipment_type: string;
        order: number;
        name_rarity: string;
        image_rarity: string;
        effects: string[];
        criterias: string[];
        translations: string[];
        metadata: {
            side: number;
        };
    },
    id_build: number;
}