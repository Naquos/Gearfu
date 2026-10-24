import { Component, input } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-input-number',
  imports: [FormField, MatFormFieldModule, MatInputModule, TranslateModule],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss',
})
export class InputNumberComponent {
  public readonly label = input<string>('');
  public readonly form = input.required<FieldTree<string, string, "writable">>();
}
