import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ItemsService } from '../../services/itemsService';

@Component({
  selector: 'app-item-level',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule] ,
  templateUrl: './item-level.component.html',
  styleUrl: './item-level.component.scss'
})
export class ItemLevelComponent {

  protected form = new FormGroup({
    levelMin: new FormControl(200),
    levelMax: new FormControl(245)
  });

  constructor(private itemService: ItemsService) {
    this.form.valueChanges.subscribe(changes => {
      this.itemService.setLevelMin(changes.levelMin ?? 200);
      this.itemService.setLevelMax(changes.levelMax ?? 245);
    });
  }
}
