export enum ItemIdPvpEnum {
    LE_DIANINE = 24700,
    LE_DORRRRE = 24610,
    LE_JALM = 24593,
    LA_FLOUFF = 24607,
    L_ATTENTIONNEE = 24551,
    LA_GAINE = 24566,
    LA_ZEOR = 24668,
    LE_CONDOTTIER = 24513,
    LES_OPRESSANTES = 24524,
    LE_FOUIP = 24601,
    LE_FELDSPATH = 24615,
    LES_MELLES = 24538,
    LE_FAINNE = 24585,
    LA_PROMESSE = 24537,
    LE_LIEUTE = 24505,
    LE_PELO = 24521,
    LE_TIG = 24488,
    LE_CABOT = 24426,
    LA_BASTOS = 24408, 

}

export const isItemIdPvp = (id: number): boolean => {
    return Object.values(ItemIdPvpEnum).includes(id as ItemIdPvpEnum);
}