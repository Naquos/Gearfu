import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SortService } from '../../../services/data/sortService';
import { SortImageComponent } from '../sort-image/sort-image.component';

@Component({
    selector: 'app-sort-list',
    imports: [TranslateModule, SortImageComponent],
    templateUrl: './sort-list.component.html',
    styleUrl: './sort-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortListComponent {
    protected readonly sortService = inject(SortService);
}
