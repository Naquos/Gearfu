import { BehaviorSubject, combineLatest, map, Observable, Subject, takeUntil } from "rxjs";
import { IdActionsEnum } from "../../../models/enum/idActionsEnum";
import { ItemTypeServices } from "../../../services/data/ItemTypesServices";
import { ItemTypeEnum } from "../../../models/enum/itemTypeEnum";
import { ItemChooseService } from "../../../services/itemChooseService";
import { EquipEffects } from "../../../models/data/equipEffects";
import { ActionService } from "../../../services/data/actionService";
import { Component, inject, OnDestroy } from "@angular/core";
import { ParameterMajorActionEnum } from "../../../models/enum/parameterMajorActionEnum";
import { StatesService } from "../../../services/data/statesService";
import { TranslateService } from "@ngx-translate/core";
import { DifferentStatsItem } from "../../../models/data/differentsStatsItem";
import { Item } from "../../../models/data/item";
import { ImageService } from "../../../services/imageService";

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