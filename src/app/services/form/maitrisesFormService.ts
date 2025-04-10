import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { MaitrisesServices } from "../maitrisesService";
import { IdActionsEnum } from "../../models/idActionsEnum";
import { LocalStorageService } from "../localStorageService";
import { KeyEnum } from "../../models/keyEnum";

@Injectable({providedIn: 'root'})
export class MaitrisesFormService {
  public form = new FormGroup({
      feu: new FormControl(),
      eau: new FormControl(),
      terre: new FormControl(),
      air: new FormControl(),
      critique: new FormControl(),
      dos: new FormControl(),
      melee: new FormControl(),
      distance: new FormControl(),
      soin: new FormControl(),
      berzerk: new FormControl(),
    });
  

  protected selected = new BehaviorSubject<number[]>([]);
  public selected$ = this.selected.asObservable();
    

  constructor(private maitrisesService : MaitrisesServices, private localStorageService: LocalStorageService) {
    this.form.valueChanges.subscribe(changes => {
      let result = 0;
      const resultId:IdActionsEnum[] = [];

      if(changes.feu) {result++; resultId.push(IdActionsEnum.MAITRISES_FEU)}
      if(changes.eau) {result++; resultId.push(IdActionsEnum.MAITRISES_EAU)}
      if(changes.terre) {result++; resultId.push(IdActionsEnum.MAITRISES_TERRE)}
      if(changes.air) {result++; resultId.push(IdActionsEnum.MAITRISES_AIR)}
      this.maitrisesService.setNbElements(result);

      if(changes.critique) {resultId.push(IdActionsEnum.MAITRISES_CRITIQUES)}
      if(changes.dos) {resultId.push(IdActionsEnum.MAITRISES_DOS)}
      if(changes.melee) {resultId.push(IdActionsEnum.MAITRISES_MELEE)}
      if(changes.distance) {resultId.push(IdActionsEnum.MAITRISES_DISTANCES)}
      if(changes.soin) {resultId.push(IdActionsEnum.MAITRISES_SOIN)}
      if(changes.berzerk) {resultId.push(IdActionsEnum.MAITRISES_BERZERK)}
      this.maitrisesService.setIdMaitrises(resultId);
      this.localStorageService.setItem<IdActionsEnum[]>(KeyEnum.KEY_MAITRISES, resultId);
    })
    this.setMaitrises(...this.localStorageService.getItem<IdActionsEnum[]>(KeyEnum.KEY_MAITRISES) ?? [])
  }

  public setDefaultValue(): void {
    this.setMaitrises();
  }

  private setMaitrises(...maitrises: IdActionsEnum[]): void {
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