import { Component, inject, ChangeDetectionStrategy, input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { ItemLevelFormService } from '../../../services/form-signal/itemLevelFormService';
import { InputNumberComponent } from '../input-number/input-number.component';

@Component({
  selector: 'app-item-level',
  imports: [MatFormFieldModule, MatInputModule, TranslateModule, InputNumberComponent],
  templateUrl: './item-level.component.html',
  styleUrl: './item-level.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemLevelComponent {
  protected readonly itemLevelFormService = inject(ItemLevelFormService);
  public readonly noTitle = input<boolean>(false);
}
