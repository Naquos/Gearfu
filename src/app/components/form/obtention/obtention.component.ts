import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonCheckboxComponent } from '../button-checkbox/button-checkbox.component';
import { ObtentionFormService } from '../../../services/form/obtentionFormService';
import { ImageService } from '../../../services/imageService';

@Component({
  selector: 'app-obtention',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent, TranslateModule],
  templateUrl: './obtention.component.html',
  styleUrl: './obtention.component.scss'
})
export class ObtentionComponent {
  protected readonly obtentionFormService = inject(ObtentionFormService);
  protected readonly imageService = inject(ImageService);
}
