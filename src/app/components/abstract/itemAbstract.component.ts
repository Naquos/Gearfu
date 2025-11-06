import { BehaviorSubject, combineLatest, map, Observable, Subject, takeUntil } from "rxjs";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { ItemTypeServices } from "../../services/data/ItemTypesServices";
import { ItemTypeEnum } from "../../models/enum/itemTypeEnum";
import { ItemChooseService } from "../../services/itemChooseService";
import { EquipEffects } from "../../models/data/equipEffects";
import { ActionService } from "../../services/data/actionService";
import { Component, inject, OnDestroy } from "@angular/core";
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
  
    protected readonly translateService = inject(TranslateService);
    protected readonly itemTypeService = inject(ItemTypeServices);
    protected readonly itemChooseService = inject(ItemChooseService);
    protected readonly actionsService = inject(ActionService);
    protected readonly statesService = inject(StatesService);
    protected readonly imageService = inject(ImageService);
    
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
      [IdActionsEnum.PERTE_INITIATIVE, 13],
      [IdActionsEnum.PARADE, 14],
      [IdActionsEnum.PERTE_TACLE, 15],
      [IdActionsEnum.PERTE_ESQUIVE, 16],
      [IdActionsEnum.PERTE_PARADE, 17],
      [IdActionsEnum.MAITRISES_ELEMENTAIRES, 18],
      [IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE, 19],
      [IdActionsEnum.MAITRISES_CRITIQUES, 20],
      [IdActionsEnum.MAITRISES_DOS, 21],
      [IdActionsEnum.MAITRISES_SOIN, 22],
      [IdActionsEnum.MAITRISES_BERZERK, 23],
      [IdActionsEnum.MAITRISES_DISTANCES, 24],
      [IdActionsEnum.MAITRISES_MELEE, 25],
      [IdActionsEnum.PERTE_MAITRISES_CRITIQUE, 26],
      [IdActionsEnum.PERTE_MAITRISES_DOS, 27],
      [IdActionsEnum.PERTE_MAITRISES_BERZERK, 28],
      [IdActionsEnum.PERTE_MAITRISES_DISTANCE, 29],
      [IdActionsEnum.PERTE_MAITRISES_MELEE, 30],
      [IdActionsEnum.COUP_CRITIQUE, 31],
      [IdActionsEnum.ARMURE_DONNEE_RECUE, 32],
      [IdActionsEnum.PERTE_COUP_CRITIQUE, 33],
      [IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE, 34],
      [IdActionsEnum.RESISTANCES_CRITIQUES, 35],
      [IdActionsEnum.RESISTANCES_DOS, 36],
      [IdActionsEnum.RESISTANCES_ELEMENTAIRE, 37],
      [IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE, 38],
      [IdActionsEnum.RESISTANCES_FEU, 39],
      [IdActionsEnum.RESISTANCES_EAU, 40],
      [IdActionsEnum.RESISTANCES_AIR, 41],
      [IdActionsEnum.RESISTANCES_TERRE, 42],
      [IdActionsEnum.PERTE_RESISTANCES_CRITIQUE, 43],
      [IdActionsEnum.PERTE_RESISTANCES_DOS, 44],
      [IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE, 45],
      [IdActionsEnum.PERTE_RESISTANCES_FEU, 46],
      [IdActionsEnum.PERTE_RESISTANCE_EAU, 47],
      [IdActionsEnum.PERTE_RESISTANCES_TERRE, 48],
    ]);
    
    protected readonly Math = Math;
    protected readonly itemChoosen$ = new BehaviorSubject<(Item | undefined)[][]>([[]]);
    protected readonly IdActionsEnum = IdActionsEnum;

    protected getEffectPng(effect : EquipEffects | DifferentStatsItem): string {
      return this.imageService.getActionIdUrl(
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

  public ngOnDestroy() {
    this.destroy$.next(); 
    this.destroy$.complete();
  }
}