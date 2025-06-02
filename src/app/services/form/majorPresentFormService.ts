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
  CONTROLE: boolean;
  ARMURE_DONNEE: boolean;
  ARMURE_RECUE: boolean;
  CRITIQUE: boolean;
  PARADE: boolean;
  RESISTANCE_DOS: boolean;
  RESISTANCE_CRITIQUE: boolean;

  PERTE_PA: boolean;
  PERTE_PM: boolean;
  PERTE_PW: boolean;
  PERTE_PO: boolean;
  PERTE_CONTROLE: boolean;
  PERTE_ARMURE_DONNEE: boolean;
  PERTE_ARMURE_RECUE: boolean;
  PERTE_CRITIQUE: boolean;
  PERTE_PARADE: boolean;
  PERTE_RESISTANCE_DOS: boolean;
  PERTE_RESISTANCE_CRITIQUE: boolean;

  PERTE_MAITRISES_MELEE: boolean;
  PERTE_MAITRISES_DISTANCE: boolean;
  PERTE_MAITRISES_CRITIQUE: boolean;
  PERTE_MAITRISES_DOS: boolean;
  PERTE_MAITRISES_SOIN: boolean;
  PERTE_MAITRISES_BERZERK: boolean;

}

@Injectable({providedIn: 'root'})
export class MajorPresentFormService extends AbstractFormService<FormGroup<TypedControls<MajorPresentForm>>> {

  private readonly idMajor = new BehaviorSubject<MajorAction[]>([]);
  public readonly idMajor$ = this.idMajor.asObservable();

  constructor(protected override readonly localStorageService: LocalStorageService) {
    super(KeyEnum.KEY_MAJOR_PRESENT, localStorageService, new FormGroup<TypedControls<MajorPresentForm>>({
        PA: new FormControl(),
        PM: new FormControl(),
        PW: new FormControl(),
        PO: new FormControl(),
        CONTROLE: new FormControl(),
        ARMURE_DONNEE: new FormControl(),
        ARMURE_RECUE: new FormControl(),
        CRITIQUE: new FormControl(),
        PARADE: new FormControl(),
        RESISTANCE_DOS: new FormControl(),
        RESISTANCE_CRITIQUE: new FormControl(),
        PERTE_PA: new FormControl(),
        PERTE_PM: new FormControl(),
        PERTE_PW: new FormControl(),
        PERTE_PO: new FormControl(),
        PERTE_CONTROLE: new FormControl(),
        PERTE_ARMURE_DONNEE: new FormControl(),
        PERTE_ARMURE_RECUE: new FormControl(),
        PERTE_CRITIQUE: new FormControl(),
        PERTE_PARADE: new FormControl(),
        PERTE_RESISTANCE_DOS: new FormControl(),
        PERTE_RESISTANCE_CRITIQUE: new FormControl(),
        PERTE_MAITRISES_MELEE: new FormControl(),
        PERTE_MAITRISES_DISTANCE: new FormControl(),
        PERTE_MAITRISES_CRITIQUE: new FormControl(),
        PERTE_MAITRISES_DOS: new FormControl(),
        PERTE_MAITRISES_SOIN: new FormControl(),
        PERTE_MAITRISES_BERZERK: new FormControl()
      }));
      this.init();
  }

