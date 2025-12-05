import { IdChassesEnum } from "../enum/idChassesEnum";
import { RecapStats } from "./recap-stats";

export interface LinkSublimation {
    id: number;
    level: number;
}

export interface SublimationsDescriptions {
    id: number;
    linkSublimation: LinkSublimation[];
    title: {
        fr: string;
        en: string;
        pt: string;
        es: string;
    };
    description: {
        fr: string;
        en: string;
        pt: string;
        es: string;
    };
    levelMax: number;
    baseEffect: RecapStats[];
    gfxId: number;
    isEpic: boolean;
    isRelic: boolean;
    slotColorPattern: IdChassesEnum[];
}