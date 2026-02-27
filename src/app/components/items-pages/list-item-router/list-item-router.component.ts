import { Component, inject, signal } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';
import { DisplayFilterService } from '../../../services/displayFilterService';
import { FiltersComponent } from "../filters/filters.component";
import { ActivateDirective } from '../../../directives/activate.directive';
import { FilterSidebarService } from '../../../services/form/filterSidebarService';
import { toSignal } from '@angular/core/rxjs-interop';
import { RecapStatsComponent } from "../recap-stats/recap-stats.component";
import { isMobile } from '../../../models/utils/utils';

@Component({
  selector: 'app-list-item-router',
  imports: [ItemListComponent, FiltersComponent, ActivateDirective, RecapStatsComponent],
  templateUrl: './list-item-router.component.html',
  styleUrl: './list-item-router.component.scss'
})
export class ListItemRouterComponent {
  protected readonly displayFilterService = inject(DisplayFilterService);
  protected readonly filterSidebarService = inject(FilterSidebarService);
  protected readonly open = toSignal(this.filterSidebarService.open$);
  protected readonly isMobile = signal(isMobile());

}
