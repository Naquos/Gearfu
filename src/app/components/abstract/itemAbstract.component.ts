import { BehaviorSubject, combineLatest, map, Observable, Subject, takeUntil } from "rxjs";
import { IdActionsEnum } from "../../models/idActionsEnum";
import { Item } from "../../models/item";
import { ItemTypeServices } from "../../services/ItemTypesServices";
import { ItemTypeEnum } from "../../models/itemTypeEnum";
import { ItemChooseService } from "../../services/itemChooseService";
import { EquipEffects } from "../../models/equipEffects";
import { DifferentStatsItem } from "../../models/differentsStatsItem";
import { ActionService } from "../../services/actionService";
import { Component, OnDestroy } from "@angular/core";
import { ParameterMajorActionEnum } from "../../models/parameterMajorActionEnum";

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './itemAbstract.component.html',
  styleUrl: './itemAbstract.component.scss'})
export abstract class ItemAbstractComponent implements OnDestroy {
    
    protected destroy$ = new Subject<void>();
    protected resistances = 0;
    protected maitrises = 0;
    protected IdActionEnum = IdActionsEnum;
    protected mapSortAction= new Map<IdActionsEnum, number>();
    protected Math = Math;
    protected itemChoosen$ = new BehaviorSubject<(Item | undefined)[][]>([[]]);


    constructor(
        protected itemTypeService: ItemTypeServices,
        protected itemChooseService: ItemChooseService,
        protected actionsService: ActionService
    ) {
        this.initMapSortAction();
    }

    private initMapSortAction(): void {
        this.mapSortAction.set(IdActionsEnum.PA, 0);
        this.mapSortAction.set(IdActionsEnum.PERTE_PA, 1);
        this.mapSortAction.set(IdActionsEnum.PM, 2);
        this.mapSortAction.set(IdActionsEnum.PERTE_PM, 3);
        this.mapSortAction.set(IdActionsEnum.PW, 4);
        this.mapSortAction.set(IdActionsEnum.BOOST_PW, 4);
        this.mapSortAction.set(IdActionsEnum.DEBOOST_PW, 5);
        this.mapSortAction.set(IdActionsEnum.CONTROLE, 6);
        this.mapSortAction.set(IdActionsEnum.PORTEE, 7);
        this.mapSortAction.set(IdActionsEnum.PERTE_PORTEE, 8);
        this.mapSortAction.set(IdActionsEnum.POINT_DE_VIE, 9);
        this.mapSortAction.set(IdActionsEnum.PERTE_POINT_DE_VIE, 10);
        this.mapSortAction.set(IdActionsEnum.TACLE, 11);
        this.mapSortAction.set(IdActionsEnum.ESQUIVE, 12);
        this.mapSortAction.set(IdActionsEnum.PARADE, 13);
        this.mapSortAction.set(IdActionsEnum.PERTE_TACLE, 14);
        this.mapSortAction.set(IdActionsEnum.PERTE_ESQUIVE, 15);
        this.mapSortAction.set(IdActionsEnum.PERTE_PARADE, 16);
        this.mapSortAction.set(IdActionsEnum.MAITRISES_ELEMENTAIRES, 17);
        this.mapSortAction.set(IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE, 18);
        this.mapSortAction.set(IdActionsEnum.MAITRISES_CRITIQUES, 19);
        this.mapSortAction.set(IdActionsEnum.MAITRISES_DOS, 20);
        this.mapSortAction.set(IdActionsEnum.MAITRISES_SOIN, 21);
        this.mapSortAction.set(IdActionsEnum.MAITRISES_BERZERK, 22);
        this.mapSortAction.set(IdActionsEnum.MAITRISES_DISTANCES, 23);
        this.mapSortAction.set(IdActionsEnum.MAITRISES_MELEE, 24);
        this.mapSortAction.set(IdActionsEnum.PERTE_MAITRISES_CRITIQUE, 25);
        this.mapSortAction.set(IdActionsEnum.PERTE_MAITRISES_DOS, 26);
        this.mapSortAction.set(IdActionsEnum.PERTE_MAITRISES_BERZERK, 27);
        this.mapSortAction.set(IdActionsEnum.PERTE_MAITRISES_DISTANCE, 28);
        this.mapSortAction.set(IdActionsEnum.PERTE_MAITRISES_MELEE, 29);
        this.mapSortAction.set(IdActionsEnum.COUP_CRITIQUE, 30);
        this.mapSortAction.set(IdActionsEnum.ARMURE_DONNEE_RECUE, 31);
        this.mapSortAction.set(IdActionsEnum.PERTE_COUP_CRITIQUE, 32);
        this.mapSortAction.set(IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE, 33);
        this.mapSortAction.set(IdActionsEnum.RESISTANCES_CRITIQUES, 34);
        this.mapSortAction.set(IdActionsEnum.RESISTANCES_DOS, 35);
        this.mapSortAction.set(IdActionsEnum.RESISTANCES_ELEMENTAIRE, 36);
        this.mapSortAction.set(IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE, 37);
        this.mapSortAction.set(IdActionsEnum.RESISTANCES_FEU, 38);
        this.mapSortAction.set(IdActionsEnum.RESISTANCES_EAU, 39);
        this.mapSortAction.set(IdActionsEnum.RESISTANCES_AIR, 40);
        this.mapSortAction.set(IdActionsEnum.RESISTANCES_TERRE, 41);
        this.mapSortAction.set(IdActionsEnum.PERTE_RESISTANCES_CRITIQUE, 42);
        this.mapSortAction.set(IdActionsEnum.PERTE_RESISTANCES_DOS, 43);
        this.mapSortAction.set(IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE, 44);
        this.mapSortAction.set(IdActionsEnum.PERTE_RESISTANCES_FEU, 45);
        this.mapSortAction.set(IdActionsEnum.PERTE_RESISTANCE_EAU, 46);
        this.mapSortAction.set(IdActionsEnum.PERTE_RESISTANCES_TERRE, 47);
    }

