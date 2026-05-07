import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { ResistancesFormService } from '../../../services/form-signal/resistancesFormService';
import { ButtonCheckboxComponent } from '../button-checkbox/button-checkbox.component';
import { ImageService } from '../../../services/imageService';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';

@Component({
  selector: 'app-filter-resistances',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent, TranslateModule],
  templateUrl: './filter-resistances.component.html',
  styleUrl: './filter-resistances.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterResistancesComponent {
  protected readonly resistancesFormService = inject(ResistancesFormService);
  protected readonly imageService = inject(ImageService);

  protected readonly IdActionsEnum = IdActionsEnum;
}
