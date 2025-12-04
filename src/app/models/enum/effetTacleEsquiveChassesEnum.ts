export enum EffetTacleEsquiveChassesEnum {
    LEVEL_1 = 3,
    LEVEL_2 = 6,
    LEVEL_3 = 9,
    LEVEL_4 = 12,
    LEVEL_5 = 15,
    LEVEL_6 = 21,
    LEVEL_7 = 30,
    LEVEL_8 = 39,
    LEVEL_9 = 48,
    LEVEL_10 = 60,
    LEVEL_11 = 66,
}

export function getValueTacleEsquiveByLevel(level: number): number {
    switch (level) {
        case 1: return EffetTacleEsquiveChassesEnum.LEVEL_1;
        case 2: return EffetTacleEsquiveChassesEnum.LEVEL_2;
        case 3: return EffetTacleEsquiveChassesEnum.LEVEL_3;
        case 4: return EffetTacleEsquiveChassesEnum.LEVEL_4;
        case 5: return EffetTacleEsquiveChassesEnum.LEVEL_5;
        case 6: return EffetTacleEsquiveChassesEnum.LEVEL_6;
        case 7: return EffetTacleEsquiveChassesEnum.LEVEL_7;
        case 8: return EffetTacleEsquiveChassesEnum.LEVEL_8;
        case 9: return EffetTacleEsquiveChassesEnum.LEVEL_9;
        case 10: return EffetTacleEsquiveChassesEnum.LEVEL_10;
        case 11: return EffetTacleEsquiveChassesEnum.LEVEL_11;
        default: return 0;
    }
}