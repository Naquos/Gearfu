import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SortService } from '../../../services/data/sortService';
import { SortImageComponent } from '../sort-image/sort-image.component';

@Component({
    selector: 'app-sort-list',
    imports: [CommonModule, TranslateModule, SortImageComponent],
    templateUrl: './sort-list.component.html',
    styleUrl: './sort-list.component.scss'
})
export class SortListComponent {
    protected readonly sortService = inject(SortService);
}
