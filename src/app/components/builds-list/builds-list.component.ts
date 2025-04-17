import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildComponent } from '../build/build.component';
import { TranslateModule } from '@ngx-translate/core';
import { SaveBuildService } from '../../services/saveBuildService';

@Component({
  selector: 'app-builds-list',
  imports: [CommonModule, BuildComponent, TranslateModule],
  templateUrl: './builds-list.component.html',
  styleUrl: './builds-list.component.scss'
})
export class BuildsListComponent {
  constructor(protected saveBuildService: SaveBuildService) {}
}
