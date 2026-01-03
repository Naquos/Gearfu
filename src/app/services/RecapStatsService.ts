import { inject, Injectable } from "@angular/core";
import { RecapStats } from "../models/data/recap-stats";
import { IdActionsEnum } from "../models/enum/idActionsEnum";
import { ParameterMajorActionEnum } from "../models/enum/parameterMajorActionEnum";
import { tap, map, BehaviorSubject, takeUntil, combineLatest } from "rxjs";
import { ActionService } from "./data/actionService";
import { ItemChooseService } from "./itemChooseService";
import { EquipEffects } from "../models/data/equipEffects";
import { Item } from "../models/data/item";
import { AbstractDestroyService } from "./abstract/abstractDestroyService";
import { AptitudesFormService } from "./form/aptitudesFormService";
import { LevelFormService } from "./form/levelFormService";
import { ClasseFormService } from "./form/classeFormService";
import { ClassIdEnum } from "../models/enum/classIdEnum";
import { SortFormService } from "./form/sortFormService";
import { SortIdEnum } from "../models/enum/sortIdEnum";
import { ChasseFormService } from "./form/chasseFormService";
import { IdSublimationEnum } from "../models/enum/idSublimationEnum";
import { BonusFormService } from "./form/bonusFormService";
import { AptitudesManualFormService } from "./form/aptitudesManualFormServices";
import { CodeAptitudesService } from "./codeAptitudesService";

@Injectable({ providedIn: 'root' })
export class RecapStatsService extends AbstractDestroyService {
  private readonly actionService = inject(ActionService);
  private readonly itemChooseService = inject(ItemChooseService);
  private readonly aptitudesFormService = inject(AptitudesFormService);
  private readonly levelFormService = inject(LevelFormService);
  private readonly classeFormService = inject(ClasseFormService);
  private readonly sortFormService = inject(SortFormService);
  private readonly chasseFormService = inject(ChasseFormService);
  private readonly bonusFormService = inject(BonusFormService);
  private readonly aptitudesManualFormService = inject(AptitudesManualFormService);
  private readonly codeAptitudesService = inject(CodeAptitudesService);

  private readonly maitrisesSecondairesList: IdActionsEnum[] = [
    IdActionsEnum.MAITRISES_CRITIQUES,
    IdActionsEnum.MAITRISES_DOS,
    IdActionsEnum.MAITRISES_SOIN,
    IdActionsEnum.MAITRISES_BERZERK,
    IdActionsEnum.MAITRISES_MELEE,
    IdActionsEnum.MAITRISES_DISTANCES
  ];

  private readonly naturalEffects: RecapStats[] = [
    { id: IdActionsEnum.PA, value: 6, params: [] },
    { id: IdActionsEnum.PM, value: 3, params: [] },
    { id: IdActionsEnum.BOOST_PW, value: 6, params: [] },
    { id: IdActionsEnum.COUP_CRITIQUE, value: 3, params: [] },
    { id: IdActionsEnum.CONTROLE, value: 1, params: [] },
  ];

  private readonly initialEffectList: RecapStats[] = [
    { id: IdActionsEnum.MAITRISES_FEU, value: 0, params: [] },
    { id: IdActionsEnum.MAITRISES_EAU, value: 0, params: [] },
    { id: IdActionsEnum.MAITRISES_TERRE, value: 0, params: [] },
    { id: IdActionsEnum.MAITRISES_AIR, value: 0, params: [] },

    { id: IdActionsEnum.MAITRISES_MELEE, value: 0, params: [] },
    { id: IdActionsEnum.MAITRISES_DISTANCES, value: 0, params: [] },
    { id: IdActionsEnum.MAITRISES_CRITIQUES, value: 0, params: [] },
    { id: IdActionsEnum.MAITRISES_DOS, value: 0, params: [] },
    { id: IdActionsEnum.MAITRISES_SOIN, value: 0, params: [] },
    { id: IdActionsEnum.MAITRISES_BERZERK, value: 0, params: [] },


    { id: IdActionsEnum.COUP_CRITIQUE, value: 0, params: [] },
    { id: IdActionsEnum.PARADE, value: 0, params: [] },
    { id: IdActionsEnum.RESISTANCES_DOS, value: 0, params: [] },
    { id: IdActionsEnum.RESISTANCES_CRITIQUES, value: 0, params: [] },
    { id: IdActionsEnum.CONTROLE, value: 0, params: [] },
    { id: IdActionsEnum.DI, value: 0, params: [] },
    { id: IdActionsEnum.DI_INDIRECT, value: 0, params: [] },
    { id: IdActionsEnum.PROSPECTION, value: 0, params: [] },


    // ============ COUPURE GRAPHIQUE ============
    { id: IdActionsEnum.RESISTANCES_FEU, value: 0, params: [] },
    { id: IdActionsEnum.RESISTANCES_EAU, value: 0, params: [] },
    { id: IdActionsEnum.RESISTANCES_TERRE, value: 0, params: [] },
    { id: IdActionsEnum.RESISTANCES_AIR, value: 0, params: [] },


    { id: IdActionsEnum.PA, value: 0, params: [] },
    { id: IdActionsEnum.PM, value: 0, params: [] },
    { id: IdActionsEnum.BOOST_PW, value: 0, params: [] },
    { id: IdActionsEnum.PORTEE, value: 0, params: [] },
    { id: IdActionsEnum.POINT_DE_VIE, value: 0, params: [] },
    { id: IdActionsEnum.ARMURE_DONNEE_RECUE, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, value: 0, params: [] },
    { id: IdActionsEnum.ARMURE_DONNEE_RECUE, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, value: 0, params: [] },


    { id: IdActionsEnum.ESQUIVE, value: 0, params: [] },
    { id: IdActionsEnum.TACLE, value: 0, params: [] },
    { id: IdActionsEnum.VOLONTE, value: 0, params: [] },
    { id: IdActionsEnum.INITIATIVE, value: 0, params: [] },
    { id: IdActionsEnum.SOINS_REALISE, value: 0, params: [] },
    { id: IdActionsEnum.PERCENTAGE_PV, value: 0, params: [] },
    { id: IdActionsEnum.SAGESSE, value: 0, params: [] },
  ];

  private readonly recap = new BehaviorSubject<RecapStats[]>([...this.initialEffectList]);
  public readonly recap$ = this.recap.asObservable();

  private readonly maitrisesTotal = new BehaviorSubject<number>(0);
  public readonly maitrisesTotal$ = this.maitrisesTotal.asObservable();

  private readonly resistancesTotal = new BehaviorSubject<number>(0);
  public readonly resistancesTotal$ = this.resistancesTotal.asObservable();

  constructor() {
    super();
    this.initializeListeners();
  }

