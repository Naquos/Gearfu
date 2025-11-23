import { Injectable } from "@angular/core";
import { IdActionsEnum } from "../models/enum/idActionsEnum";
import { RarityItemEnum } from "../models/enum/rarityItemEnum";
import { ItemTypeEnum } from "../models/enum/itemTypeEnum";

@Injectable({providedIn: 'root'})
export class ImageService {

    public static readonly BASE_URL = "https://vertylo.github.io/wakassets/"; // Base URL for images
    public static readonly BASE_URL_CHARACTERISTICS = ImageService.BASE_URL + "characteristics/";
    public static readonly BASE_URL_RARITIES = ImageService.BASE_URL + "rarities/"; 
    public static readonly BASE_URL_ITEMS = ImageService.BASE_URL + "items/";
    public static readonly BASE_URL_ITEM_TYPE = ImageService.BASE_URL + "itemTypes/";
    public static readonly BASE_URL_ACHIEVEMENT_CATEGORIES = ImageService.BASE_URL + "achievementCategories/";
    public static readonly BASE_URL_ACHIEVEMENTS = ImageService.BASE_URL + "achievements/";
    public static readonly IMAGE_ERROR = ImageService.BASE_URL_ITEMS + "0000000.png";


    private readonly mapUrlCharacteristics = new Map<IdActionsEnum,string>([
        [IdActionsEnum.DOMMAGE_NEUTRE,ImageService.BASE_URL_CHARACTERISTICS + ""],
        [IdActionsEnum.POINT_DE_VIE,ImageService.BASE_URL_CHARACTERISTICS + "HP.png"],
        [IdActionsEnum.PERTE_POINT_DE_VIE,ImageService.BASE_URL_CHARACTERISTICS + "HP.png"],
        [IdActionsEnum.VOL_DE_VIE,ImageService.BASE_URL_CHARACTERISTICS + "HP.png"],
        [IdActionsEnum.MAITRISES_SOIN,ImageService.BASE_URL_CHARACTERISTICS + "HEAL_IN_PERCENT.png"],
        [IdActionsEnum.PA,ImageService.BASE_URL_CHARACTERISTICS + "AP.png"],
        [IdActionsEnum.ARMURE_DONNEE_RECUE,ImageService.BASE_URL_CHARACTERISTICS + "ARMOR_GIVEN.png"],
        [IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE,ImageService.BASE_URL_CHARACTERISTICS + "ARMOR_GIVEN.png"],
        [IdActionsEnum.PM,ImageService.BASE_URL_CHARACTERISTICS + "MP.png"],
        [IdActionsEnum.PERTE_PA,ImageService.BASE_URL_CHARACTERISTICS + "AP.png"],
        [IdActionsEnum.PERTE_PM,ImageService.BASE_URL_CHARACTERISTICS + "MP.png"],
        [IdActionsEnum.RESISTANCES_DOS,ImageService.BASE_URL_CHARACTERISTICS + "RES_BACKSTAB.png"],
        [IdActionsEnum.RESISTANCES_ELEMENTAIRE,ImageService.BASE_URL_CHARACTERISTICS + "RES_IN_PERCENT.png"],
        [IdActionsEnum.RESISTANCES_FEU,ImageService.BASE_URL_CHARACTERISTICS + "RES_FIRE_PERCENT.png"],
        [IdActionsEnum.RESISTANCES_EAU,ImageService.BASE_URL_CHARACTERISTICS + "RES_WATER_PERCENT.png"],
        [IdActionsEnum.RESISTANCES_TERRE,ImageService.BASE_URL_CHARACTERISTICS + "RES_EARTH_PERCENT.png"],
        [IdActionsEnum.RESISTANCES_AIR,ImageService.BASE_URL_CHARACTERISTICS + "RES_AIR_PERCENT.png"],
        [IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE,ImageService.BASE_URL_CHARACTERISTICS + "RES_IN_PERCENT.png"],
        [IdActionsEnum.PERTE_RESISTANCES_TERRE,ImageService.BASE_URL_CHARACTERISTICS + "RES_EARTH_PERCENT.png"],
        [IdActionsEnum.PERTE_RESISTANCES_FEU,ImageService.BASE_URL_CHARACTERISTICS + "RES_FIRE_PERCENT.png"],
        [IdActionsEnum.PERTE_RESISTANCE_EAU,ImageService.BASE_URL_CHARACTERISTICS + "RES_WATER_PERCENT.png"],
        [IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE_SANS_CAP,ImageService.BASE_URL_CHARACTERISTICS + "RES_IN_PERCENT.png"],
        [IdActionsEnum.MAITRISES_ELEMENTAIRES,ImageService.BASE_URL_CHARACTERISTICS + "DMG_IN_PERCENT.png"],
        [IdActionsEnum.MAITRISES_FEU,ImageService.BASE_URL_CHARACTERISTICS + "DMG_FIRE_PERCENT.png"],
        [IdActionsEnum.MAITRISES_TERRE,ImageService.BASE_URL_CHARACTERISTICS + "DMG_EARTH_PERCENT.png"],
        [IdActionsEnum.MAITRISES_EAU,ImageService.BASE_URL_CHARACTERISTICS + "DMG_WATER_PERCENT.png"],
        [IdActionsEnum.MAITRISES_AIR,ImageService.BASE_URL_CHARACTERISTICS + "DMG_AIR_PERCENT.png"],
        [IdActionsEnum.PERTE_MAITRISES_ELEMENTAIRES,ImageService.BASE_URL_CHARACTERISTICS + "DMG_IN_PERCENT.png"],
        [IdActionsEnum.PERTE_MAITRISES_FEU,ImageService.BASE_URL_CHARACTERISTICS + "DMG_FIRE_PERCENT.png"],
        [IdActionsEnum.MAITRISES_CRITIQUES,ImageService.BASE_URL_CHARACTERISTICS + "CRITICAL_BONUS.png"],
        [IdActionsEnum.COUP_CRITIQUE,ImageService.BASE_URL_CHARACTERISTICS + "FEROCITY.png"],
        [IdActionsEnum.PORTEE,ImageService.BASE_URL_CHARACTERISTICS + "RANGE.png"],
        [IdActionsEnum.PERTE_PORTEE,ImageService.BASE_URL_CHARACTERISTICS + "RANGE.png"],
        [IdActionsEnum.PROSPECTION,ImageService.BASE_URL_CHARACTERISTICS + "PROSPECTING.png"],
        [IdActionsEnum.SAGESSE,ImageService.BASE_URL_CHARACTERISTICS + "WISDOM.png"],
        [IdActionsEnum.PERTE_COUP_CRITIQUE,ImageService.BASE_URL_CHARACTERISTICS + "FEROCITY.png"],
        [IdActionsEnum.INITIATIVE,ImageService.BASE_URL_CHARACTERISTICS + "INIT.png"],
        [IdActionsEnum.PERTE_INITIATIVE,ImageService.BASE_URL_CHARACTERISTICS + "INIT.png"],
        [IdActionsEnum.TACLE,ImageService.BASE_URL_CHARACTERISTICS + "TACKLE.png"],
        [IdActionsEnum.PERTE_TACLE,ImageService.BASE_URL_CHARACTERISTICS + "TACKLE.png"],
        [IdActionsEnum.ESQUIVE,ImageService.BASE_URL_CHARACTERISTICS + "DODGE.png"],
        [IdActionsEnum.PERTE_ESQUIVE,ImageService.BASE_URL_CHARACTERISTICS + "DODGE.png"],
        [IdActionsEnum.VOLONTE,ImageService.BASE_URL_CHARACTERISTICS + "WILLPOWER.png"],
        [IdActionsEnum.MAITRISES_DOS,ImageService.BASE_URL_CHARACTERISTICS + "BACKSTAB_BONUS.png"],
        [IdActionsEnum.PERTE_MAITRISES_DOS,ImageService.BASE_URL_CHARACTERISTICS + "BACKSTAB_BONUS.png"],
        [IdActionsEnum.PERTE_MAITRISES_SOIN,ImageService.BASE_URL_CHARACTERISTICS + "HEAL_IN_PERCENT.png"],
        [IdActionsEnum.CONTROLE,ImageService.BASE_URL_CHARACTERISTICS + "LEADERSHIP.png"],
        [IdActionsEnum.BOOST_PW,ImageService.BASE_URL_CHARACTERISTICS + "WP.png"],
        [IdActionsEnum.DEBOOST_PW,ImageService.BASE_URL_CHARACTERISTICS + "WP.png"],
        [IdActionsEnum.PW,ImageService.BASE_URL_CHARACTERISTICS + "WP.png"],
        [IdActionsEnum.PERTE_PW,ImageService.BASE_URL_CHARACTERISTICS + "WP.png"],
        [IdActionsEnum.APPLIQUE_ETAT,ImageService.BASE_URL_CHARACTERISTICS + ""],
        [IdActionsEnum.EXECUTE_GROUPE_EFFET,ImageService.BASE_URL_CHARACTERISTICS + ""],
        [IdActionsEnum.NULL_EFFECT,ImageService.BASE_URL_CHARACTERISTICS + ""],
        [IdActionsEnum.RETIRE_UNE_ZONE,ImageService.BASE_URL_CHARACTERISTICS + ""],
        [IdActionsEnum.VALEUR_SECOND_EFFET,ImageService.BASE_URL_CHARACTERISTICS + ""],
        [IdActionsEnum.PARADE,ImageService.BASE_URL_CHARACTERISTICS + "BLOCK.png"],
        [IdActionsEnum.PERTE_PARADE,ImageService.BASE_URL_CHARACTERISTICS + "BLOCK.png"],
        [IdActionsEnum.RESISTANCES_CRITIQUES,ImageService.BASE_URL_CHARACTERISTICS + "CRITICAL_RES.png"],
        [IdActionsEnum.NIVEAU_DES_ENFANTS,ImageService.BASE_URL_CHARACTERISTICS + ""],
        [IdActionsEnum.MAITRISES_MELEE,ImageService.BASE_URL_CHARACTERISTICS + "MELEE_DMG.png"],
        [IdActionsEnum.MAITRISES_DISTANCES,ImageService.BASE_URL_CHARACTERISTICS + "RANGED_DMG.png"],
        [IdActionsEnum.MAITRISES_BERZERK,ImageService.BASE_URL_CHARACTERISTICS + "BERSERK_DMG.png"],
        [IdActionsEnum.PERTE_MAITRISES_CRITIQUE,ImageService.BASE_URL_CHARACTERISTICS + "CRITICAL_BONUS.png"],
        [IdActionsEnum.PERTE_MAITRISES_MELEE,ImageService.BASE_URL_CHARACTERISTICS + "MELEE_DMG.png"],
        [IdActionsEnum.PERTE_MAITRISES_DISTANCE,ImageService.BASE_URL_CHARACTERISTICS + "RANGED_DMG.png"],
        [IdActionsEnum.PERTE_MAITRISES_BERZERK,ImageService.BASE_URL_CHARACTERISTICS + "BERSERK_DMG.png"],
        [IdActionsEnum.PERTE_RESISTANCES_CRITIQUE,ImageService.BASE_URL_CHARACTERISTICS + "CRITICAL_RES.png"],
        [IdActionsEnum.PERTE_RESISTANCES_DOS,ImageService.BASE_URL_CHARACTERISTICS + "RES_BACKSTAB.png"],
        [IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE,ImageService.BASE_URL_CHARACTERISTICS + "DMG_IN_PERCENT.png"],
        [IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE,ImageService.BASE_URL_CHARACTERISTICS + "RES_IN_PERCENT.png"],
        [IdActionsEnum.DOMMAGE_LUMIERE,ImageService.BASE_URL_CHARACTERISTICS + "DMG_LIGHT_PERCENT.png"],
        [IdActionsEnum.SOIN_LUMIERE,ImageService.BASE_URL_CHARACTERISTICS + "DMG_LIGHT_PERCENT.png"],
        [IdActionsEnum.QUANTITE_ITEM_RECOLTEE,ImageService.BASE_URL_CHARACTERISTICS + "LEADERSHIP.png"],
      ]);

