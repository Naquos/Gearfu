import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { SortChoiceEnum } from "../../models/enum/sortChoiceEnum";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class SortChoiceFormService extends AbstractFormService<FormControl<SortChoiceEnum>> {

  public static readonly DEFAULT_VALUE = SortChoiceEnum.MAITRISES;

  private readonly sort = new BehaviorSubject<SortChoiceEnum>(SortChoiceFormService.DEFAULT_VALUE);
  public readonly sort$ = this.sort.asObservable();
  
  protected readonly keyEnum = KeyEnum.KEY_SORT_CHOICE;
  public readonly form =  new FormControl<SortChoiceEnum>(SortChoiceFormService.DEFAULT_VALUE, { nonNullable: true });

  constructor() {
    super();
    this.init();
  }

  protected override handleChanges(value: SortChoiceEnum): void {
    this.sort.next(value)
  }
  public override setValue(value: SortChoiceEnum | null): void {
    this.form.setValue(value ?? SortChoiceFormService.DEFAULT_VALUE);
  }

  public setDefaultValue(): void {
    this.form.setValue(SortChoiceFormService.DEFAULT_VALUE);
  }
}