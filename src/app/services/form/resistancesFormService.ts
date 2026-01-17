import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService, TypedControls } from "./abstractFormService";

export interface RareteItemForm {
  feu: boolean;
  eau: boolean;
  terre: boolean;
  air: boolean;
}

@Injectable({providedIn: 'root'})
export class ResistancesFormService extends AbstractFormService<FormGroup<TypedControls<RareteItemForm>>> {

  private readonly idResistances = new BehaviorSubject<number[]>([]);
  public readonly idResistances$ = this.idResistances.asObservable();
  
  protected readonly keyEnum = KeyEnum.KEY_RESISTANCES;
  public readonly form =  new FormGroup<TypedControls<RareteItemForm>>({
        feu: new FormControl(),
        eau: new FormControl(),
        terre: new FormControl(),
        air: new FormControl()
    });

  private readonly mapFormToIdResistances = new Map([
    ['feu', IdActionsEnum.RESISTANCES_FEU],
    ['eau', IdActionsEnum.RESISTANCES_EAU],
    ['terre', IdActionsEnum.RESISTANCES_TERRE],
    ['air', IdActionsEnum.RESISTANCES_AIR],
  ]);

  constructor() {
    super();
    this.init();
  } 

  protected override handleChanges(value: RareteItemForm): void {
    const resultId = [];
    
    if(value.feu) {resultId.push(IdActionsEnum.RESISTANCES_FEU)}
    if(value.eau) {resultId.push(IdActionsEnum.RESISTANCES_EAU)}
    if(value.terre) {resultId.push(IdActionsEnum.RESISTANCES_TERRE)}
    if(value.air) {resultId.push(IdActionsEnum.RESISTANCES_AIR)}
    this.idResistances.next(resultId);
  }

  public override setValue(value: RareteItemForm | null): void {
    this.form.setValue({
      feu: value?.feu ?? false,
      eau: value?.eau ?? false,
      terre: value?.terre ?? false,
      air: value?.air ?? false
    });
  }
  
  private setResistances(...resistances: IdActionsEnum[]) {
      this.form.setValue({
          feu: resistances.includes(IdActionsEnum.RESISTANCES_FEU),
          eau: resistances.includes(IdActionsEnum.RESISTANCES_EAU),
          terre: resistances.includes(IdActionsEnum.RESISTANCES_TERRE),
          air: resistances.includes(IdActionsEnum.RESISTANCES_AIR),
      });
  }

  public setDefaultValue(): void {
      this.setResistances();
  }

  /**
   * Retourne une liste ordonnées des maitrises élémentaires en mettant au début celles sélectionnées dans le formulaire.
   * @returns IdActionsEnum[]
   */
  public orderResistances(): IdActionsEnum[] {
    const elements = [IdActionsEnum.RESISTANCES_FEU, IdActionsEnum.RESISTANCES_EAU, IdActionsEnum.RESISTANCES_TERRE, IdActionsEnum.RESISTANCES_AIR];
    const selectedElements: IdActionsEnum[] = [];
    const unselectedElements: IdActionsEnum[] = [];
    elements.forEach(elem => {
      const controlName = Array.from(this.mapFormToIdResistances.entries())
        .find(([, value]) => value === elem)?.[0];
      if (controlName && this.form.controls[controlName as keyof RareteItemForm].value) {
        selectedElements.push(elem);
      } else {
        unselectedElements.push(elem);
      }
    });
    return [...selectedElements, ...unselectedElements];
  }
}