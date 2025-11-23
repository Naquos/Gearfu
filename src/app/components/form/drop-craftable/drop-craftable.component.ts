import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonCheckboxComponent } from '../button-checkbox/button-checkbox.component';
import { DropCraftableFormService } from '../../../services/form/dropCraftableFormService';
import { ImageService } from '../../../services/imageService';

@Component({
  selector: 'app-drop-craftable',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent, TranslateModule],
  templateUrl: './drop-craftable.component.html',
  styleUrl: './drop-craftable.component.scss'
})
export class DropCraftableComponent {
  protected readonly dropCraftableFormService = inject(DropCraftableFormService);
  protected readonly imageService = inject(ImageService);
}
