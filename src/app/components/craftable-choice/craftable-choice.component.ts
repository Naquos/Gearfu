import { Component } from '@angular/core';
import { CraftableChoiceEnum } from '../../models/craftableChoiceEnum';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { CraftableChoiceFormService } from '../../services/form/craftableChoiceFormService';

@Component({
  selector: 'app-craftable-choice',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './craftable-choice.component.html',
  styleUrl: './craftable-choice.component.scss'
})
export class CraftableChoiceComponent {
  protected craftableChoiceEnumList = Object.values(CraftableChoiceEnum);

  constructor(protected craftableChoiceFormServie: CraftableChoiceFormService) {}
}
