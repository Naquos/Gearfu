import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit, ViewContainerRef } from '@angular/core';
import { Observable, filter, map, startWith } from 'rxjs';
import { ImageFallbackDirective } from '../../../directives/imageFallback.directive';
import { Item } from '../../../models/data/item';
import { ItemTypeEnum } from '../../../models/enum/itemTypeEnum';
import { ColorRarityService } from '../../../services/colorRarityService';
import { ItemTypeFormServices } from '../../../services/form/itemTypeFormServices';
import { ImageService } from '../../../services/imageService';
import { ItemChooseService } from '../../../services/itemChooseService';
import { TooltipService } from '../../../services/TooltipService';
import { ItemComponent } from '../item/item.component';
import { Router } from '@angular/router';
import { ActivateDirective } from "../../../directives/activate.directive";

@Component({
  selector: 'app-item-choose-display',
  imports: [CommonModule, ImageFallbackDirective, ActivateDirective],
  templateUrl: './item-choose-display.component.html',
  styleUrl: './item-choose-display.component.scss',
  host: {
    ngSkipHydration: 'true'
  }
})
export class ItemChooseDisplayComponent implements OnInit {
  protected readonly colorRarityService = inject(ColorRarityService);
  protected readonly itemChooseService = inject(ItemChooseService);
  protected readonly itemTypeFormServices = inject(ItemTypeFormServices);
  protected readonly tooltipService = inject(TooltipService<{item: Item}>);
  private readonly viewContainerRef = inject(ViewContainerRef);
  protected readonly imageService = inject(ImageService);
  private readonly router = inject(Router);

  public readonly backgroundItemType = input.required<string>();
  public readonly itemType = input.required<ItemTypeEnum>();
  public readonly indexItem = input<number>(0);
  protected $item!: Observable<Item | undefined>;

  ngOnInit(): void {
    this.$item = this.itemChooseService.getObsItem(this.itemType()).pipe(
      filter(x => x !== undefined),
      map(x => x[this.indexItem()]!),
      startWith(undefined)
    );
  }

  protected openTooltip(event: MouseEvent, item: Item): void {
    this.tooltipService.forceClose();
    if(item) {
      this.tooltipService.cancelClose();
      // Le 7ème paramètre active le comportement "garder ouvert au survol"
      this.tooltipService.openTooltip(
        this.viewContainerRef, 
        ItemComponent, 
        event, 
        {item, isTooltip: true},
        undefined,  // connectedPosition
        true,       // withPush
        true        // keepOpenOnHover - ACTIVÉ ICI
      );
    }
  }

  protected onMouseLeave(): void {
    this.tooltipService.closeTooltip();
  }

  protected setFilter():void {
    const currentFragment = typeof window !== 'undefined' ? window.location.hash.substring(1) : '';
    this.router.navigate(["/"], {
            fragment: currentFragment || undefined
    });
    if(this.itemType() === ItemTypeEnum.BOUCLIER) {
      this.itemTypeFormServices.setItemType(this.itemType(), ItemTypeEnum.DAGUE)
    } else if(this.itemType() === ItemTypeEnum.UNE_MAIN) {
      this.itemTypeFormServices.setItemType(this.itemType(), ItemTypeEnum.DEUX_MAINS)
    } else {
      this.itemTypeFormServices.setItemType(this.itemType())
    }
  }
}
