import { Component } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ButtonCheckboxComponent } from "../button-checkbox/button-checkbox.component";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RareteItemFormServices } from '../../../services/form/rareteItemFormService';

@Component({
  selector: 'app-rarete-item',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent, CommonModule, TranslateModule],
  templateUrl: './rarete-item.component.html',
  styleUrl: './rarete-item.component.scss'
})
export class RareteItemComponent {

  constructor(protected readonly rareteItemFormService: RareteItemFormServices) {}
}
