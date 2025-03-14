import { Component, output } from '@angular/core';
import { ItemType } from '../../models/itemType';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ItemTypeServices } from '../../services/ItemTypesServices';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ButtonCheckboxComponent } from "../button-checkbox/button-checkbox.component";
import { ItemTypeEnum } from '../../models/itemTypeEnum';

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
      if(x.uneMain) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.UNE_MAIN)?.id) };
      if(x.deuxMains) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.DEUX_MAINS)?.id) };
      if(x.anneau) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.ANNEAU)?.id) };
      if(x.bottes) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.BOTTES)?.id) };
      if(x.amulette) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.AMULETTE)?.id) };
      if(x.cape) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.CAPE)?.id) };
      if(x.ceinture) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.CEINTURE)?.id) };
      if(x.casque) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.CASQUE)?.id) };
      if(x.plastron) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.PLASTRON)?.id) };
      if(x.epaulettes) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.EPAULETTES)?.id) };
      if(x.bouclier) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.BOUCLIER)?.id) };
      if(x.dague) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.DAGUE)?.id) };
      if(x.accessoires) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.ACCESSOIRES)?.id) };
      if(x.familier) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.FAMILIER)?.id) };
      this.selected.emit(result.flat() as number[]);
    });
  }
}
