import { Component } from '@angular/core';
import { ResistancesFormService } from '../../services/form/resistancesFormService';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonCheckboxComponent } from '../button-checkbox/button-checkbox.component';

@Component({
  selector: 'app-filter-resistances',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent, TranslateModule],
  templateUrl: './filter-resistances.component.html',
  styleUrl: './filter-resistances.component.scss'
})
export class FilterResistancesComponent {

  constructor(protected resistancesFormService: ResistancesFormService) {}
}
