import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';
import { DisplayFilterService } from '../../../services/displayFilterService';
import { FiltersComponent } from "../filters/filters.component";
import { FilterSidebarService } from '../../../services/form-signal/filterSidebarService';
import { toSignal } from '@angular/core/rxjs-interop';
import { RecapStatsComponent } from "../recap-stats/recap-stats.component";
import { isMobile } from '../../../models/utils/utils';
import { ItemTypesComponent } from "../../form/item-types/item-types.component";
import { ItemLevelComponent } from "../../form/item-level/item-level.component";

@Component({
  selector: 'app-list-item-router',
  imports: [ItemListComponent, FiltersComponent, RecapStatsComponent, ItemTypesComponent, ItemLevelComponent],
  templateUrl: './list-item-router.component.html',
  styleUrl: './list-item-router.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemRouterComponent {
  protected readonly displayFilterService = inject(DisplayFilterService);
  protected readonly filterSidebarService = inject(FilterSidebarService);
  protected readonly open = toSignal(this.filterSidebarService.open$);
  protected readonly isMobile = signal(isMobile());

  constructor() {
    this.filterSidebarService.setValue(true);
  }
}
