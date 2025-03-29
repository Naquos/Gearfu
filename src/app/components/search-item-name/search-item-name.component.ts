import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItemsService } from '../../services/itemsService';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-search-item-name',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './search-item-name.component.html',
  styleUrl: './search-item-name.component.scss'
})
export class SearchItemNameComponent {
  protected form = new FormControl("");

  constructor(private itemService: ItemsService) {
    this.form.valueChanges.subscribe(x => this.itemService.setItemName(x ?? ""));
  }
}
