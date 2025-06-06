import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class OnlyNoElemFormService extends AbstractFormService<FormControl<boolean>> {

  public static readonly DEFAULT_VALUE = false;

  private readonly onlyNoElem = new BehaviorSubject<boolean>(false);
  public readonly onlyNoElem$ = this.onlyNoElem.asObservable();

  constructor(protected override readonly localStorageService: LocalStorageService) {
    super(KeyEnum.KEY_ONLY_NO_ELEM, localStorageService, new FormControl<boolean>(OnlyNoElemFormService.DEFAULT_VALUE, { nonNullable: true }));
    this.init();
  }

  protected override handleChanges(value: boolean): void {
    this.onlyNoElem.next(value ?? false);
  }

  public override setValue(value: boolean): void {
    this.form.setValue(value);
  }

  public override setDefaultValue(): void {
    this.form.setValue(OnlyNoElemFormService.DEFAULT_VALUE);
  }
}