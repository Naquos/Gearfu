import { Component, input, output, signal } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { Option } from "../search/search.component";
import { FormControl } from '@angular/forms';
import { ActivateDirective } from "../../../directives/activate.directive";

@Component({
  selector: 'app-search-list',
  imports: [SearchComponent, ActivateDirective],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss',
})
export class SearchListComponent<T> {
  public label = input<string>('Items');
  public options = input<Option<T>[]>([]);
  public control = input.required<FormControl<string>>();
  public choosed = output<Set<Option<T>>>();

  protected optionsChoosed = signal<Set<Option<T>>>(new Set());

  protected onOptionsSelected(optionId: string): void {
    const option = this.options().find(option => option.label === optionId);
    const notPresent = ![...this.optionsChoosed()].some(option => option.label === optionId);
    if (option && notPresent) {
      this.optionsChoosed().add(option);
      this.choosed.emit(this.optionsChoosed());
    }
  }

  protected removeOptionSelected(optionId: string): void {
    const option = [...this.optionsChoosed()].find(option => option.label === optionId);
    if (option) {
      this.optionsChoosed().delete(option);
      this.choosed.emit(this.optionsChoosed());

    }
  }
}
