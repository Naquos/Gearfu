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
import { combineLatest, filter, map, Observable, takeUntil, tap } from 'rxjs';
import { ItemAbstractComponent } from '../abstract/itemAbstract.component';
import { StatesService } from '../../services/statesService';

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

    protected mapDifferentStatsItem = new Map<IdActionsEnum, DifferentStatsItem>();
    protected loaded$!:Observable<void>;

    protected itemSelected$ = this.itemChoosen$.pipe(
      filter(items => items.length !== 0),
      map(items => items.map(x =>x[this.indexItemChoosen])),
      map(items => items.length >=2 && items[0]?.id === items[1]?.id ? [items.find(x => x !== undefined)] : items),
    )
    
    protected differentStatsItemList$ = this.itemSelected$.pipe(
      takeUntil(this.destroy$),
      tap(listItems => {
        this.mapDifferentStatsItem.clear();
        this.fillMapCurrentItem();
        listItems.forEach(items => items ?this.fillMapDifferentStatsItem(items!): "")}),
      map(() => Array.from(this.mapDifferentStatsItem.values()).sort((a, b) => (this.mapSortAction.get(a.actionId) ?? 999) - (this.mapSortAction.get(b.actionId) ?? 999))));


     constructor(
        protected _actionsService : ActionService,
        protected maitrisesService : MaitrisesServices,
        protected itemService : ItemsService,
        protected colorRarityService: ColorRarityService,
        protected _itemChooseService: ItemChooseService,
        protected _itemTypeService: ItemTypeServices,
        protected cdr: ChangeDetectorRef,
        protected _statesService: StatesService
      ) {
        super(_itemTypeService, _itemChooseService, _actionsService, _statesService);
      }

      


    public ngAfterViewInit(): void {
      if(this.item) {
        this.item.equipEffects = this.item.equipEffects.sort((a, b) => (this.mapSortAction.get(a.actionId) ?? 999) - (this.mapSortAction.get(b.actionId) ?? 999));
        this.loaded$ = combineLatest([this.maitrisesService.nbElements$, this.maitrisesService.idMaitrises$, this.itemService.multiplicateurElem$, this.itemSelected$])
        .pipe(takeUntil(this.destroy$),
          map(([nbElements, idMaitrises, multiplicateurElem, itemSelected]) => 
          {
              this.resistances = this.itemService.calculResistancesForAnItem(this.item);    
              this.maitrises = this.item ? this.itemService.calculMaitrisesForAnItem(this.item, nbElements, idMaitrises, multiplicateurElem) : 0;
              itemSelected.forEach(item => {
                if(item) {
                  this.resistances -=  this.itemService.calculResistancesForAnItem(item);
                  this.maitrises -= this.itemService.calculMaitrisesForAnItem(item, nbElements, idMaitrises, multiplicateurElem);
                }
              })
          }));
    
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

  private fillMapCurrentItem(): void {
    this.item.equipEffects.forEach(equipEffect => {

      let effect = this.mapDifferentStatsItem.get(equipEffect.actionId)
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
          presentOnEquippedItem: false
        }
      }

      this.mapDifferentStatsItem.set(equipEffect.actionId, effect)
    })
  }

  private fillMapDifferentStatsItem(equippedItem: Item): void {
    
    equippedItem.equipEffects.forEach(equipEffect => {
      let differentsStatsItem = this.mapDifferentStatsItem.get(equipEffect.actionId);
      const opposedStatsItem = this.item.equipEffects.find(x => this.actionsService.isOpposed(x, equipEffect));
      if(opposedStatsItem) {
        const tempParams = [...equipEffect.params];
        tempParams[0] = opposedStatsItem.params[0] + tempParams[0];
        differentsStatsItem = {
          value: opposedStatsItem.params[0] + equipEffect.params[0],
          params: tempParams,
          actionId: opposedStatsItem.actionId,
          presentOnCurrentItem: true,
          presentOnEquippedItem: true
        };

      } else if(differentsStatsItem) {
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
      this.mapDifferentStatsItem.set(differentsStatsItem.actionId, differentsStatsItem);
    })
    
    this.calculDifferenceResistance();
  }

  private calculDifferenceResistance(): void {

    const resisElem = this.mapDifferentStatsItem.get(IdActionsEnum.RESISTANCES_ELEMENTAIRE);
    const resisList = [IdActionsEnum.RESISTANCES_FEU, IdActionsEnum.RESISTANCES_EAU, IdActionsEnum.RESISTANCES_AIR, IdActionsEnum.RESISTANCES_TERRE];


    if(resisElem && resisList.find(x => this.mapDifferentStatsItem.has(x))) {
      resisList.forEach(resis => {
        let differentsStats = this.mapDifferentStatsItem.get(resis);
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
        this.mapDifferentStatsItem.set(resis, differentsStats);
      })
      this.mapDifferentStatsItem.delete(IdActionsEnum.RESISTANCES_ELEMENTAIRE);
    }
  }
}
