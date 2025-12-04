export enum EffetMaitriseElemChassesEnum {
    LEVEL_1 = 1,
    LEVEL_2 = 2,
    LEVEL_3 = 3,
    LEVEL_4 = 4,
    LEVEL_5 = 5,
    LEVEL_6 = 7,
    LEVEL_7 = 10,
    LEVEL_8 = 13,
    LEVEL_9 = 16,
    LEVEL_10 = 20,
    LEVEL_11 = 22,
}

export function getValueMaitriseElemByLevel(level: number): number {
    switch (level) {
        case 1: return EffetMaitriseElemChassesEnum.LEVEL_1;
        case 2: return EffetMaitriseElemChassesEnum.LEVEL_2;
        case 3: return EffetMaitriseElemChassesEnum.LEVEL_3;
        case 4: return EffetMaitriseElemChassesEnum.LEVEL_4;
        case 5: return EffetMaitriseElemChassesEnum.LEVEL_5;
        case 6: return EffetMaitriseElemChassesEnum.LEVEL_6;
        case 7: return EffetMaitriseElemChassesEnum.LEVEL_7;
        case 8: return EffetMaitriseElemChassesEnum.LEVEL_8;
        case 9: return EffetMaitriseElemChassesEnum.LEVEL_9;
        case 10: return EffetMaitriseElemChassesEnum.LEVEL_10;
        case 11: return EffetMaitriseElemChassesEnum.LEVEL_11;
        default: return 0;
    }
}