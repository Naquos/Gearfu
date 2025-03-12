import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-button-checkbox',
  imports: [],
  templateUrl: './button-checkbox.component.html',
  styleUrl: './button-checkbox.component.scss'
})
export class ButtonCheckboxComponent {
  public srcImg = input<String>("");
  public control = input<FormControl<boolean>>();
  protected enabled = false;

  protected changeValue() {
    this.enabled = !this.enabled;
    this.control()?.setValue(this.enabled);
  }
}
