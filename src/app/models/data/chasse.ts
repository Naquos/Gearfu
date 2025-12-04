import { IdActionsEnum } from "../enum/idActionsEnum";
import { IdChassesEnum } from "../enum/idChassesEnum";

export interface Chasse {
    color: IdChassesEnum;
    lvl: number;
    idAction?: IdActionsEnum;
    joker?: boolean;
}