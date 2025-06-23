import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-button-checkbox',
  imports: [MatTooltipModule, MatIconModule, TranslateModule, MatIconModule, CommonModule],
  templateUrl: './button-checkbox.component.html',
  styleUrl: './button-checkbox.component.scss',
})
export class ButtonCheckboxComponent {
  public readonly srcImg = input<string>("");
  public readonly matIcon = input<string>("");
  public readonly control = input<FormControl<boolean>>();
  public readonly tooltip = input<string>("");
  public readonly crossedOut = input<boolean>(false);
}
