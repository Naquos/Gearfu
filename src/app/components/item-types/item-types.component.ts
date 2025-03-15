import { Component, output } from '@angular/core';
import { ItemType } from '../../models/itemType';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ItemTypeServices } from '../../services/ItemTypesServices';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ButtonCheckboxComponent } from "../button-checkbox/button-checkbox.component";
import { ItemTypeEnum } from '../../models/itemTypeEnum';
import { ItemTypeFormServices } from '../../services/itemTypeFormServices';

@Component({
  selector: 'app-item-types',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent],
  templateUrl: './item-types.component.html',
  styleUrl: './item-types.component.scss'
})
export class ItemTypesComponent {
  protected itemTypes:Map<String, ItemType> = new Map([]);

  constructor(protected itemTypeFormServices: ItemTypeFormServices) {
  }
}
