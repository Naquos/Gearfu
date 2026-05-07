import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItemsService } from '../../../services/data/itemsService';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ColorRarityService } from '../../../services/colorRarityService';
import { iif, map, of, switchMap, tap } from 'rxjs';
import { SearchItemNameSignalFormService } from '../../../services/form-signal/searchItemNameSignalFormService';
import { Item } from '../../../models/data/item';
import { ImageService } from '../../../services/imageService';
import { Option } from "../search/search.component";
import { Field } from '@angular/forms/signals';
import { ImageFallbackDirective } from '../../../directives/imageFallback.directive';

@Component({
  selector: 'app-search-item-name',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    TranslateModule,
    MatAutocompleteModule,
    Field,
    ImageFallbackDirective,
  ],
  templateUrl: './search-item-name.component.html',
  styleUrl: './search-item-name.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchItemNameComponent {

  private readonly translateService = inject(TranslateService);
  private readonly itemService = inject(ItemsService);
  protected readonly colorRarityService = inject(ColorRarityService);
  protected readonly searchItemNameFormService = inject(SearchItemNameSignalFormService);
  protected readonly imageService = inject(ImageService);

  protected options = signal<Option<Item>[]>([]);

  constructor() {
    this.itemService.itemsFilterByItemName$.pipe(
      switchMap(items => iif(() => this.searchItemNameFormService.searchValue().length > 2,
        of(items), of([])
      )),
      map(x => x.slice(0, 10)),
      tap(items => this.options.set(items.map(item => ({
        id: `${item.id}`,
        label: this.getLabel(item),
        displayLabel: `${this.getLabel(item)} (${item.level})`,
        imgUrl: this.imageService.getItemUrl(item.idImage),
        backgroundColor: this.colorRarityService.mapColors.get(item.rarity) ?? '',
        value: item
      }))))).subscribe();
  }

  protected getLabel(item: Item): string {
    return `${item.title[this.translateService.currentLang as keyof typeof item.title]}`;
  }

  protected onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    const foundOption = this.options().find(option => option.label === event.option.value);
    if (foundOption) {
      this.searchItemNameFormService.setFilter(foundOption.value);
    }
  }
}
