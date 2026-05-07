import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { SortChoiceEnum } from '../../../models/enum/sortChoiceEnum';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { SortChoiceFormService } from '../../../services/form-signal/sortChoiceFormService';
import { Field } from '@angular/forms/signals';

@Component({
  selector: 'app-sort-choice',
  imports: [MatFormFieldModule, MatSelectModule, TranslateModule, Field],
  templateUrl: './sort-choice.component.html',
  styleUrl: './sort-choice.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortChoiceComponent {
  protected readonly sortChoiceFormService = inject(SortChoiceFormService);
  protected readonly SortChoiceEnumList = Object.values(SortChoiceEnum);
}
