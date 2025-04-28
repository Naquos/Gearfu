import { Injectable } from "@angular/core";
import { RecapStats } from "../models/data/recap-stats";
import { IdActionsEnum } from "../models/enum/idActionsEnum";
import { ParameterMajorActionEnum } from "../models/enum/parameterMajorActionEnum";
import { tap, map, BehaviorSubject } from "rxjs";
import { ActionService } from "./data/actionService";
import { ItemChooseService } from "./itemChooseService";

@Injectable({providedIn: 'root'})
export class RecapStatsService {
      private readonly effectList: RecapStats[] = [
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
        {id:IdActionsEnum.RESISTANCES_DOS, value: 0},
        {id:IdActionsEnum.RESISTANCES_CRITIQUES, value: 0},
        {id:IdActionsEnum.ARMURE_DONNEE_RECUE, parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, value: 0},
        {id:IdActionsEnum.ARMURE_DONNEE_RECUE, parameterMajorAction: ParameterMajorActionEnum.ARMURE_RECUE, value: 0},
      ]

    private readonly recap = new BehaviorSubject<RecapStats[]>(this.effectList);
    public readonly recap$ = this.recap.asObservable();

    constructor(private actionService: ActionService,
        private itemChooseService: ItemChooseService,
    ) {
        this.itemChooseService.listItem$.pipe(
        tap(() => this.effectList.forEach(x => x.value = 0)),
        map(items => items.map(item => item.equipEffects).flat()),
        map(effects  => effects.map(x =>  ({
                id: x.actionId,
                parameterMajorAction: x.actionId !== IdActionsEnum.ARMURE_DONNEE_RECUE ? undefined :
                x.params[4] === ParameterMajorActionEnum.ARMURE_DONNEE ? ParameterMajorActionEnum.ARMURE_DONNEE : ParameterMajorActionEnum.ARMURE_RECUE,
                value: x.params[0]
            }))),
        tap(effects =>  effects.forEach(effect => this.setEffect(effect))),
        tap(() => this.recap.next(this.effectList)),
        ).subscribe();
    }

    private setEffect(effect: RecapStats): void {
        const isAMalus = this.actionService.isAMalus(effect.id);
        const actionId  = isAMalus ? this.actionService.getOpposedEffect(effect.id) : effect.id;
        const valueModifier = isAMalus ? -1 : 1;
    
        const temp = this.effectList.find(x => (x.id !== IdActionsEnum.ARMURE_DONNEE_RECUE && x.id === actionId)
        || (x.id === IdActionsEnum.ARMURE_DONNEE_RECUE && x.parameterMajorAction === effect.parameterMajorAction));
        if(temp) {
          temp.value += valueModifier * effect.value;
        }
      }
}