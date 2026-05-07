import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { BuildComponent } from '../../items-pages/build/build.component';
import { TranslateModule } from '@ngx-translate/core';
import { SaveBuildService } from '../../../services/saveBuildService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-builds-list',
  imports: [BuildComponent, TranslateModule, CommonModule],
  templateUrl: './builds-list.component.html',
  styleUrl: './builds-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildsListComponent {
  protected readonly saveBuildService = inject(SaveBuildService);
}
