import { EffetMaitrisesChassesEnum } from "../enum/effetMaitrisesChassesEnum";
import { EffetResistancesChassesEnum } from "../enum/effetResistancesChassesEnum";
import { IdActionsEnum } from "../enum/idActionsEnum";

export const MIN_LVL_TRANCHE = [1,21,36,51,66,81,96,111,126,141,156,171,186,201,216,231]
export const MAX_LVL_TRANCHE = [20,35,50,65,80,95,110,125,140,155,170,185,200,215,230,245]
export const ID_MAITRISES_MODIFIABLES = -50000;
export const ID_RESISTANCES_MODIFIABLES = -60000;

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

 export const mapSortAction= new Map<IdActionsEnum, number>([
      [IdActionsEnum.PA, 0],
      [IdActionsEnum.PERTE_PA, 1],
      [IdActionsEnum.PM, 2],
      [IdActionsEnum.PERTE_PM, 3],
      [IdActionsEnum.PW, 4],
      [IdActionsEnum.BOOST_PW, 4],
      [IdActionsEnum.DEBOOST_PW, 5],
      [IdActionsEnum.CONTROLE, 6],
      [IdActionsEnum.PORTEE, 7],
      [IdActionsEnum.PERTE_PORTEE, 8],
      [IdActionsEnum.POINT_DE_VIE, 9],
      [IdActionsEnum.PERTE_POINT_DE_VIE, 10],
      [IdActionsEnum.TACLE, 11],
      [IdActionsEnum.ESQUIVE, 12],
      [IdActionsEnum.PERTE_INITIATIVE, 13],
      [IdActionsEnum.PARADE, 14],
      [IdActionsEnum.PERTE_TACLE, 15],
      [IdActionsEnum.PERTE_ESQUIVE, 16],
      [IdActionsEnum.PERTE_PARADE, 17],
      [IdActionsEnum.MAITRISES_ELEMENTAIRES, 18],
      [IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE, 19],
      [IdActionsEnum.MAITRISES_FEU, 19],
      [IdActionsEnum.MAITRISES_EAU, 20],
      [IdActionsEnum.MAITRISES_TERRE, 21],
      [IdActionsEnum.MAITRISES_AIR, 22],
      [IdActionsEnum.MAITRISES_CRITIQUES, 23],
      [IdActionsEnum.MAITRISES_DOS, 24],
      [IdActionsEnum.MAITRISES_SOIN, 25],
      [IdActionsEnum.MAITRISES_BERZERK, 26],
      [IdActionsEnum.MAITRISES_DISTANCES, 27],
      [IdActionsEnum.MAITRISES_MELEE, 28],
      [IdActionsEnum.PERTE_MAITRISES_CRITIQUE, 29],
      [IdActionsEnum.PERTE_MAITRISES_DOS, 30],
      [IdActionsEnum.PERTE_MAITRISES_BERZERK, 31],
      [IdActionsEnum.PERTE_MAITRISES_DISTANCE, 32],
      [IdActionsEnum.PERTE_MAITRISES_MELEE, 33],
      [IdActionsEnum.COUP_CRITIQUE, 34],
      [IdActionsEnum.ARMURE_DONNEE_RECUE, 35],
      [IdActionsEnum.PERTE_COUP_CRITIQUE, 36],
      [IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE, 37],
      [IdActionsEnum.RESISTANCES_CRITIQUES, 38],
      [IdActionsEnum.RESISTANCES_DOS, 39],
      [IdActionsEnum.RESISTANCES_ELEMENTAIRE, 40],
      [IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE, 41],
      [IdActionsEnum.RESISTANCES_FEU, 42],
      [IdActionsEnum.RESISTANCES_EAU, 43],
      [IdActionsEnum.RESISTANCES_AIR, 44],
      [IdActionsEnum.RESISTANCES_TERRE, 45],
      [IdActionsEnum.PERTE_RESISTANCES_CRITIQUE, 46],
      [IdActionsEnum.PERTE_RESISTANCES_DOS, 47],
      [IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE, 48],
      [IdActionsEnum.PERTE_RESISTANCES_FEU, 49],
      [IdActionsEnum.PERTE_RESISTANCE_EAU, 50],
      [IdActionsEnum.PERTE_RESISTANCES_TERRE, 51],
    ]);

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

export function coutEclat(levelChasse: number) : number {
    switch(levelChasse) {
        case 1: return 1;
        case 2: return 3;
        case 3: return 7;
        case 4: return 15;
        case 5: return 31;
        case 6: return 63;
        case 7: return 127;
        case 8: return 319;
        case 9: return 895;
        case 10: return 3199;
        case 11: return 12415;
        default: return 0;
    }
}