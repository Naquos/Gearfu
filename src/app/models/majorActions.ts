import { IdActionsEnum } from "./idActionsEnum";
import { ParameterMajorActionEnum } from "./parameterMajorActionEnum";

export interface MajorAction {
    id: IdActionsEnum;
    parameter?: ParameterMajorActionEnum;
}