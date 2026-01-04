import { EffetMaitrisesChassesEnum } from "../enum/effetMaitrisesChassesEnum";
import { EffetResistancesChassesEnum } from "../enum/effetResistancesChassesEnum";

export const MIN_LVL_TRANCHE = [1,21,36,51,66,81,96,111,126,141,156,171,186,201,216,231]
export const MAX_LVL_TRANCHE = [20,35,50,65,80,95,110,125,140,155,170,185,200,215,230,245]

export const LEVEL_RATIOS_CHASSE = [
    { maxLevel: 36, ratio: truncate2(EffetMaitrisesChassesEnum.LEVEL_1 / EffetResistancesChassesEnum.LEVEL_1) },
    { maxLevel: 51, ratio: truncate2(EffetMaitrisesChassesEnum.LEVEL_2 / EffetResistancesChassesEnum.LEVEL_2) },
    { maxLevel: 66, ratio: truncate2(EffetMaitrisesChassesEnum.LEVEL_3 / EffetResistancesChassesEnum.LEVEL_3) },
    { maxLevel: 81, ratio: truncate2(EffetMaitrisesChassesEnum.LEVEL_4 / EffetResistancesChassesEnum.LEVEL_4) },
    { maxLevel: 96, ratio: truncate2(EffetMaitrisesChassesEnum.LEVEL_5 / EffetResistancesChassesEnum.LEVEL_5) },
    { maxLevel: 126, ratio: truncate2(EffetMaitrisesChassesEnum.LEVEL_6 / EffetResistancesChassesEnum.LEVEL_6) },
    { maxLevel: 141, ratio: truncate2(EffetMaitrisesChassesEnum.LEVEL_7 / EffetResistancesChassesEnum.LEVEL_7) },
    { maxLevel: 171, ratio: truncate2(EffetMaitrisesChassesEnum.LEVEL_8 / EffetResistancesChassesEnum.LEVEL_8) },
    { maxLevel: 186, ratio: truncate2(EffetMaitrisesChassesEnum.LEVEL_9 / EffetResistancesChassesEnum.LEVEL_9) },
    { maxLevel: 216, ratio: truncate2(EffetMaitrisesChassesEnum.LEVEL_10 / EffetResistancesChassesEnum.LEVEL_10) }
];

export function maxChasseLevel(level: number): number {
    const result = LEVEL_RATIOS_CHASSE.findIndex(ratios => level < ratios.maxLevel);
    return result === -1 ? 11 : result + 1;
}

export function truncate2(num: number): number {
    return Math.trunc(num * 100) / 100;
}

export function normalizeString(str: string): string {
    return str
    .replace(/['''´’`]/g, "'")
    .replace(/[ûù]/g,"u")
    .replace(/[ô]/g,"o")
    .replace(/\s+/g, " ")
    .normalize("NFKD")
    .trim()
    .toLowerCase();
}