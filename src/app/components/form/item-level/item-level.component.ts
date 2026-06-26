import { Component, inject, ChangeDetectionStrategy, input } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { ItemLevelFormService } from '../../../services/form-signal/itemLevelFormService';

@Component({
  selector: 'app-item-level',
  imports: [FormField, MatFormFieldModule, MatInputModule, TranslateModule],
  templateUrl: './item-level.component.html',
  styleUrl: './item-level.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemLevelComponent {
  protected readonly itemLevelFormService = inject(ItemLevelFormService);
  public readonly noTitle = input<boolean>(false);
}
