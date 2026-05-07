import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ImageService } from '../../../services/imageService';
import { ButtonCheckboxComponent } from '../../form/button-checkbox/button-checkbox.component';
import { BonusFormService } from '../../../services/form/bonusFormService';

@Component({
  selector: 'app-bonus',
  imports: [ButtonCheckboxComponent],
  templateUrl: './bonus.component.html',
  styleUrl: './bonus.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BonusComponent {
  protected readonly imageService = inject(ImageService);
  protected readonly bonusFormService = inject(BonusFormService);


}
