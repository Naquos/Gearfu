import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService, TypedControls } from "./abstractFormService";

export interface MaitrisesForm {
    feu: boolean;
    eau: boolean;
    terre: boolean;
    air: boolean;
    critique: boolean;
    dos: boolean;
    melee: boolean;
    distance: boolean;
    soin: boolean;
    berzerk: boolean;
}

@Injectable({providedIn: 'root'})
export class MaitrisesFormService extends AbstractFormService<FormGroup<TypedControls<MaitrisesForm>>> {
  
  private readonly nbElements = new BehaviorSubject<number>(0);
  public readonly nbElements$ = this.nbElements.asObservable();

  private readonly idMaitrises = new BehaviorSubject<number[]>([]);
  public readonly idMaitrises$ = this.idMaitrises.asObservable();

  protected readonly keyEnum = KeyEnum.KEY_MAITRISES;
  public readonly form = new FormGroup<TypedControls<MaitrisesForm>>({
        feu: new FormControl(),
        eau: new FormControl(),
        terre: new FormControl(),
        air: new FormControl(),
        critique: new FormControl(),
        dos: new FormControl(),
        melee: new FormControl(),
        distance: new FormControl(),
        soin: new FormControl(),
        berzerk: new FormControl()
      })
    

  constructor() {
    super();
    this.init();
  }

  protected override handleChanges(value: MaitrisesForm): void {
    let result = 0;
    const resultId:IdActionsEnum[] = [];

    if(value.feu) {result++; resultId.push(IdActionsEnum.MAITRISES_FEU)}
    if(value.eau) {result++; resultId.push(IdActionsEnum.MAITRISES_EAU)}
    if(value.terre) {result++; resultId.push(IdActionsEnum.MAITRISES_TERRE)}
    if(value.air) {result++; resultId.push(IdActionsEnum.MAITRISES_AIR)}
    this.nbElements.next(result);

    if(value.critique) {resultId.push(IdActionsEnum.MAITRISES_CRITIQUES)}
    if(value.dos) {resultId.push(IdActionsEnum.MAITRISES_DOS)}
    if(value.melee) {resultId.push(IdActionsEnum.MAITRISES_MELEE)}
    if(value.distance) {resultId.push(IdActionsEnum.MAITRISES_DISTANCES)}
    if(value.soin) {resultId.push(IdActionsEnum.MAITRISES_SOIN)}
    if(value.berzerk) {resultId.push(IdActionsEnum.MAITRISES_BERZERK)}
    this.idMaitrises.next(resultId);
  }

  public override setValue(value: MaitrisesForm | null): void {
    this.form.setValue({
      feu: value?.feu ?? false,
      eau: value?.eau ?? false,
      terre: value?.terre ?? false,
      air: value?.air ?? false,
      critique: value?.critique ?? false,
      dos: value?.dos ?? false,
      melee: value?.melee ?? false,
      distance: value?.distance ?? false,
      soin: value?.soin ?? false,
      berzerk: value?.berzerk ?? false
    });
  }

  public setDefaultValue(): void {
    this.setMaitrises();
  }

  public setMaitrises(...maitrises: IdActionsEnum[]): void {
    this.form.setValue({
        feu: maitrises.includes(IdActionsEnum.MAITRISES_FEU),
        eau: maitrises.includes(IdActionsEnum.MAITRISES_EAU),
        terre: maitrises.includes(IdActionsEnum.MAITRISES_TERRE),
        air: maitrises.includes(IdActionsEnum.MAITRISES_AIR),
        critique: maitrises.includes(IdActionsEnum.MAITRISES_CRITIQUES),
        dos: maitrises.includes(IdActionsEnum.MAITRISES_DOS),
        melee: maitrises.includes(IdActionsEnum.MAITRISES_MELEE),
        distance: maitrises.includes(IdActionsEnum.MAITRISES_DISTANCES),
        soin: maitrises.includes(IdActionsEnum.MAITRISES_SOIN),
        berzerk: maitrises.includes(IdActionsEnum.MAITRISES_BERZERK)
      });
  }
}