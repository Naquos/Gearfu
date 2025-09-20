export interface BuildResponse {
    name_build: string,
    equipments: {
        id_equipment: number,
        effects: {
            id_effect: number,
            value: number
        }
    }[]
    link_build: string,
}