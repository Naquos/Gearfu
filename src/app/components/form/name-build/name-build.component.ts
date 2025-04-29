import { Component } from '@angular/core';
import { NameBuildFormService } from '../../../services/form/nameBuildFormService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-name-build',
  imports: [MatFormFieldModule, FormsModule, MatInputModule, ReactiveFormsModule, MatIconModule, TranslateModule],
  templateUrl: './name-build.component.html',
  styleUrl: './name-build.component.scss'
})
export class NameBuildComponent {
  constructor(protected readonly nameBuildFormService: NameBuildFormService) {}
}
