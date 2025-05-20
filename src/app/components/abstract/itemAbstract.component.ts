import { BehaviorSubject, combineLatest, map, Observable, Subject, takeUntil } from "rxjs";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { ItemTypeServices } from "../../services/data/ItemTypesServices";
import { ItemTypeEnum } from "../../models/enum/itemTypeEnum";
import { ItemChooseService } from "../../services/itemChooseService";
import { EquipEffects } from "../../models/data/equipEffects";
import { ActionService } from "../../services/data/actionService";
import { Component, OnDestroy } from "@angular/core";
import { ParameterMajorActionEnum } from "../../models/enum/parameterMajorActionEnum";
import { StatesService } from "../../services/data/statesService";
import { TranslateService } from "@ngx-translate/core";
import { DifferentStatsItem } from "../../models/data/differentsStatsItem";
import { Item } from "../../models/data/item";
import { ImageService } from "../../services/imageService";

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './itemAbstract.component.html',
  styleUrl: './itemAbstract.component.scss'})
export abstract class ItemAbstractComponent implements OnDestroy {
    
    protected readonly destroy$ = new Subject<void>();
    protected resistances = 0;
    protected maitrises = 0;
    protected readonly IdActionEnum = IdActionsEnum;
    protected readonly mapSortAction= new Map<IdActionsEnum, number>([
      [IdActionsEnum.PA, 0],
      [IdActionsEnum.PERTE_PA, 1],
      [IdActionsEnum.PM, 2],
      [IdActionsEnum.PERTE_PM, 3],
      [IdActionsEnum.PW, 4],
      [IdActionsEnum.BOOST_PW, 4],
      [IdActionsEnum.DEBOOST_PW, 5],
      [IdActionsEnum.CONTROLE, 6],
      [IdActionsEnum.PORTEE, 7],
      [IdActionsEnum.PERTE_PORTEE, 8],
      [IdActionsEnum.POINT_DE_VIE, 9],
      [IdActionsEnum.PERTE_POINT_DE_VIE, 10],
      [IdActionsEnum.TACLE, 11],
      [IdActionsEnum.ESQUIVE, 12],
      [IdActionsEnum.PARADE, 13],
      [IdActionsEnum.PERTE_TACLE, 14],
      [IdActionsEnum.PERTE_ESQUIVE, 15],
      [IdActionsEnum.PERTE_PARADE, 16],
      [IdActionsEnum.MAITRISES_ELEMENTAIRES, 17],
      [IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE, 18],
      [IdActionsEnum.MAITRISES_CRITIQUES, 19],
      [IdActionsEnum.MAITRISES_DOS, 20],
      [IdActionsEnum.MAITRISES_SOIN, 21],
      [IdActionsEnum.MAITRISES_BERZERK, 22],
      [IdActionsEnum.MAITRISES_DISTANCES, 23],
      [IdActionsEnum.MAITRISES_MELEE, 24],
      [IdActionsEnum.PERTE_MAITRISES_CRITIQUE, 25],
      [IdActionsEnum.PERTE_MAITRISES_DOS, 26],
      [IdActionsEnum.PERTE_MAITRISES_BERZERK, 27],
      [IdActionsEnum.PERTE_MAITRISES_DISTANCE, 28],
      [IdActionsEnum.PERTE_MAITRISES_MELEE, 29],
      [IdActionsEnum.COUP_CRITIQUE, 30],
      [IdActionsEnum.ARMURE_DONNEE_RECUE, 31],
      [IdActionsEnum.PERTE_COUP_CRITIQUE, 32],
      [IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE, 33],
      [IdActionsEnum.RESISTANCES_CRITIQUES, 34],
      [IdActionsEnum.RESISTANCES_DOS, 35],
      [IdActionsEnum.RESISTANCES_ELEMENTAIRE, 36],
      [IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE, 37],
      [IdActionsEnum.RESISTANCES_FEU, 38],
      [IdActionsEnum.RESISTANCES_EAU, 39],
      [IdActionsEnum.RESISTANCES_AIR, 40],
      [IdActionsEnum.RESISTANCES_TERRE, 41],
      [IdActionsEnum.PERTE_RESISTANCES_CRITIQUE, 42],
      [IdActionsEnum.PERTE_RESISTANCES_DOS, 43],
      [IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE, 44],
      [IdActionsEnum.PERTE_RESISTANCES_FEU, 45],
      [IdActionsEnum.PERTE_RESISTANCE_EAU, 46],
      [IdActionsEnum.PERTE_RESISTANCES_TERRE, 47],
    ]);
    
    protected readonly Math = Math;
    protected readonly itemChoosen$ = new BehaviorSubject<(Item | undefined)[][]>([[]]);
    protected readonly IdActionsEnum = IdActionsEnum;

    constructor(
        protected readonly translateService: TranslateService,
        protected readonly itemTypeService: ItemTypeServices,
        protected readonly itemChooseService: ItemChooseService,
        protected readonly actionsService: ActionService,
        protected readonly statesService: StatesService,
        protected readonly imageService: ImageService,
    ) {}

    protected getEffectPng(effect : EquipEffects | DifferentStatsItem): string {
      return this.imageService.getImageUrl(
        effect.actionId, 
        effect.actionId === IdActionsEnum.ARMURE_DONNEE_RECUE && effect.params[4] === ParameterMajorActionEnum.ARMURE_RECUE
      );
    }

    protected initItemChoosen(item: Item): void {
        const itemTypeId = this.itemTypeService.getItemType(item.itemTypeId);
        if(!itemTypeId) return;
        
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
    const descriptionEffect = this.actionsService.getEffectById(effect.actionId);
    const isAMalus = this.actionsService.isAMalus(effect.actionId); 
    const symbol = (isAMalus && effect.params[0] > 0) || (!isAMalus && effect.params[0] < 0) ? "-" : ""
    const value = Math.abs(effect.params[0]);
      if(effect.actionId === IdActionsEnum.ARMURE_DONNEE_RECUE || effect.actionId === IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE) {
        const type = effect.params[4] === 120 ? this.translateService.instant("abstract.donnee") : this.translateService.instant("abstract.recue")
        return symbol + value + this.translateService.instant("abstract.armure") + type;
      } else if (effect.actionId === IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE) {
        return symbol + value + this.translateService.instant("abstract.maitrises") + effect.params[2] + this.translateService.instant("abstract.elements");
      } else if (effect.actionId === IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE) {
        return symbol + value + this.translateService.instant("abstract.resistances") + effect.params[2] + this.translateService.instant("abstract.elements");
      } else if(effect.actionId === IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE_SANS_CAP) {
        return symbol + value + this.translateService.instant("abstract.resistances-elementaires");
      }
      return symbol + value + " " + descriptionEffect;
  }

  public ngOnDestroy() {
    this.destroy$.next(); 
    this.destroy$.complete();
  }
}