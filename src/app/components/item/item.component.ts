import { AfterViewInit, ChangeDetectorRef, Component,ElementRef,Input, ViewContainerRef } from '@angular/core';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { ActionService } from '../../services/actionService';
import { MaitrisesServices } from '../../services/maitrisesService';
import { combineLatest, take, takeUntil } from 'rxjs';
import { ItemsService } from '../../services/itemsService';
import { ColorRarityService } from '../../services/colorRarityService';
import { ItemChooseService } from '../../services/itemChooseService';
import { ItemTypeServices } from '../../services/ItemTypesServices';
import { MatIconModule } from '@angular/material/icon';
import { TooltipService } from '../../services/TooltipService';
import { ItemsTooltipComponent } from '../items-tooltip/items-tooltip.component';
import { ItemAbstractComponent } from '../abstract/itemAbstract.component';

@Component({
  selector: 'app-item',
  imports: [CommonModule, MatIconModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent extends ItemAbstractComponent implements AfterViewInit {
  
  @Input()
  public item!: Item;
  

  constructor(
    private viewContainerRef: ViewContainerRef,
    private el: ElementRef,
    protected _actionsService : ActionService,
    protected maitrisesService : MaitrisesServices,
    protected itemService : ItemsService,
    protected colorRarityService: ColorRarityService,
    protected _itemChooseService: ItemChooseService,
    protected _itemTypeService: ItemTypeServices,
    protected tooltipService: TooltipService<{itemsChoosen: Item[], item: Item}>,
    protected cdr: ChangeDetectorRef,
  ) {
    super(_itemTypeService, _itemChooseService, _actionsService);
  }

  protected setItemChoosen() : void {
    this.itemChooseService.setItem(this.itemTypeService.getItemType(this.item.itemTypeId), this.item)
  }


  protected itemIsPresentAndNotChoosen(items: (Item | undefined)[]): boolean {
    return !!items.find(x => x !== undefined) && !items.find(item => item?.id === this.item.id);
  }

  ngAfterViewInit(): void {
    if(this.item) {
      this.item.equipEffects = this.item.equipEffects.sort((a, b) => (this.mapSortAction.get(a.actionId) ?? 999) - (this.mapSortAction.get(b.actionId) ?? 999));
      combineLatest([this.maitrisesService.nbElements$, this.maitrisesService.idMaitrises$, this.itemService.multiplicateurElem$])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([nbElements, idMaitrises, multiplicateurElem]) => 
        {
            this.resistances = this.itemService.calculResistancesForAnItem(this.item);    
            this.maitrises = this.item ? this.itemService.calculMaitrisesForAnItem(this.item, nbElements, idMaitrises, multiplicateurElem) : 0;
        })
  
      this.initItemChoosen(this.item);
      this.cdr.detectChanges();
    }
  }

  protected openTooltip(event: MouseEvent, item: Item): void {
    const mouseOnRight = event.pageX > window.screen.width / 2;

    this.tooltipService.closeTooltip();
    this.itemChoosen$.pipe(take(1)).subscribe(itemsChoosen => {
        this.tooltipService.openTooltip(this.viewContainerRef, ItemsTooltipComponent, event, {item, itemsChoosen},
          [{ 
            originX: 'center', originY: 'top',
            overlayX: 'center', overlayY: 'bottom',
            offsetY: 80, offsetX: mouseOnRight ? -this.el.nativeElement.offsetWidth - 380 : 340
          }], false
        );
      })
  }

  protected openEncyclopedie(itemId: number): void {
    window.open('https://www.wakfu.com/fr/mmorpg/encyclopedie/armures/' + itemId);
  }
}
