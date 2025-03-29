import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ItemsService } from '../../services/itemsService';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-only-no-secondary',
  imports: [MatButtonToggleModule, TranslateModule],
  templateUrl: './only-no-secondary.component.html',
  styleUrl: './only-no-secondary.component.scss'
})
export class OnlyNoSecondaryComponent {
  constructor(protected itemService: ItemsService) {}

}
