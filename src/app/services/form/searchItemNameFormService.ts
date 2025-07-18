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
import { MajorPresentFormService } from "./majorPresentFormService";

@Injectable({providedIn: 'root'})
export class SearchItemNameFormService extends AbstractFormService<FormControl<string>>{

  public static readonly DEFAULT_VALUE = "";
  private readonly itemName = new BehaviorSubject<string>("");
  public readonly itemName$ = this.itemName.asObservable();

  constructor(private readonly rareteItemFormServices: RareteItemFormServices,
        private readonly itemTypeFormServices: ItemTypeFormServices,
        private readonly itemTypeService: ItemTypeServices,
        private readonly itemLevelFormService: ItemLevelFormService,
        private readonly majorPresentFormService: MajorPresentFormService,
        protected override readonly localStorageService: LocalStorageService
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
    this.rareteItemFormServices.setDefaultValue();
    this.majorPresentFormService.setDefaultValue();
    const itemType = this.itemTypeService.getItemType(item.itemTypeId);
    if(!itemType) {return}
    this.itemTypeFormServices.setItemType(itemType);

    if(item.level <= 20) {
      this.itemLevelFormService.setValue({levelMin:0, levelMax:20});
    } else {
      const temp = Math.ceil((item.level - 20) / 15);
      this.itemLevelFormService.setValue({levelMin: (temp - 1 ) * 15 + 20 + 1, levelMax: temp * 15 + 20});
    }
  }
}