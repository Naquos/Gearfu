import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ItemsService } from '../../services/itemsService';
import { IdActionsEnum } from '../../models/idActionsEnum';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ButtonCheckboxComponent } from '../button-checkbox/button-checkbox.component';

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
    CRITIQUE: new FormControl(),
    PARADE: new FormControl(),
  });

  constructor(private itemService: ItemsService) {
    this.form.valueChanges.subscribe(x => {
      const result: number[] = [];
      if(x.PA) {result.push(IdActionsEnum.PA)}
      if(x.PM) {result.push(IdActionsEnum.PM)}
      if(x.PW) {result.push(IdActionsEnum.BOOST_PW)}
      if(x.PO) {result.push(IdActionsEnum.PORTEE)}
      if(x.ARMURE_DONNEE) {result.push(IdActionsEnum.ARMURE_DONNEE_RECUE)}
      if(x.CRITIQUE) {result.push(IdActionsEnum.COUP_CRITIQUE)}
      if(x.PARADE) {result.push(IdActionsEnum.PARADE)}
      this.itemService.setIdMajor(result);
    })
  }
}
