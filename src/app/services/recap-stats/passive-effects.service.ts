import { Injectable } from "@angular/core";
import { RecapStats } from "../../models/data/recap-stats";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { SortIdEnum } from "../../models/enum/sortIdEnum";
import { ClassIdEnum } from "../../models/enum/classIdEnum";
import { ParameterMajorActionEnum } from "../../models/enum/parameterMajorActionEnum";

@Injectable({ providedIn: 'root' })
export class PassiveEffectsService {

  applyEffectPassif(
    classId: ClassIdEnum,
    sortPassifsIds: number[],
    level: number,
    recapValue: RecapStats[],
    applyEffectFn: (effect: RecapStats) => void
  ): void {
    this.applyEffectPassifGenerique(sortPassifsIds, level, applyEffectFn);
    this.applyEffectPassifClasse(classId, sortPassifsIds, level, recapValue, applyEffectFn);
  }

  private applyEffectPassifGenerique(sortPassifsIds: number[], level: number, applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.CARNAGE)) {
      applyEffectFn({ id: IdActionsEnum.DI, value: 15, params: [] });
      applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: -30, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.EVASION)) {
      applyEffectFn({ id: IdActionsEnum.ESQUIVE, value: level, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.INSPIRATION)) {
      applyEffectFn({ id: IdActionsEnum.INITIATIVE, value: Math.floor(level / 2), params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.INTERCEPTION)) {
      applyEffectFn({ id: IdActionsEnum.TACLE, value: level, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.MEDECINE)) {
      applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: 30, params: [] });
      applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: 25, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
      applyEffectFn({ id: IdActionsEnum.DI, value: -15, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.MOTIVATION)) {
      applyEffectFn({ id: IdActionsEnum.PA, value: 1, params: [] });
      applyEffectFn({ id: IdActionsEnum.DI, value: -20, params: [] });
      applyEffectFn({ id: IdActionsEnum.VOLONTE, value: 10, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.ROCK)) {
      applyEffectFn({ id: IdActionsEnum.PERCENTAGE_PV, value: 60, params: [] });
      applyEffectFn({ id: IdActionsEnum.SOINS_RECUE, value: 25, params: [] });
      applyEffectFn({ id: IdActionsEnum.DI, value: -25, params: [] });
      applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: -50, params: [] });
    }
  }

  private applyEffectPassifClasse(
    classId: ClassIdEnum,
    sortPassifsIds: number[],
    level: number,
    recapValue: RecapStats[],
    applyEffectFn: (effect: RecapStats) => void
  ): void {
    switch (classId) {
      case ClassIdEnum.Feca:
        this.applyEffectPassifFeca(sortPassifsIds, level, recapValue, applyEffectFn);
        break;
      case ClassIdEnum.Osamodas:
        this.applyEffectPassifOsamodas(sortPassifsIds, applyEffectFn);
        break;
      case ClassIdEnum.Sram:
        this.applyEffectPassifSram(sortPassifsIds, level, recapValue, applyEffectFn);
        break;
      case ClassIdEnum.Xelor:
        this.applyEffectPassifXelor(sortPassifsIds, applyEffectFn);
        break;
      case ClassIdEnum.Eniripsa:
        this.applyEffectPassifEniripsa(sortPassifsIds, level, applyEffectFn);
        break;
      case ClassIdEnum.Iop:
        this.applyEffectPassifIop(sortPassifsIds, level, applyEffectFn);
        break;
      case ClassIdEnum.Cra:
        this.applyEffectPassifCra(sortPassifsIds, recapValue, applyEffectFn);
        break;
      case ClassIdEnum.Sadida:
        this.applyEffectPassifSadida(sortPassifsIds, applyEffectFn);
        break;
      case ClassIdEnum.Sacrieur:
        this.applyEffectPassifSacrieur(sortPassifsIds, level, recapValue, applyEffectFn);
        break;
      case ClassIdEnum.Pandawa:
        this.applyEffectPassifPandawa(sortPassifsIds, applyEffectFn);
        break;
      case ClassIdEnum.Zobal:
        this.applyEffectPassifZobal(sortPassifsIds, level, recapValue, applyEffectFn);
        break;
      case ClassIdEnum.Ouginak:
        this.applyEffectPassifOuginak(sortPassifsIds, level, applyEffectFn);
        break;
      case ClassIdEnum.Steamer:
        this.applyEffectPassifSteamer(sortPassifsIds, level, applyEffectFn);
        break;
      case ClassIdEnum.Eliotrope:
        this.applyEffectPassifEliotrope(sortPassifsIds, applyEffectFn);
        break;
      case ClassIdEnum.Huppermage:
        this.applyEffectPassifHuppermage(sortPassifsIds, applyEffectFn);
        break;
    }
  }

  private applyEffectPassifHuppermage(sortPassifsIds: number[], applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.CHAINE_DE_LA_NATURE)) { // ABSORPTION QUADRAMENTALE
      applyEffectFn({ id: IdActionsEnum.VOLONTE, value: 20, params: [] });
    }
  }

  private applyEffectPassifEliotrope(sortPassifsIds: number[], applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.EPEE_DU_DEBUT)) {
      applyEffectFn({ id: IdActionsEnum.PORTEE, value: -1, params: [] });
    }
  }

  private applyEffectPassifSteamer(sortPassifsIds: number[], level: number, applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.MECANIQUE_AVANCEE)) {
      applyEffectFn({ id: IdActionsEnum.DI_INDIRECT, value: -30, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.PARTAGE_ANIMAL)) { // REVETEMENT_A_TOUTE_EPREUVE
      applyEffectFn({ id: IdActionsEnum.POINT_DE_VIE, value: 6 * level, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.ALLIAGE_LEGER)) {
      applyEffectFn({ id: IdActionsEnum.PM, value: -1, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.ASSISTANCE_TELLURIQUE)) {
      applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -30, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.STRATEGIE_ROBOTIQUE)) {
      applyEffectFn({ id: IdActionsEnum.DI_INDIRECT, value: -20, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.LA_MEILLEURE_DEFENSE_EST_L_ATTAQUE)) {
      applyEffectFn({ id: IdActionsEnum.PARADE, value: 50, params: [] });
    }
  }

  private applyEffectPassifOuginak(sortPassifsIds: number[], level: number, applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.EPUISEMENT)) {
      applyEffectFn({ id: IdActionsEnum.DI_INDIRECT, value: 50, params: [] });
      applyEffectFn({ id: IdActionsEnum.PORTEE, value: -2, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.CROCS_FUTES)) {
      applyEffectFn({ id: IdActionsEnum.PARADE, value: 20, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.PISTAGE)) {
      applyEffectFn({ id: IdActionsEnum.PM, value: 1, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.ART_CANIN)) {
      applyEffectFn({ id: IdActionsEnum.DI_INDIRECT, value: -15, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.ENERGIE_CANINE)) {
      applyEffectFn({ id: IdActionsEnum.BOOST_PW, value: 3, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.FUREUR)) {
      applyEffectFn({ id: IdActionsEnum.BOOST_PW, value: -1, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.PILLAGE)) {
      applyEffectFn({ id: IdActionsEnum.DI, value: -10, params: [] });
      applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: 30, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
      applyEffectFn({ id: IdActionsEnum.POINT_DE_VIE, value: 4 * level, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.ARDEUR)) {
      applyEffectFn({ id: IdActionsEnum.PM, value: -1, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.DIGESTION)) {
      applyEffectFn({ id: IdActionsEnum.DI_INDIRECT, value: -15, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.CHAINE_DE_LA_NATURE)) { // ACHARNE
      applyEffectFn({ id: IdActionsEnum.VOLONTE, value: 20, params: [] });
      applyEffectFn({ id: IdActionsEnum.DI, value: -10, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.CANIN_OS)) {
      applyEffectFn({ id: IdActionsEnum.TACLE, value: 3 * level, params: [] });
    }
  }

  private applyEffectPassifZobal(sortPassifsIds: number[], level: number, recapValue: RecapStats[], applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.REGARD_MASQUE)) {
      applyEffectFn({ id: IdActionsEnum.PM, value: 1, params: [] });
    }

    if (sortPassifsIds.find(x => x === SortIdEnum.JEU_DE_JAMBES)) {
      applyEffectFn({ id: IdActionsEnum.ESQUIVE, value: 2 * level, params: [] });
    }

    if (sortPassifsIds.find(x => x === SortIdEnum.LE_IOP_DE_WAZEMMES)) { // ART DE LA FUITE
      const esquive = recapValue.find(rs => rs.id === IdActionsEnum.ESQUIVE)?.value ?? 0;
      if (esquive >= 0) {
        const value = Math.min(Math.floor(esquive / 2), 2 * level);
        applyEffectFn({ id: IdActionsEnum.MAITRISES_DISTANCES, value: value, params: [] });
      }
    }

    if (sortPassifsIds.find(x => x === SortIdEnum.EROSION)) {
      applyEffectFn({ id: IdActionsEnum.DI, value: -25, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.BRUTE)) {
      applyEffectFn({ id: IdActionsEnum.DI, value: 25, params: [] });
      applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -40, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
      applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -40, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.ANCRE)) {
      const tacle = recapValue.find(rs => rs.id === IdActionsEnum.TACLE)?.value ?? 0;
      if (tacle >= 0) {
        applyEffectFn({ id: IdActionsEnum.TACLE, value: tacle, params: [] });
      }
      applyEffectFn({ id: IdActionsEnum.PM, value: -1, params: [] });
    }

    if (sortPassifsIds.find(x => x === SortIdEnum.ART_DE_LA_VENGEANCE)) { // ART DE LA FUITE
      const tacle = recapValue.find(rs => rs.id === IdActionsEnum.TACLE)?.value ?? 0;
      if (tacle >= 0) {
        const value = Math.min(Math.floor(tacle / 2), 2 * level);
        applyEffectFn({ id: IdActionsEnum.MAITRISES_MELEE, value: value, params: [] });
      }
    }

    if (sortPassifsIds.find(x => x === SortIdEnum.POUSSEES_D_ENTRAVE)) {
      applyEffectFn({ id: IdActionsEnum.VOLONTE, value: 10, params: [] });
    }
  }

  private applyEffectPassifPandawa(sortPassifsIds: number[], applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.COCKTAIL)) {
      applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: 20, params: [] });
      applyEffectFn({ id: IdActionsEnum.DI, value: -10, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.CYANOSE)) {
      applyEffectFn({ id: IdActionsEnum.DI, value: 15, params: [] });
      applyEffectFn({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: -50, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.PANDEMIE)) {
      applyEffectFn({ id: IdActionsEnum.DI, value: 10, params: [] });
    }
  }

  private applyEffectPassifSacrieur(sortPassifsIds: number[], level: number, recapValue: RecapStats[], applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.COEUR_DE_SACRIEUR)) {
      applyEffectFn({ id: IdActionsEnum.PORTEE, value: -2, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.CIRCULATION_SANGUINE)) {
      applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -50, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.MOBILITE)) {
      const tacle = recapValue.find(rs => rs.id === IdActionsEnum.TACLE)?.value ?? 0;
      if (tacle >= 0) {
        applyEffectFn({ id: IdActionsEnum.TACLE, value: -tacle, params: [] });
      }
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.SANG_TATOUE)) {
      applyEffectFn({ id: IdActionsEnum.POINT_DE_VIE, value: 8 * level, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.PACTE_DE_WAKFU)) {
      applyEffectFn({ id: IdActionsEnum.POINT_DE_VIE, value: 4 * level, params: [] });
    }
  }

  private applyEffectPassifSadida(sortPassifsIds: number[], applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.CHAINE_DE_LA_NATURE)) {
      applyEffectFn({ id: IdActionsEnum.VOLONTE, value: 20, params: [] });
    }
  }

  private applyEffectPassifCra(sortPassifsIds: number[], recapValue: RecapStats[], applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.ECLAIREUR_INTOUCHABLE)) {
      const esquive = recapValue.find(rs => rs.id === IdActionsEnum.ESQUIVE)?.value ?? 0;
      applyEffectFn({ id: IdActionsEnum.ESQUIVE, value: -esquive, params: [] });
      applyEffectFn({ id: IdActionsEnum.VOLONTE, value: 20, params: [] });
    }
  }

  private applyEffectPassifIop(sortPassifsIds: number[], level: number, applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.VIRILITE)) {
      applyEffectFn({ id: IdActionsEnum.POINT_DE_VIE, value: 3 * level, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.LE_IOP_DE_WAZEMMES)) {
      applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -20, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
    }
  }

  private applyEffectPassifEniripsa(sortPassifsIds: number[], level: number, applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.TOUS_POUR_MOI)) {
      applyEffectFn({ id: IdActionsEnum.POINT_DE_VIE, value: 8 * level, params: [] });
    }
  }

  private applyEffectPassifXelor(sortPassifsIds: number[], applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.MEMOIRE)) {
      applyEffectFn({ id: IdActionsEnum.BOOST_PW, value: 6, params: [] });
      applyEffectFn({ id: IdActionsEnum.PM, value: -2, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.ASSIMILATION)) {
      applyEffectFn({ id: IdActionsEnum.BOOST_PW, value: -6, params: [] });
    }
  }

  private applyEffectPassifSram(sortPassifsIds: number[], level: number, recapValue: RecapStats[], applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.MAITRE_DES_PIEGES)) {
      applyEffectFn({ id: IdActionsEnum.CONTROLE, value: 4, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.EMBUSCADE)) {
      applyEffectFn({ id: IdActionsEnum.MAITRISES_DISTANCES, value: Math.floor(level * 1.5), params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.DUPERIE)) {
      applyEffectFn({ id: IdActionsEnum.VOLONTE, value: 20, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.SRAM_DANS_L_AME)) {
      const esquive = recapValue.find(rs => rs.id === IdActionsEnum.ESQUIVE)?.value ?? 0;
      if (esquive >= 0) {
        applyEffectFn({ id: IdActionsEnum.COUP_CRITIQUE, value: Math.min(Math.floor(esquive / 20), 15), params: [] });
      }
      const tacle = recapValue.find(rs => rs.id === IdActionsEnum.TACLE)?.value ?? 0;
      if (tacle >= 0) {
        applyEffectFn({ id: IdActionsEnum.COUP_CRITIQUE, value: Math.min(Math.floor(tacle / 20), 15), params: [] });
      }
    }
  }

  private applyEffectPassifOsamodas(sortPassifsIds: number[], applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.SACRIFICE_ANIMAL)) {
      applyEffectFn({ id: IdActionsEnum.BOOST_PW, value: 3, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.PUISSANCE_DRACONIQUE)) {
      applyEffectFn({ id: IdActionsEnum.DI, value: 25, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.GUERRIER_INVOCATEUR)) {
      applyEffectFn({ id: IdActionsEnum.DI, value: 20, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.VISION_DU_CORBAC)) {
      applyEffectFn({ id: IdActionsEnum.PORTEE, value: 2, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.PARTAGE_ANIMAL)) {
      applyEffectFn({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: -100, params: [] });
    }
  }

  private applyEffectPassifFeca(sortPassifsIds: number[], level: number, recapValue: RecapStats[], applyEffectFn: (effect: RecapStats) => void): void {
    if (sortPassifsIds.find(x => x === SortIdEnum.PEAU_ROCHEUSE)) {
      applyEffectFn({ id: IdActionsEnum.PARADE, value: 30, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.COMPREHENSION_DU_WAKFU)) {
      applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: 100, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.ARMURE_DE_COMBAT)) {
      applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -100, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.LA_MEILLEURE_DEFENSE_EST_L_ATTAQUE)) {
      applyEffectFn({ id: IdActionsEnum.DI, value: 10, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.MARCHE_PACIFISTE)) {
      const parade = recapValue.find(rs => rs.id === IdActionsEnum.PARADE);
      if (parade && parade.value <= 100) {
        applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: parade.value, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
        applyEffectFn({ id: IdActionsEnum.PARADE, value: -parade.value, params: [] });
      }
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.QUI_VEUT_LA_PAIX_PREPARE_LA_GUERRE)) {
      applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -100, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
      applyEffectFn({ id: IdActionsEnum.DI, value: 25, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.LIGNE)) {
      applyEffectFn({ id: IdActionsEnum.PORTEE, value: 1, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.PROTECTEUR_DU_TROUPEAU)) {
      applyEffectFn({ id: IdActionsEnum.POINT_DE_VIE, value: 3 * level, params: [] });
      applyEffectFn({ id: IdActionsEnum.DI, value: -20, params: [] });
    }
  }
}
