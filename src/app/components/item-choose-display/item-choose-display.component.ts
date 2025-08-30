import { Component, inject, input, OnInit, ViewContainerRef } from '@angular/core';
import { ItemTypeEnum } from '../../models/enum/itemTypeEnum';
import { CommonModule } from '@angular/common';
import { ColorRarityService } from '../../services/colorRarityService';
import { map, Observable } from 'rxjs';
import { ItemChooseService } from '../../services/itemChooseService';
import { ItemTypeFormServices } from '../../services/form/itemTypeFormServices';
import { TooltipService } from '../../services/TooltipService';
import { ItemComponent } from '../item/item.component';
import { Item } from '../../models/data/item';
import { ImageService } from '../../services/imageService';
import { ImageFallbackDirective } from '../../directives/imageFallback.directive';

@Component({
  selector: 'app-item-choose-display',
  imports: [CommonModule, ImageFallbackDirective],
  templateUrl: './item-choose-display.component.html',
  styleUrl: './item-choose-display.component.scss'
})
export class ItemChooseDisplayComponent implements OnInit {
  protected readonly colorRarityService = inject(ColorRarityService);
  protected readonly itemChooseService = inject(ItemChooseService);
  protected readonly itemTypeFormServices = inject(ItemTypeFormServices);
  protected readonly tooltipService = inject(TooltipService<{item: Item}>);
  private readonly viewContainerRef = inject(ViewContainerRef);
  protected readonly imageService = inject(ImageService);

  public readonly backgroundItemType = input.required<string>();
  public readonly itemType = input.required<ItemTypeEnum>();
  public readonly indexItem = input<number>(0);
  protected $item!: Observable<Item | undefined>;

  ngOnInit(): void {
    this.$item = this.itemChooseService.getObsItem(this.itemType()).pipe(map(x => x[this.indexItem()]));
  }

  protected openTooltip(event: MouseEvent, item: Item): void {
    if(item && window.innerWidth > 700) {
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
