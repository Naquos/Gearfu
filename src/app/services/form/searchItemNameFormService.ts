import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ItemTypeServices } from "../data/ItemTypesServices";
import { ItemLevelFormService } from "./itemLevelFormService";
import { ItemTypeFormServices } from "./itemTypeFormServices";
import { RareteItemFormServices } from "./rareteItemFormService";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";
import { Item } from "../../models/data/item";

@Injectable({providedIn: 'root'})
export class SearchItemNameFormService extends AbstractFormService<FormControl<string>>{

  public static readonly DEFAULT_VALUE = "";
  private itemName = new BehaviorSubject<string>("");
  public itemName$ = this.itemName.asObservable();

  constructor(private rareteItemFormServices: RareteItemFormServices,
        private itemTypeFormServices: ItemTypeFormServices,
        private itemTypeService: ItemTypeServices,
        private itemLevelFormService: ItemLevelFormService,
        protected override localStorageService: LocalStorageService
  ) {
    super(KeyEnum.KEY_SEARCH_ITEM_NAME, localStorageService, new FormControl<string>("", { nonNullable: true }));
    this.init();
  }

  protected override handleChanges(value: string): void {
    this.itemName.next(value ?? SearchItemNameFormService.DEFAULT_VALUE); 
  }
  public override setValue(value: string): void {
    this.form.setValue(value);
  }

  public setDefaultValue(): void {
    this.form.setValue(SearchItemNameFormService.DEFAULT_VALUE);
  }

  public setFilter(item :Item): void {
    this.rareteItemFormServices.setRarity();
    this.itemTypeFormServices.setItemType(this.itemTypeService.getItemType(item.itemTypeId));

    if(item.level <= 20) {
      this.itemLevelFormService.setValue({levelMin:0, levelMax:20});
    } else {
      const temp = Math.ceil((item.level - 20) / 15);
      this.itemLevelFormService.setValue({levelMin: (temp - 1 ) * 15 + 20 + 1, levelMax: temp * 15 + 20});
    }
  }
}