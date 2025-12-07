import { IdChassesEnum } from "../enum/idChassesEnum";
import { MonsterDrop } from "./monsterDrop";

export interface LinkSublimation {
    id: number;
    level: number;
}

export interface BaseEffect {
    baseValue: number;
    pas: number;
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
    baseEffect: BaseEffect[];
    gfxId: number;
    isEpic: boolean;
    isRelic: boolean;
    slotColorPattern: IdChassesEnum[];
    bossDropable: MonsterDrop[],
    isCraftable: boolean;
}