import { Component } from '@angular/core';
import { ItemChooseDisplayComponent } from "../item-choose-display/item-choose-display.component";
import { ItemTypeEnum } from '../../models/itemTypeEnum';

@Component({
  selector: 'app-item-choose',
  imports: [ItemChooseDisplayComponent],
  templateUrl: './item-choose.component.html',
  styleUrl: './item-choose.component.scss'
})
export class ItemChooseComponent {
  protected ItemTypeEnum = ItemTypeEnum;
}
