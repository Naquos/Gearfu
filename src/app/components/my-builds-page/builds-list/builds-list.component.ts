import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { BuildComponent } from '../../items-pages/build/build.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MyBuildsFormService } from '../../../services/form-signal/myBuildsFormService';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormField } from '@angular/forms/signals';
import { InputNumberComponent } from '../../form/input-number/input-number.component';
import { ClassIdEnum } from '../../../models/enum/classIdEnum';
import { ActivateDirective } from '../../../directives/activate.directive';

@Component({
  selector: 'app-builds-list',
  imports: [
    BuildComponent,
    TranslateModule,
    CommonModule,
    MatInputModule,
    MatIcon,
    FormField,
    MatLabel,
    MatFormFieldModule,
    InputNumberComponent,
    ActivateDirective
  ],
  templateUrl: './builds-list.component.html',
  styleUrl: './builds-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildsListComponent {
  protected readonly myBuildsFormService = inject(MyBuildsFormService);
  protected readonly buildList = this.myBuildsFormService.buildList;
  protected readonly form = this.myBuildsFormService.form;

  protected idClasses: number[] = Object.values(ClassIdEnum).filter(value => typeof value === 'number') as number[];
}
