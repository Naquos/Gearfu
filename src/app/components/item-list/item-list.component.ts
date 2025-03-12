import { Component, effect, input } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ItemsService } from '../../services/itemsService';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';

@Component({
  selector: 'app-item-list',
  imports: [ItemComponent, CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent  {
  public idsItemTypes = input<number[]>([]);
  public rarete = input<number[]>([]);
  public levelMin = input<number>(1);
  public levelMax = input<number>(245);

  protected items:Item[] = [];

  constructor(private itemsService: ItemsService) {
    effect(() => {
      this.itemsService.getItems(this.idsItemTypes(), this.rarete(), this.levelMin(), this.levelMax()).subscribe(_items => {this.items = _items} );
    })
  }

}
