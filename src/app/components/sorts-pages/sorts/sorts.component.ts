import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ClasseFormService } from '../../../services/form/classeFormService';
import { CodeDeckComponent } from '../code-deck/code-deck.component';
import { SelectedSortComponent } from '../selected-sort/selected-sort.component';
import { SortListComponent } from '../sort-list/sort-list.component';
import { SortSelectionService } from '../../../services/form/sortSelectionService';
import { EquippedSortsComponent } from '../equipped-sorts/equipped-sorts.component';
import { SortsConseillesComponent } from '../sorts-conseilles/sorts-conseilles.component';

@Component({
  selector: 'app-sorts',
  imports: [
    TranslateModule,
    CodeDeckComponent,
    SortsConseillesComponent,
    EquippedSortsComponent,
    SelectedSortComponent,
    SortListComponent
  ],
  templateUrl: './sorts.component.html',
  styleUrl: './sorts.component.scss'
})
export class SortsComponent {
  private readonly classeFormService = inject(ClasseFormService);
  private readonly sortSelectionService = inject(SortSelectionService);

  constructor() {
    this.classeFormService.classe$.subscribe(classe => {
      if (classe) {
        this.sortSelectionService.clearSelection();
      }
    });
  }
}
