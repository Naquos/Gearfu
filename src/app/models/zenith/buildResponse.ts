import { Spell } from "./spell"

export interface BuildResponse {
    id_build: number,
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
    level_build: number,
    id_job: number,
    deck: {
        passives: Spell[],
        actives: Spell[]
    }
}