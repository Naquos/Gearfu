import { Component } from '@angular/core';
import { CraftableChoiceEnum } from '../../models/craftableChoiceEnum';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs';
import { ItemsService } from '../../services/itemsService';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-craftable-choice',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './craftable-choice.component.html',
  styleUrl: './craftable-choice.component.scss'
})
export class CraftableChoiceComponent {
  protected craftableChoiceEnumList = Object.values(CraftableChoiceEnum);
  protected form = new FormControl<CraftableChoiceEnum>(CraftableChoiceEnum.CRAFT_DROP);

  constructor(protected itemService: ItemsService) {
    this.form.valueChanges
      .pipe(filter(value => value !== null))
      .subscribe(value => this.itemService.setCraftable(value))
  }
}
