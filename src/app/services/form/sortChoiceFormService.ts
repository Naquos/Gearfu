import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ItemsService } from "../itemsService";
import { filter, tap } from "rxjs";
import { SortChoiceEnum } from "../../models/sortChoiceEnum";
import { LocalStorageService } from "../localStorageService";
import { KeyEnum } from "../../models/keyEnum";

@Injectable({providedIn: 'root'})
export class SortChoiceFormService {
  public static readonly DEFAULT_VALUE = SortChoiceEnum.MAITRISES;
  public form = new FormControl<SortChoiceEnum>(SortChoiceFormService.DEFAULT_VALUE);

  constructor(private itemService: ItemsService, private localStorageService: LocalStorageService) {
    this.form.valueChanges
      .pipe(
        filter(value => value !== null),
        tap(value => this.localStorageService.setItem<SortChoiceEnum>(KeyEnum.KEY_SORT_CHOICE, value ?? SortChoiceFormService.DEFAULT_VALUE)))
      .subscribe(value => this.itemService.setSort(value))
    this.form.setValue(this.localStorageService.getItem<SortChoiceEnum>(KeyEnum.KEY_SORT_CHOICE) ?? SortChoiceFormService.DEFAULT_VALUE);
  }

  public setDefaultValue(): void {
    this.form.setValue(SortChoiceFormService.DEFAULT_VALUE);
  }
}