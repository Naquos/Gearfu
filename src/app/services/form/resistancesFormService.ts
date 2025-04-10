import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { IdActionsEnum } from "../../models/idActionsEnum";
import { ResistancesServices } from "../resistancesService";
import { LocalStorageService } from "../localStorageService";
import { KeyEnum } from "../../models/keyEnum";

@Injectable({providedIn: 'root'})
export class ResistancesFormService {
    public form = new FormGroup({
        feu: new FormControl(),
        eau: new FormControl(),
        terre: new FormControl(),
        air: new FormControl()
      });
    

    protected selected = new BehaviorSubject<number[]>([]);
    public selected$ = this.selected.asObservable();
    

  constructor(private resistancesService : ResistancesServices, private localStorageService: LocalStorageService) {
        this.form.valueChanges.subscribe(changes => {
          const resultId = [];
    
          if(changes.feu) {resultId.push(IdActionsEnum.RESISTANCES_FEU)}
          if(changes.eau) {resultId.push(IdActionsEnum.RESISTANCES_EAU)}
          if(changes.terre) {resultId.push(IdActionsEnum.RESISTANCES_TERRE)}
          if(changes.air) {resultId.push(IdActionsEnum.RESISTANCES_AIR)}
    
          this.resistancesService.setIdResistances(resultId);
          this.localStorageService.setItem<number[]>(KeyEnum.KEY_RESISTANCES, resultId ?? []);
        })
        this.setResistances(...(this.localStorageService.getItem<number[]>(KeyEnum.KEY_RESISTANCES) ?? []));
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