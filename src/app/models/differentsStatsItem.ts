import { IdActionsEnum } from "./idActionsEnum";

export interface DifferentStatsItem {
    value: number;
    params: number[],
    actionId: IdActionsEnum,
    presentOnCurrentItem: boolean;
    presentOnEquippedItem: boolean;
}