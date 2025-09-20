import { IdActionsEnum } from "../enum/idActionsEnum";

export interface CustomStatisticsUpdate {
    id_build: number;
    id_stats: IdActionsEnum;
    value: number;
}