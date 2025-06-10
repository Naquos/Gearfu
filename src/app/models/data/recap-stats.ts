import { IdActionsEnum } from "../enum/idActionsEnum";
import { ParameterMajorActionEnum } from "../enum/parameterMajorActionEnum";

export interface RecapStats {
    id: IdActionsEnum;
    parameterMajorAction?: ParameterMajorActionEnum;
    value: number;
    params: number[];
}