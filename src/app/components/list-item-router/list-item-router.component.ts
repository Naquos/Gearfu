import { Component, inject } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';
import { DisplayFilterService } from '../../services/displayFilterService';

@Component({
  selector: 'app-list-item-router',
  imports: [ItemListComponent],
  templateUrl: './list-item-router.component.html',
  styleUrl: './list-item-router.component.scss'
})
export class ListItemRouterComponent {
  protected displayFilterService = inject(DisplayFilterService);
}
