import { Component, inject } from '@angular/core';
import { ItemType } from '../../../models/data/itemType';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ButtonCheckboxComponent } from "../button-checkbox/button-checkbox.component";
import { ItemTypeFormServices } from '../../../services/form/itemTypeFormServices';
import { TranslateModule } from '@ngx-translate/core';
import { ItemTypeServices } from '../../../services/data/ItemTypesServices';
import { ItemTypeEnum } from '../../../models/enum/itemTypeEnum';

@Component({
  selector: 'app-item-types',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent, TranslateModule],
  templateUrl: './item-types.component.html',
  styleUrl: './item-types.component.scss'
})
export class ItemTypesComponent {
  protected readonly itemTypeFormServices = inject(ItemTypeFormServices);
  protected readonly itemTypesServices = inject(ItemTypeServices);
  protected readonly itemTypes = new Map<string, ItemType>([]);
  protected readonly ItemTypeEnum = ItemTypeEnum;
}
