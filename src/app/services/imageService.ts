import { Injectable } from "@angular/core";
import { IdActionsEnum } from "../models/enum/idActionsEnum";
import { RarityItemEnum } from "../models/enum/rarityItemEnum";
import { ItemTypeEnum } from "../models/enum/itemTypeEnum";

@Injectable({providedIn: 'root'})
export class ImageService {

    private readonly baseUrl = "https://vertylo.github.io/wakassets/"; // Base URL for images
    private readonly baseUrlCharacteristics = this.baseUrl + "characteristics/";
    private readonly baseUrlRarities = this.baseUrl + "rarities/"; 
    private readonly baseUrlImage = this.baseUrl + "items/"
    private readonly baseUrlItemType = this.baseUrl + "itemTypes/";

    private readonly mapUrlCharacteristics = new Map<IdActionsEnum,string>([
        [IdActionsEnum.DOMMAGE_NEUTRE,this.baseUrlCharacteristics + ""],
        [IdActionsEnum.POINT_DE_VIE,this.baseUrlCharacteristics + "HP.png"],
        [IdActionsEnum.PERTE_POINT_DE_VIE,this.baseUrlCharacteristics + "HP.png"],
        [IdActionsEnum.VOL_DE_VIE,this.baseUrlCharacteristics + "HP.png"],
        [IdActionsEnum.MAITRISES_SOIN,this.baseUrlCharacteristics + "HEAL_IN_PERCENT.png"],
        [IdActionsEnum.PA,this.baseUrlCharacteristics + "AP.png"],
        [IdActionsEnum.ARMURE_DONNEE_RECUE,this.baseUrlCharacteristics + "ARMOR_GIVEN.png"],
        [IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE,this.baseUrlCharacteristics + "ARMOR_GIVEN.png"],
        [IdActionsEnum.PM,this.baseUrlCharacteristics + "MP.png"],
        [IdActionsEnum.PERTE_PA,this.baseUrlCharacteristics + "AP.png"],
        [IdActionsEnum.PERTE_PM,this.baseUrlCharacteristics + "MP.png"],
        [IdActionsEnum.RESISTANCES_DOS,this.baseUrlCharacteristics + "RES_BACKSTAB.png"],
        [IdActionsEnum.RESISTANCES_ELEMENTAIRE,this.baseUrlCharacteristics + "RES_IN_PERCENT.png"],
        [IdActionsEnum.RESISTANCES_FEU,this.baseUrlCharacteristics + "RES_FIRE_PERCENT.png"],
        [IdActionsEnum.RESISTANCES_EAU,this.baseUrlCharacteristics + "RES_WATER_PERCENT.png"],
        [IdActionsEnum.RESISTANCES_TERRE,this.baseUrlCharacteristics + "RES_EARTH_PERCENT.png"],
        [IdActionsEnum.RESISTANCES_AIR,this.baseUrlCharacteristics + "RES_AIR_PERCENT.png"],
        [IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE,this.baseUrlCharacteristics + "RES_IN_PERCENT.png"],
        [IdActionsEnum.PERTE_RESISTANCES_TERRE,this.baseUrlCharacteristics + "RES_EARTH_PERCENT.png"],
        [IdActionsEnum.PERTE_RESISTANCES_FEU,this.baseUrlCharacteristics + "RES_FIRE_PERCENT.png"],
        [IdActionsEnum.PERTE_RESISTANCE_EAU,this.baseUrlCharacteristics + "RES_WATER_PERCENT.png"],
        [IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE_SANS_CAP,this.baseUrlCharacteristics + "RES_IN_PERCENT.png"],
        [IdActionsEnum.MAITRISES_ELEMENTAIRES,this.baseUrlCharacteristics + "DMG_IN_PERCENT.png"],
        [IdActionsEnum.MAITRISES_FEU,this.baseUrlCharacteristics + "DMG_FIRE_PERCENT.png"],
        [IdActionsEnum.MAITRISES_TERRE,this.baseUrlCharacteristics + "DMG_EARTH_PERCENT.png"],
        [IdActionsEnum.MAITRISES_EAU,this.baseUrlCharacteristics + "DMG_WATER_PERCENT.png"],
        [IdActionsEnum.MAITRISES_AIR,this.baseUrlCharacteristics + "DMG_AIR_PERCENT.png"],
        [IdActionsEnum.PERTE_MAITRISES_ELEMENTAIRES,this.baseUrlCharacteristics + "DMG_IN_PERCENT.png"],
        [IdActionsEnum.PERTE_MAITRISES_FEU,this.baseUrlCharacteristics + "DMG_FIRE_PERCENT.png"],
        [IdActionsEnum.MAITRISES_CRITIQUES,this.baseUrlCharacteristics + "CRITICAL_BONUS.png"],
        [IdActionsEnum.COUP_CRITIQUE,this.baseUrlCharacteristics + "FEROCITY.png"],
        [IdActionsEnum.PORTEE,this.baseUrlCharacteristics + "RANGE.png"],
        [IdActionsEnum.PERTE_PORTEE,this.baseUrlCharacteristics + "RANGE.png"],
        [IdActionsEnum.PROSPECTION,this.baseUrlCharacteristics + "PROSPECTING.png"],
        [IdActionsEnum.SAGESSE,this.baseUrlCharacteristics + "WISDOM.png"],
        [IdActionsEnum.PERTE_COUP_CRITIQUE,this.baseUrlCharacteristics + "FEROCITY.png"],
        [IdActionsEnum.INITIATIVE,this.baseUrlCharacteristics + "INIT.png"],
        [IdActionsEnum.PERTE_INITIATIVE,this.baseUrlCharacteristics + "INIT.png"],
        [IdActionsEnum.TACLE,this.baseUrlCharacteristics + "TACKLE.png"],
        [IdActionsEnum.PERTE_TACLE,this.baseUrlCharacteristics + "TACKLE.png"],
        [IdActionsEnum.ESQUIVE,this.baseUrlCharacteristics + "DODGE.png"],
        [IdActionsEnum.PERTE_ESQUIVE,this.baseUrlCharacteristics + "DODGE.png"],
        [IdActionsEnum.VOLONTE,this.baseUrlCharacteristics + "WILLPOWER.png"],
        [IdActionsEnum.MAITRISES_DOS,this.baseUrlCharacteristics + "BACKSTAB_BONUS.png"],
        [IdActionsEnum.PERTE_MAITRISES_DOS,this.baseUrlCharacteristics + "BACKSTAB_BONUS.png"],
        [IdActionsEnum.CONTROLE,this.baseUrlCharacteristics + "LEADERSHIP.png"],
        [IdActionsEnum.BOOST_PW,this.baseUrlCharacteristics + "WP.png"],
        [IdActionsEnum.DEBOOST_PW,this.baseUrlCharacteristics + "WP.png"],
        [IdActionsEnum.PW,this.baseUrlCharacteristics + "WP.png"],
        [IdActionsEnum.PERTE_PW,this.baseUrlCharacteristics + "WP.png"],
        [IdActionsEnum.APPLIQUE_ETAT,this.baseUrlCharacteristics + ""],
        [IdActionsEnum.EXECUTE_GROUPE_EFFET,this.baseUrlCharacteristics + ""],
        [IdActionsEnum.NULL_EFFECT,this.baseUrlCharacteristics + ""],
        [IdActionsEnum.RETIRE_UNE_ZONE,this.baseUrlCharacteristics + ""],
        [IdActionsEnum.VALEUR_SECOND_EFFET,this.baseUrlCharacteristics + ""],
        [IdActionsEnum.PARADE,this.baseUrlCharacteristics + "BLOCK.png"],
        [IdActionsEnum.PERTE_PARADE,this.baseUrlCharacteristics + "BLOCK.png"],
        [IdActionsEnum.RESISTANCES_CRITIQUES,this.baseUrlCharacteristics + "CRITICAL_RES.png"],
        [IdActionsEnum.NIVEAU_DES_ENFANTS,this.baseUrlCharacteristics + ""],
        [IdActionsEnum.MAITRISES_MELEE,this.baseUrlCharacteristics + "MELEE_DMG.png"],
        [IdActionsEnum.MAITRISES_DISTANCES,this.baseUrlCharacteristics + "RANGED_DMG.png"],
        [IdActionsEnum.MAITRISES_BERZERK,this.baseUrlCharacteristics + "BERSERK_DMG.png"],
        [IdActionsEnum.PERTE_MAITRISES_CRITIQUE,this.baseUrlCharacteristics + "CRITICAL_BONUS.png"],
        [IdActionsEnum.PERTE_MAITRISES_MELEE,this.baseUrlCharacteristics + "MELEE_DMG.png"],
        [IdActionsEnum.PERTE_MAITRISES_DISTANCE,this.baseUrlCharacteristics + "RANGED_DMG.png"],
        [IdActionsEnum.PERTE_MAITRISES_BERZERK,this.baseUrlCharacteristics + "BERSERK_DMG.png"],
        [IdActionsEnum.PERTE_RESISTANCES_CRITIQUE,this.baseUrlCharacteristics + "CRITICAL_RES.png"],
        [IdActionsEnum.PERTE_RESISTANCES_DOS,this.baseUrlCharacteristics + "RES_BACKSTAB.png"],
        [IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE,this.baseUrlCharacteristics + "DMG_IN_PERCENT.png"],
        [IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE,this.baseUrlCharacteristics + "RES_IN_PERCENT.png"],
        [IdActionsEnum.DOMMAGE_LUMIERE,this.baseUrlCharacteristics + "DMG_LIGHT_PERCENT.png"],
        [IdActionsEnum.SOIN_LUMIERE,this.baseUrlCharacteristics + "DMG_LIGHT_PERCENT.png"],
        [IdActionsEnum.QUANTITE_ITEM_RECOLTEE,this.baseUrlCharacteristics + ""],
      ]);

