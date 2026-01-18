import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, filter, map, takeUntil, tap } from 'rxjs';
import { ImageFallbackDirective } from '../../../directives/imageFallback.directive';
import { DifferentStatsItem } from '../../../models/data/differentsStatsItem';
import { Item } from '../../../models/data/item';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';
import { ParameterMajorActionEnum } from '../../../models/enum/parameterMajorActionEnum';
import { ActionsPipe } from '../../../pipe/actions/actions.pipe';
import { ColorRarityService } from '../../../services/colorRarityService';
import { ItemsService } from '../../../services/data/itemsService';
import { ItemAbstractComponent } from '../abstract/itemAbstract.component';
import { calculWeight, mapSortAction } from '../../../models/utils/utils';

@Component({
  selector: 'app-item-tooltip',
  imports: [CommonModule, TranslateModule, ActionsPipe, ImageFallbackDirective],
  templateUrl: './item-tooltip.component.html',
  styleUrl: './item-tooltip.component.scss'
})
export class ItemTooltipComponent extends ItemAbstractComponent implements AfterViewInit {
  
    protected readonly itemService = inject(ItemsService);
    protected readonly colorRarityService = inject(ColorRarityService);
    protected readonly cdr = inject(ChangeDetectorRef);

    @Input()
    public item!: Item;
    @Input()
    public indexItemChoosen = 0;

    protected readonly ARMURE_DONNEE_RECUE = [IdActionsEnum.ARMURE_DONNEE_RECUE, IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE];

    protected listDifferentsStatsItem:DifferentStatsItem[] = [];
    protected loaded$!: Observable<boolean>;
    protected weight = 0;

    protected itemSelected$ = this.itemChoosen$.pipe(
      filter(items => items.length !== 0),
      map(items => items.map(x =>x[this.indexItemChoosen])),
      map(items => items.length >=2 && items[0]?.id === items[1]?.id ? [items.find(x => x !== undefined)] : items),
      map(x => x.filter(item => item !== undefined)),
    );

    protected differentStatsItemList$ = this.itemSelected$.pipe(
      takeUntil(this.destroy$),
      tap(listItems => {
        this.listDifferentsStatsItem = [];
        this.fillListCurrentItem();
        listItems.forEach(items => items ?this.fillMapDifferentStatsItem(items!): "")}),
      map(() => this.listDifferentsStatsItem.sort((a, b) => (mapSortAction.get(a.actionId) ?? 999) - (mapSortAction.get(b.actionId) ?? 999))));

     constructor() {
        super();
      }

      


    public ngAfterViewInit(): void {
      if(this.item) {
        this.item.equipEffects = this.item.equipEffects.sort((a, b) => (mapSortAction.get(a.actionId) ?? 999) - (mapSortAction.get(b.actionId) ?? 999));
        this.loaded$ = this.itemSelected$.pipe(
          takeUntil(this.destroy$),
          map((itemSelected) => 
          {
              this.resistances = this.item.resistance;    
              this.maitrises = this.item.maitrise;
              this.weight = calculWeight(this.resistances, this.maitrises, this.item.level);
              itemSelected.forEach(item => {
                if(item) {
                  this.resistances -=  item.resistance;
                  this.maitrises -= item.maitrise;
                  this.weight = calculWeight(this.resistances, this.maitrises, item.level)
                }
              })
              return true;
          }));
    
        this.initItemChoosen(this.item);
        
        this.cdr.detectChanges();
      }
    }

    protected setItem(item: Item): void {
      const itemType = this.itemTypeService.getItemType(item.itemTypeId);
      if(!itemType) {return}
      this.itemChooseService.setItem(itemType, item);
    }

    protected getTitle(item?: Item): string {
      if(!item) {return ""}
      return item.title[this.translateService.currentLang as keyof typeof item.title];
    }

    protected getBackgroundDifferentsStatsOnValue(value: number): string {
      if(value > 0) {
        return "green";
      } else if (value < 0) {
        return "red";
      }
      return "";
    }

    
  protected getBackgroundDifferentsStats(stats : DifferentStatsItem): string {
    const isMalus = this.actionsService.isAMalus(stats.actionId);
    if( stats.value > 0 && !isMalus 
      || stats.value < 0 && isMalus
      || stats.presentOnCurrentItem && !stats.presentOnEquippedItem && !isMalus) {
      return "green";
    } else if (
      stats.value < 0 && !isMalus
      || stats.value > 0 && isMalus
      || !stats.presentOnCurrentItem && stats.presentOnEquippedItem && isMalus) {
      return "red";
    }
    return "";
  }

