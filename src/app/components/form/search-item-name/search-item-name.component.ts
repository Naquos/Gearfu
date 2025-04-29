import { Component } from '@angular/core';
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

@Component({
  selector: 'app-search-item-name',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule, 
    TranslateModule, 
    MatAutocompleteModule, 
    CommonModule
  ],
  templateUrl: './search-item-name.component.html',
  styleUrl: './search-item-name.component.scss'
})
export class SearchItemNameComponent {
  protected options$?: Observable<Item[]>;

  constructor(
    private readonly translateService: TranslateService,
    private readonly itemService: ItemsService, 
    protected readonly colorRarityService: ColorRarityService,
    protected readonly searchItemNameFormService: SearchItemNameFormService) 
  {
    this.options$ = this.itemService.itemsFilterByItemName$.pipe(map(x => x.slice(0, 10)))
  }

  protected getTitle(item: Item): string {
    return item.title[this.translateService.currentLang as keyof typeof item.title]
  }
}