  protected override handleChanges(value: MajorPresentForm): void {
    const result: MajorAction[] = [];
    if(value.PA) {result.push({id:IdActionsEnum.PA})}
    if(value.PM) {result.push({id:IdActionsEnum.PM})}
    if(value.PW) {result.push({id:IdActionsEnum.BOOST_PW})}
    if(value.PO) {result.push({id:IdActionsEnum.PORTEE})}
    if(value.CONTROLE) {result.push({id:IdActionsEnum.CONTROLE})}
    if(value.ARMURE_DONNEE) {result.push({id:IdActionsEnum.ARMURE_DONNEE_RECUE, parameter: ParameterMajorActionEnum.ARMURE_DONNEE})}
    if(value.ARMURE_RECUE) {result.push({id:IdActionsEnum.ARMURE_DONNEE_RECUE, parameter: ParameterMajorActionEnum.ARMURE_RECUE})}
    if(value.CRITIQUE) {result.push({id:IdActionsEnum.COUP_CRITIQUE})}
    if(value.PARADE) {result.push({id:IdActionsEnum.PARADE})}
    if(value.RESISTANCE_DOS) {result.push({id:IdActionsEnum.RESISTANCES_DOS})}
    if(value.RESISTANCE_CRITIQUE) {result.push({id:IdActionsEnum.RESISTANCES_CRITIQUES})}
    
    if(value.PERTE_PA) {result.push({id:IdActionsEnum.PERTE_PA})}
    if(value.PERTE_PM) {result.push({id:IdActionsEnum.PERTE_PM})}
    if(value.PERTE_PW) {result.push({id:IdActionsEnum.DEBOOST_PW})}
    if(value.PERTE_PO) {result.push({id:IdActionsEnum.PERTE_PORTEE})}
    if(value.PERTE_CONTROLE) {result.push({id:IdActionsEnum.PERTE_CONTROLE})}
    if(value.PERTE_ARMURE_DONNEE) {result.push({id:IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE, parameter: ParameterMajorActionEnum.ARMURE_DONNEE})}
    if(value.PERTE_ARMURE_RECUE) {result.push({id:IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE, parameter: ParameterMajorActionEnum.ARMURE_RECUE})}
    if(value.PERTE_CRITIQUE) {result.push({id:IdActionsEnum.PERTE_COUP_CRITIQUE})}
    if(value.PERTE_PARADE) {result.push({id:IdActionsEnum.PERTE_PARADE})}
    if(value.PERTE_RESISTANCE_DOS) {result.push({id:IdActionsEnum.PERTE_RESISTANCES_DOS})}
    if(value.PERTE_RESISTANCE_CRITIQUE) {result.push({id:IdActionsEnum.PERTE_RESISTANCES_CRITIQUE})}

    if(value.PERTE_MAITRISES_MELEE) {result.push({id:IdActionsEnum.PERTE_MAITRISES_MELEE})}
    if(value.PERTE_MAITRISES_DISTANCE) {result.push({id:IdActionsEnum.PERTE_MAITRISES_DISTANCE})}
    if(value.PERTE_MAITRISES_CRITIQUE) {result.push({id:IdActionsEnum.PERTE_MAITRISES_CRITIQUE})}
    if(value.PERTE_MAITRISES_DOS) {result.push({id:IdActionsEnum.PERTE_MAITRISES_DOS})}
    if(value.PERTE_MAITRISES_SOIN) {result.push({id:IdActionsEnum.PERTE_MAITRISES_SOIN})}
    if(value.PERTE_MAITRISES_BERZERK) {result.push({id:IdActionsEnum.PERTE_MAITRISES_BERZERK})}
    
    this.idMajor.next(result);
  }

