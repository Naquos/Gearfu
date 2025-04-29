import { Injectable } from "@angular/core";
import { RecapStats } from "../models/data/recap-stats";
import { IdActionsEnum } from "../models/enum/idActionsEnum";
import { ParameterMajorActionEnum } from "../models/enum/parameterMajorActionEnum";
import { tap, map, BehaviorSubject, takeUntil } from "rxjs";
import { ActionService } from "./data/actionService";
import { ItemChooseService } from "./itemChooseService";
import { EquipEffects } from "../models/data/equipEffects";
import { Item } from "../models/data/item";
import { AbstractDestroyService } from "./abstract/abstractDestroyService";

@Injectable({ providedIn: 'root' })
export class RecapStatsService extends AbstractDestroyService {
  private readonly initialEffectList: RecapStats[] = [
    { id: IdActionsEnum.POINT_DE_VIE, value: 0 },
    { id: IdActionsEnum.PA, value: 0 },
    { id: IdActionsEnum.PM, value: 0 },
    { id: IdActionsEnum.BOOST_PW, value: 0 },
    { id: IdActionsEnum.COUP_CRITIQUE, value: 0 },
    { id: IdActionsEnum.PARADE, value: 0 },
    { id: IdActionsEnum.PORTEE, value: 0 },
    { id: IdActionsEnum.ESQUIVE, value: 0 },
    { id: IdActionsEnum.TACLE, value: 0 },
    { id: IdActionsEnum.VOLONTE, value: 0 },
    { id: IdActionsEnum.RESISTANCES_DOS, value: 0 },
    { id: IdActionsEnum.RESISTANCES_CRITIQUES, value: 0 },
    { id: IdActionsEnum.ARMURE_DONNEE_RECUE, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, value: 0 },
    { id: IdActionsEnum.ARMURE_DONNEE_RECUE, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, value: 0 },
  ];

  private readonly recap = new BehaviorSubject<RecapStats[]>([...this.initialEffectList]);
  public readonly recap$ = this.recap.asObservable();

  constructor(
    private readonly actionService: ActionService,
    private readonly itemChooseService: ItemChooseService,
  ) {
    super();
    this.initializeListeners();
  }

  private initializeListeners(): void {
    this.itemChooseService.listItem$.pipe(
      takeUntil(this.destroy$),
      tap(() => this.resetEffects()),
      map(items => this.extractEquipEffects(items)),
      map(effects => this.mapToRecapStats(effects)),
      tap(mappedEffects => mappedEffects.forEach(effect => this.applyEffect(effect))),
      tap(() => this.emitEffects()),
    ).subscribe();
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
      value: effect.params[0]
    }));
  }

  private applyEffect(effect: RecapStats): void {
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
  }
}