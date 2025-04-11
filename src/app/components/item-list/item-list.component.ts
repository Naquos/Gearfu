import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ItemsService } from '../../services/data/itemsService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  imports: [ItemComponent, CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent  {

  constructor(protected itemsService: ItemsService) {  }

}
