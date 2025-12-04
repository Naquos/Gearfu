export enum EffetResistancesChassesEnum {
    LEVEL_1 = 2,
    LEVEL_2 = 5,
    LEVEL_3 = 7,
    LEVEL_4 = 10,
    LEVEL_5 = 12,
    LEVEL_6 = 15,
    LEVEL_7 = 17,
    LEVEL_8 = 20,
    LEVEL_9 = 22,
    LEVEL_10 = 25,
    LEVEL_11 = 27,
}

export function getValueResistancesByLevel(level: number): number {
    switch (level) {
        case 1: return EffetResistancesChassesEnum.LEVEL_1;
        case 2: return EffetResistancesChassesEnum.LEVEL_2;
        case 3: return EffetResistancesChassesEnum.LEVEL_3;
        case 4: return EffetResistancesChassesEnum.LEVEL_4;
        case 5: return EffetResistancesChassesEnum.LEVEL_5;
        case 6: return EffetResistancesChassesEnum.LEVEL_6;
        case 7: return EffetResistancesChassesEnum.LEVEL_7;
        case 8: return EffetResistancesChassesEnum.LEVEL_8;
        case 9: return EffetResistancesChassesEnum.LEVEL_9;
        case 10: return EffetResistancesChassesEnum.LEVEL_10;
        case 11: return EffetResistancesChassesEnum.LEVEL_11;
        default: return 0;
    }
}