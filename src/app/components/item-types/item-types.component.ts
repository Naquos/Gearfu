import { Component } from '@angular/core';
import { ItemType } from '../../models/itemType';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ButtonCheckboxComponent } from "../button-checkbox/button-checkbox.component";
import { ItemTypeFormServices } from '../../services/form/itemTypeFormServices';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-item-types',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent, TranslateModule],
  templateUrl: './item-types.component.html',
  styleUrl: './item-types.component.scss'
})
export class ItemTypesComponent {
  protected itemTypes = new Map<string, ItemType>([]);

  constructor(protected itemTypeFormServices: ItemTypeFormServices) {
  }
}
