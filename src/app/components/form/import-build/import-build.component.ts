import { Component } from '@angular/core';
import { ImportBuildService } from '../../../services/form/importBuildService';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-import-build',
  imports: [MatFormFieldModule, FormsModule, MatInputModule, ReactiveFormsModule, MatIconModule, TranslateModule],
  templateUrl: './import-build.component.html',
  styleUrl: './import-build.component.scss'
})
export class ImportBuildComponent {
  constructor(protected importBuildService: ImportBuildService) {}
}
