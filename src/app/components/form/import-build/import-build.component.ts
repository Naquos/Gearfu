import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ImportBuildFormService } from '../../../services/form-signal/importBuildFormService';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { Field } from '@angular/forms/signals';

@Component({
  selector: 'app-import-build',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, TranslateModule, Field],
  templateUrl: './import-build.component.html',
  styleUrl: './import-build.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImportBuildComponent {
  protected readonly importBuildService = inject(ImportBuildFormService);
}
