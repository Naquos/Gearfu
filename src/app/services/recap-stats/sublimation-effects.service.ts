import { Injectable } from "@angular/core";
import { RecapStats } from "../../models/data/recap-stats";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { IdSublimationEnum } from "../../models/enum/idSublimationEnum";
import { ParameterMajorActionEnum } from "../../models/enum/parameterMajorActionEnum";

@Injectable({ providedIn: 'root' })
export class SublimationEffectsService {

  applyEffectSublimation(
    sublimationsIdToLevel: Map<number, number>,
    level: number,
    recapValue: RecapStats[],
    applyEffectFn: (effect: RecapStats) => void,
    allMaitrisesSecondairesNullFn: () => boolean
  ): void {
    // Les sublimations devant être appliquées dans un certain ordre, on traite un premier groupe de subli "prioritaires"
    // Puis on traite le reste des sublimations

    sublimationsIdToLevel.forEach((levelSubli, id) => {
       if (id === IdSublimationEnum.RAVAGE) {
        applyEffectFn({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: Math.floor(0.05 * levelSubli * level), params: [] });
        applyEffectFn({ id: IdActionsEnum.MAITRISES_BERZERK, value: Math.floor(0.05 * levelSubli * level), params: [] });
        applyEffectFn({ id: IdActionsEnum.MAITRISES_CRITIQUES, value: Math.floor(0.05 * levelSubli * level), params: [] });
        applyEffectFn({ id: IdActionsEnum.MAITRISES_DOS, value: Math.floor(0.05 * levelSubli * level), params: [] });
        applyEffectFn({ id: IdActionsEnum.MAITRISES_MELEE, value: Math.floor(0.05 * levelSubli * level), params: [] });
        applyEffectFn({ id: IdActionsEnum.MAITRISES_DISTANCES, value: Math.floor(0.05 * levelSubli * level), params: [] });
        applyEffectFn({ id: IdActionsEnum.MAITRISES_SOIN, value: Math.floor(0.05 * levelSubli * level), params: [] });
        applyEffectFn({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: 3 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.INFLUENCE) {
        applyEffectFn({ id: IdActionsEnum.COUP_CRITIQUE, value: 3 * levelSubli, params: []});
      } else if( id === IdSublimationEnum.THEORIE_DE_LA_MATIERE) {
        applyEffectFn({ id: IdActionsEnum.COUP_CRITIQUE, value: 50 * levelSubli, params: [] });
        applyEffectFn({ id: IdActionsEnum.DI, value: -50, params: [] });
        applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: -50, params: [] });
      } 
 
    });
    
    sublimationsIdToLevel.forEach((levelSubli, id) => {
       if (id === IdSublimationEnum.DENOUEMENT) {
        const maitriseCrit = recapValue.find(rs => rs.id === IdActionsEnum.MAITRISES_CRITIQUES)?.value ?? 0;
        applyEffectFn({ id: IdActionsEnum.MAITRISES_CRITIQUES, value: -maitriseCrit, params: [] });
        applyEffectFn({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: maitriseCrit, params: [] });
      } else if(id === IdSublimationEnum.POIDS_PLUME) {
        const pm = recapValue.find(rs => rs.id === IdActionsEnum.PM)?.value ?? 0;
        const nbPm = Math.max(0, pm - 4);
        applyEffectFn({ id: IdActionsEnum.ESQUIVE, value: 2 * nbPm * levelSubli, params: [] });
      } 
    });


    sublimationsIdToLevel.forEach((levelSubli, id) => {
      if(id === IdSublimationEnum.ABANDON && allMaitrisesSecondairesNullFn()) {
        applyEffectFn({ id: IdActionsEnum.PORTEE, value: Math.floor(0.5 * levelSubli), params: [] });
        applyEffectFn({ id: IdActionsEnum.BOOST_PW, value: Math.floor(0.5 * levelSubli), params: [] });
        applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: levelSubli * -5, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
        applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: levelSubli * -5, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
      } else if(id === IdSublimationEnum.ACCUMULATION) {
        applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: -20, params: [] });
      } else if(id === IdSublimationEnum.AGILITE_VITALE) {
        applyEffectFn({ id: IdActionsEnum.PM, value: Math.floor(0.5 * levelSubli), params: [] });
      } else if(id === IdSublimationEnum.ALLOCENTRISME) {
        applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: levelSubli * 5, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
      } else if(id === IdSublimationEnum.AMBITION && allMaitrisesSecondairesNullFn()) {
        applyEffectFn({ id: IdActionsEnum.COUP_CRITIQUE, value: levelSubli * 5, params: [] });
      } else if(id === IdSublimationEnum.ARME_EMPOISONNEE) {
        applyEffectFn({ id: IdActionsEnum.DI, value: -20, params: [] });
      } else if(id === IdSublimationEnum.ARMURE_LOURDE) {
        applyEffectFn({ id: IdActionsEnum.DI, value: 10, params: [] });
        applyEffectFn({ id: IdActionsEnum.PM, value: -3 + levelSubli, params: [] });
      } else if(id === IdSublimationEnum.BOUCLIER_CRITIQUE) {
        applyEffectFn({ id: IdActionsEnum.RESISTANCES_CRITIQUES, value: levelSubli * 5, params: [] });
      } else if(id === IdSublimationEnum.BOUCLIER_DORSAL) {
        applyEffectFn({ id: IdActionsEnum.RESISTANCES_DOS, value: levelSubli * 5, params: [] });
      } else if(id === IdSublimationEnum.CARAPACE) {
        applyEffectFn({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: 75, params: [] });
        applyEffectFn({ id: IdActionsEnum.PA, value: -3 + levelSubli, params: [] });
      } else if(id === IdSublimationEnum.CARNAGE) {
        applyEffectFn({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: Math.floor(0.15 * level * levelSubli), params: [] });
      } else if(id === IdSublimationEnum.CICATRISATION) {
        applyEffectFn({ id: IdActionsEnum.PERCENTAGE_PV, value: levelSubli * 5, params: [] });
      } else if(id === IdSublimationEnum.CLAMEUR) {
        applyEffectFn({ id: IdActionsEnum.VOLONTE, value: -20, params: []});
      } else if(id === IdSublimationEnum.COMBAT_RAPPROCHE) {
        applyEffectFn({ id: IdActionsEnum.PORTEE, value: -1, params: [] });
        applyEffectFn({ id: IdActionsEnum.TACLE, value: Math.floor(0.5 * level * levelSubli), params: [] });
        applyEffectFn({ id: IdActionsEnum.ESQUIVE, value: Math.floor(0.5 * level * levelSubli), params: [] });
      } else if(id === IdSublimationEnum.CONSERVATION) {
        applyEffectFn({ id: IdActionsEnum.PARADE, value: 10 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.CRITIQUE_BERSERK) {
        applyEffectFn({ id: IdActionsEnum.COUP_CRITIQUE, value: 5 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.DEROBADE_CONTINUE) {
        applyEffectFn({ id: IdActionsEnum.PARADE, value: 3 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.DEVASTATION) {
        applyEffectFn({ id: IdActionsEnum.PW, value: 1, params: [] });
        applyEffectFn({ id: IdActionsEnum.VOLONTE, value: -40 + 10 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.ECAILLES_DE_LUNE) {
        applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: 3 * levelSubli, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
      } else if(id === IdSublimationEnum.ENVELOPPE_ROCHEUSE) {
        applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: 5 * levelSubli, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
      } else if(id === IdSublimationEnum.ESQUIVE_BERSERK) {
        applyEffectFn({ id: IdActionsEnum.ESQUIVE, value: Math.floor(0.5 * level * levelSubli), params: [] });
      } else if(id === IdSublimationEnum.EVASION) {
        applyEffectFn({ id: IdActionsEnum.ESQUIVE, value:  Math.floor(0.5 * level * levelSubli), params: [] });
      } else if(id === IdSublimationEnum.EXPERT_DES_ARMES_LEGERES) {
        applyEffectFn({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: Math.floor(0.25 * level * levelSubli), params: [] });
      } else if(id === IdSublimationEnum.EXPERT_DES_PARADES) {
        applyEffectFn({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: -50, params: [] });
      } else if(id === IdSublimationEnum.FOCALISATION) {
        applyEffectFn({ id: IdActionsEnum.DI, value: -15, params: [] });
      } else if(id === IdSublimationEnum.FORCE_LEGERE) {
        applyEffectFn({ id: IdActionsEnum.DI, value: 3 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.FUREUR) {
        applyEffectFn({ id: IdActionsEnum.DI, value: -15, params: [] });
      } else if(id === IdSublimationEnum.INFLUENCE_DU_WAKFU) {
        applyEffectFn({ id: IdActionsEnum.COUP_CRITIQUE, value: 10 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.INFLUENCE_VITALE) {
        applyEffectFn({ id: IdActionsEnum.COUP_CRITIQUE, value: 4 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.INTERCEPTION) {
        applyEffectFn({ id: IdActionsEnum.TACLE, value: Math.floor(0.5 * level), params: [] });
      } else if(id === IdSublimationEnum.NEUTRALITE && allMaitrisesSecondairesNullFn()) {
        applyEffectFn({ id: IdActionsEnum.DI, value: 8 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.PARADE_BERSERK) {
        applyEffectFn({ id: IdActionsEnum.PARADE, value: 5 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.PRETENTION) {
        applyEffectFn({ id: IdActionsEnum.PARADE, value: 5 * levelSubli, params: [] });
      } else if (id === IdSublimationEnum.PUISSANCE_BRUTE) {
        applyEffectFn({ id: IdActionsEnum.BOOST_PW, value: -1 * levelSubli, params: [] });
      } else if (id === IdSublimationEnum.RAVAGE_SECONDAIRE) {
        applyEffectFn({ id: IdActionsEnum.COUP_CRITIQUE, value: 1.5 * levelSubli, params: [] });
        applyEffectFn({ id: IdActionsEnum.PARADE, value: 1.5 * levelSubli, params: [] });
        applyEffectFn({ id: IdActionsEnum.VOLONTE, value: 1.5 * levelSubli, params: [] });
      } else if (id === IdSublimationEnum.REPROBATION) {
        applyEffectFn({ id: IdActionsEnum.VOLONTE, value: -20, params: [] });
      } else if (id === IdSublimationEnum.REVIGORATION) {
        applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: -10, params: [] });
      } else if (id === IdSublimationEnum.RUINE) {
        applyEffectFn({ id: IdActionsEnum.DI_INDIRECT, value: 5 * levelSubli, params: [] });
      } else if (id === IdSublimationEnum.SAUVEGARDE_DU_WAKFU) {
        applyEffectFn({ id: IdActionsEnum.BOOST_PW, value: -1, params: [] });
      } else if (id === IdSublimationEnum.SECRET_DE_LA_VIE) {
        const maitriseSoin = recapValue.find(rs => rs.id === IdActionsEnum.MAITRISES_SOIN)?.value ?? 0;
        applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: - maitriseSoin, params: [] });
        applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: 10, params: [] });
      } else if( id === IdSublimationEnum.TACLE_BERSERK) {
        applyEffectFn({ id: IdActionsEnum.TACLE, value: 50 * levelSubli * level, params: [] });
      } else if( id === IdSublimationEnum.TOPOLOGIE) {
        const esquive = recapValue.find(rs => rs.id === IdActionsEnum.ESQUIVE)?.value ?? 0;
        applyEffectFn({ id: IdActionsEnum.ESQUIVE, value: -esquive, params: []  });
      } else if (id === IdSublimationEnum.VELOCITE) {
        applyEffectFn({ id: IdActionsEnum.PM, value: 1, params: []});
        applyEffectFn({ id: IdActionsEnum.DI, value: -30 + 10 * levelSubli, params: []});
      } else if (id === IdSublimationEnum.VISIBILITE) {
        applyEffectFn({ id: IdActionsEnum.PORTEE, value: 1, params: []});
        applyEffectFn({ id: IdActionsEnum.ESQUIVE, value: -450 + 150 * levelSubli, params: []});
        applyEffectFn({ id: IdActionsEnum.TACLE, value: -450 + 150 * levelSubli, params: []});
      } else if (id === IdSublimationEnum.ABNEGATION) {
        applyEffectFn({ id: IdActionsEnum.DI, value: -15, params: [] });
        applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: 30, params: [] });
      } else if (id === IdSublimationEnum.ANATOMIE) {
        applyEffectFn({ id: IdActionsEnum.DI, value: -20, params: []  });
      } else if (id === IdSublimationEnum.APLOMB_NATUREL) {
        applyEffectFn({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: 50, params: [] });
      } else if (id === IdSublimationEnum.ARROGANCE) {
        applyEffectFn({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: -100, params: [] });
      } else if (id === IdSublimationEnum.ASSIMILATION) {
        applyEffectFn({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: -50, params: [] });
      } else if (id === IdSublimationEnum.CHAOS) {
        const elemFeu = recapValue.find(rs => rs.id === IdActionsEnum.MAITRISES_FEU)?.value ?? 0;
        applyEffectFn({ id: IdActionsEnum.MAITRISES_FEU, value: -elemFeu, params: [] });
        const elemEau = recapValue.find(rs => rs.id === IdActionsEnum.MAITRISES_EAU)?.value ?? 0;
        applyEffectFn({ id: IdActionsEnum.MAITRISES_EAU, value: -elemEau, params: [] });
        const elemTerre = recapValue.find(rs => rs.id === IdActionsEnum.MAITRISES_TERRE)?.value ?? 0;
        applyEffectFn({ id: IdActionsEnum.MAITRISES_TERRE, value: -elemTerre, params: [] });
        const elemAir = recapValue.find(rs => rs.id === IdActionsEnum.MAITRISES_AIR)?.value ?? 0;
        applyEffectFn({ id: IdActionsEnum.MAITRISES_AIR, value: -elemAir, params: [] });

        applyEffectFn({ id: IdActionsEnum.DI, value: 20, params: [] });
        applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: 20, params: [] });
      } else if (id === IdSublimationEnum.CONCENTRATION_ELEMENTAIRE) {
        applyEffectFn({ id: IdActionsEnum.DI, value: 20, params: [] });
        applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: 20, params: [] });
        this.applyNerfConcentrationElementaire(recapValue, applyEffectFn);
      } else if (id === IdSublimationEnum.CONSTANCE) {
        applyEffectFn({ id: IdActionsEnum.DI, value: 20, params: [] });
        applyEffectFn({ id: IdActionsEnum.COUP_CRITIQUE, value: 50, params: [] });
      } else if (id === IdSublimationEnum.CONSTANCE_II) {
        applyEffectFn({ id: IdActionsEnum.DI_INDIRECT, value: 40, params: [] });
      } else if (id === IdSublimationEnum.CONTROLE_DE_L_ESPACE_II) {
        applyEffectFn({ id: IdActionsEnum.DI_INDIRECT, value: 30, params: [] });
      } else if (id === IdSublimationEnum.ELEMENTALISME) {
        applyEffectFn({ id: IdActionsEnum.DI, value: 20, params: [] });
        applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: 20, params: [] });
      } else if (id === IdSublimationEnum.ENGAGEMENT) {
        const maitriseSoin = recapValue.find(rs => rs.id === IdActionsEnum.MAITRISES_SOIN)?.value ?? 0;
        applyEffectFn({ id: IdActionsEnum.MAITRISES_SOIN, value: -maitriseSoin, params: [] });
        applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: 30, params: [] });
      } else if (id === IdSublimationEnum.EXCES) {
        applyEffectFn({ id: IdActionsEnum.DI, value: -10, params: [] });
      } else if (id === IdSublimationEnum.EXCES_II) {
        applyEffectFn({ id: IdActionsEnum.DI, value: -10, params: []  });
      } else if (id === IdSublimationEnum.FORCE_HERCULEENNE) {
        applyEffectFn({ id: IdActionsEnum.ESQUIVE, value: Math.floor(2.5 * level), params: [] });
      } else if (id === IdSublimationEnum.FURIE) {
        const esquive = recapValue.find(rs => rs.id === IdActionsEnum.ESQUIVE)?.value ?? 0;
        if(esquive > level) {
          applyEffectFn({ id: IdActionsEnum.TACLE, value: level , params: [] });
        }
      } else if( id === IdSublimationEnum.FURIE_II ) {
        applyEffectFn({ id: IdActionsEnum.PORTEE, value: 1, params: [] });
      } else if(id === IdSublimationEnum.INFLEXIBILITE) {
        const PA = recapValue.find(rs => rs.id === IdActionsEnum.PA)?.value ?? 0;
        if(PA <= 10) {
          applyEffectFn({ id: IdActionsEnum.DI, value: 15, params: [] });
          if(level >= 100) {
            applyEffectFn({ id: IdActionsEnum.VOLONTE, value: 10, params: [] });
          }
        }
      } else if(id === IdSublimationEnum.INFLEXIBILITE_II && allMaitrisesSecondairesNullFn()) {
        applyEffectFn({ id: IdActionsEnum.DI, value: 20, params: [] });
        applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: 20, params: [] });
      } else if (id === IdSublimationEnum.MANIEMENT_BOUCLIER) {
        const po = recapValue.find(rs => rs.id === IdActionsEnum.PORTEE)?.value ?? 0;
        if(po > 0) {
          applyEffectFn({ id: IdActionsEnum.PORTEE, value: -po, params: [] });
        }
        applyEffectFn({ id: IdActionsEnum.PM, value: 1, params: [] });
      } else if (id === IdSublimationEnum.MANIEMENT_DEUX_MAINS) {
        applyEffectFn({ id: IdActionsEnum.PM, value: -2, params: [] });
        applyEffectFn({ id: IdActionsEnum.PA, value: 2, params: [] });
      } else if(id === IdSublimationEnum.MESURE) {
        applyEffectFn({ id: IdActionsEnum.COUP_CRITIQUE, value: 10, params: [] });
      } else if(id === IdSublimationEnum.MESURE_II) {
        applyEffectFn({ id: IdActionsEnum.PARADE, value: 20, params: [] });
        applyEffectFn({ id: IdActionsEnum.VOLONTE, value: 10, params: [] });
      } else if(id === IdSublimationEnum.PACTE_WAKFU) {
        applyEffectFn({ id: IdActionsEnum.VOLONTE, value: 10, params: [] });
        applyEffectFn({ id: IdActionsEnum.PARADE, value: 15, params: [] });
      } else if(id === IdSublimationEnum.PILLIER) {
        applyEffectFn({ id: IdActionsEnum.PERCENTAGE_PV, value: 30, params: [] });
        applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -50, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
      } else if(id === IdSublimationEnum.PILLIER_II) {
        applyEffectFn({ id: IdActionsEnum.PERCENTAGE_PV, value: -30, params: [] });
        applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, value: 30, params: [] });
      } else if (id === IdSublimationEnum.PRECISION_CHIRURGICALE) {
        applyEffectFn({ id: IdActionsEnum.SOINS_REALISE, value: 20, params: [] });
        applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: 15, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
      } else if( id === IdSublimationEnum.RENAISSANCE) {
        applyEffectFn({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: -50, params: [] } );
      } else if( id === IdSublimationEnum.SANTE_DE_FER) {
        applyEffectFn({ id: IdActionsEnum.PERCENTAGE_PV, value: -30, params: [] } );
        applyEffectFn({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, value: 30, params: [] } );
      } else if( id === IdSublimationEnum.SCIENCE_DU_PLACEMENT) {
        applyEffectFn({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: 50, params: [] } );
        applyEffectFn({ id: IdActionsEnum.RESISTANCES_DOS, value: -200, params: [] } );
      } else if( id === IdSublimationEnum.SENTINELLE) {
        applyEffectFn({ id: IdActionsEnum.PORTEE, value: 3, params: [] });
      } else if( id === IdSublimationEnum.VOLONTE_DE_FER) {
        applyEffectFn({ id: IdActionsEnum.VOLONTE, value: 20, params: [] });
      }
    });
  }

  private applyNerfConcentrationElementaire(recapValue: RecapStats[], applyEffectFn: (effect: RecapStats) => void): void {
    const elemFeu = recapValue.find(rs => rs.id === IdActionsEnum.MAITRISES_FEU)?.value ?? 0;
    const elemEau = recapValue.find(rs => rs.id === IdActionsEnum.MAITRISES_EAU)?.value ?? 0;
    const elemTerre = recapValue.find(rs => rs.id === IdActionsEnum.MAITRISES_TERRE)?.value ?? 0;
    const elemAir = recapValue.find(rs => rs.id === IdActionsEnum.MAITRISES_AIR)?.value ?? 0;
    const elemMaitriseList: {id: number, value: number}[] = [
      { id: IdActionsEnum.MAITRISES_FEU, value: elemFeu },
      { id: IdActionsEnum.MAITRISES_EAU, value: elemEau },
      { id: IdActionsEnum.MAITRISES_TERRE, value: elemTerre },
      { id: IdActionsEnum.MAITRISES_AIR, value: elemAir },
    ];
    const sortedMaitrise = elemMaitriseList.sort((a, b) => b.value - a.value);
    const highestMaitriseValue = sortedMaitrise[0].id;
    if(IdActionsEnum.MAITRISES_FEU !== highestMaitriseValue) {
      applyEffectFn({ id: IdActionsEnum.MAITRISES_FEU, value: Math.floor(0.3 * -elemFeu), params: [] });
    }
    if(IdActionsEnum.MAITRISES_EAU !== highestMaitriseValue) {
      applyEffectFn({ id: IdActionsEnum.MAITRISES_EAU, value: Math.floor(0.3 * -elemEau), params: [] });
    }
    if(IdActionsEnum.MAITRISES_TERRE !== highestMaitriseValue) {
      applyEffectFn({ id: IdActionsEnum.MAITRISES_TERRE, value: Math.floor(0.3 * -elemTerre), params: [] });
    }
    if(IdActionsEnum.MAITRISES_AIR !== highestMaitriseValue) {
      applyEffectFn({ id: IdActionsEnum.MAITRISES_AIR, value: Math.floor(0.3 * -elemAir), params: [] });
    }
  }
}
