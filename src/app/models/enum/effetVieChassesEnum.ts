export enum EffetVieChassesEnum {
    LEVEL_1 = 4,
    LEVEL_2 = 8,
    LEVEL_3 = 12,
    LEVEL_4 = 16,
    LEVEL_5 = 20,
    LEVEL_6 = 28,
    LEVEL_7 = 40,
    LEVEL_8 = 52,
    LEVEL_9 = 64,
    LEVEL_10 = 80,
    LEVEL_11 = 88,
}

export function getValueVieByLevel(level: number): number {
    switch (level) {
        case 1: return EffetVieChassesEnum.LEVEL_1;
        case 2: return EffetVieChassesEnum.LEVEL_2;
        case 3: return EffetVieChassesEnum.LEVEL_3;
        case 4: return EffetVieChassesEnum.LEVEL_4;
        case 5: return EffetVieChassesEnum.LEVEL_5;
        case 6: return EffetVieChassesEnum.LEVEL_6;
        case 7: return EffetVieChassesEnum.LEVEL_7;
        case 8: return EffetVieChassesEnum.LEVEL_8;
        case 9: return EffetVieChassesEnum.LEVEL_9;
        case 10: return EffetVieChassesEnum.LEVEL_10;
        case 11: return EffetVieChassesEnum.LEVEL_11;
        default: return 0;
    }
}