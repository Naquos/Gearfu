import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ItemsService } from '../../services/itemsService';

@Component({
  selector: 'app-only-no-secondary',
  imports: [MatButtonToggleModule],
  templateUrl: './only-no-secondary.component.html',
  styleUrl: './only-no-secondary.component.scss'
})
export class OnlyNoSecondaryComponent {
  constructor(protected itemService: ItemsService) {}

}
