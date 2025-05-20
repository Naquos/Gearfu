import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { ResistancesFormService } from '../../../services/form/resistancesFormService';
import { ButtonCheckboxComponent } from '../button-checkbox/button-checkbox.component';
import { ImageService } from '../../../services/imageService';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';

@Component({
  selector: 'app-filter-resistances',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent, TranslateModule],
  templateUrl: './filter-resistances.component.html',
  styleUrl: './filter-resistances.component.scss'
})
export class FilterResistancesComponent {

  protected readonly IdActionsEnum = IdActionsEnum;

  constructor(protected readonly resistancesFormService: ResistancesFormService, protected readonly imageService: ImageService) {}
}
