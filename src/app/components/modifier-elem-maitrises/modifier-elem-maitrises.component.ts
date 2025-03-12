import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { ItemsService } from '../../services/itemsService';


@Component({
  selector: 'app-modifier-elem-maitrises',
  imports: [MatButtonToggleModule],
  templateUrl: './modifier-elem-maitrises.component.html',
  styleUrl: './modifier-elem-maitrises.component.scss'
})
export class ModifierElemMaitrisesComponent {

    protected form = new FormGroup({
      abnegation: new FormControl(false),
      alternance: new FormControl(false),
      alternance2: new FormControl(false),
      anatomie: new FormControl(false),
      CE: new FormControl(false),
      inflex2: new FormControl(false),
      coeur: new FormControl(false),
    });

    constructor(private itemService: ItemsService) {
      this.form.valueChanges.subscribe(value => {
        let result = 1;
        if(value.abnegation) {result*=1.15}
        if(value.alternance) {result*=1.2}
        if(value.alternance2) {result*=1.15}
        if(value.anatomie) {result*=1.15}
        if(value.CE) {result*=1.2}
        if(value.inflex2) {result*=1.15}
        if(value.coeur) {result*=1.2}
        this.itemService.setMultiplicateurElem(result);
      })
    }
}
