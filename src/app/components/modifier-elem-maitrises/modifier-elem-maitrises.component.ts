import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsService } from '../../services/itemsService';
import { ElemMaitrisesMecanismEnum } from '../../models/ElemMaitrisesMecanismEnum';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-modifier-elem-maitrises',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './modifier-elem-maitrises.component.html',
  styleUrl: './modifier-elem-maitrises.component.scss'
})
export class ModifierElemMaitrisesComponent {
  
    protected form = new FormControl<string[]>([]);
    protected ElemMaitrisesMecanismEnumList = Object.values(ElemMaitrisesMecanismEnum);
    constructor(private itemService: ItemsService) {

      this.form.valueChanges.subscribe(value => {
        let result = 1;
        if(value?.includes(ElemMaitrisesMecanismEnum.ABNEGATION.valueOf())) {result*=1.15}
        if(value?.includes(ElemMaitrisesMecanismEnum.ALTERNANCE.valueOf())) {result*=1.2}
        if(value?.includes(ElemMaitrisesMecanismEnum.ALTERNANCE_2.valueOf())) {result*=1.15}
        if(value?.includes(ElemMaitrisesMecanismEnum.ANATOMIE.valueOf())) {result*=1.15}
        if(value?.includes(ElemMaitrisesMecanismEnum.CONCENTRATION_ELEMENTAIRE.valueOf())) {result*=1.2}
        if(value?.includes(ElemMaitrisesMecanismEnum.INFLEXIBILITE_2.valueOf())) {result*=1.15}
        if(value?.includes(ElemMaitrisesMecanismEnum.COEUR_HUPPERMAGE.valueOf())) {result*=1.2}
        this.itemService.setMultiplicateurElem(result);
      })
    }
}