    public readonly mapRarityUrl = new Map<RarityItemEnum,string>([
        [RarityItemEnum.NORMAL, ImageService.BASE_URL_RARITIES + RarityItemEnum.NORMAL + ".png"],
        [RarityItemEnum.RARE, ImageService.BASE_URL_RARITIES + RarityItemEnum.RARE + ".png"],
        [RarityItemEnum.MYTHIQUE, ImageService.BASE_URL_RARITIES + RarityItemEnum.MYTHIQUE + ".png"],
        [RarityItemEnum.LEGENDAIRE, ImageService.BASE_URL_RARITIES + RarityItemEnum.LEGENDAIRE + ".png"],
        [RarityItemEnum.RELIQUE, ImageService.BASE_URL_RARITIES + RarityItemEnum.RELIQUE + ".png"],
        [RarityItemEnum.SOUVENIR, ImageService.BASE_URL_RARITIES + RarityItemEnum.SOUVENIR + ".png"],
        [RarityItemEnum.EPIQUE, ImageService.BASE_URL_RARITIES + RarityItemEnum.EPIQUE + ".png"],
    ]);

    public readonly mapUrlItemType = new Map<ItemTypeEnum,string>([
        [ItemTypeEnum.DEUX_MAINS, ImageService.BASE_URL_ITEM_TYPE + "519.png"],
        [ItemTypeEnum.UNE_MAIN, ImageService.BASE_URL_ITEM_TYPE + "518.png"],
        [ItemTypeEnum.ANNEAU, ImageService.BASE_URL_ITEM_TYPE + "103.png"],
        [ItemTypeEnum.BOTTES, ImageService.BASE_URL_ITEM_TYPE + "119.png"],
        [ItemTypeEnum.AMULETTE, ImageService.BASE_URL_ITEM_TYPE + "120.png"],
        [ItemTypeEnum.CAPE, ImageService.BASE_URL_ITEM_TYPE + "132.png"],
        [ItemTypeEnum.CEINTURE, ImageService.BASE_URL_ITEM_TYPE + "133.png"],
        [ItemTypeEnum.CASQUE, ImageService.BASE_URL_ITEM_TYPE + "134.png"],
        [ItemTypeEnum.PLASTRON, ImageService.BASE_URL_ITEM_TYPE + "136.png"],
        [ItemTypeEnum.EPAULETTES, ImageService.BASE_URL_ITEM_TYPE + "138.png"],
        [ItemTypeEnum.ACCESSOIRES, ImageService.BASE_URL_ITEM_TYPE + "521.png"],
        [ItemTypeEnum.BOUCLIER, ImageService.BASE_URL_ITEM_TYPE + "520.png"],
        [ItemTypeEnum.DAGUE, ImageService.BASE_URL_ITEM_TYPE + "571.png"],
        [ItemTypeEnum.FAMILIER, ImageService.BASE_URL_ITEM_TYPE + "582.png"],
    ]);

    public getActionIdUrl(idAction: IdActionsEnum, armureRecue?: boolean): string {
        return armureRecue ? ImageService.BASE_URL_CHARACTERISTICS + "ARMOR_RECEIVED.png" : this.mapUrlCharacteristics.get(idAction) || "";
    }

    public getItemUrl(idItem: number): string {
        return ImageService.BASE_URL_ITEMS + idItem + ".png";
    }

    public getAchievementCategoryUrl(idCategory: number): string {
        return ImageService.BASE_URL_ACHIEVEMENT_CATEGORIES + idCategory + ".png";
    }

    public getAchievementUrl(idAchievement: number): string {
        return ImageService.BASE_URL_ACHIEVEMENTS + idAchievement + ".png";
    }
}