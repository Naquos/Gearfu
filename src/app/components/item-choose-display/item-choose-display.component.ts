import { Component, input, OnInit, ViewContainerRef } from '@angular/core';
import { ItemTypeEnum } from '../../models/itemTypeEnum';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { ColorRarityService } from '../../services/colorRarityService';
import { map, Observable } from 'rxjs';
import { ItemChooseService } from '../../services/itemChooseService';
import { ItemTypeFormServices } from '../../services/itemTypeFormServices';
import { TooltipService } from '../../services/TooltipService';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-item-choose-display',
  imports: [CommonModule],
  templateUrl: './item-choose-display.component.html',
  styleUrl: './item-choose-display.component.scss'
})
export class ItemChooseDisplayComponent implements OnInit {
  public backgroundItemType = input.required<string>();
  public itemType = input.required<ItemTypeEnum>();
  public indexItem = input<number>(0);
  protected $item!: Observable<Item | undefined>;

  

  constructor(protected colorRarityService: ColorRarityService,
              protected itemChooseService: ItemChooseService,
              protected itemTypeFormServices: ItemTypeFormServices,
              protected tooltipService: TooltipService<{item: Item}>,
              private viewContainerRef: ViewContainerRef
  ) {}



  ngOnInit(): void {
    this.$item = this.itemChooseService.getObsItem(this.itemType()).pipe(map(x => x[this.indexItem()]));
  }

  protected openTooltip(event: MouseEvent, item: Item): void {
    if(item) {
      this.tooltipService.openTooltip(this.viewContainerRef, ItemComponent, event, {item});
    }
  }

  protected setFilter():void {
    if(this.itemType() === ItemTypeEnum.BOUCLIER) {
      this.itemTypeFormServices.setItemType(this.itemType(), ItemTypeEnum.DAGUE)
    } else if(this.itemType() === ItemTypeEnum.UNE_MAIN) {
      this.itemTypeFormServices.setItemType(this.itemType(), ItemTypeEnum.DEUX_MAINS)
    } else {
      this.itemTypeFormServices.setItemType(this.itemType())
    }
  }
}
