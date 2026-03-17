import { Component, inject, input, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Option } from "../../form/search/search.component";
import { SearchListComponent } from "../../form/search-list/search-list.component";
import { ItemsService } from '../../../services/data/itemsService';
import { combineLatest, iif, map, of, switchMap, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { normalizeString } from '../../../models/utils/utils';
import { ImageService } from '../../../services/imageService';
import { Item } from '../../../models/data/item';
import { ColorRarityService } from '../../../services/colorRarityService';
import { FilterSearchBuildFormService } from '../../../services/form/filterSearchBuildFormService';

@Component({
  selector: 'app-search-list-item',
  imports: [SearchListComponent],
  templateUrl: './search-list-item.component.html',
  styleUrl: './search-list-item.component.scss',
})
export class SearchListItemComponent {
  public label = input<string>('search-list-item.item');

  protected options = signal<Option<Item>[]>([]);
  protected control = new FormControl<string>('', { nonNullable: true });
  private readonly itemsService = inject(ItemsService);
  private readonly translateService = inject(TranslateService);
  private readonly imageService = inject(ImageService);
  private readonly colorRarityService = inject(ColorRarityService);
  private readonly filterSearchBuildFormService = inject(FilterSearchBuildFormService);

  private readonly items$ = this.itemsService.fullItems$;

  constructor() {
    this.filterSearchBuildFormService.form.controls.idItems.setValue([]);
    combineLatest([this.items$, this.control.valueChanges])
      .pipe(switchMap(([items, search]) => iif(() => search.length > 2, of(items), of([]))))
      .pipe(map(items => items.filter(item => normalizeString(item.title[this.translateService.currentLang as keyof typeof item.title]).includes(normalizeString(this.control.value)))),
        map(items => this.itemWithGreatRarity(items)),
        map(setItem => Array.from(setItem).slice(0, 30)),
        tap(items => this.options.set(items.map(item => ({
          id: `${item.id}`,
          label: item.title[this.translateService.currentLang as keyof typeof item.title],
          displayLabel: `${item.title[this.translateService.currentLang as keyof typeof item.title]} (${item.level})`,
          imgUrl: this.imageService.getItemUrl(item.idImage),
          backgroundColor: this.colorRarityService.mapColors.get(item.rarity) ?? '',
          value: item,
        })))))
      .subscribe();
  }

  private itemWithGreatRarity(items: Item[]): Set<Item> {
    const map = new Map<string, Item>();
    items.forEach(item => {
      const existing = map.get(item.title[this.translateService.currentLang as keyof typeof item.title]);
      if (!existing || existing.rarity < item.rarity) {
        map.set(item.title[this.translateService.currentLang as keyof typeof item.title], item);
      }
    });
    return new Set(Array.from(map.values()));
  }

  protected onOptionsSelected(options: Set<Option<Item>>): void {
    const optionsList = Array.from(options);
    const result: string[][] = [];
    optionsList.forEach(option => {
      const itemList = this.itemsService.getItemsByName(option.value.title.fr);
      result.push(itemList.map(item => `${item.id}`));
    });
    this.filterSearchBuildFormService.form.controls.idItems.setValue(result);
  }
}
