import { Injectable } from "@angular/core";
import { RecapStats } from "../../models/data/recap-stats";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";

@Injectable({ providedIn: 'root' })
export class EffectApplicationService {

  applyEffectResistance(effect: RecapStats, recapValue: RecapStats[], applyEffectFn: (effect: RecapStats) => void): void {
    if(effect.id === IdActionsEnum.RESISTANCES_ELEMENTAIRE) {
      applyEffectFn({id: IdActionsEnum.RESISTANCES_FEU, value: effect.value, params: effect.params});
      applyEffectFn({id: IdActionsEnum.RESISTANCES_EAU, value: effect.value, params: effect.params});
      applyEffectFn({id: IdActionsEnum.RESISTANCES_TERRE, value: effect.value, params: effect.params});
      applyEffectFn({id: IdActionsEnum.RESISTANCES_AIR, value: effect.value, params: effect.params});

    } else if(effect.id === IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE || effect.id === IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE_SANS_CAP) {
      applyEffectFn({id: IdActionsEnum.RESISTANCES_FEU, value: -effect.value, params: effect.params});
      applyEffectFn({id: IdActionsEnum.RESISTANCES_EAU, value: -effect.value, params: effect.params});
      applyEffectFn({id: IdActionsEnum.RESISTANCES_TERRE, value: -effect.value, params: effect.params});
      applyEffectFn({id: IdActionsEnum.RESISTANCES_AIR, value: -effect.value, params: effect.params});
      
    } else if(effect.id === IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE) {
      const nbElements = effect.params[2];
      if (nbElements >= 1) {applyEffectFn({id: IdActionsEnum.RESISTANCES_FEU, value: effect.value, params: effect.params})}
      if (nbElements >= 2) {applyEffectFn({id: IdActionsEnum.RESISTANCES_EAU, value: effect.value, params: effect.params})}
      if (nbElements >= 3) {applyEffectFn({id: IdActionsEnum.RESISTANCES_TERRE, value: effect.value, params: effect.params})}
      if (nbElements >= 4) {applyEffectFn({id: IdActionsEnum.RESISTANCES_AIR, value: effect.value, params: effect.params})}
    } else if(effect.id === IdActionsEnum.RESISTANCES_ELEMENTAIRES_MAJEURES) {
      applyEffectFn({id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: 50, params: effect.params});
    }
  }

  applyEffectMaitrisesElementaires(effect: RecapStats, recapValue: RecapStats[], applyEffectFn: (effect: RecapStats) => void): void {
    if(effect.id === IdActionsEnum.MAITRISES_ELEMENTAIRES) {
      applyEffectFn({id: IdActionsEnum.MAITRISES_FEU, value: effect.value, params: effect.params});
      applyEffectFn({id: IdActionsEnum.MAITRISES_EAU, value: effect.value, params: effect.params});
      applyEffectFn({id: IdActionsEnum.MAITRISES_TERRE, value: effect.value, params: effect.params});
      applyEffectFn({id: IdActionsEnum.MAITRISES_AIR, value: effect.value, params: effect.params});
    } else if(effect.id === IdActionsEnum.PERTE_MAITRISES_ELEMENTAIRES) {
      applyEffectFn({id: IdActionsEnum.MAITRISES_FEU, value: -effect.value, params: effect.params});
      applyEffectFn({id: IdActionsEnum.MAITRISES_EAU, value: -effect.value, params: effect.params});
      applyEffectFn({id: IdActionsEnum.MAITRISES_TERRE, value: -effect.value, params: effect.params});
      applyEffectFn({id: IdActionsEnum.MAITRISES_AIR, value: -effect.value, params: effect.params});
    } else if(effect.id === IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE) {
      const nbElements = effect.params[2];
      if (nbElements >= 1) {applyEffectFn({id: IdActionsEnum.MAITRISES_FEU, value: effect.value, params: effect.params})}
      if (nbElements >= 2) {applyEffectFn({id: IdActionsEnum.MAITRISES_EAU, value: effect.value, params: effect.params})}
      if (nbElements >= 3) {applyEffectFn({id: IdActionsEnum.MAITRISES_TERRE, value: effect.value, params: effect.params})}
      if (nbElements >= 4) {applyEffectFn({id: IdActionsEnum.MAITRISES_AIR, value: effect.value, params: effect.params})}
    }
  }
}
