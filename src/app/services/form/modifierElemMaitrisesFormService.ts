import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Mecanism } from "../../models/enum/ElemMaitrisesMecanismEnum";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ModifierMecanismFormService extends AbstractFormService<FormControl<string[]>> {

  public static readonly DEFAULT_VALUE: string[] = [];

  private readonly multiplicateurElem = new BehaviorSubject<number>(1);
  public readonly multiplicateurElem$ = this.multiplicateurElem.asObservable();

  private readonly denouement = new BehaviorSubject<boolean>(false)
  public readonly denouement$ = this.denouement.asObservable()

  private readonly demesure = new BehaviorSubject<boolean>(false)
  public readonly demesure$ = this.demesure.asObservable()

  constructor(protected override readonly localStorageService: LocalStorageService) {
      super(KeyEnum.KEY_MODIFIER_MECANISM, localStorageService, new FormControl<string[]>(ModifierMecanismFormService.DEFAULT_VALUE, { nonNullable: true }));
      this.init();
  }

  protected override handleChanges(value: string[]): void {
    let result = 1;
    if(value?.includes(Mecanism.COEUR_HUPPERMAGE.valueOf())) {result*=1.2}
    this.multiplicateurElem.next(result);
    
    this.denouement.next(value?.includes(Mecanism.DENOUEMENT.valueOf()) ?? false);
    this.demesure.next(value?.includes(Mecanism.DEMESURE.valueOf()) ?? false);
  }

  public override setValue(value: string[]): void {
    this.form.setValue(value);
  }

  public setDefaultValue(): void {
    this.form.setValue(ModifierMecanismFormService.DEFAULT_VALUE);
  }
}