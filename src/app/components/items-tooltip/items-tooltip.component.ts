import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { ItemComponent } from "../item/item.component";
import { ItemTooltipComponent } from '../item-tooltip/item-tooltip.component';

@Component({
  selector: 'app-items-tooltip',
  imports: [CommonModule, ItemTooltipComponent],
  templateUrl: './items-tooltip.component.html',
  styleUrl: './items-tooltip.component.scss'
})
export class ItemsTooltipComponent {

  @Input()
  public item!: Item ;

  @Input()
  public itemsChoosen: Item[] = [];

}
