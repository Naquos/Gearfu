import { IdChassesEnum } from "../enum/idChassesEnum";
import { Chasse } from "./chasse"
import { Sublimation } from "./sublimation";

export interface ChasseCombinaison {
    chasses: Chasse[];
    sublimation?: Sublimation
}

export function createEmptyChasseCombinaison(): ChasseCombinaison {
    const chasses: Chasse[] = [];
    for (let i = 0; i < 4; i++) {
        chasses.push({ color: IdChassesEnum.NON_CHASSE, lvl: 0 });
    }
    return {
        chasses: chasses,
        sublimation: undefined
    };
}