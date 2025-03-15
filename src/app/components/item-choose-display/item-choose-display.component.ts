import { Component, ComponentRef, input, OnInit } from '@angular/core';
import { ItemTypeEnum } from '../../models/itemTypeEnum';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { ColorRarityService } from '../../services/colorRarityService';
import { map, Observable } from 'rxjs';
import { ItemChooseService } from '../../services/itemChooseService';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ItemComponent } from '../item/item.component';
import { ItemTypeFormServices } from '../../services/itemTypeFormServices';

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

  
  private overlayRef: OverlayRef | null = null;

  constructor(protected colorRarityService: ColorRarityService,
              protected itemChooseService: ItemChooseService,
              protected itemTypeFormServices: ItemTypeFormServices,
              private overlay: Overlay
  ) {}

  openTooltip(event: MouseEvent, item: Item): void {
    this.closeTooltip();
    if (!this.overlayRef) {
      const positionStrategy = this.overlay.position()
        .flexibleConnectedTo(event.target as HTMLElement) // Position selon la souris
        .withPositions([{ 
          originX: 'center', originY: 'top',
          overlayX: 'center', overlayY: 'bottom',
          offsetY: 80
         }]);

      this.overlayRef = this.overlay.create({
        positionStrategy,
        hasBackdrop: false,
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
      });

      const tooltipPortal = new ComponentPortal(ItemComponent);
      const tooltipRef: ComponentRef<ItemComponent> = this.overlayRef.attach(tooltipPortal);

      tooltipRef.instance.item = item;
    }
  }

  closeTooltip(): void {
    this.overlayRef?.dispose();
    this.overlayRef = null;
  }

  ngOnInit(): void {
    this.$item = this.itemChooseService.getObsItem(this.itemType()).pipe(map(x => x[this.indexItem()]));
  }
}
