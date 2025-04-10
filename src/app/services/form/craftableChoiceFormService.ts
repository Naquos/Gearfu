import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ItemsService } from "../itemsService";
import { CraftableChoiceEnum } from "../../models/craftableChoiceEnum";
import { filter, tap } from "rxjs";
import { LocalStorageService } from "../localStorageService";
import { KeyEnum } from "../../models/keyEnum";

@Injectable({providedIn: 'root'})
export class CraftableChoiceFormService {
  public static readonly DEFAULT_VALUE = CraftableChoiceEnum.CRAFT_DROP;
  public form = new FormControl<CraftableChoiceEnum>(CraftableChoiceFormService.DEFAULT_VALUE);

  constructor(private itemService: ItemsService, private localStorageService: LocalStorageService) {
      this.form.valueChanges
        .pipe(filter(value => value !== null), tap(value => this.localStorageService.setItem<CraftableChoiceEnum>(KeyEnum.KEY_CRAFTABLE_CHOICE, value)))
        .subscribe(value => this.itemService.setCraftable(value))
      this.form.setValue(this.localStorageService.getItem<CraftableChoiceEnum>(KeyEnum.KEY_CRAFTABLE_CHOICE) ?? CraftableChoiceFormService.DEFAULT_VALUE);
  }

  public setDefaultValue(): void {
    this.form.setValue(CraftableChoiceFormService.DEFAULT_VALUE);
  }
}