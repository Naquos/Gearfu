
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormField, FieldTree } from '@angular/forms/signals';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { NEVER } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
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
  public readonly color = input<string>("");
  public readonly fieldControl = input<FieldTree<boolean>>();
  public readonly tooltip = input<string>("");
  public readonly crossedOut = input<boolean>(false);
  protected readonly inputId = `button-checkbox-${ButtonCheckboxComponent.nextId++}`;

  private readonly _controlValue = toSignal(
    toObservable(this.control).pipe(
      switchMap(control =>
        control ? control.valueChanges.pipe(startWith(control.value)) : NEVER
      )
    ),
    { initialValue: false }
  );

  protected readonly isChecked = computed(() => {
    const field = this.fieldControl();
    if (field) {
      return field().value();
    }
    return this._controlValue() ?? false;
  });
}
