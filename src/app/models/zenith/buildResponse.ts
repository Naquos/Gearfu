export interface BuildResponse {
    name_build: string,
    equipments: {
        id_equipment: number,
        effects: {
            id_effect: number,
            values: {
                id_stats: number,
                damage: number,
                elements: {
                    id_build: number
                }[]
            }[]
        }[]
    }[]
    link_build: string,
}