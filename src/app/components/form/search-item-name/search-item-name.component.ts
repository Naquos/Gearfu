import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItemsService } from '../../../services/data/itemsService';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { ColorRarityService } from '../../../services/colorRarityService';
import { iif, map, of, switchMap, tap } from 'rxjs';
import { SearchItemNameFormService } from '../../../services/form/searchItemNameFormService';
import { Item } from '../../../models/data/item';
import { ImageService } from '../../../services/imageService';
import { Option, SearchComponent } from "../search/search.component";

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
    SearchComponent
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

  protected options = signal<Option<Item>[]>([]);

  constructor() {
    this.itemService.itemsFilterByItemName$.pipe(
      switchMap(items => iif(() => this.searchItemNameFormService.form.value.length > 2,
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

  protected onOptionSelected(selected: string): void {
    const foundOption = this.options().find(option => option.label === selected);
    if (foundOption) {
      this.searchItemNameFormService.setFilter(foundOption.value);
    }
  }
}
