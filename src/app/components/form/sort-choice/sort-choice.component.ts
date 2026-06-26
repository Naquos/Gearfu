import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { SortChoiceEnum } from '../../../models/enum/sortChoiceEnum';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { SortChoiceFormService } from '../../../services/form-signal/sortChoiceFormService';
import { isMobile } from '../../../models/utils/utils';


@Component({
  selector: 'app-sort-choice',
  imports: [MatFormFieldModule, MatSelectModule, TranslateModule],
  templateUrl: './sort-choice.component.html',
  styleUrl: './sort-choice.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortChoiceComponent {
  protected readonly sortChoiceFormService = inject(SortChoiceFormService);
  protected readonly SortChoiceEnumList = Object.values(SortChoiceEnum);
  protected readonly isMobile = signal(isMobile());
}
