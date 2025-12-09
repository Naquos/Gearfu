import { LevelUnlockSort } from "./levelUnlockSort";

export interface SortLevel {
    idClasse: number;
    sortElementaires: {
        feu: LevelUnlockSort[];
        eau: LevelUnlockSort[];
        terre: LevelUnlockSort[];
        air: LevelUnlockSort[];
    },
    sortActifs: LevelUnlockSort[];
    sortPassifs: LevelUnlockSort[];
}