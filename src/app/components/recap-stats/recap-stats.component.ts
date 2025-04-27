import { Component } from '@angular/core';
import { IdActionsEnum } from '../../models/enum/idActionsEnum';
import { CommonModule } from '@angular/common';
import { RecapStats } from '../../models/data/recap-stats';
import { ParameterMajorActionEnum } from '../../models/enum/parameterMajorActionEnum';
import { ActionService } from '../../services/data/actionService';
import { ItemChooseService } from '../../services/itemChooseService';
import { map, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-recap-stats',
  imports: [CommonModule],
  templateUrl: './recap-stats.component.html',
  styleUrl: './recap-stats.component.scss'
})
export class RecapStatsComponent {
  protected effectList: RecapStats[] = [
    {id:IdActionsEnum.POINT_DE_VIE, value: 0},
    {id:IdActionsEnum.PA, value: 0},
    {id:IdActionsEnum.PM, value: 0},
    {id:IdActionsEnum.BOOST_PW, value: 0},
    {id:IdActionsEnum.COUP_CRITIQUE, value: 0},
    {id:IdActionsEnum.PARADE, value: 0},
    {id:IdActionsEnum.PORTEE, value: 0},
    {id:IdActionsEnum.ESQUIVE, value: 0},
    {id:IdActionsEnum.TACLE, value: 0},
    {id:IdActionsEnum.VOLONTE, value: 0},
    {id: IdActionsEnum.RESISTANCES_DOS, value: 0},
    {id: IdActionsEnum.RESISTANCES_CRITIQUES, value: 0},
    {id:IdActionsEnum.ARMURE_DONNEE_RECUE, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, value: 0},
    {id:IdActionsEnum.ARMURE_DONNEE_RECUE, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, value: 0},
  ]

  constructor(private actionService: ActionService,
    private itemChooseService: ItemChooseService,
    private translateService: TranslateService,
  ) {
    this.itemChooseService.listItem$.pipe(
      tap(() => this.effectList.forEach(x => x.value = 0)),
      map(items => items.map(item => item.equipEffects).flat()),
      map(effects  => effects.map(x => {
        if(x.actionId !== IdActionsEnum.ARMURE_DONNEE_RECUE) {
          return {id: x.actionId, value: x.params[0]};
        } 
        return {id: IdActionsEnum.ARMURE_DONNEE_RECUE,
           parameterMajorAction: x.params[4] === ParameterMajorActionEnum.ARMURE_DONNEE ? ParameterMajorActionEnum.ARMURE_DONNEE : ParameterMajorActionEnum.ARMURE_RECUE,
           value: x.params[0]
          };
      })),
      tap(effects =>  effects.forEach(effect => this.setEffect(effect)))
    ).subscribe();
  }

  protected displayEffect(effect: RecapStats): string {
    const descriptionEffect = this.actionService.getEffectById(effect.id);
    const isAMalus = this.actionService.isAMalus(effect.id); 
    const symbol = (isAMalus && effect.value > 0) || (!isAMalus && effect.value < 0) ? "-" : ""
    const value = Math.abs(effect.value);
      if(effect.id === IdActionsEnum.ARMURE_DONNEE_RECUE || effect.id === IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE) {
        const type = effect.parameterMajorAction === ParameterMajorActionEnum.ARMURE_DONNEE ? 
        this.translateService.instant("abstract.donnee") : this.translateService.instant("abstract.recue")
        return symbol + value + this.translateService.instant("abstract.armure") + type;
      }
      return symbol + value + " " + descriptionEffect;
  }

  protected getEffectPng(effect : RecapStats): string {
    if(effect.id === IdActionsEnum.ARMURE_DONNEE_RECUE) {
      return effect.parameterMajorAction === ParameterMajorActionEnum.ARMURE_DONNEE ? "ArmureDonnée" : "39";
    }
    return `${effect.id}`;
  }

  private setEffect(effect: RecapStats): void {
    if(!this.actionService.isAMalus(effect.id)) {
      const temp = this.effectList.find(x => (x.id !== IdActionsEnum.ARMURE_DONNEE_RECUE && x.id === effect.id)
       || (x.id === IdActionsEnum.ARMURE_DONNEE_RECUE && x.parameterMajorAction === effect.parameterMajorAction));
      if(temp) {
        temp.value += effect.value;
      }
    }
    else {
      const effectId = this.actionService.getOpposedEffect(effect.id);
      const temp = this.effectList.find(x => (x.id !== IdActionsEnum.ARMURE_DONNEE_RECUE && x.id === effectId)
      || (x.id === IdActionsEnum.ARMURE_DONNEE_RECUE && x.parameterMajorAction === effect.parameterMajorAction));
      if(temp) {
        temp.value -= effect.value;
      }
    }
  }

}
