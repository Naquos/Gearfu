import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ElemMaitrisesMecanismEnum } from "../../models/enum/ElemMaitrisesMecanismEnum";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ModifierElemMaitrisesFormService extends AbstractFormService<FormControl<string[]>> {

  public static readonly DEFAULT_VALUE: string[] = [];

  private readonly multiplicateurElem = new BehaviorSubject<number>(1);
  public readonly multiplicateurElem$ = this.multiplicateurElem.asObservable();

  private readonly denouement = new BehaviorSubject<boolean>(false)
  public readonly denouement$ = this.denouement.asObservable()

  constructor(protected override localStorageService: LocalStorageService) {
      super(KeyEnum.KEY_MODIFIER_ELEM_MAITRISE, localStorageService, new FormControl<string[]>(ModifierElemMaitrisesFormService.DEFAULT_VALUE, { nonNullable: true }));
      this.init();
  }

  protected override handleChanges(value: string[]): void {
    let result = 1;
    if(value?.includes(ElemMaitrisesMecanismEnum.COEUR_HUPPERMAGE.valueOf())) {result*=1.2}
    this.multiplicateurElem.next(result);
    
    this.denouement.next(value?.includes(ElemMaitrisesMecanismEnum.DENOUEMENT.valueOf()) ?? false);
  }

  public override setValue(value: string[]): void {
    this.form.setValue(value);
  }

  public setDefaultValue(): void {
    this.form.setValue(ModifierElemMaitrisesFormService.DEFAULT_VALUE);
  }
}