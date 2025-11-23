import { inject, Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ItemTypeServices } from "../data/ItemTypesServices";
import { ItemLevelFormService } from "./itemLevelFormService";
import { ItemTypeFormServices } from "./itemTypeFormServices";
import { RareteItemFormServices } from "./rareteItemFormService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";
import { Item } from "../../models/data/item";
import { MajorPresentFormService } from "./majorPresentFormService";

@Injectable({providedIn: 'root'})
export class SearchItemNameFormService extends AbstractFormService<FormControl<string>>{

  private readonly rareteItemFormServices = inject(RareteItemFormServices);
  private readonly itemTypeFormServices = inject(ItemTypeFormServices);
  private readonly itemTypeService = inject(ItemTypeServices);
  private readonly itemLevelFormService = inject(ItemLevelFormService);
  private readonly majorPresentFormService = inject(MajorPresentFormService);

  public static readonly DEFAULT_VALUE = "";
  private readonly itemName = new BehaviorSubject<string>("");
  public readonly itemName$ = this.itemName.asObservable();

  protected readonly keyEnum = KeyEnum.KEY_SEARCH_ITEM_NAME;
  public readonly form =  new FormControl<string>(SearchItemNameFormService.DEFAULT_VALUE, { nonNullable: true });

  constructor() {
    super();
    this.init();
  }

  protected override handleChanges(value: string): void {
    this.itemName.next(value ?? SearchItemNameFormService.DEFAULT_VALUE); 
  }
  public override setValue(value: string | null): void {
    this.form.setValue(value ?? SearchItemNameFormService.DEFAULT_VALUE);
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