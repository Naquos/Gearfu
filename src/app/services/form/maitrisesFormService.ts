import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { MaitrisesServices } from "../maitrisesService";
import { IdActionsEnum } from "../../models/idActionsEnum";

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
    

  constructor(private maitrisesService : MaitrisesServices) {
        this.form.valueChanges.subscribe(changes => {
          let result = 0;
          const resultId = [];
    
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
        })
  }
}