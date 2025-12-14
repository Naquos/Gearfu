import { Component, inject } from '@angular/core';
import { ImageService } from '../../../services/imageService';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';
import { FormControl, FormGroup } from '@angular/forms';
import { ButtonCheckboxComponent } from "../../form/button-checkbox/button-checkbox.component";

@Component({
  selector: 'app-maitrise-selector',
  imports: [ButtonCheckboxComponent],
  templateUrl: './maitrise-selector.component.html',
  styleUrl: './maitrise-selector.component.scss',
})
export class MaitriseSelectorComponent {

  protected readonly imageService = inject(ImageService);
  protected readonly IdActionsEnum = IdActionsEnum;

  protected form = new FormGroup({
    feu: new FormControl(false) as FormControl<boolean>,
    eau: new FormControl(false) as FormControl<boolean>,
    air: new FormControl(false) as FormControl<boolean>,
    terre: new FormControl(false) as FormControl<boolean>,
  });

}
