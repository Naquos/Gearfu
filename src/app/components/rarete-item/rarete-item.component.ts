import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ButtonCheckboxComponent } from "../button-checkbox/button-checkbox.component";
import { CommonModule } from '@angular/common';
import { ItemsService } from '../../services/itemsService';

@Component({
  selector: 'app-rarete-item',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent, CommonModule],
  templateUrl: './rarete-item.component.html',
  styleUrl: './rarete-item.component.scss'
})
export class RareteItemComponent {

  protected form = new FormGroup({
    normal: new FormControl(),
    rare: new FormControl(),
    mythique: new FormControl(),
    legendaire: new FormControl(),
    souvenir: new FormControl(),
    relique: new FormControl(),
    epique: new FormControl()
  });

  constructor(private itemService: ItemsService) {
    this.form.valueChanges.subscribe(changes => {
      const result: number[] = [];
      if(changes.normal) { result.push(1)}
      if(changes.rare) { result.push(2)}
      if(changes.mythique) { result.push(3)}
      if(changes.legendaire) { result.push(4)}
      if(changes.relique) { result.push(5)}
      if(changes.souvenir) { result.push(6)}
      if(changes.epique) { result.push(7)}
      this.itemService.setRarity(result);
    })
  }

}
