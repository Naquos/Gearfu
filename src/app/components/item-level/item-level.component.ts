import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-item-level',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule] ,
  templateUrl: './item-level.component.html',
  styleUrl: './item-level.component.scss'
})
export class ItemLevelComponent {

  public levelMin = output<number>();
  public levelMax = output<number>();

  protected form = new FormGroup({
    levelMin: new FormControl(200),
    levelMax: new FormControl(245)
  });

  constructor() {
    this.form.valueChanges.subscribe(changes => {
      this.levelMin.emit(changes.levelMin ?? 200);
      this.levelMax.emit(changes.levelMax ?? 245);
    });
  }
}
