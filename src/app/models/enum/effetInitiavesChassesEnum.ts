export enum EffetInitiavesChassesEnum {
    LEVEL_1 = 2,
    LEVEL_2 = 4,
    LEVEL_3 = 6,
    LEVEL_4 = 8,
    LEVEL_5 = 10,
    LEVEL_6 = 14,
    LEVEL_7 = 20,
    LEVEL_8 = 26,
    LEVEL_9 = 32,
    LEVEL_10 = 40,
    LEVEL_11 = 44,
}

export function getValueInitiativesByLevel(level: number): number {
    switch (level) {
        case 1: return EffetInitiavesChassesEnum.LEVEL_1;
        case 2: return EffetInitiavesChassesEnum.LEVEL_2;
        case 3: return EffetInitiavesChassesEnum.LEVEL_3;
        case 4: return EffetInitiavesChassesEnum.LEVEL_4;
        case 5: return EffetInitiavesChassesEnum.LEVEL_5;
        case 6: return EffetInitiavesChassesEnum.LEVEL_6;
        case 7: return EffetInitiavesChassesEnum.LEVEL_7;
        case 8: return EffetInitiavesChassesEnum.LEVEL_8;
        case 9: return EffetInitiavesChassesEnum.LEVEL_9;
        case 10: return EffetInitiavesChassesEnum.LEVEL_10;
        case 11: return EffetInitiavesChassesEnum.LEVEL_11;
        default: return 0;
    }
}