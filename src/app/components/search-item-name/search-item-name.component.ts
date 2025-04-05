import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItemsService } from '../../services/itemsService';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item';
import { ColorRarityService } from '../../services/colorRarityService';
import { map, Observable } from 'rxjs';
import { RareteItemFormServices } from '../../services/rareteItemFormService';
import { ItemTypeFormServices } from '../../services/itemTypeFormServices';
import { ItemTypeServices } from '../../services/ItemTypesServices';
import { ItemLevelFormService } from '../../services/itemLevelFormService';

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
  protected form = new FormControl("");

  protected options$?: Observable<Item[]>;


  constructor(
    private translateService: TranslateService,
    private itemService: ItemsService, 
    private rareteItemFormServices: RareteItemFormServices,
    private itemTypeFormServices: ItemTypeFormServices,
    private itemTypeService: ItemTypeServices,
    private itemLevelFormService: ItemLevelFormService,
    protected colorRarityService: ColorRarityService) 
  {
    this.form.valueChanges.subscribe(x => this.itemService.setItemName(x ?? ""));
    this.options$ = this.itemService.itemsFilterByItemName$.pipe(map(x => x.slice(0, 10)))
  }

  protected getTitle(item: Item): string {
    return item.title[this.translateService.currentLang as keyof typeof item.title]
  }

  protected setFilter(item :Item): void {
    this.rareteItemFormServices.setRarity();
    this.itemTypeFormServices.setItemType(this.itemTypeService.getItemType(item.itemTypeId));

    if(item.level <= 20) {
      this.itemLevelFormService.setLevel(0, 20);
    } else {
      const temp = Math.ceil((item.level - 20) / 15);
      this.itemLevelFormService.setLevel((temp - 1 ) * 15 + 20 + 1, temp * 15 + 20);
    }
  }
}
