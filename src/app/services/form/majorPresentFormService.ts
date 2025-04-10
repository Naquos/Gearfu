import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ItemsService } from "../itemsService";
import { IdActionsEnum } from "../../models/idActionsEnum";
import { ParameterMajorActionEnum } from "../../models/parameterMajorActionEnum";
import { MajorAction } from "../../models/majorActions";
import { LocalStorageService } from "../localStorageService";
import { KeyEnum } from "../../models/keyEnum";

@Injectable({providedIn: 'root'})
export class MajorPresentFormService {
  public form = new FormGroup({
    PA: new FormControl(),
    PM: new FormControl(),
    PW: new FormControl(),
    PO: new FormControl(),
    ARMURE_DONNEE: new FormControl(),
    ARMURE_RECUE: new FormControl(),
    CRITIQUE: new FormControl(),
    PARADE: new FormControl(),
    RESISTANCE_DOS: new FormControl(),
    RESISTANCE_CRITIQUE: new FormControl()
  });
  
  constructor(private itemService: ItemsService, private localStorageService: LocalStorageService) {
    this.form.valueChanges.subscribe(x => {
      const result: MajorAction[] = [];
      if(x.PA) {result.push({id:IdActionsEnum.PA})}
      if(x.PM) {result.push({id:IdActionsEnum.PM})}
      if(x.PW) {result.push({id:IdActionsEnum.BOOST_PW})}
      if(x.PO) {result.push({id:IdActionsEnum.PORTEE})}
      if(x.ARMURE_DONNEE) {result.push({id:IdActionsEnum.ARMURE_DONNEE_RECUE, parameter: ParameterMajorActionEnum.ARMURE_DONNEE})}
      if(x.ARMURE_RECUE) {result.push({id:IdActionsEnum.ARMURE_DONNEE_RECUE, parameter: ParameterMajorActionEnum.ARMURE_RECUE})}
      if(x.CRITIQUE) {result.push({id:IdActionsEnum.COUP_CRITIQUE})}
      if(x.PARADE) {result.push({id:IdActionsEnum.PARADE})}
      if(x.RESISTANCE_DOS) {result.push({id:IdActionsEnum.RESISTANCES_DOS})}
      if(x.RESISTANCE_CRITIQUE) {result.push({id:IdActionsEnum.RESISTANCES_CRITIQUES})}
      this.itemService.setIdMajor(result);
      this.localStorageService.setItem<MajorAction[]>(KeyEnum.KEY_MAJOR_PRESENT, result);
    })
    this.setMajor(...this.localStorageService.getItem<MajorAction[]>(KeyEnum.KEY_MAJOR_PRESENT) ?? []);
  }

  public setDefaultValue(): void {
    this.setMajor();
  }

  private setMajor(...major: MajorAction[]): void {
    this.form.setValue({
      PA: major.some(x => x.id === IdActionsEnum.PA),
      PM: major.some(x => x.id === IdActionsEnum.PM),
      PW: major.some(x => x.id === IdActionsEnum.BOOST_PW),
      PO: major.some(x => x.id === IdActionsEnum.PORTEE),
      ARMURE_DONNEE: major.some(x => x.id === IdActionsEnum.ARMURE_DONNEE_RECUE && x.parameter === ParameterMajorActionEnum.ARMURE_DONNEE),
      ARMURE_RECUE: major.some(x => x.id === IdActionsEnum.ARMURE_DONNEE_RECUE && x.parameter === ParameterMajorActionEnum.ARMURE_RECUE),
      CRITIQUE: major.some(x => x.id === IdActionsEnum.COUP_CRITIQUE),
      PARADE: major.some(x => x.id === IdActionsEnum.PARADE),
      RESISTANCE_DOS: major.some(x => x.id === IdActionsEnum.RESISTANCES_DOS),
      RESISTANCE_CRITIQUE: major.some(x => x.id === IdActionsEnum.RESISTANCES_CRITIQUES)
    });
  }
}