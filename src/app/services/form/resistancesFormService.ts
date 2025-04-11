import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { LocalStorageService } from "../data/localStorageService";
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

  private idResistances = new BehaviorSubject<number[]>([]);
  public idResistances$ = this.idResistances.asObservable();

  constructor(protected override localStorageService: LocalStorageService) {
    super(KeyEnum.KEY_RESISTANCES, localStorageService, new FormGroup<TypedControls<RareteItemForm>>({
        feu: new FormControl(),
        eau: new FormControl(),
        terre: new FormControl(),
        air: new FormControl()
    }));
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

  public override setValue(value: RareteItemForm): void {
    this.form.setValue({
      feu: value.feu ?? false,
      eau: value.eau ?? false,
      terre: value.terre ?? false,
      air: value.air ?? false
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
}