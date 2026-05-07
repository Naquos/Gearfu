import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ButtonCheckboxComponent } from "../button-checkbox/button-checkbox.component";
import { TranslateModule } from '@ngx-translate/core';
import { MaitrisesFormService } from '../../../services/form-signal/maitrisesFormService';
import { ImageService } from '../../../services/imageService';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';

@Component({
  selector: 'app-filter-maitrises',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent, TranslateModule],
  templateUrl: './filter-maitrises.component.html',
  styleUrl: './filter-maitrises.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterMaitrisesComponent {
  protected readonly maitrisesFormServices = inject(MaitrisesFormService);
  protected readonly imageService = inject(ImageService);

  protected readonly IdActionsEnum = IdActionsEnum;
}
