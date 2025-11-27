import { Component, inject } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ItemsService } from '../../services/data/itemsService';
import { CommonModule } from '@angular/common';
import { ItemSkeletonComponent } from '../item-skeleton/item-skeleton.component';

@Component({
  selector: 'app-item-list',
  imports: [ItemComponent, CommonModule, ItemSkeletonComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  protected readonly itemsService = inject(ItemsService);
  protected readonly skeletonArray = Array(36).fill(0);
}
