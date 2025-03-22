import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ItemsService } from '../../services/itemsService';
import { IdActionsEnum } from '../../models/idActionsEnum';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ButtonCheckboxComponent } from '../button-checkbox/button-checkbox.component';
import { MajorAction } from '../../models/majorActions';
import { ParameterMajorActionEnum } from '../../models/parameterMajorActionEnum';

@Component({
  selector: 'app-major-present',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent],
  templateUrl: './major-present.component.html',
  styleUrl: './major-present.component.scss'
})
export class MajorPresentComponent {
  protected form = new FormGroup({
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

  constructor(private itemService: ItemsService) {
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
    })
  }
}
