import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ItemsService } from "../itemsService";
import { Item } from "../../models/item";
import { ItemTypeServices } from "../ItemTypesServices";
import { ItemLevelFormService } from "./itemLevelFormService";
import { ItemTypeFormServices } from "./itemTypeFormServices";
import { RareteItemFormServices } from "./rareteItemFormService";
import { LocalStorageService } from "../localStorageService";
import { KeyEnum } from "../../models/keyEnum";

@Injectable({providedIn: 'root'})
export class SearchItemNameFormService {
    public form = new FormControl("")

  constructor(private itemService: ItemsService,
        private rareteItemFormServices: RareteItemFormServices,
        private itemTypeFormServices: ItemTypeFormServices,
        private itemTypeService: ItemTypeServices,
        private itemLevelFormService: ItemLevelFormService,
        private localStorageService: LocalStorageService
  ) {
    this.form.valueChanges.subscribe(x => {
      this.itemService.setItemName(x ?? ""); 
      this.localStorageService.setItem<string>(KeyEnum.KEY_SEARCH_ITEM_NAME, x ?? "")
    });
    this.form.setValue(this.localStorageService.getItem<string>(KeyEnum.KEY_SEARCH_ITEM_NAME) ?? "");
  }

  public setFilter(item :Item): void {
    this.rareteItemFormServices.setRarity();
    this.itemTypeFormServices.setItemType(this.itemTypeService.getItemType(item.itemTypeId));

    if(item.level <= 20) {
      this.itemLevelFormService.setLevel(0, 20);
    } else {
      const temp = Math.ceil((item.level - 20) / 15);
      this.itemLevelFormService.setLevel((temp - 1 ) * 15 + 20 + 1, temp * 15 + 20);
    }
  }

  public setDefaultValue(): void {
    this.form.setValue("");
  }
}