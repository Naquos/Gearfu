import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-button-checkbox',
  imports: [MatTooltipModule, MatIconModule],
  templateUrl: './button-checkbox.component.html',
  styleUrl: './button-checkbox.component.scss',
})
export class ButtonCheckboxComponent {
  public srcImg = input<string>("");
  public control = input<FormControl<boolean>>();
  public tooltip = input<string>("");
}
