import { ValuesItem } from "./valuesItem";

export interface EffectItems {
    id_effect: number,
    name_effect: "",
    ui_position: 0,
    from_evolution: 0,
    container_min_level: 0,
    container_max_level: 0,
    is_critical: 0,
    is_use_effect: 0,
    pivot: {},
    translations: [],
    values: ValuesItem[],
    inner_stats: [],

}