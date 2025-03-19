import { AfterViewInit, ChangeDetectorRef, Component, Input } from '@angular/core';
import { IdActionsEnum } from '../../models/idActionsEnum';
import { ActionService } from '../../services/actionService';
import { MaitrisesServices } from '../../services/maitrisesService';
import { ColorRarityService } from '../../services/colorRarityService';
import { ItemChooseService } from '../../services/itemChooseService';
import { ItemsService } from '../../services/itemsService';
import { ItemTypeServices } from '../../services/ItemTypesServices';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { DifferentStatsItem } from '../../models/differentsStatsItem';
import { combineLatest, filter, map } from 'rxjs';
import { ItemAbstractComponent } from '../abstract/ItemAbsractComponent';

@Component({
  selector: 'app-item-tooltip',
  imports: [CommonModule],
  templateUrl: './item-tooltip.component.html',
  styleUrl: './item-tooltip.component.scss'
})
export class ItemTooltipComponent extends ItemAbstractComponent implements AfterViewInit {

    @Input()
    public item!: Item;
    @Input()
    public indexItemChoosen = 0;

    
    protected differentStatsItemList$ = this.itemChoosen$.pipe(
      filter(items => items.length !== 0),
      map(items => items[this.indexItemChoosen] ? this.fillMapDifferentStatsItem(items[this.indexItemChoosen]!) : new Map<IdActionsEnum, DifferentStatsItem>()),
      map(items => Array.from(items.values()).sort((a, b) => (this.mapSortAction.get(a.actionId) ?? 999) - (this.mapSortAction.get(b.actionId) ?? 999))));

    protected itemSelected$ = this.itemChoosen$.pipe(
      filter(items => items.length !== 0),
      map(items => items[this.indexItemChoosen])
    )

     constructor(
        protected _actionsService : ActionService,
        protected maitrisesService : MaitrisesServices,
        protected itemService : ItemsService,
        protected colorRarityService: ColorRarityService,
        protected _itemChooseService: ItemChooseService,
        protected _itemTypeService: ItemTypeServices,
        protected cdr: ChangeDetectorRef,
      ) {
        super(_itemTypeService, _itemChooseService, _actionsService);
      }

      


    public ngAfterViewInit(): void {
      if(this.item) {
        this.item.equipEffects = this.item.equipEffects.sort((a, b) => (this.mapSortAction.get(a.actionId) ?? 999) - (this.mapSortAction.get(b.actionId) ?? 999));
        combineLatest([this.maitrisesService.nbElements$, this.maitrisesService.idMaitrises$, this.itemService.multiplicateurElem$, this.itemChoosen$])
        .subscribe(([nbElements, idMaitrises, multiplicateurElem, itemChoosen]) => 
          {
              this.resistances = this.itemService.calculResistancesForAnItem(this.item);    
              this.maitrises = this.item ? this.itemService.calculMaitrisesForAnItem(this.item, nbElements, idMaitrises, multiplicateurElem) : 0;
              if(itemChoosen[this.indexItemChoosen]) {
                this.resistances -=  this.itemService.calculResistancesForAnItem(itemChoosen[this.indexItemChoosen]!);
                this.maitrises -= this.itemService.calculMaitrisesForAnItem(itemChoosen[this.indexItemChoosen]!, nbElements, idMaitrises, multiplicateurElem);
              }
          })
    
        this.initItemChoosen(this.item);
        
        this.cdr.detectChanges();
      }
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

  private fillMapDifferentStatsItem(equippedItem: Item): Map<IdActionsEnum, DifferentStatsItem> {
    const mapDifferentStatsItem = new Map<IdActionsEnum, DifferentStatsItem>();
    
    this.item.equipEffects.forEach(equipEffect =>
      mapDifferentStatsItem.set(equipEffect.actionId, {
        value:equipEffect.params[0],
        params: [...equipEffect.params],
        actionId: equipEffect.actionId,
        presentOnCurrentItem: true,
        presentOnEquippedItem: false
      })
    )

    equippedItem.equipEffects.forEach(equipEffect => {
      let differentsStatsItem = mapDifferentStatsItem.get(equipEffect.actionId);
      if(differentsStatsItem) {
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
          presentOnEquippedItem: true
        }
      }
      mapDifferentStatsItem.set(equipEffect.actionId, differentsStatsItem);
    })
    return mapDifferentStatsItem
  }
}
