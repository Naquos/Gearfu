import { Component, inject } from '@angular/core';
import { ReverseFormService } from '../../../services/form/reverseFormService';
import { ButtonCheckboxComponent } from '../button-checkbox/button-checkbox.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reverse-button',
  imports: [ButtonCheckboxComponent, TranslateModule],
  templateUrl: './reverse-button.component.html',
  styleUrl: './reverse-button.component.scss'
})
export class ReverseButtonComponent {
  protected readonly reverseFormService = inject(ReverseFormService);

}
