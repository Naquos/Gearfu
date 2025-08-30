import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class OnlyNoSecondaryFormService extends AbstractFormService<FormControl<boolean>> {

  public static readonly DEFAULT_VALUE = false;

  private readonly onlyNoSecondary = new BehaviorSubject<boolean>(false);
  public readonly onlyNoSecondary$ = this.onlyNoSecondary.asObservable();
  
  protected readonly keyEnum = KeyEnum.KEY_ONLY_NO_SECONDARY;
  public readonly form =  new FormControl<boolean>(OnlyNoSecondaryFormService.DEFAULT_VALUE, { nonNullable: true });

  constructor() {
    super();
    this.init();
  }

  protected override handleChanges(value: boolean): void {
    this.onlyNoSecondary.next(value ?? false);
  }

  public override setValue(value: boolean): void {
    this.form.setValue(value);
  }

  public override setDefaultValue(): void {
    this.form.setValue(OnlyNoSecondaryFormService.DEFAULT_VALUE);
  }
}