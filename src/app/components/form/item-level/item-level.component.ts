import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { ItemLevelFormService } from '../../../services/form/itemLevelFormService';

@Component({
  selector: 'app-item-level',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, TranslateModule],
  templateUrl: './item-level.component.html',
  styleUrl: './item-level.component.scss'
})
export class ItemLevelComponent {

  constructor(protected readonly itemLevelFormService: ItemLevelFormService) {}
}
