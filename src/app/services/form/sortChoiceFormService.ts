import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SortChoiceEnum } from "../../models/enum/sortChoiceEnum";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class SortChoiceFormService extends AbstractFormService<FormControl<SortChoiceEnum>> {

  public static readonly DEFAULT_VALUE = SortChoiceEnum.MAITRISES;

  private sort = new BehaviorSubject<SortChoiceEnum>(SortChoiceFormService.DEFAULT_VALUE);
  public sort$ = this.sort.asObservable();

  constructor(protected override localStorageService: LocalStorageService) {
    super(KeyEnum.KEY_SORT_CHOICE, localStorageService, new FormControl<SortChoiceEnum>(SortChoiceFormService.DEFAULT_VALUE, { nonNullable: true }));
    this.init();
  }

  protected override handleChanges(value: SortChoiceEnum): void {
    this.sort.next(value)
  }
  public override setValue(value: SortChoiceEnum): void {
    this.form.setValue(value);
  }

  public setDefaultValue(): void {
    this.form.setValue(SortChoiceFormService.DEFAULT_VALUE);
  }
}