  private initializeListeners(): void {
    combineLatest([
      this.itemChooseService.listItem$,
      this.aptitudesFormService.recapStat$,
      this.levelFormService.level$,
      this.chasseFormService.recapChassesEffect$,
      this.chasseFormService.sublimationsIdToLevel$,
      this.bonusFormService.recapStats$,
      this.aptitudesManualFormService.recapStat$,
      this.classeFormService.classe$,
      this.sortFormService.sortPassifs$,
      this.codeAptitudesService.code$,
    ]).pipe(
      takeUntil(this.destroy$),
      tap(() => this.resetEffects()),
      map(([items, aptitudes, level, chasses, sublimationsIdToLevel, bonus, aptitudesManual]) => {
        const extract = this.extractEquipEffects(items);
        const recapStat = this.mapToRecapStats(extract);
        recapStat.push(...aptitudes, ...chasses, ...bonus, ...aptitudesManual);
        return {recapStat, level, sublimationsIdToLevel};
      }),
      tap(() => this.applyNatifEffects()),
      tap(() => this.applyEffectByClass()),
      tap((x => x.recapStat.forEach(effect => this.applyEffect(effect)))),
      tap(() => this.applyEffectPassif()),
      tap(x => this.applyEffectSublimation(x.sublimationsIdToLevel)),
      tap(() => this.applyPdv()),
      tap(() => this.emitEffects()),
    ).subscribe();
  }

  private applyPdv(): void {
    const recapPdv = this.recap.value.find(rs => rs.id === IdActionsEnum.POINT_DE_VIE);
    const recapPercentagePdv = this.recap.value.find(rs => rs.id === IdActionsEnum.PERCENTAGE_PV);
    if (recapPdv && recapPercentagePdv) {
      const level = this.levelFormService.getValue();
      const basePdv = 50 + level * 10;
      recapPdv.value = Math.floor((basePdv + recapPdv.value) * (1 + (recapPercentagePdv.value) / 100));
    }
  }

  private allMaitrisesSecondairesNull(): boolean {
    return this.maitrisesSecondairesList.every(id => {
      const recap = this.recap.value.find(rs => rs.id === id);
      return recap ? recap.value <= 0 : true;
    });
  }

