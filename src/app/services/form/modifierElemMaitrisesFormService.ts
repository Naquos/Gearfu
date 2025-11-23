import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Mecanism } from "../../models/enum/ElemMaitrisesMecanismEnum";
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

  private readonly chaos = new BehaviorSubject<boolean>(false)
  public readonly chaos$ = this.chaos.asObservable()

  protected readonly keyEnum = KeyEnum.KEY_MODIFIER_MECANISM;
  public readonly form =  new FormControl<string[]>(ModifierMecanismFormService.DEFAULT_VALUE, { nonNullable: true });

  constructor() {
      super();
      this.init();
  }

  protected override handleChanges(value: string[]): void {
    let result = 1;
    if(value?.includes(Mecanism.COEUR_HUPPERMAGE.valueOf())) {result*=1.2}
    this.multiplicateurElem.next(result);
    
    this.denouement.next(value?.includes(Mecanism.DENOUEMENT.valueOf()) ?? false);
    this.demesure.next(value?.includes(Mecanism.DEMESURE.valueOf()) ?? false);
    this.chaos.next(value?.includes(Mecanism.CHAOS.valueOf()) ?? false);
  }

  public override setValue(value: string[] | null): void {
    this.form.setValue(value ?? ModifierMecanismFormService.DEFAULT_VALUE);
  }

  public setDefaultValue(): void {
    this.form.setValue(ModifierMecanismFormService.DEFAULT_VALUE);
  }
}