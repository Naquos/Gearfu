import { Component } from '@angular/core';
import { ItemsService } from '../../services/itemsService';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SortChoiceEnum } from '../../models/sortChoiceEnum';

@Component({
  selector: 'app-sort-choice',
  imports: [MatButtonToggleModule],
  templateUrl: './sort-choice.component.html',
  styleUrl: './sort-choice.component.scss'
})
export class SortChoiceComponent {
  protected SORT_CHOICE = SortChoiceEnum;
  constructor(protected itemService: ItemsService) {
  }
}
