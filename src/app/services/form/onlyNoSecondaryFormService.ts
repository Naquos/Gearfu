import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ItemsService } from "../itemsService";
import { LocalStorageService } from "../localStorageService";
import { KeyEnum } from "../../models/keyEnum";

@Injectable({providedIn: 'root'})
export class OnlyNoSecondaryFormService {
  public static readonly DEFAULT_VALUE = false;
  public form = new FormControl<boolean>(OnlyNoSecondaryFormService.DEFAULT_VALUE);

  constructor(private itemService: ItemsService, private localStorageService: LocalStorageService) {
    this.form.valueChanges.subscribe(value => 
      {
        this.itemService.setOnlyNoSecondary(value ?? false);
        this.localStorageService.setItem(KeyEnum.KEY_ONLY_NO_SECONDARY, value)
      });
    this.form.setValue(this.localStorageService.getItem(KeyEnum.KEY_ONLY_NO_SECONDARY) ?? OnlyNoSecondaryFormService.DEFAULT_VALUE);
  }

  public setValue(value: boolean): void {
    this.form.setValue(value);
  }

  public setDefaultValue(): void {
    this.form.setValue(OnlyNoSecondaryFormService.DEFAULT_VALUE);
  }
}