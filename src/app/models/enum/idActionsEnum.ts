export enum IdActionsEnum {
    DOMMAGE_NEUTRE = 1,
    POINT_DE_VIE = 20,
    PERTE_POINT_DE_VIE = 21,
    VOL_DE_VIE = 24,
    MAITRISES_SOIN = 26,
    PA = 31,
    ARMURE_DONNEE_RECUE = 39,
    PERTE_ARMURE_DONNEE_RECUE = 40,
    PM = 41,
    PERTE_PA = 56,
    PERTE_PM = 57,
    RESISTANCES_DOS = 71,
    RESISTANCES_ELEMENTAIRE = 80,
    RESISTANCES_FEU = 82,
    RESISTANCES_EAU = 83,
    RESISTANCES_TERRE = 84,
    RESISTANCES_AIR = 85,
    PERTE_RESISTANCES_ELEMENTAIRE = 90,
    PERTE_RESISTANCES_TERRE = 96,
    PERTE_RESISTANCES_FEU = 97,
    PERTE_RESISTANCE_EAU = 98,
    PERTE_RESISTANCES_ELEMENTAIRE_SANS_CAP = 100,
    MAITRISES_ELEMENTAIRES = 120,
    MAITRISES_FEU = 122,
    MAITRISES_TERRE = 123,
    MAITRISES_EAU = 124,
    MAITRISES_AIR = 125,
    PERTE_MAITRISES_ELEMENTAIRES = 130,
    PERTE_MAITRISES_FEU = 132,
    MAITRISES_CRITIQUES = 149,
    COUP_CRITIQUE = 150,
    PORTEE = 160,
    PERTE_PORTEE = 161,
    PROSPECTION = 162,
    SAGESSE = 166,
    PERTE_COUP_CRITIQUE = 168,
    INITIATIVE = 171,
    PERTE_INITIATIVE = 172,
    TACLE = 173,
    PERTE_TACLE = 174,
    ESQUIVE = 175,
    PERTE_ESQUIVE = 176,
    VOLONTE = 177,
    MAITRISES_DOS = 180,
    PERTE_MAITRISES_DOS = 181,
    PERTE_MAITRISES_SOIN = -1, // N'existe pas dans le jeu, mais est utilisé pour pas qu'on me pose des question sur l'affichage des actions majeures
    CONTROLE = 184,
    PERTE_CONTROLE = -1, // N'existe pas dans le jeu, mais est utilisé pour pas qu'on me pose des question sur l'affichage des actions majeures
    BOOST_PW = 191,
    DEBOOST_PW = 192,
    PW = 193,
    PERTE_PW = 194,
    APPLIQUE_ETAT = 304,
    EXECUTE_GROUPE_EFFET = 330,
    NULL_EFFECT = 400,
    RETIRE_UNE_ZONE = 843,
    VALEUR_SECOND_EFFET = 865,
    PARADE = 875,
    PERTE_PARADE = 876,
    RESISTANCES_CRITIQUES = 988,
    NIVEAU_DES_ENFANTS = 1020,
    MAITRISES_MELEE = 1052,
    MAITRISES_DISTANCES = 1053,
    MAITRISES_BERZERK = 1055,
    PERTE_MAITRISES_CRITIQUE = 1056,
    PERTE_MAITRISES_MELEE = 1059,
    PERTE_MAITRISES_DISTANCE = 1060,
    PERTE_MAITRISES_BERZERK = 1061,
    PERTE_RESISTANCES_CRITIQUE = 1062,
    PERTE_RESISTANCES_DOS = 1063,
    MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE = 1068,
    RESISTANCES_NOMBRE_VARIABLE = 1069,
    DOMMAGE_LUMIERE = 1083,
    SOIN_LUMIERE = 1084,
    QUANTITE_ITEM_RECOLTEE = 2001
}