  private applyEffectSublimation(sublimationsIdToLevel: Map<number, number>): void {
    const level = this.levelFormService.getValue();
    sublimationsIdToLevel.forEach((levelSubli, id) => {
      if(id === IdSublimationEnum.ABANDON && this.allMaitrisesSecondairesNull()) {
        this.applyEffect({ id: IdActionsEnum.PORTEE, value: Math.floor(0.5 * levelSubli), params: [] });
        this.applyEffect({ id: IdActionsEnum.BOOST_PW, value: Math.floor(0.5 * levelSubli), params: [] });
        this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: levelSubli * -5, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
        this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: levelSubli * -5, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
      } else if(id === IdSublimationEnum.ACCUMULATION) {
        this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: -20, params: [] });
      } else if(id === IdSublimationEnum.AGILITE_VITALE) {
        this.applyEffect({ id: IdActionsEnum.PM, value: Math.floor(0.5 * levelSubli), params: [] });
      } else if(id === IdSublimationEnum.ALLOCENTRISME) {
        this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: levelSubli * 5, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
      } else if(id === IdSublimationEnum.AMBITION && this.allMaitrisesSecondairesNull()) {
        this.applyEffect({ id: IdActionsEnum.COUP_CRITIQUE, value: levelSubli * 5, params: [] });
      } else if(id === IdSublimationEnum.ARME_EMPOISONNEE) {
        this.applyEffect({ id: IdActionsEnum.DI, value: -20, params: [] });
      } else if(id === IdSublimationEnum.ARMURE_LOURDE) {
        this.applyEffect({ id: IdActionsEnum.DI, value: 10, params: [] });
        this.applyEffect({ id: IdActionsEnum.PM, value: -3 + levelSubli, params: [] });
      } else if(id === IdSublimationEnum.BOUCLIER_CRITIQUE) {
        this.applyEffect({ id: IdActionsEnum.RESISTANCES_CRITIQUES, value: levelSubli * 5, params: [] });
      } else if(id === IdSublimationEnum.BOUCLIER_DORSAL) {
        this.applyEffect({ id: IdActionsEnum.RESISTANCES_DOS, value: levelSubli * 5, params: [] });
      } else if(id === IdSublimationEnum.CARAPACE) {
        this.applyEffect({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: 75, params: [] });
        this.applyEffect({ id: IdActionsEnum.PA, value: -3 + levelSubli, params: [] });
      } else if(id === IdSublimationEnum.CARNAGE) {
        this.applyEffect({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: Math.floor(0.15 * level * levelSubli), params: [] });
      } else if(id === IdSublimationEnum.CICATRISATION) {
        this.applyEffect({ id: IdActionsEnum.PERCENTAGE_PV, value: levelSubli * 5, params: [] });
      } else if(id === IdSublimationEnum.CLAMEUR) {
        this.applyEffect({ id: IdActionsEnum.VOLONTE, value: -20, params: []});
      } else if(id === IdSublimationEnum.COMBAT_RAPPROCHE) {
        this.applyEffect({ id: IdActionsEnum.PORTEE, value: -1, params: [] });
        this.applyEffect({ id: IdActionsEnum.TACLE, value: Math.floor(0.5 * level * levelSubli), params: [] });
        this.applyEffect({ id: IdActionsEnum.ESQUIVE, value: Math.floor(0.5 * level * levelSubli), params: [] });
      } else if(id === IdSublimationEnum.CONSERVATION) {
        this.applyEffect({ id: IdActionsEnum.PARADE, value: 10 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.CRITIQUE_BERSERK) {
        this.applyEffect({ id: IdActionsEnum.COUP_CRITIQUE, value: 5 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.DEROBADE_CONTINUE) {
        this.applyEffect({ id: IdActionsEnum.PARADE, value: 3 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.DEVASTATION) {
        this.applyEffect({ id: IdActionsEnum.PW, value: 1, params: [] });
        this.applyEffect({ id: IdActionsEnum.VOLONTE, value: -40 + 10 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.ECAILLES_DE_LUNE) {
        this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: 3 * levelSubli, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
      } else if(id === IdSublimationEnum.ENVELOPPE_ROCHEUSE) {
        this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: 5 * levelSubli, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
      } else if(id === IdSublimationEnum.ESQUIVE_BERSERK) {
        this.applyEffect({ id: IdActionsEnum.ESQUIVE, value: Math.floor(0.5 * level * levelSubli), params: [] });
      } else if(id === IdSublimationEnum.EVASION) {
        this.applyEffect({ id: IdActionsEnum.ESQUIVE, value:  Math.floor(0.5 * level * levelSubli), params: [] });
      } else if(id === IdSublimationEnum.EXPERT_DES_ARMES_LEGERES) {
        this.applyEffect({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: Math.floor(0.25 * level * levelSubli), params: [] });
      } else if(id === IdSublimationEnum.EXPERT_DES_PARADES) {
        this.applyEffect({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: -50, params: [] });
      } else if(id === IdSublimationEnum.FOCALISATION) {
        this.applyEffect({ id: IdActionsEnum.DI, value: -15, params: [] });
      } else if(id === IdSublimationEnum.FORCE_LEGERE) {
        this.applyEffect({ id: IdActionsEnum.DI, value: 3 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.FUREUR) {
        this.applyEffect({ id: IdActionsEnum.DI, value: -15, params: [] });
      } else if(id === IdSublimationEnum.INFLUENCE_DU_WAKFU) {
        this.applyEffect({ id: IdActionsEnum.COUP_CRITIQUE, value: 10 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.INFLUENCE) {
        this.applyEffect({ id: IdActionsEnum.COUP_CRITIQUE, value: 3 * levelSubli, params: []});
      } else if(id === IdSublimationEnum.INFLUENCE_VITALE) {
        this.applyEffect({ id: IdActionsEnum.COUP_CRITIQUE, value: 4 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.INTERCEPTION) {
        this.applyEffect({ id: IdActionsEnum.TACLE, value: Math.floor(0.5 * level), params: [] });
      } else if(id === IdSublimationEnum.NEUTRALITE && this.allMaitrisesSecondairesNull()) {
        this.applyEffect({ id: IdActionsEnum.DI, value: 8 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.PARADE_BERSERK) {
        this.applyEffect({ id: IdActionsEnum.PARADE, value: 5 * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.POIDS_PLUME) {
        const pm = this.recap.value.find(rs => rs.id === IdActionsEnum.PM)?.value ?? 0;
        const nbPm = Math.max(0, pm - 4);
        this.applyEffect({ id: IdActionsEnum.ESQUIVE, value: 2 * nbPm * levelSubli, params: [] });
      } else if(id === IdSublimationEnum.PRETENTION) {
        this.applyEffect({ id: IdActionsEnum.PARADE, value: 5 * levelSubli, params: [] });
      } else if (id === IdSublimationEnum.PUISSANCE_BRUTE) {
        this.applyEffect({ id: IdActionsEnum.BOOST_PW, value: -1 * levelSubli, params: [] });
      } else if (id === IdSublimationEnum.RAVAGE) {
        this.applyEffect({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: Math.floor(0.05 * levelSubli * level), params: [] });
        this.applyEffect({ id: IdActionsEnum.MAITRISES_BERZERK, value: Math.floor(0.05 * levelSubli * level), params: [] });
        this.applyEffect({ id: IdActionsEnum.MAITRISES_CRITIQUES, value: Math.floor(0.05 * levelSubli * level), params: [] });
        this.applyEffect({ id: IdActionsEnum.MAITRISES_DOS, value: Math.floor(0.05 * levelSubli * level), params: [] });
        this.applyEffect({ id: IdActionsEnum.MAITRISES_MELEE, value: Math.floor(0.05 * levelSubli * level), params: [] });
        this.applyEffect({ id: IdActionsEnum.MAITRISES_DISTANCES, value: Math.floor(0.05 * levelSubli * level), params: [] });
        this.applyEffect({ id: IdActionsEnum.MAITRISES_SOIN, value: Math.floor(0.05 * levelSubli * level), params: [] });
        this.applyEffect({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: 3 * levelSubli, params: [] });
      } else if (id === IdSublimationEnum.REPROBATION) {
        this.applyEffect({ id: IdActionsEnum.VOLONTE, value: -20, params: [] });
      } else if (id === IdSublimationEnum.REVIGORATION) {
        this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: -10, params: [] });
      } else if (id === IdSublimationEnum.RUINE) {
        this.applyEffect({ id: IdActionsEnum.DI_INDIRECT, value: 5 * levelSubli, params: [] });
      } else if (id === IdSublimationEnum.SAUVEGARDE_DU_WAKFU) {
        this.applyEffect({ id: IdActionsEnum.BOOST_PW, value: -1, params: [] });
      } else if (id === IdSublimationEnum.SECRET_DE_LA_VIE) {
        const maitriseSoin = this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_SOIN)?.value ?? 0;
        this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: - maitriseSoin, params: [] });
        this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: 10, params: [] });
      } else if( id === IdSublimationEnum.TACLE_BERSERK) {
        this.applyEffect({ id: IdActionsEnum.TACLE, value: 50 * levelSubli * level, params: [] });
      } else if( id === IdSublimationEnum.THEORIE_DE_LA_MATIERE) {
        this.applyEffect({ id: IdActionsEnum.COUP_CRITIQUE, value: 50 * levelSubli, params: [] });
        this.applyEffect({ id: IdActionsEnum.DI, value: -50, params: [] });
        this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: -50, params: [] });
      } else if( id === IdSublimationEnum.TOPOLOGIE) {
        const esquive = this.recap.value.find(rs => rs.id === IdActionsEnum.ESQUIVE)?.value ?? 0;
        this.applyEffect({ id: IdActionsEnum.ESQUIVE, value: -esquive, params: []  });
      } else if (id === IdSublimationEnum.VELOCITE) {
        this.applyEffect({ id: IdActionsEnum.PM, value: 1, params: []});
        this.applyEffect({ id: IdActionsEnum.DI, value: -30 + 10 * levelSubli, params: []});
      } else if (id === IdSublimationEnum.VISIBILITE) {
        this.applyEffect({ id: IdActionsEnum.PORTEE, value: 1, params: []});
        this.applyEffect({ id: IdActionsEnum.ESQUIVE, value: -450 + 150 * levelSubli, params: []});
        this.applyEffect({ id: IdActionsEnum.TACLE, value: -450 + 150 * levelSubli, params: []});
      } else if (id === IdSublimationEnum.ABNEGATION) {
        this.applyEffect({ id: IdActionsEnum.DI, value: -15, params: [] });
        this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: 30, params: [] });
      } else if (id === IdSublimationEnum.ANATOMIE) {
        this.applyEffect({ id: IdActionsEnum.DI, value: -20, params: []  });
      } else if (id === IdSublimationEnum.APLOMB_NATUREL) {
        this.applyEffect({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: 50, params: [] });
      } else if (id === IdSublimationEnum.ARROGANCE) {
        this.applyEffect({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: -100, params: [] });
      } else if (id === IdSublimationEnum.ASSIMILATION) {
        this.applyEffect({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: -50, params: [] });
      } else if (id === IdSublimationEnum.CHAOS) {
        const elemFeu = this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_FEU)?.value ?? 0;
        this.applyEffect({ id: IdActionsEnum.MAITRISES_FEU, value: -elemFeu, params: [] });
        const elemEau = this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_EAU)?.value ?? 0;
        this.applyEffect({ id: IdActionsEnum.MAITRISES_EAU, value: -elemEau, params: [] });
        const elemTerre = this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_TERRE)?.value ?? 0;
        this.applyEffect({ id: IdActionsEnum.MAITRISES_TERRE, value: -elemTerre, params: [] });
        const elemAir = this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_AIR)?.value ?? 0;
        this.applyEffect({ id: IdActionsEnum.MAITRISES_AIR, value: -elemAir, params: [] });

        this.applyEffect({ id: IdActionsEnum.DI, value: 20, params: [] });
        this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: 20, params: [] });
      } else if (id === IdSublimationEnum.CONCENTRATION_ELEMENTAIRE) {
        this.applyEffect({ id: IdActionsEnum.DI, value: 20, params: [] });
        this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: 20, params: [] });
        this.applyNerfConcentrationElementaire();
      } else if (id === IdSublimationEnum.CONSTANCE) {
        this.applyEffect({ id: IdActionsEnum.DI, value: 20, params: [] });
        this.applyEffect({ id: IdActionsEnum.COUP_CRITIQUE, value: 50, params: [] });
      } else if (id === IdSublimationEnum.CONSTANCE_II) {
        this.applyEffect({ id: IdActionsEnum.DI_INDIRECT, value: 40, params: [] });
      } else if (id === IdSublimationEnum.CONTROLE_DE_L_ESPACE_II) {
        this.applyEffect({ id: IdActionsEnum.DI_INDIRECT, value: 30, params: [] });
      } else if (id === IdSublimationEnum.DENOUEMENT) {
        const maitriseCrit = this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_CRITIQUES)?.value ?? 0;
        this.applyEffect({ id: IdActionsEnum.MAITRISES_CRITIQUES, value: -maitriseCrit, params: [] });
        this.applyEffect({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: maitriseCrit, params: [] });
      } else if (id === IdSublimationEnum.ELEMENTALISME) {
        this.applyEffect({ id: IdActionsEnum.DI, value: 20, params: [] });
        this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: 20, params: [] });
      } else if (id === IdSublimationEnum.ENGAGEMENT) {
        const maitriseSoin = this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_SOIN)?.value ?? 0;
        this.applyEffect({ id: IdActionsEnum.MAITRISES_SOIN, value: -maitriseSoin, params: [] });
        this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: 30, params: [] });
      } else if (id === IdSublimationEnum.EXCES) {
        this.applyEffect({ id: IdActionsEnum.DI, value: -10, params: [] });
      } else if (id === IdSublimationEnum.EXCES_II) {
        this.applyEffect({ id: IdActionsEnum.DI, value: -10, params: []  });
      } else if (id === IdSublimationEnum.FORCE_HERCULEENNE) {
        this.applyEffect({ id: IdActionsEnum.ESQUIVE, value: Math.floor(2.5 * level), params: [] });
      } else if (id === IdSublimationEnum.FURIE) {
        const esquive = this.recap.value.find(rs => rs.id === IdActionsEnum.ESQUIVE)?.value ?? 0;
        if(esquive > level) {
          this.applyEffect({ id: IdActionsEnum.TACLE, value: level , params: [] });
        }
      } else if( id === IdSublimationEnum.FURIE_II ) {
        this.applyEffect({ id: IdActionsEnum.PORTEE, value: 1, params: [] });
      } else if(id === IdSublimationEnum.INFLEXIBILITE) {
        this.applyEffect({ id: IdActionsEnum.DI, value: 15, params: [] });
        if(level >= 100) {
          this.applyEffect({ id: IdActionsEnum.DI, value: 10, params: [] });
        }
      } else if (id === IdSublimationEnum.MANIEMENT_BOUCLIER) {
        const po = this.recap.value.find(rs => rs.id === IdActionsEnum.PORTEE)?.value ?? 0;
        if(po > 0) {
          this.applyEffect({ id: IdActionsEnum.PORTEE, value: -po, params: [] });
        }
        this.applyEffect({ id: IdActionsEnum.PM, value: 1, params: [] });
      } else if (id === IdSublimationEnum.MANIEMENT_DEUX_MAINS) {
        this.applyEffect({ id: IdActionsEnum.PM, value: -2, params: [] });
        this.applyEffect({ id: IdActionsEnum.PA, value: 2, params: [] });
      } else if(id === IdSublimationEnum.MESURE) {
        this.applyEffect({ id: IdActionsEnum.COUP_CRITIQUE, value: 10, params: [] });
      } else if(id === IdSublimationEnum.MESURE_II) {
        this.applyEffect({ id: IdActionsEnum.PARADE, value: 20, params: [] });
        this.applyEffect({ id: IdActionsEnum.VOLONTE, value: 10, params: [] });
      } else if(id === IdSublimationEnum.PACTE_WAKFU) {
        this.applyEffect({ id: IdActionsEnum.VOLONTE, value: 10, params: [] });
        this.applyEffect({ id: IdActionsEnum.PARADE, value: 15, params: [] });
      } else if(id === IdSublimationEnum.PILLIER) {
        this.applyEffect({ id: IdActionsEnum.PERCENTAGE_PV, value: 30, params: [] });
        this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -50, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
      } else if(id === IdSublimationEnum.PILLIER_II) {
        this.applyEffect({ id: IdActionsEnum.PERCENTAGE_PV, value: -30, params: [] });
        this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, value: 30, params: [] });
      } else if (id === IdSublimationEnum.PRECISION_CHIRURGICALE) {
        this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: 20, params: [] });
        this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: 15, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
      } else if( id === IdSublimationEnum.RENAISSANCE) {
        this.applyEffect({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: -50, params: [] } );
      } else if( id === IdSublimationEnum.SANTE_DE_FER) {
        this.applyEffect({ id: IdActionsEnum.PERCENTAGE_PV, value: -30, params: [] } );
        this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, value: 30, params: [] } );
      } else if( id === IdSublimationEnum.SCIENCE_DU_PLACEMENT) {
        this.applyEffect({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: 50, params: [] } );
        this.applyEffect({ id: IdActionsEnum.RESISTANCES_DOS, value: -200, params: [] } );
      } else if( id === IdSublimationEnum.SENTINELLE) {
        this.applyEffect({ id: IdActionsEnum.PORTEE, value: 3, params: [] });
      } else if( id === IdSublimationEnum.VOLONTE_DE_FER) {
        this.applyEffect({ id: IdActionsEnum.VOLONTE, value: 20, params: [] });
      }
    });
  }

  private applyNerfConcentrationElementaire(): void {
    const elemFeu = this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_FEU)?.value ?? 0;
    const elemEau = this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_EAU)?.value ?? 0;
    const elemTerre = this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_TERRE)?.value ?? 0;
    const elemAir = this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_AIR)?.value ?? 0;
    const elemMaitriseList: {id: number, value: number}[] = [
      { id: IdActionsEnum.MAITRISES_FEU, value: elemFeu },
      { id: IdActionsEnum.MAITRISES_EAU, value: elemEau },
      { id: IdActionsEnum.MAITRISES_TERRE, value: elemTerre },
      { id: IdActionsEnum.MAITRISES_AIR, value: elemAir },
    ];
    const sortedMaitrise = elemMaitriseList.sort((a, b) => b.value - a.value);
    const highestMaitriseValue = sortedMaitrise[0].id;
    if(IdActionsEnum.MAITRISES_FEU !== highestMaitriseValue) {
      this.applyEffect({ id: IdActionsEnum.MAITRISES_FEU, value: Math.floor(0.3 * -elemFeu), params: [] });
    }
    if(IdActionsEnum.MAITRISES_EAU !== highestMaitriseValue) {
      this.applyEffect({ id: IdActionsEnum.MAITRISES_EAU, value: Math.floor(0.3 * -elemEau), params: [] });
    }
    if(IdActionsEnum.MAITRISES_TERRE !== highestMaitriseValue) {
      this.applyEffect({ id: IdActionsEnum.MAITRISES_TERRE, value: Math.floor(0.3 * -elemTerre), params: [] });
    }
    if(IdActionsEnum.MAITRISES_AIR !== highestMaitriseValue) {
      this.applyEffect({ id: IdActionsEnum.MAITRISES_AIR, value: Math.floor(0.3 * -elemAir), params: [] });
    }
  }

  private applyEffectPassif(): void {
    this.applyEffectPassifGenerique();
    this.applyEffectPassifClasse();
  }

  private applyEffectPassifClasse(): void {
    const classId = this.classeFormService.getValue();
    switch (classId) {
      case ClassIdEnum.Feca:
        this.applyEffectPassifFeca();
        break;
      case ClassIdEnum.Osamodas:
        this.applyEffectPassifOsamodas();
        break;
      case ClassIdEnum.Sram:
        this.applyEffectPassifSram();
        break;
      case ClassIdEnum.Xelor:
        this.applyEffectPassifXelor();
        break;
      case ClassIdEnum.Eniripsa:
        this.applyEffectPassifEniripsa();
        break;
      case ClassIdEnum.Iop:
        this.applyEffectPassifIop();
        break;
      case ClassIdEnum.Cra:
        this.applyEffectPassifCra();
        break;
      case ClassIdEnum.Sadida:
        this.applyEffectPassifSadida();
        break;
      case ClassIdEnum.Sacrieur:
        this.applyEffectPassifSacrieur();
        break;
      case ClassIdEnum.Pandawa:
        this.applyEffectPassifPandawa();
        break;
      case ClassIdEnum.Zobal:
        this.applyEffectPassifZobal();
        break;
      case ClassIdEnum.Ouginak:
        this.applyEffectPassifOuginak();
        break;
      case ClassIdEnum.Steamer:
        this.applyEffectPassifSteamer();
        break;
      case ClassIdEnum.Eliotrope:
        this.applyEffectPassifEliotrope();
        break;
      case ClassIdEnum.Huppermage:
        this.applyEffectPassifHuppermage();
        break;
    }
  }

  private applyEffectPassifHuppermage(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();
    if(sortPassifsIds.find(x => x === SortIdEnum.CHAINE_DE_LA_NATURE)) { // ABSORPTION QUADRAMENTALE
      this.applyEffect({ id: IdActionsEnum.VOLONTE, value: 20, params: [] });
    }
  }

  private applyEffectPassifEliotrope(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();

    if(sortPassifsIds.find(x => x === SortIdEnum.EPEE_DU_DEBUT)) {
      this.applyEffect({ id: IdActionsEnum.PORTEE, value: -1, params: [] });
    }
  }

  private applyEffectPassifSteamer(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();
    const level = this.levelFormService.getValue();

    if(sortPassifsIds.find(x => x === SortIdEnum.MECANIQUE_AVANCEE)) {
      this.applyEffect({ id: IdActionsEnum.DI_INDIRECT, value: -30, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.PARTAGE_ANIMAL)) { // REVETEMENT_A_TOUTE_EPREUVE
      this.applyEffect({ id: IdActionsEnum.POINT_DE_VIE, value: 6 * level, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.ALLIAGE_LEGER)) {
      this.applyEffect({ id: IdActionsEnum.PM, value: -1, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.ASSISTANCE_TELLURIQUE)) {
      this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -30, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.STRATEGIE_ROBOTIQUE)) {
      this.applyEffect({ id: IdActionsEnum.DI_INDIRECT, value: -20, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.LA_MEILLEURE_DEFENSE_EST_L_ATTAQUE)) {
      this.applyEffect({ id: IdActionsEnum.PARADE, value: 50, params: [] });
    }
  }

  private applyEffectPassifOuginak(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();
    const level = this.levelFormService.getValue();

    if(sortPassifsIds.find(x => x === SortIdEnum.EPUISEMENT)) {
      this.applyEffect({ id: IdActionsEnum.DI_INDIRECT, value: 50, params: [] });
      this.applyEffect({ id: IdActionsEnum.PORTEE, value: -2, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.CROCS_FUTES)) {
      this.applyEffect({ id: IdActionsEnum.PARADE, value: 20, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.PISTAGE)) {
      this.applyEffect({ id: IdActionsEnum.PM, value: 1, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.ART_CANIN)) {
      this.applyEffect({ id: IdActionsEnum.DI_INDIRECT, value: -15, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.ENERGIE_CANINE)) {
      this.applyEffect({ id: IdActionsEnum.BOOST_PW, value: 3, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.FUREUR)) {
      this.applyEffect({ id: IdActionsEnum.BOOST_PW, value: -1, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.PILLAGE)) {
      this.applyEffect({ id: IdActionsEnum.DI, value: -10, params: [] });
      this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: 30, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
      this.applyEffect({ id: IdActionsEnum.POINT_DE_VIE, value: 4 * level, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.ARDEUR)) {
      this.applyEffect({ id: IdActionsEnum.PM, value: -1, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.DIGESTION)) {
      this.applyEffect({ id: IdActionsEnum.DI_INDIRECT, value: -15, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.CHAINE_DE_LA_NATURE)) { // ACHARNE
      this.applyEffect({ id: IdActionsEnum.VOLONTE, value: 20, params: [] });
      this.applyEffect({ id: IdActionsEnum.DI, value: -10, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.CANIN_OS)) {
      this.applyEffect({ id: IdActionsEnum.TACLE, value: 3 * level, params: [] });
    }
  }

  private applyEffectPassifZobal(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();
    const level = this.levelFormService.getValue();

    if(sortPassifsIds.find(x => x === SortIdEnum.REGARD_MASQUE)) {
      this.applyEffect({ id: IdActionsEnum.PM, value: 1, params: [] });
    }
    
    if(sortPassifsIds.find(x => x === SortIdEnum.JEU_DE_JAMBES)) {
      this.applyEffect({ id: IdActionsEnum.ESQUIVE, value: 2 * level, params: [] });
    }

    if (sortPassifsIds.find(x => x === SortIdEnum.LE_IOP_DE_WAZEMMES)) { // ART DE LA FUITE
      const esquive = this.recap.value.find(rs => rs.id === IdActionsEnum.ESQUIVE)?.value ?? 0;
      if(esquive >= 0) {
        const value = Math.min(Math.floor(esquive / 2), 2*level);
        this.applyEffect({ id: IdActionsEnum.MAITRISES_DISTANCES, value: value, params: [] });
      }
    }
    
    if(sortPassifsIds.find(x => x === SortIdEnum.EROSION)) {
      this.applyEffect({ id: IdActionsEnum.DI, value: -25, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.BRUTE)) {
      this.applyEffect({ id: IdActionsEnum.DI, value: 25, params: [] });
      this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -40, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
      this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -40, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.ANCRE)) {
      const tacle = this.recap.value.find(rs => rs.id === IdActionsEnum.TACLE)?.value ?? 0;
      if(tacle >= 0) {
        this.applyEffect({ id: IdActionsEnum.TACLE, value: tacle, params: [] });
      }
      this.applyEffect({ id: IdActionsEnum.PM, value: -1, params: [] });
    }
    
    if (sortPassifsIds.find(x => x === SortIdEnum.ART_DE_LA_VENGEANCE)) { // ART DE LA FUITE
      const tacle = this.recap.value.find(rs => rs.id === IdActionsEnum.TACLE)?.value ?? 0;
      if(tacle >= 0) {
        const value = Math.min(Math.floor(tacle / 2), 2*level);
        this.applyEffect({ id: IdActionsEnum.MAITRISES_MELEE, value: value, params: [] });
      }
    }

    if(sortPassifsIds.find(x => x === SortIdEnum.POUSSEES_D_ENTRAVE)) {
      this.applyEffect({ id: IdActionsEnum.VOLONTE, value: 10, params: [] });
    }
  }

  private applyEffectPassifPandawa(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();
    if(sortPassifsIds.find(x => x === SortIdEnum.COCKTAIL)) {
      this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: 20, params: [] });
      this.applyEffect({ id: IdActionsEnum.DI, value: -10, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.CYANOSE)) {
      this.applyEffect({ id: IdActionsEnum.DI, value: 15, params: [] });
      this.applyEffect({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: -50, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.PANDEMIE)) {
      this.applyEffect({ id: IdActionsEnum.DI, value: 10, params: [] });
    }
  }

  private applyEffectPassifSacrieur(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();
    const level = this.levelFormService.getValue();

    if(sortPassifsIds.find(x => x === SortIdEnum.COEUR_DE_SACRIEUR)) {
      this.applyEffect({ id: IdActionsEnum.PORTEE, value: -2, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.CIRCULATION_SANGUINE)) {
      this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -50, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.MOBILITE)) {
      const tacle = this.recap.value.find(rs => rs.id === IdActionsEnum.TACLE)?.value ?? 0;
      if(tacle >= 0) {
        this.applyEffect({ id: IdActionsEnum.TACLE, value: -tacle, params: [] });
      }
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.SANG_TATOUE)) {
      this.applyEffect({ id: IdActionsEnum.POINT_DE_VIE, value: 8 * level, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.PACTE_DE_WAKFU)) {
      this.applyEffect({ id: IdActionsEnum.POINT_DE_VIE, value: 4 * level, params: [] });
    }
  }

  private applyEffectPassifSadida(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();
    if(sortPassifsIds.find(x => x === SortIdEnum.CHAINE_DE_LA_NATURE)) {
      this.applyEffect({ id: IdActionsEnum.VOLONTE, value: 20, params: [] });
    }
  }

  private applyEffectPassifCra(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();
    if(sortPassifsIds.find(x => x === SortIdEnum.ECLAIREUR_INTOUCHABLE)) {
      const esquive = this.recap.value.find(rs => rs.id === IdActionsEnum.ESQUIVE)?.value ?? 0;
      this.applyEffect({ id: IdActionsEnum.ESQUIVE, value: -esquive, params: [] });
      this.applyEffect({ id: IdActionsEnum.VOLONTE, value: 20, params: [] });
    }
  }

  private applyEffectPassifIop(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();
    const level = this.levelFormService.getValue();

    if(sortPassifsIds.find(x => x === SortIdEnum.VIRILITE)) {
      this.applyEffect({ id: IdActionsEnum.POINT_DE_VIE, value: 3 * level, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.LE_IOP_DE_WAZEMMES)) {
      this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -20, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE ,params: [] });
    }
  }

  private applyEffectPassifEniripsa(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();
    const level = this.levelFormService.getValue();
   
    if(sortPassifsIds.find(x => x === SortIdEnum.TOUS_POUR_MOI)) {
      this.applyEffect({ id: IdActionsEnum.POINT_DE_VIE, value: 8 * level, params: [] });
    }
  }

  private applyEffectPassifXelor(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();
    if(sortPassifsIds.find(x => x === SortIdEnum.MEMOIRE)) {
      this.applyEffect({ id: IdActionsEnum.BOOST_PW, value: 6, params: [] });
      this.applyEffect({ id: IdActionsEnum.PM, value: -2, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.ASSIMILATION)) {
      this.applyEffect({ id: IdActionsEnum.BOOST_PW, value: -6, params: [] });
    }
  }

  private applyEffectPassifSram(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();
    const level = this.levelFormService.getValue();

    if(sortPassifsIds.find(x => x === SortIdEnum.MAITRE_DES_PIEGES)) {
      this.applyEffect({ id: IdActionsEnum.CONTROLE, value: 4, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.EMBUSCADE)) {
      this.applyEffect({ id: IdActionsEnum.MAITRISES_DISTANCES, value: Math.floor(level * 1.5), params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.DUPERIE)) {
      this.applyEffect({ id: IdActionsEnum.VOLONTE, value: 20, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.SRAM_DANS_L_AME)) {
      const esquive = this.recap.value.find(rs => rs.id === IdActionsEnum.ESQUIVE)?.value ?? 0;
      if(esquive >= 0) {
        this.applyEffect({ id: IdActionsEnum.COUP_CRITIQUE, value: Math.min(Math.floor(esquive / 20), 15), params: [] });
      }
      const tacle = this.recap.value.find(rs => rs.id === IdActionsEnum.TACLE)?.value ?? 0;
      if(tacle >= 0) {
        this.applyEffect({ id: IdActionsEnum.COUP_CRITIQUE, value: Math.min(Math.floor(tacle / 20), 15), params: [] });
      }
    }
  }

  private applyEffectPassifOsamodas(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();

    if(sortPassifsIds.find(x => x === SortIdEnum.SACRIFICE_ANIMAL)) {
      this.applyEffect({ id: IdActionsEnum.BOOST_PW, value: 3, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.PUISSANCE_DRACONIQUE)) {
      this.applyEffect({ id: IdActionsEnum.DI, value: 25, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.GUERRIER_INVOCATEUR)) {
      this.applyEffect({ id: IdActionsEnum.DI, value: 20, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.VISION_DU_CORBAC)) {
      this.applyEffect({ id: IdActionsEnum.PORTEE, value: 2, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.PARTAGE_ANIMAL)) {
      this.applyEffect({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: -100, params: [] });
    }
  }

  private applyEffectPassifFeca(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();
    const level = this.levelFormService.getValue();

    if (sortPassifsIds.find(x => x === SortIdEnum.PEAU_ROCHEUSE)) {
      this.applyEffect({ id: IdActionsEnum.PARADE, value: 30, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.COMPREHENSION_DU_WAKFU)) {
      this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: 100, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.ARMURE_DE_COMBAT)) {
      this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -100, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.LA_MEILLEURE_DEFENSE_EST_L_ATTAQUE)) {
      this.applyEffect({ id: IdActionsEnum.DI, value: 10, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.MARCHE_PACIFISTE)) {
      const parade = this.recap.value.find(rs => rs.id === IdActionsEnum.PARADE);
      if (parade && parade.value <= 100) {
        this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: parade.value, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
        this.applyEffect({ id: IdActionsEnum.PARADE, value: -parade.value, params: [] });
      }
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.QUI_VEUT_LA_PAIX_PREPARE_LA_GUERRE)) {
      this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: -100, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, params: [] });
      this.applyEffect({ id: IdActionsEnum.DI, value: 25, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.LIGNE)) {
      this.applyEffect({ id: IdActionsEnum.PORTEE, value: 1, params: [] });
    }
    if (sortPassifsIds.find(x => x === SortIdEnum.PROTECTEUR_DU_TROUPEAU)) {
      this.applyEffect({ id: IdActionsEnum.POINT_DE_VIE, value: 3 * level, params: [] });
      this.applyEffect({ id: IdActionsEnum.DI, value: -20, params: [] });
    }
  }

  private applyEffectPassifGenerique(): void {
    const sortPassifsIds = this.sortFormService.getSortPassifs();
    const level = this.levelFormService.getValue();
    if(sortPassifsIds.find(x => x === SortIdEnum.CARNAGE)) {
      this.applyEffect({ id: IdActionsEnum.DI, value: 15, params: [] });
      this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: -30, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.EVASION)) {
      this.applyEffect({ id: IdActionsEnum.ESQUIVE, value: level, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.INSPIRATION)) {
      this.applyEffect({ id: IdActionsEnum.INITIATIVE, value: Math.floor(level / 2), params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.INTERCEPTION)) {
      this.applyEffect({ id: IdActionsEnum.TACLE, value: level, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.MEDECINE)) {
      this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: 30, params: [] });
      this.applyEffect({ id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: 25, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] });
      this.applyEffect({ id: IdActionsEnum.DI, value: -15, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.MOTIVATION)) {
      this.applyEffect({ id: IdActionsEnum.PA, value: 1, params: [] });
      this.applyEffect({ id: IdActionsEnum.DI, value: -20, params: [] });
      this.applyEffect({ id: IdActionsEnum.VOLONTE, value: 10, params: [] });
    }
    if(sortPassifsIds.find(x => x === SortIdEnum.ROCK)) {
      this.applyEffect({ id: IdActionsEnum.PERCENTAGE_PV, value: 60, params: [] });
      this.applyEffect({ id: IdActionsEnum.SOINS_RECUE, value: 25, params: [] });
      this.applyEffect({ id: IdActionsEnum.DI, value: -25, params: [] });
      this.applyEffect({ id: IdActionsEnum.SOINS_REALISE, value: -50, params: [] });
    }
  }

  private applyEffectByClass(): void {
    const classId = this.classeFormService.getValue();
    const level = this.levelFormService.getValue();
    switch (classId) {
      case ClassIdEnum.Cra:
        this.applyEffect({ id: IdActionsEnum.PORTEE, value: 1, params: [] });
        break;
      case ClassIdEnum.Ecaflip:
        this.applyEffect({ id: IdActionsEnum.COUP_CRITIQUE, value: 20, params: [] });
        break;
      case ClassIdEnum.Sacrieur:
        this.applyEffect({ id: IdActionsEnum.POINT_DE_VIE, value: 4 * level, params: [] });
        break;
      case ClassIdEnum.Sram:
        this.applyEffect({ id: IdActionsEnum.MAITRISES_DOS, value: level, params: [] });
        this.applyEffect({ id: IdActionsEnum.CONTROLE, value: 1, params: [] });
        break;
      case ClassIdEnum.Iop:
        this.applyEffect({ id: IdActionsEnum.PM, value: 1, params: [] });
        break;
      case ClassIdEnum.Eniripsa:
        this.applyEffect({ id: IdActionsEnum.POINT_DE_VIE, value: 2 * level, params: [] });
        break;
      case ClassIdEnum.Eliotrope:
        if((this.recap.value.find(rs => rs.id === IdActionsEnum.PORTEE)?.value ?? 0) >= 2) {
          this.applyEffect({ id: IdActionsEnum.PORTEE, value: -2, params: [] });
          this.applyEffect({ id: IdActionsEnum.PM, value: 1, params: [] });
        }
        break;
        case ClassIdEnum.Xelor:
          this.applyEffect({ id: IdActionsEnum.BOOST_PW, value: 6, params: [] });
        break;
    }
  }

  private applyNatifEffects(): void {
    this.naturalEffects.forEach(effect => this.applyEffect(effect));
  }

  private resetEffects(): void {
    this.recap.value.forEach(effect => effect.value = 0);
  }

  private extractEquipEffects(items: Item[]): EquipEffects[] {
    return items.flatMap(item => item.equipEffects);
  }

  private mapToRecapStats(effects: EquipEffects[]): RecapStats[] {
    return effects.map(effect => ({
      id: effect.actionId,
      parameterMajorAction: effect.actionId !== IdActionsEnum.ARMURE_DONNEE_RECUE
        ? undefined
        : (effect.params[4] === ParameterMajorActionEnum.ARMURE_DONNEE
          ? ParameterMajorActionEnum.ARMURE_DONNEE
          : ParameterMajorActionEnum.ARMURE_RECUE),
      value: effect.params[0],
      params: effect.params
    }));
  }

  private applyEffectResistance(effect: RecapStats): void {
    if(effect.id === IdActionsEnum.RESISTANCES_ELEMENTAIRE) {
      this.applyEffect({id: IdActionsEnum.RESISTANCES_FEU, value: effect.value, params: effect.params});
      this.applyEffect({id: IdActionsEnum.RESISTANCES_EAU, value: effect.value, params: effect.params});
      this.applyEffect({id: IdActionsEnum.RESISTANCES_TERRE, value: effect.value, params: effect.params});
      this.applyEffect({id: IdActionsEnum.RESISTANCES_AIR, value: effect.value, params: effect.params});

    } else if(effect.id === IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE || effect.id === IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE_SANS_CAP) {
      this.applyEffect({id: IdActionsEnum.RESISTANCES_FEU, value: -effect.value, params: effect.params});
      this.applyEffect({id: IdActionsEnum.RESISTANCES_EAU, value: -effect.value, params: effect.params});
      this.applyEffect({id: IdActionsEnum.RESISTANCES_TERRE, value: -effect.value, params: effect.params});
      this.applyEffect({id: IdActionsEnum.RESISTANCES_AIR, value: -effect.value, params: effect.params});
      
    } else if(effect.id === IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE) {
      const nbElements = effect.params[2];
      if (nbElements >= 1) {this.applyEffect({id: IdActionsEnum.RESISTANCES_FEU, value: effect.value, params: effect.params})}
      if (nbElements >= 2) {this.applyEffect({id: IdActionsEnum.RESISTANCES_EAU, value: effect.value, params: effect.params})}
      if (nbElements >= 3) {this.applyEffect({id: IdActionsEnum.RESISTANCES_TERRE, value: effect.value, params: effect.params})}
      if (nbElements >= 4) {this.applyEffect({id: IdActionsEnum.RESISTANCES_AIR, value: effect.value, params: effect.params})}
    } else if(effect.id === IdActionsEnum.RESISTANCES_ELEMENTAIRES_MAJEURES) {
      this.applyEffect({id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: 50, params: effect.params});
    }
  }

  
  private applyEffectMaitrisesElementaires(effect: RecapStats): void {
    if(effect.id === IdActionsEnum.MAITRISES_ELEMENTAIRES) {
      this.applyEffect({id: IdActionsEnum.MAITRISES_FEU, value: effect.value, params: effect.params});
      this.applyEffect({id: IdActionsEnum.MAITRISES_EAU, value: effect.value, params: effect.params});
      this.applyEffect({id: IdActionsEnum.MAITRISES_TERRE, value: effect.value, params: effect.params});
      this.applyEffect({id: IdActionsEnum.MAITRISES_AIR, value: effect.value, params: effect.params});
    } else if(effect.id === IdActionsEnum.PERTE_MAITRISES_ELEMENTAIRES) {
      this.applyEffect({id: IdActionsEnum.MAITRISES_FEU, value: -effect.value, params: effect.params});
      this.applyEffect({id: IdActionsEnum.MAITRISES_EAU, value: -effect.value, params: effect.params});
      this.applyEffect({id: IdActionsEnum.MAITRISES_TERRE, value: -effect.value, params: effect.params});
      this.applyEffect({id: IdActionsEnum.MAITRISES_AIR, value: -effect.value, params: effect.params});
    } else if(effect.id === IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE) {
      const nbElements = effect.params[2];
      if (nbElements >= 1) {this.applyEffect({id: IdActionsEnum.MAITRISES_FEU, value: effect.value, params: effect.params})}
      if (nbElements >= 2) {this.applyEffect({id: IdActionsEnum.MAITRISES_EAU, value: effect.value, params: effect.params})}
      if (nbElements >= 3) {this.applyEffect({id: IdActionsEnum.MAITRISES_TERRE, value: effect.value, params: effect.params})}
      if (nbElements >= 4) {this.applyEffect({id: IdActionsEnum.MAITRISES_AIR, value: effect.value, params: effect.params})}
    }
  }

  private applyEffect(effect: RecapStats): void {
    this.applyEffectResistance(effect);
    this.applyEffectMaitrisesElementaires(effect);

    const isMalus = this.actionService.isAMalus(effect.id);
    const adjustedActionId = isMalus
      ? this.actionService.getOpposedEffect(effect.id)
      : effect.id;
    const modifier = isMalus ? -1 : 1;

    const existingEffect = this.recap.value.find(x =>
      (x.id !== IdActionsEnum.ARMURE_DONNEE_RECUE && x.id === adjustedActionId)
      || (x.id === IdActionsEnum.ARMURE_DONNEE_RECUE && x.parameterMajorAction === effect.parameterMajorAction)
    );

    if (existingEffect) {
      existingEffect.value += modifier * effect.value;
    }
  }

  private emitEffects(): void {
    this.recap.next([...this.recap.value]);
    const sommeMaitrisesSecondaires = this.recap.value
      .filter(rs => [
        IdActionsEnum.MAITRISES_MELEE,
        IdActionsEnum.MAITRISES_DISTANCES,
        IdActionsEnum.MAITRISES_CRITIQUES,
        IdActionsEnum.MAITRISES_DOS,
        IdActionsEnum.MAITRISES_SOIN,
        IdActionsEnum.MAITRISES_BERZERK,
      ].includes(rs.id))
      .filter(x => x.value > 0)
      .reduce((sum, current) => sum + current.value, 0);
    const maxMaitrisesElem = Math.max(
      this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_FEU)?.value || 0,
      this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_EAU)?.value || 0,
      this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_TERRE)?.value || 0,
      this.recap.value.find(rs => rs.id === IdActionsEnum.MAITRISES_AIR)?.value || 0,
      0
    );
    const sommeMaitrisesSecondairesWithElem = sommeMaitrisesSecondaires + maxMaitrisesElem;
    this.maitrisesTotal.next(sommeMaitrisesSecondairesWithElem);

    const resistancesSum = this.recap.value
      .filter(rs => [
        IdActionsEnum.RESISTANCES_FEU,
        IdActionsEnum.RESISTANCES_EAU,
        IdActionsEnum.RESISTANCES_TERRE,
        IdActionsEnum.RESISTANCES_AIR,
      ].includes(rs.id))
      .reduce((sum, current) => sum + current.value, 0);
    this.resistancesTotal.next(resistancesSum);
  }
}