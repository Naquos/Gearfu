import { Component } from '@angular/core';
import { SortChoiceEnum } from '../../../models/enum/sortChoiceEnum';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { SortChoiceFormService } from '../../../services/form/sortChoiceFormService';

@Component({
  selector: 'app-sort-choice',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './sort-choice.component.html',
  styleUrl: './sort-choice.component.scss'
})
export class SortChoiceComponent {
  protected SortChoiceEnumList = Object.values(SortChoiceEnum);
  constructor(protected sortChoiceFormService: SortChoiceFormService) {}
}