    public readonly mapRarityUrl = new Map<RarityItemEnum,string>([
        [RarityItemEnum.NORMAL, this.baseUrlRarities + RarityItemEnum.NORMAL + ".png"],
        [RarityItemEnum.RARE, this.baseUrlRarities + RarityItemEnum.RARE + ".png"],
        [RarityItemEnum.MYTHIQUE, this.baseUrlRarities + RarityItemEnum.MYTHIQUE + ".png"],
        [RarityItemEnum.LEGENDAIRE, this.baseUrlRarities + RarityItemEnum.LEGENDAIRE + ".png"],
        [RarityItemEnum.RELIQUE, this.baseUrlRarities + RarityItemEnum.RELIQUE + ".png"],
        [RarityItemEnum.SOUVENIR, this.baseUrlRarities + RarityItemEnum.SOUVENIR + ".png"],
        [RarityItemEnum.EPIQUE, this.baseUrlRarities + RarityItemEnum.EPIQUE + ".png"],
    ]);

    public readonly mapUrlItemType = new Map<ItemTypeEnum,string>([
        [ItemTypeEnum.DEUX_MAINS, this.baseUrlItemType + "519.png"],
        [ItemTypeEnum.UNE_MAIN, this.baseUrlItemType + "518.png"],
        [ItemTypeEnum.ANNEAU, this.baseUrlItemType + "103.png"],
        [ItemTypeEnum.BOTTES, this.baseUrlItemType + "119.png"],
        [ItemTypeEnum.AMULETTE, this.baseUrlItemType + "120.png"],
        [ItemTypeEnum.CAPE, this.baseUrlItemType + "132.png"],
        [ItemTypeEnum.CEINTURE, this.baseUrlItemType + "133.png"],
        [ItemTypeEnum.CASQUE, this.baseUrlItemType + "134.png"],
        [ItemTypeEnum.PLASTRON, this.baseUrlItemType + "136.png"],
        [ItemTypeEnum.EPAULETTES, this.baseUrlItemType + "138.png"],
        [ItemTypeEnum.ACCESSOIRES, this.baseUrlItemType + "521.png"],
        [ItemTypeEnum.BOUCLIER, this.baseUrlItemType + "520.png"],
        [ItemTypeEnum.DAGUE, this.baseUrlItemType + "571.png"],
        [ItemTypeEnum.FAMILIER, this.baseUrlItemType + "582.png"],
    ]);

      public getActionIdUrl(idAction: IdActionsEnum, armureRecue?: boolean): string {
        return armureRecue ? this.baseUrlCharacteristics + "ARMOR_RECEIVED.png" : this.mapUrlCharacteristics.get(idAction) || "";
      }

      public getItemUrl(idItem: number): string {
        return this.baseUrlImage + idItem + ".png";
      }
}