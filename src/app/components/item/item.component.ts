import { AfterViewInit, ChangeDetectorRef, Component,ElementRef,Input, ViewContainerRef } from '@angular/core';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { ActionService } from '../../services/actionService';
import { EquipEffects } from '../../models/equipEffects';
import { MaitrisesServices } from '../../services/maitrisesService';
import { BehaviorSubject, combineLatest, filter, map, Observable, take, tap } from 'rxjs';
import { ItemsService } from '../../services/itemsService';
import { IdActionsEnum } from '../../models/idActionsEnum';
import { ColorRarityService } from '../../services/colorRarityService';
import { ItemChooseService } from '../../services/itemChooseService';
import { ItemTypeServices } from '../../services/ItemTypesServices';
import { MatIconModule } from '@angular/material/icon';
import { ItemTypeEnum } from '../../models/itemTypeEnum';
import { DifferentStatsItem } from '../../models/differentsStatsItem';
import { TooltipService } from '../../services/TooltipService';

@Component({
  selector: 'app-item',
  imports: [CommonModule, MatIconModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements AfterViewInit {
  
  @Input()
  public item!: Item;
  @Input()
  public displayDiff = false;
  
  protected resistances = 0;
  protected maitrises = 0;
  protected IdActionEnum = IdActionsEnum;
  protected mapSortAction= new Map<IdActionsEnum, number>();
  Math = Math;


  protected itemChoosen$ = new BehaviorSubject<(Item | undefined)[]>([]);
  protected differentStatsItemList$ = this.itemChoosen$.pipe(
    filter(items => items.length !== 0),
    map(items => items[0] ? this.fillMapDifferentStatsItem(items[0]) : new Map<IdActionsEnum, DifferentStatsItem>()),
    map(items => Array.from(items.values()).sort((a, b) => (this.mapSortAction.get(a.actionId) ?? 999) - (this.mapSortAction.get(b.actionId) ?? 999)))
  );

  constructor(
    private viewContainerRef: ViewContainerRef,
    protected actionsService : ActionService,
    protected maitrisesService : MaitrisesServices,
    protected itemService : ItemsService,
    protected colorRarityService: ColorRarityService,
    protected itemChooseService: ItemChooseService,
    protected itemTypeService: ItemTypeServices,
    protected cdr: ChangeDetectorRef,
    protected tooltipService: TooltipService<{item: Item}>,
    private el: ElementRef
  ) {
    this.initMapSortAction();
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
        differentsStatsItem = {
          value: -equipEffect.params[0],
          params: [...equipEffect.params],
          actionId: equipEffect.actionId,
          presentOnCurrentItem: false,
          presentOnEquippedItem: true
        }
      }
      mapDifferentStatsItem.set(equipEffect.actionId, differentsStatsItem);
    })
    return mapDifferentStatsItem
  }

  protected getBackgroundDifferentsStats(stats : DifferentStatsItem): string {
    if(stats.presentOnCurrentItem && !stats.presentOnEquippedItem || stats.value > 0) {
      return "green";
    } else if (!stats.presentOnCurrentItem && stats.presentOnEquippedItem || stats.value < 0) {
      return "red";
    }
    return "";
  }

  protected getBackgroundDifferentsStatsOnValue(value: number): string {
    if(this.displayDiff) {
      if(value > 0) {
        return "green";
      } else if (value < 0) {
        return "red";
      }
    }
    return "";
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


  ngAfterViewInit(): void {
    if(this.item) {
      this.item.equipEffects = this.item.equipEffects.sort((a, b) => (this.mapSortAction.get(a.actionId) ?? 999) - (this.mapSortAction.get(b.actionId) ?? 999));
      combineLatest([this.maitrisesService.nbElements$, this.maitrisesService.idMaitrises$, this.itemService.multiplicateurElem$, this.itemChoosen$])
      .subscribe(([nbElements, idMaitrises, multiplicateurElem, itemChoosen]) => 
        {
            this.resistances = this.itemService.calculResistancesForAnItem(this.item);    
            this.maitrises = this.item ? this.itemService.calculMaitrisesForAnItem(this.item, nbElements, idMaitrises, multiplicateurElem) : 0;
            if(this.displayDiff && itemChoosen[0]) {
              this.resistances -=  this.itemService.calculResistancesForAnItem(itemChoosen[0]);
              this.maitrises -= this.itemService.calculMaitrisesForAnItem(itemChoosen[0], nbElements, idMaitrises, multiplicateurElem);
            }
        })
  
      this.initItemChoosen();
      
      this.cdr.detectChanges();
    }
  }

  private initItemChoosen(): void {
    if(this.item) {
      const itemTypeId = this.itemTypeService.getItemType(this.item.itemTypeId);
      let obs = new Observable<(Item | undefined)[]>();
      if (itemTypeId === ItemTypeEnum.DAGUE) {
        obs = this.itemChooseService.getObsItem(ItemTypeEnum.BOUCLIER);
      } else if (itemTypeId === ItemTypeEnum.DEUX_MAINS) {
        obs = this.itemChooseService.getObsItem(ItemTypeEnum.UNE_MAIN);
      } else {
        obs = this.itemChooseService.getObsItem(itemTypeId);
      }

      obs.pipe(
        filter(x => x !== undefined && x[0] !== undefined && x[0]?.id !== this.item.id ))
      .subscribe(x => this.itemChoosen$.next(x))
    }
  }

  protected openTooltip(event: MouseEvent, item: Item): void {
    if(item) {
      const listItemsWidth = window.screen.width;
      const mouseOnRight = event.pageX > listItemsWidth / 2

      this.tooltipService.openTooltip(this.viewContainerRef, ItemComponent, event, {item, displayDiff: true},
        [{ 
          originX: 'center', originY: 'top',
          overlayX: 'center', overlayY: 'bottom',
          offsetY: 80, offsetX: mouseOnRight ? -this.el.nativeElement.offsetWidth - 50 : 230
         }], false
      );
    }
  }

  protected openEncyclopedie(itemId: number): void {
    window.open('https://www.wakfu.com/fr/mmorpg/encyclopedie/armures/' + itemId);
  }

  protected displayEffect(effect: EquipEffects | DifferentStatsItem): string {
    const descriptionEffect = this.actionsService.getEffectById(effect.actionId).split(":");
    const symbol = this.actionsService.isBuff(effect.actionId) ? "" : "-"
      if(effect.actionId === IdActionsEnum.ARMURE_DONNEE_RECUE || effect.actionId === IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE) {
        const type = effect.params[4] === 120 ? "donnée" : "reçue"
        return symbol + effect.params[0] + "% armure " + type;
      } else if (effect.actionId === IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE) {
        return symbol + effect.params[0] + " maîtrises dans " + effect.params[2] + " éléments";
      } else if (effect.actionId === IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE) {
        return symbol + effect.params[0] + " résistances dans " + effect.params[2] + " éléments";
      } else if(effect.actionId === IdActionsEnum.PERTE_RESITANCES_ELEMENTAIRE_SANS_CAP) {
        return symbol + effect.params[0] + " Résistance Élémentaire";
      }
      return symbol + effect.params[0] + descriptionEffect[1];
  }
}
