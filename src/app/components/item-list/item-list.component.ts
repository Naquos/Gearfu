import { Component, effect, input } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ItemsService } from '../../services/itemsService';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { first } from 'rxjs';
import { ItemTypeFormServices } from '../../services/itemTypeFormServices';

@Component({
  selector: 'app-item-list',
  imports: [ItemComponent, CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent  {
  public rarete = input<number[]>([]);
  public levelMin = input<number>(1);
  public levelMax = input<number>(245);

  protected items:Item[] = [];

  constructor(private itemsService: ItemsService,
            private itemTypeFormServices: ItemTypeFormServices) {
    effect(() => {
      this.itemTypeFormServices.selected$.subscribe(ids => {
        this.itemsService.getItems(ids, this.rarete(), this.levelMin(), this.levelMax()).subscribe(_items => {this.items = _items} );
      })
    })
  }

}
