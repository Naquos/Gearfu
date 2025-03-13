import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-button-checkbox',
  imports: [MatTooltipModule],
  templateUrl: './button-checkbox.component.html',
  styleUrl: './button-checkbox.component.scss'
})
export class ButtonCheckboxComponent {
  public srcImg = input<String>("");
  public control = input<FormControl<boolean>>();
  public tooltip = input<string>("");
  protected enabled = false;

  protected changeValue() {
    this.enabled = !this.enabled;
    this.control()?.setValue(this.enabled);
  }
}
