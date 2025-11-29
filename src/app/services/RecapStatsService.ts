import { inject, Injectable } from "@angular/core";
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
  private readonly actionService = inject(ActionService);
  private readonly itemChooseService = inject(ItemChooseService);

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
  ];

  private readonly recap = new BehaviorSubject<RecapStats[]>([...this.initialEffectList]);
  public readonly recap$ = this.recap.asObservable();

  constructor() {
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
  }
}