import { Component, input, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import { ImageFallbackDirective } from '../../../directives/imageFallback.directive';

export interface Option<T> {
  id: string;
  label: string;
  displayLabel: string;
  imgUrl: string;
  backgroundColor: string;
  value: T;
}

@Component({
  selector: 'app-search',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslateModule,
    MatAutocompleteModule,
    CommonModule,
    ImageFallbackDirective
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent<T> {

  public readonly label = input<string>('');
  public readonly options = input<Option<T>[]>([]);
  public readonly control = input.required<FormControl<string>>();
  public readonly selected = output<string>();

  protected onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    this.selected.emit(event.option.value);
  }
}
