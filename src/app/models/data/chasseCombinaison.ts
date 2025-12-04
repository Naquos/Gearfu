import { IdChassesEnum } from "../enum/idChassesEnum";
import { Chasse } from "./chasse";

export interface ChasseCombinaison {
    chasses: Chasse[];
}

export function createEmptyChasseCombinaison(): ChasseCombinaison {
    const chasses: Chasse[] = [];
    for (let i = 0; i < 4; i++) {
        chasses.push({ color: IdChassesEnum.NON_CHASSE, lvl: 0 });
    }
    return {
        chasses: chasses
    };
}