  public override setValue(value: MajorPresentForm): void {
    this.form.setValue({
      PA: value.PA ?? false,
      PM: value.PM ?? false,
      PW: value.PW ?? false,
      PO: value.PO ?? false,
      CONTROLE: value.CONTROLE ?? false,
      ARMURE_DONNEE: value.ARMURE_DONNEE ?? false,
      ARMURE_RECUE: value.ARMURE_RECUE ?? false,
      CRITIQUE: value.CRITIQUE ?? false,
      PARADE: value.PARADE ?? false,
      RESISTANCE_DOS: value.RESISTANCE_DOS ?? false,
      RESISTANCE_CRITIQUE: value.RESISTANCE_CRITIQUE ?? false,

      PERTE_PA: value.PERTE_PA ?? false,
      PERTE_PM: value.PERTE_PM ?? false,
      PERTE_PW: value.PERTE_PW ?? false,
      PERTE_PO: value.PERTE_PO ?? false,
      PERTE_CONTROLE: value.PERTE_CONTROLE ?? false,
      PERTE_ARMURE_DONNEE: value.PERTE_ARMURE_DONNEE ?? false,
      PERTE_ARMURE_RECUE: value.PERTE_ARMURE_RECUE ?? false,
      PERTE_CRITIQUE: value.PERTE_CRITIQUE ?? false,
      PERTE_PARADE: value.PERTE_PARADE ?? false,
      PERTE_RESISTANCE_DOS: value.PERTE_RESISTANCE_DOS ?? false,
      PERTE_RESISTANCE_CRITIQUE: value.PERTE_RESISTANCE_CRITIQUE ?? false,

      PERTE_MAITRISES_MELEE: value.PERTE_MAITRISES_MELEE ?? false,
      PERTE_MAITRISES_DISTANCE: value.PERTE_MAITRISES_DISTANCE ?? false,
      PERTE_MAITRISES_CRITIQUE: value.PERTE_MAITRISES_CRITIQUE ?? false,
      PERTE_MAITRISES_DOS: value.PERTE_MAITRISES_DOS ?? false,
      PERTE_MAITRISES_SOIN: value.PERTE_MAITRISES_SOIN ?? false,
      PERTE_MAITRISES_BERZERK: value.PERTE_MAITRISES_BERZERK ?? false
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
      CONTROLE: major.some(x => x.id === IdActionsEnum.CONTROLE),
      ARMURE_DONNEE: major.some(x => x.id === IdActionsEnum.ARMURE_DONNEE_RECUE && x.parameter === ParameterMajorActionEnum.ARMURE_DONNEE),
      ARMURE_RECUE: major.some(x => x.id === IdActionsEnum.ARMURE_DONNEE_RECUE && x.parameter === ParameterMajorActionEnum.ARMURE_RECUE),
      CRITIQUE: major.some(x => x.id === IdActionsEnum.COUP_CRITIQUE),
      PARADE: major.some(x => x.id === IdActionsEnum.PARADE),
      RESISTANCE_DOS: major.some(x => x.id === IdActionsEnum.RESISTANCES_DOS),
      RESISTANCE_CRITIQUE: major.some(x => x.id === IdActionsEnum.RESISTANCES_CRITIQUES),

      PERTE_PA: major.some(x => x.id === IdActionsEnum.PERTE_PA),
      PERTE_PM: major.some(x => x.id === IdActionsEnum.PERTE_PM),
      PERTE_PW: major.some(x => x.id === IdActionsEnum.DEBOOST_PW),
      PERTE_PO: major.some(x => x.id === IdActionsEnum.PERTE_PORTEE),
      PERTE_CONTROLE: major.some(x => x.id === IdActionsEnum.PERTE_CONTROLE),
      PERTE_ARMURE_DONNEE: major.some(x => x.id === IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE && x.parameter === ParameterMajorActionEnum.ARMURE_DONNEE),
      PERTE_ARMURE_RECUE: major.some(x => x.id === IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE && x.parameter === ParameterMajorActionEnum.ARMURE_RECUE),
      PERTE_CRITIQUE: major.some(x => x.id === IdActionsEnum.PERTE_COUP_CRITIQUE),
      PERTE_PARADE: major.some(x => x.id === IdActionsEnum.PERTE_PARADE),
      PERTE_RESISTANCE_DOS: major.some(x => x.id === IdActionsEnum.PERTE_RESISTANCES_DOS),
      PERTE_RESISTANCE_CRITIQUE: major.some(x => x.id === IdActionsEnum.PERTE_RESISTANCES_CRITIQUE),

      PERTE_MAITRISES_MELEE: major.some(x => x.id === IdActionsEnum.PERTE_MAITRISES_MELEE),
      PERTE_MAITRISES_DISTANCE: major.some(x => x.id === IdActionsEnum.PERTE_MAITRISES_DISTANCE),
      PERTE_MAITRISES_CRITIQUE: major.some(x => x.id === IdActionsEnum.PERTE_MAITRISES_CRITIQUE),
      PERTE_MAITRISES_DOS: major.some(x => x.id === IdActionsEnum.PERTE_MAITRISES_DOS),
      PERTE_MAITRISES_SOIN: major.some(x => x.id === IdActionsEnum.PERTE_MAITRISES_SOIN),
      PERTE_MAITRISES_BERZERK: major.some(x => x.id === IdActionsEnum.PERTE_MAITRISES_BERZERK)
    });
  }
}