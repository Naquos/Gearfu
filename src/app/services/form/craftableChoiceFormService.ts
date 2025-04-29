import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { CraftableChoiceEnum } from "../../models/enum/craftableChoiceEnum";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class CraftableChoiceFormService extends AbstractFormService<FormControl<CraftableChoiceEnum>> {
  public static readonly DEFAULT_VALUE = CraftableChoiceEnum.CRAFT_DROP;
  
  private readonly craftable = new BehaviorSubject<CraftableChoiceEnum>(CraftableChoiceFormService.DEFAULT_VALUE);
  public readonly craftable$ = this.craftable.asObservable();

  constructor(protected override readonly localStorageService: LocalStorageService) {
    super(KeyEnum.KEY_CRAFTABLE_CHOICE, localStorageService, new FormControl<CraftableChoiceEnum>(CraftableChoiceFormService.DEFAULT_VALUE, { nonNullable: true }));
    this.init();
  }

  protected override handleChanges(value: CraftableChoiceEnum): void {
    this.craftable.next(value)
  }

  public override setValue(value: CraftableChoiceEnum): void {
    this.form.setValue(value);
  }

  public override setDefaultValue(): void {
    this.form.setValue(CraftableChoiceFormService.DEFAULT_VALUE);
  }
}