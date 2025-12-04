export enum EffetMaitrisesChassesEnum {
    LEVEL_1 = 1,
    LEVEL_2 = 3,
    LEVEL_3 = 4,
    LEVEL_4 = 6,
    LEVEL_5 = 7,
    LEVEL_6 = 10,
    LEVEL_7 = 15,
    LEVEL_8 = 19,
    LEVEL_9 = 24,
    LEVEL_10 = 30,
    LEVEL_11 = 33,
}

export function getValueMaitrisesByLevel(level: number): number {
    switch (level) {
        case 1: return EffetMaitrisesChassesEnum.LEVEL_1;
        case 2: return EffetMaitrisesChassesEnum.LEVEL_2;
        case 3: return EffetMaitrisesChassesEnum.LEVEL_3;
        case 4: return EffetMaitrisesChassesEnum.LEVEL_4;
        case 5: return EffetMaitrisesChassesEnum.LEVEL_5;
        case 6: return EffetMaitrisesChassesEnum.LEVEL_6;
        case 7: return EffetMaitrisesChassesEnum.LEVEL_7;
        case 8: return EffetMaitrisesChassesEnum.LEVEL_8;
        case 9: return EffetMaitrisesChassesEnum.LEVEL_9;
        case 10: return EffetMaitrisesChassesEnum.LEVEL_10;
        case 11: return EffetMaitrisesChassesEnum.LEVEL_11;
        default: return 0;
    }
}