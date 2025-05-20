import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { MajorPresentFormService } from '../../../services/form/majorPresentFormService';
import { ButtonCheckboxComponent } from '../button-checkbox/button-checkbox.component';
import { ImageService } from '../../../services/imageService';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';

@Component({
  selector: 'app-major-present',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent, TranslateModule],
  templateUrl: './major-present.component.html',
  styleUrl: './major-present.component.scss'
})
export class MajorPresentComponent {
  
  protected readonly IdActionsEnum = IdActionsEnum;

  constructor(protected readonly majorPresentFormService: MajorPresentFormService, protected readonly imageService: ImageService) {}
}
