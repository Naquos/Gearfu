import { ClassIdEnum } from "../enum/classIdEnum";

export interface Build {
    nameBuild?: string;
    level?: number;
    itemsId?: string;
    classe?: ClassIdEnum;
    aptitudes?: string;
    sorts?: string;
    enchantement?: string;
    elementSelector?: string;
    // Flag indiquant si les données sont compressées
    compressed?: boolean;
    // Timestamp de création pour trier les builds
    createdAt?: number;
    codeZenith?: string;
}