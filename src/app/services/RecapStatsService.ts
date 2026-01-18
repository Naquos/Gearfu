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
import { ChasseFormService } from "./form/chasseFormService";
import { BonusFormService } from "./form/bonusFormService";
import { AptitudesManualFormService } from "./form/aptitudesManualFormServices";
import { CodeAptitudesService } from "./codeAptitudesService";
import { EffectApplicationService } from "./recap-stats/effect-application.service";
import { SublimationEffectsService } from "./recap-stats/sublimation-effects.service";
import { PassiveEffectsService } from "./recap-stats/passive-effects.service";
import { calculWeight } from "../models/utils/utils";

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
  private readonly effectApplicationService = inject(EffectApplicationService);
  private readonly sublimationEffectsService = inject(SublimationEffectsService);
  private readonly passiveEffectsService = inject(PassiveEffectsService);

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

  private readonly poidsTotal = new BehaviorSubject<number>(0);
  public readonly poidsTotal$ = this.poidsTotal.asObservable();

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
    this.sublimationEffectsService.applyEffectSublimation(
      sublimationsIdToLevel,
      this.levelFormService.getValue(),
      this.recap.value,
      (effect) => this.applyEffect(effect),
      () => this.allMaitrisesSecondairesNull()
    );
  }

  private applyEffectPassif(): void {
    this.passiveEffectsService.applyEffectPassif(
      this.classeFormService.getValue(),
      this.sortFormService.getSortPassifs(),
      this.levelFormService.getValue(),
      this.recap.value,
      (effect) => this.applyEffect(effect)
    );
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

  private applyEffect(effect: RecapStats): void {
    this.effectApplicationService.applyEffectResistance(effect, this.recap.value, (e) => this.applyEffectCore(e));
    this.effectApplicationService.applyEffectMaitrisesElementaires(effect, this.recap.value, (e) => this.applyEffectCore(e));
    this.applyEffectCore(effect);
  }

  private applyEffectCore(effect: RecapStats): void {
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

    const level = this.levelFormService.getValue();
    const poids = calculWeight(resistancesSum, sommeMaitrisesSecondairesWithElem, level);
    this.poidsTotal.next(poids);
  }
}