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

  private multiplicateurElem = new BehaviorSubject<number>(1);
  public multiplicateurElem$ = this.multiplicateurElem.asObservable();

  private denouement = new BehaviorSubject<boolean>(false)
  public denouement$ = this.denouement.asObservable()

  constructor(protected override localStorageService: LocalStorageService) {
      super(KeyEnum.KEY_MODIFIER_ELEM_MAITRISE, localStorageService, new FormControl<string[]>(ModifierElemMaitrisesFormService.DEFAULT_VALUE, { nonNullable: true }));
      this.init();
  }

  protected override handleChanges(value: string[]): void {
    let result = 1;
    if(value?.includes(ElemMaitrisesMecanismEnum.ABNEGATION.valueOf())) {result*=1.15}
    if(value?.includes(ElemMaitrisesMecanismEnum.ALTERNANCE.valueOf())) {result*=1.2}
    if(value?.includes(ElemMaitrisesMecanismEnum.ALTERNANCE_2.valueOf())) {result*=1.15}
    if(value?.includes(ElemMaitrisesMecanismEnum.ANATOMIE.valueOf())) {result*=1.15}
    if(value?.includes(ElemMaitrisesMecanismEnum.CONCENTRATION_ELEMENTAIRE.valueOf())) {result*=1.2}
    if(value?.includes(ElemMaitrisesMecanismEnum.INFLEXIBILITE_2.valueOf())) {result*=1.15}
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