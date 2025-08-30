import { Component, inject } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ButtonCheckboxComponent } from "../button-checkbox/button-checkbox.component";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RareteItemFormServices } from '../../../services/form/rareteItemFormService';
import { ImageService } from '../../../services/imageService';
import { RarityItemEnum } from '../../../models/enum/rarityItemEnum';

@Component({
  selector: 'app-rarete-item',
  imports: [ReactiveFormsModule, MatCheckboxModule, ButtonCheckboxComponent, CommonModule, TranslateModule],
  templateUrl: './rarete-item.component.html',
  styleUrl: './rarete-item.component.scss'
})
export class RareteItemComponent {
  protected readonly rareteItemFormService = inject(RareteItemFormServices);
  protected readonly imageService = inject(ImageService);
  protected readonly RarityItemEnum = RarityItemEnum;
}
