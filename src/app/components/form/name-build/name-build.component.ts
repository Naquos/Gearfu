import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { NameBuildFormService } from '../../../services/form-signal/nameBuildFormService';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { SaveBuildService } from '../../../services/saveBuildService';
import { Field } from '@angular/forms/signals';

@Component({
  selector: 'app-name-build',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, TranslateModule, Field],
  templateUrl: './name-build.component.html',
  styleUrl: './name-build.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameBuildComponent {
  protected readonly nameBuildFormService = inject(NameBuildFormService);
  protected readonly saveBuildService = inject(SaveBuildService);
}
