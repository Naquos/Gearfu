import { IdActionsEnum } from "../enum/idActionsEnum";
import { ParameterMajorActionEnum } from "../enum/parameterMajorActionEnum";

export interface MajorAction {
    id: IdActionsEnum;
    parameter?: ParameterMajorActionEnum;
}