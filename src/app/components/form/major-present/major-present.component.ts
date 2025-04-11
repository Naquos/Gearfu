import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { MajorPresentFormService } from '../../../services/form/majorPresentFormService';
import { ButtonCheckboxComponent } from '../button-checkbox/button-checkbox.component';

@Component({
  selector: 'app-major-present',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent, TranslateModule],
  templateUrl: './major-present.component.html',
  styleUrl: './major-present.component.scss'
})
export class MajorPresentComponent {
  constructor(protected majorPresentFormService: MajorPresentFormService) {}
}
