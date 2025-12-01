import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTooltipComponent } from '../item-tooltip/item-tooltip.component';
import { Item } from '../../../models/data/item';

@Component({
  selector: 'app-items-tooltip',
  imports: [CommonModule, ItemTooltipComponent],
  templateUrl: './items-tooltip.component.html',
  styleUrl: './items-tooltip.component.scss'
})
export class ItemsTooltipComponent {

  @Input()
  public item!: Item;

  @Input()
  public itemsChoosen: Item[] = [];

}
