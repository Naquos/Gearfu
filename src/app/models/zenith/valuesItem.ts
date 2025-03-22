import { Elements } from "./elements"

export interface ValuesItem {
    id_spell_effect_value: number,
    offset: 0,
    damage: 0,
    ratio: 0,
    id_stats: number,
    id_effect: 0,
    will_calculate_damage: 0,
    will_calculate_heal: 0,
    base: null,
    evolution: null,
    random_number: number,
    statistics: object,
    elements: Elements[]
}