  private getByActionId(actionId: IdActionsEnum, isArmureRecue: boolean): DifferentStatsItem | undefined {
    return this.listDifferentsStatsItem.find(x => x.actionId === actionId && x.isArmureRecue === isArmureRecue);
  }

  private pushSetDifferentsStatsItem(differentsStatsItem: DifferentStatsItem | undefined): void {
    if (!differentsStatsItem) { return; }
    this.listDifferentsStatsItem = this.listDifferentsStatsItem.filter(x => x.actionId !== differentsStatsItem.actionId || x.isArmureRecue !== differentsStatsItem.isArmureRecue);
    this.listDifferentsStatsItem.push(differentsStatsItem);
  }

  private fillListCurrentItem(): void {
    this.item.equipEffects.forEach(equipEffect => {
      const isArmureRecue = this.ARMURE_DONNEE_RECUE.includes(equipEffect.actionId) && equipEffect.params[4] ===  ParameterMajorActionEnum.ARMURE_RECUE;
      let effect = this.getByActionId(equipEffect.actionId, isArmureRecue);
      if(effect) {
        const tempParams = effect.params;
        tempParams[0] += equipEffect.params[0];
        effect = {
          ...effect,
          value: effect.value + equipEffect.params[0],
          params: tempParams,
          presentOnCurrentItem: true
        }

      } else {
        effect = {
          value:equipEffect.params[0],
          params: [...equipEffect.params],
          actionId: equipEffect.actionId,
          presentOnCurrentItem: true,
          presentOnEquippedItem: false,
          isArmureRecue: isArmureRecue
        }
      }

      this.pushSetDifferentsStatsItem(effect);
    })
  }

  private fillMapDifferentStatsItem(equippedItem: Item): void {
    
    equippedItem.equipEffects.forEach(equipEffect => {
      const isArmureRecue = this.ARMURE_DONNEE_RECUE.includes(equipEffect.actionId) && equipEffect.params[4] ===  ParameterMajorActionEnum.ARMURE_RECUE;
      let differentsStatsItem = this.getByActionId(equipEffect.actionId, isArmureRecue);
      const opposedStatsItem = this.item.equipEffects.find(x => this.actionsService.isOpposed(x, equipEffect));
      if(opposedStatsItem) {
        const tempParams = [...equipEffect.params];
        tempParams[0] = opposedStatsItem.params[0] + tempParams[0];
        differentsStatsItem = {
          value: opposedStatsItem.params[0] + equipEffect.params[0],
          params: tempParams,
          actionId: opposedStatsItem.actionId,
          presentOnCurrentItem: true,
          presentOnEquippedItem: true,
          isArmureRecue: isArmureRecue,
        };

      } else if(differentsStatsItem && differentsStatsItem.isArmureRecue === isArmureRecue) {
        const tempParams = differentsStatsItem.params;
        tempParams[0] -= equipEffect.params[0];
        differentsStatsItem = {
          ...differentsStatsItem,
          value: differentsStatsItem.value - equipEffect.params[0],
          params: tempParams,
          presentOnEquippedItem: true
        }
      } else {
        const tempParams = [...equipEffect.params];
        tempParams[0] = -tempParams[0];
        differentsStatsItem = {
          value: -equipEffect.params[0],
          params: tempParams,
          actionId: equipEffect.actionId,
          presentOnCurrentItem: false,
          presentOnEquippedItem: true,
          isArmureRecue: isArmureRecue,
        }
      }
      this.pushSetDifferentsStatsItem(differentsStatsItem);
    })
    
    this.calculDifferenceResistance();
  }

  private calculDifferenceResistance(): void {

    const resisElem = this.getByActionId(IdActionsEnum.RESISTANCES_ELEMENTAIRE, false);
    const resisList = [IdActionsEnum.RESISTANCES_FEU, IdActionsEnum.RESISTANCES_EAU, IdActionsEnum.RESISTANCES_AIR, IdActionsEnum.RESISTANCES_TERRE];


    if(resisElem && resisList.find(x => this.getByActionId(x, false))) {
      resisList.forEach(resis => {
        let differentsStats = this.getByActionId(resis, false);
        if(differentsStats) {
          differentsStats.params[0] += resisElem.params[0];
          differentsStats.value += resisElem.params[0];
          differentsStats.presentOnCurrentItem = true;
          differentsStats.presentOnEquippedItem = true;
        } else {
          differentsStats = {
            ...resisElem,
            actionId: resis,
            presentOnCurrentItem: true,
            presentOnEquippedItem: true
          }
        }
        this.pushSetDifferentsStatsItem(differentsStats);
      })
      this.listDifferentsStatsItem = this.listDifferentsStatsItem.filter(x => x.actionId !== IdActionsEnum.RESISTANCES_ELEMENTAIRE);
    }
  }
}
