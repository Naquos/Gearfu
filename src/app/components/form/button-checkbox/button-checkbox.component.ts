
import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { ActivateDirective } from '../../../directives/activate.directive';
import { LazyImageDirective } from '../../../directives/lazy-image.directive';

@Component({
  selector: 'app-button-checkbox',
  imports: [MatTooltipModule, MatIconModule, TranslateModule, MatIconModule, ReactiveFormsModule, ActivateDirective, LazyImageDirective],
  templateUrl: './button-checkbox.component.html',
  styleUrl: './button-checkbox.component.scss',
})
export class ButtonCheckboxComponent {
  public readonly srcImg = input<string>("");
  public readonly matIcon = input<string>("");
  public readonly control = input<FormControl<boolean>>();
  public readonly tooltip = input<string>("");
  public readonly crossedOut = input<boolean>(false);

  protected toggle(): void {
    this.control()?.setValue(!this.control()?.value);
    this.control()?.markAsDirty();
    this.control()?.markAsTouched();
  }
}
