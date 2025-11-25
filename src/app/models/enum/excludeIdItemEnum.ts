export enum ExcludeIdItemEnum {
    EMBLEME_SHUSHU_1 = 18670,
    EMBLEME_SHUSHU_2 = 18671,
    EMBLEME_SHUSHU_3 = 18672,
    EMBLEME_SHUSHU_4 = 18673,
    EMBLEME_SHUSHU_5 = 18674,
    EMBLEME_SHUSHU_6 = 18675,
    EMBLEME_SHUSHU_7 = 18676,
    EMBLEME_SHUSHU_8 = 18677,
    EMBLEME_SHUSHU_9 = 18678,
    EMBLEME_SHUSHU_10 = 18679,
    EMBLEME_SHUSHU_11 = 18680,
    EMBLEME_SHUSHU_12 = 18681,
}

export const isExcludeIdItem = (id: number): boolean => {
    return Object.values(ExcludeIdItemEnum).includes(id as ExcludeIdItemEnum);
}