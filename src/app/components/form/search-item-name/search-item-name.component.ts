import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItemsService } from '../../../services/data/itemsService';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { ColorRarityService } from '../../../services/colorRarityService';
import { map, Observable } from 'rxjs';
import { SearchItemNameFormService } from '../../../services/form/searchItemNameFormService';
import { Item } from '../../../models/data/item';
import { ImageService } from '../../../services/imageService';
import { ImageFallbackDirective } from '../../../directives/imageFallback.directive';

@Component({
  selector: 'app-search-item-name',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule, 
    TranslateModule, 
    MatAutocompleteModule, 
    CommonModule,
    ImageFallbackDirective
  ],
  templateUrl: './search-item-name.component.html',
  styleUrl: './search-item-name.component.scss'
})
export class SearchItemNameComponent {

  private readonly translateService = inject(TranslateService);
  private readonly itemService = inject(ItemsService);
  protected readonly colorRarityService = inject(ColorRarityService);
  protected readonly searchItemNameFormService = inject(SearchItemNameFormService);
  protected readonly imageService = inject(ImageService);

  protected options$?: Observable<Item[]>;

  constructor() {
    this.options$ = this.itemService.itemsFilterByItemName$.pipe(map(x => x.slice(0, 10)))
  }

  protected getTitle(item: Item): string {
    return item.title[this.translateService.currentLang as keyof typeof item.title]
  }
}
