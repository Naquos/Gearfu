import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MaitrisesServices } from '../../services/maitrisesService';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ButtonCheckboxComponent } from "../button-checkbox/button-checkbox.component";

@Component({
  selector: 'app-filter-maitrises',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent],
  templateUrl: './filter-maitrises.component.html',
  styleUrl: './filter-maitrises.component.scss'
})
export class FilterMaitrisesComponent {

  protected form = new FormGroup({
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

  constructor(private maitrisesService : MaitrisesServices) {
    this.form.valueChanges.subscribe(changes => {
      let result = 0;
      if(changes.feu) {result++}
      if(changes.eau) {result++}
      if(changes.terre) {result++}
      if(changes.air) {result++}
      this.maitrisesService.setNbElements(result);

      const resultId = [];
      if(changes.critique) {resultId.push(149)}
      if(changes.dos) {resultId.push(180)}
      if(changes.melee) {resultId.push(1052)}
      if(changes.distance) {resultId.push(1053)}
      if(changes.soin) {resultId.push(26)}
      if(changes.berzerk) {resultId.push(1055)}
      this.maitrisesService.setIdMaitrises(resultId);
    })
  }

}
