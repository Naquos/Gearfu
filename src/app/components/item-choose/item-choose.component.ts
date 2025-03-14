import { Component } from '@angular/core';
import { ItemChooseDisplayComponent } from "../item-choose-display/item-choose-display.component";
import { ItemTypeEnum } from '../../models/itemTypeEnum';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-item-choose',
  imports: [ItemChooseDisplayComponent, MatIconModule, MatTooltipModule],
  templateUrl: './item-choose.component.html',
  styleUrl: './item-choose.component.scss'
})
export class ItemChooseComponent {
  protected ItemTypeEnum = ItemTypeEnum;

  protected copyToClipboard(): void {
    navigator.clipboard.writeText(window.location.href).then();
  }
}
