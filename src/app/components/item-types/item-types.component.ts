import { Component, output } from '@angular/core';
import { ItemType } from '../../models/itemType';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ItemTypeServices } from '../../services/ItemTypesServices';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ButtonCheckboxComponent } from "../button-checkbox/button-checkbox.component";

@Component({
  selector: 'app-item-types',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent],
  templateUrl: './item-types.component.html',
  styleUrl: './item-types.component.scss'
})
export class ItemTypesComponent {

  public selected = output<number[]>();

  protected itemTypes:Map<String, ItemType> = new Map([]);
  protected form = new FormGroup({
    deuxMains: new FormControl(),
    uneMain: new FormControl(),
    anneau: new FormControl(),
    bottes: new FormControl(),
    amulette: new FormControl(),
    cape: new FormControl(),
    ceinture: new FormControl(),
    casque: new FormControl(),
    plastron: new FormControl(),
    epaulettes: new FormControl(),
    bouclier: new FormControl(),
    dague: new FormControl(),
    accessoires: new FormControl(),
    familier: new FormControl()
  });

  constructor(private itemTypeServices: ItemTypeServices) {

    this.form.valueChanges.subscribe(x => {
      const result = [];
      if(x.uneMain) { result.push(this.itemTypeServices.getItemTypes().get("uneMain")?.id) };
      if(x.deuxMains) { result.push(this.itemTypeServices.getItemTypes().get("deuxMains")?.id) };
      if(x.anneau) { result.push(this.itemTypeServices.getItemTypes().get("anneau")?.id) };
      if(x.bottes) { result.push(this.itemTypeServices.getItemTypes().get("bottes")?.id) };
      if(x.amulette) { result.push(this.itemTypeServices.getItemTypes().get("amulette")?.id) };
      if(x.cape) { result.push(this.itemTypeServices.getItemTypes().get("cape")?.id) };
      if(x.ceinture) { result.push(this.itemTypeServices.getItemTypes().get("ceinture")?.id) };
      if(x.casque) { result.push(this.itemTypeServices.getItemTypes().get("casque")?.id) };
      if(x.plastron) { result.push(this.itemTypeServices.getItemTypes().get("plastron")?.id) };
      if(x.epaulettes) { result.push(this.itemTypeServices.getItemTypes().get("epaulettes")?.id) };
      if(x.bouclier) { result.push(this.itemTypeServices.getItemTypes().get("bouclier")?.id) };
      if(x.dague) { result.push(this.itemTypeServices.getItemTypes().get("dague")?.id) };
      if(x.accessoires) { result.push(this.itemTypeServices.getItemTypes().get("accessoires")?.id) };
      if(x.familier) { result.push(this.itemTypeServices.getItemTypes().get("familier")?.id) };
      this.selected.emit(result.flat() as number[]);
    });
  }
}
