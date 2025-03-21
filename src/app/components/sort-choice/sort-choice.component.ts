import { Component } from '@angular/core';
import { ItemsService } from '../../services/itemsService';
import { SortChoiceEnum } from '../../models/sortChoiceEnum';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sort-choice',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sort-choice.component.html',
  styleUrl: './sort-choice.component.scss'
})
export class SortChoiceComponent {
  protected SortChoiceEnumList = Object.values(SortChoiceEnum);
  protected form = new FormControl<SortChoiceEnum>(SortChoiceEnum.MAITRISES);

  constructor(protected itemService: ItemsService) {
    this.form.valueChanges
      .pipe(filter(value => value !== null))
      .subscribe(value => this.itemService.setSort(value))
  }
}
