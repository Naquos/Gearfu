import { IdChassesEnum } from "../enum/idChassesEnum";

export interface Sublimation {
    id: number;
    title: {
        fr: string;
        en: string;
        pt: string;
        es: string;
    },
    slotColorPattern: IdChassesEnum[];
    isValid: boolean;
    level: number;
}