    protected getEffectPng(effect : EquipEffects | DifferentStatsItem) {
      if(effect.actionId === IdActionsEnum.ARMURE_DONNEE_RECUE) {
        return effect.params[4] === ParameterMajorActionEnum.ARMURE_DONNEE ? "ArmureDonnée" : 39;
      }
      return effect.actionId;
    }

    protected initItemChoosen(item: Item): void {
        const itemTypeId = this.itemTypeService.getItemType(item.itemTypeId);
        let obs = new Observable<(Item | undefined)[][]>();
        if (itemTypeId === ItemTypeEnum.DAGUE) {
            obs = this.itemChooseService.getObsItem(ItemTypeEnum.BOUCLIER).pipe(map(x => [x]));
        } else if (itemTypeId === ItemTypeEnum.DEUX_MAINS) {
            obs = combineLatest([
              this.itemChooseService.getObsItem(ItemTypeEnum.UNE_MAIN),
              this.itemChooseService.getObsItem(ItemTypeEnum.BOUCLIER)
            ]).pipe(map(([uneMain, bouclier]) => [uneMain, bouclier]));
        } else {
            obs = this.itemChooseService.getObsItem(itemTypeId).pipe(map(x => [x]));
        }

        obs.pipe(takeUntil(this.destroy$)).subscribe(x => this.itemChoosen$.next(x))
    }

    

  protected displayEffect(effect: EquipEffects | DifferentStatsItem): string {
    const descriptionEffect = this.actionsService.getEffectById(effect.actionId).split(":");
    const isAMalus = this.actionsService.isAMalus(effect.actionId); 
    const symbol = (isAMalus && effect.params[0] > 0) || (!isAMalus && effect.params[0] < 0) ? "-" : ""
    const value = Math.abs(effect.params[0]);
      if(effect.actionId === IdActionsEnum.ARMURE_DONNEE_RECUE || effect.actionId === IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE) {
        const type = effect.params[4] === 120 ? "donnée" : "reçue"
        return symbol + value + "% armure " + type;
      } else if (effect.actionId === IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE) {
        return symbol + value + " maîtrises dans " + effect.params[2] + " éléments";
      } else if (effect.actionId === IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE) {
        return symbol + value + " résistances dans " + effect.params[2] + " éléments";
      } else if(effect.actionId === IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE_SANS_CAP) {
        return symbol + value + " Résistance Élémentaire";
      }
      return symbol + value + descriptionEffect[1];
  }

  protected getPoids(): number {
    return this.Math.trunc(this.maitrises + 1.2 * this.resistances);
  }

  public ngOnDestroy() {
    this.destroy$.next(); 
    this.destroy$.complete();
  }
}