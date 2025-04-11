import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ButtonCheckboxComponent } from "../button-checkbox/button-checkbox.component";
import { TranslateModule } from '@ngx-translate/core';
import { MaitrisesFormService } from '../../../services/form/maitrisesFormService';

@Component({
  selector: 'app-filter-maitrises',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent, TranslateModule],
  templateUrl: './filter-maitrises.component.html',
  styleUrl: './filter-maitrises.component.scss'
})
export class FilterMaitrisesComponent {

  constructor(protected maitrisesFormServices: MaitrisesFormService) {}

}
