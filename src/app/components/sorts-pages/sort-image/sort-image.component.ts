import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImageService } from '../../../services/imageService';
import { SortService } from '../../../services/data/sortService';
import { LevelFormService } from '../../../services/form/levelFormService';
import { SortSelectionService } from '../../../services/form/sortSelectionService';
import { SortFormService } from '../../../services/form/sortFormService';
import { ActivateDirective } from '../../../directives/activate.directive';
import { DescriptionSort } from '../../../models/data/descriptionSort';
import { toSignal } from '@angular/core/rxjs-interop';

export type TypeSort = 'NEUTRE' | 'PASSIF';

@Component({
    selector: 'app-sort-image',
    imports: [CommonModule, MatTooltipModule, ActivateDirective],
    templateUrl: './sort-image.component.html',
    styleUrl: './sort-image.component.scss'
})
export class SortImageComponent {
    private readonly imageService = inject(ImageService);
    private readonly sortService = inject(SortService);
    private readonly levelFormService = inject(LevelFormService);
    private readonly sortSelectionService = inject(SortSelectionService);
    private readonly sortFormService = inject(SortFormService);

    @Input({ required: true }) sort!: DescriptionSort;
    @Input({ required: true }) typeSort!: TypeSort;

    protected readonly level = toSignal(this.levelFormService.level$, {
        initialValue: 246
    });

    protected getSortUrl(gfxId: number): string {
        return this.imageService.getSortUrl(gfxId);
    }

    protected getSortName(): string {
        return this.sort.name[this.sortService.getCurrentLang()];
    }

    protected isLocked(): boolean {
        return this.level() < this.sort.levelUnlock;
    }

    protected onDragStart(event: DragEvent): void {
        this.sortSelectionService.setDragSource('list');
        if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = 'copy';
            event.dataTransfer.setData('sortId', this.sort.gfxId.toString());
            event.dataTransfer.setData('typeSort', this.typeSort);
            event.dataTransfer.setData('source', 'list');
        }
    }

    protected onClick(): void {
        this.sortSelectionService.selectSort(this.sort, this.typeSort);
    }

    protected onDoubleClick(): void {
        this.addSortToBuild();
    }

    protected onContextMenu(event: MouseEvent): void {
        event.preventDefault();
        this.addSortToBuild();
    }

    private addSortToBuild(): void {
        if (this.typeSort === 'NEUTRE') {
            this.sortFormService.addSortNeutre(this.sort.gfxId);
        } else if (this.typeSort === 'PASSIF') {
            this.sortFormService.addSortPassif(this.sort.gfxId);
        }
    }
}
