import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';
import { DisplayFilterService } from '../../../services/displayFilterService';
import { FiltersComponent } from "../filters/filters.component";
import { FilterSidebarService } from '../../../services/form-signal/filterSidebarService';
import { toSignal } from '@angular/core/rxjs-interop';
import { isMobile } from '../../../models/utils/utils';
import { ItemTypesComponent } from "../../form/item-types/item-types.component";
import { ItemLevelComponent } from "../../form/item-level/item-level.component";
import { SortChoiceComponent } from "../../form/sort-choice/sort-choice.component";
import { SearchItemNameComponent } from "../../form/search-item-name/search-item-name.component";
import { ButtonCheckboxComponent } from "../../form/button-checkbox/button-checkbox.component";
import { DisplayFavorisFormService } from '../../../services/form-signal/displayFavorisFormService';
import { MatIconModule } from '@angular/material/icon';
import { ItemChooseComponent } from '../item-choose/item-choose.component';
import { ActiveFiltersComponent } from '../active-filters/active-filters.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-list-item-router',
  imports: [ItemListComponent, FiltersComponent, ItemTypesComponent, ItemLevelComponent, SortChoiceComponent,
    SearchItemNameComponent, ButtonCheckboxComponent, MatIconModule, TranslateModule, ActiveFiltersComponent, ItemChooseComponent],
  templateUrl: './list-item-router.component.html',
  styleUrl: './list-item-router.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemRouterComponent {
  protected readonly displayFilterService = inject(DisplayFilterService);
  protected readonly filterSidebarService = inject(FilterSidebarService);
  protected readonly open = toSignal(this.filterSidebarService.open$);
  protected readonly displayFavorisFormService = inject(DisplayFavorisFormService);
  protected readonly isMobile = signal(isMobile());

  protected toggleFilters(): void {
    this.filterSidebarService.setValue(!this.open());
  }

  constructor() {
    const wideEnough = typeof window === 'undefined' || window.innerWidth >= 1400;
    this.filterSidebarService.setValue(wideEnough);
  }
}
