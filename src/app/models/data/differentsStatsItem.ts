import { IdActionsEnum } from "../enum/idActionsEnum";

export interface DifferentStatsItem {
    value: number;
    params: number[],
    actionId: IdActionsEnum,
    presentOnCurrentItem: boolean;
    presentOnEquippedItem: boolean;
    isArmureRecue: boolean;
}