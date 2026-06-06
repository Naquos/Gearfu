
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormField, FieldTree } from '@angular/forms/signals';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { LazyImageDirective } from '../../../directives/lazy-image.directive';

@Component({
  selector: 'app-button-checkbox',
  imports: [MatTooltipModule, MatIconModule, TranslateModule, ReactiveFormsModule, FormField, LazyImageDirective],
  templateUrl: './button-checkbox.component.html',
  styleUrl: './button-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonCheckboxComponent {
  private static nextId = 0;

  public readonly srcImg = input<string>("");
  public readonly matIcon = input<string>("");
  public readonly control = input<FormControl<boolean>>();
  public readonly fieldControl = input<FieldTree<boolean>>();
  public readonly tooltip = input<string>("");
  public readonly crossedOut = input<boolean>(false);
  protected readonly inputId = `button-checkbox-${ButtonCheckboxComponent.nextId++}`;
  protected readonly isChecked = computed(() => {
    const field = this.fieldControl();
    if (field) {
      return field().value();
    }
    return this.control()?.value ?? false;
  });
}
