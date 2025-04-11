import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { ParameterMajorActionEnum } from "../../models/enum/parameterMajorActionEnum";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService, TypedControls } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";
import { MajorAction } from "../../models/data/majorActions";

export interface MajorPresentForm {
  PA: boolean;
  PM: boolean;
  PW: boolean;
  PO: boolean;
  ARMURE_DONNEE: boolean;
  ARMURE_RECUE: boolean;
  CRITIQUE: boolean;
  PARADE: boolean;
  RESISTANCE_DOS: boolean;
  RESISTANCE_CRITIQUE: boolean;
}

@Injectable({providedIn: 'root'})
export class MajorPresentFormService extends AbstractFormService<FormGroup<TypedControls<MajorPresentForm>>> {

  private idMajor = new BehaviorSubject<MajorAction[]>([]);
  public idMajor$ = this.idMajor.asObservable();

  constructor(protected override localStorageService: LocalStorageService) {
    super(KeyEnum.KEY_MAJOR_PRESENT, localStorageService, new FormGroup<TypedControls<MajorPresentForm>>({
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
      }));
      this.init();
  }

  protected override handleChanges(value: MajorPresentForm): void {
    const result: MajorAction[] = [];
    if(value.PA) {result.push({id:IdActionsEnum.PA})}
    if(value.PM) {result.push({id:IdActionsEnum.PM})}
    if(value.PW) {result.push({id:IdActionsEnum.BOOST_PW})}
    if(value.PO) {result.push({id:IdActionsEnum.PORTEE})}
    if(value.ARMURE_DONNEE) {result.push({id:IdActionsEnum.ARMURE_DONNEE_RECUE, parameter: ParameterMajorActionEnum.ARMURE_DONNEE})}
    if(value.ARMURE_RECUE) {result.push({id:IdActionsEnum.ARMURE_DONNEE_RECUE, parameter: ParameterMajorActionEnum.ARMURE_RECUE})}
    if(value.CRITIQUE) {result.push({id:IdActionsEnum.COUP_CRITIQUE})}
    if(value.PARADE) {result.push({id:IdActionsEnum.PARADE})}
    if(value.RESISTANCE_DOS) {result.push({id:IdActionsEnum.RESISTANCES_DOS})}
    if(value.RESISTANCE_CRITIQUE) {result.push({id:IdActionsEnum.RESISTANCES_CRITIQUES})}
    this.idMajor.next(result);
  }

  public override setValue(value: MajorPresentForm): void {
    this.form.setValue({
      PA: value.PA ?? false,
      PM: value.PM ?? false,
      PW: value.PW ?? false,
      PO: value.PO ?? false,
      ARMURE_DONNEE: value.ARMURE_DONNEE ?? false,
      ARMURE_RECUE: value.ARMURE_RECUE ?? false,
      CRITIQUE: value.CRITIQUE ?? false,
      PARADE: value.PARADE ?? false,
      RESISTANCE_DOS: value.RESISTANCE_DOS ?? false,
      RESISTANCE_CRITIQUE: value.RESISTANCE_CRITIQUE ?? false,
    });
  }

  public setDefaultValue(): void {
    this.setMajor();
  }

  public setMajor(...major: MajorAction[]): void {
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