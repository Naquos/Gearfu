import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LazyImageDirective } from '../../../directives/lazy-image.directive';
import { ActivateDirective } from '../../../directives/activate.directive';
import { SortFormService } from '../../../services/form/sortFormService';
import { LevelFormService } from '../../../services/form/levelFormService';
import { ImageService } from '../../../services/imageService';
import { SortSelectionService } from '../../../services/form/sortSelectionService';
import { toSignal } from '@angular/core/rxjs-interop';
import { SortService } from '../../../services/data/sortService';

type TypeSort = 'NEUTRE' | 'PASSIF';

@Component({
    selector: 'app-equipped-sorts',
    imports: [CommonModule, TranslateModule, LazyImageDirective, ActivateDirective],
    templateUrl: './equipped-sorts.component.html',
    styleUrl: './equipped-sorts.component.scss'
})
export class EquippedSortsComponent {
    private readonly levelFormService = inject(LevelFormService);
    private readonly sortSelectionService = inject(SortSelectionService);
    private readonly sortService = inject(SortService);

    protected readonly imageService = inject(ImageService);
    protected readonly sortFormService = inject(SortFormService);
    public readonly readonly = input<boolean>(false);

    protected readonly level = toSignal(this.levelFormService.level$, {
        initialValue: 246
    });

    protected readonly sortNeutres = toSignal(this.sortFormService.sortNeutres$, {
        initialValue: []
    });

    protected readonly sortPassifs = toSignal(this.sortFormService.sortPassifs$, {
        initialValue: []
    });

    protected onDragStart(event: DragEvent, sortId: number, typeSort: TypeSort, index: number): void {
        if (this.readonly()) { return; }
        if (sortId === 0) {
            event.preventDefault();
            return;
        }
        this.sortSelectionService.setDragSource('equipped');
        if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('sortId', sortId.toString());
            event.dataTransfer.setData('typeSort', typeSort);
            event.dataTransfer.setData('source', 'equipped');
            event.dataTransfer.setData('sourceIndex', index.toString());
        }
    }

    protected onDragOver(event: DragEvent): void {
        if (this.readonly()) { return; }
        event.preventDefault();
        if (event.dataTransfer) {
            const currentSource = this.sortSelectionService.currentDragSource();
            event.dataTransfer.dropEffect = currentSource === 'equipped' ? 'move' : 'copy';
        }
    }

    protected onDrop(event: DragEvent, typeSort: TypeSort, index: number): void {
        if (this.readonly()) { return; }
        event.preventDefault();
        if (event.dataTransfer) {
            const sortId = parseInt(event.dataTransfer.getData('sortId'), 10);
            const draggedTypeSort = event.dataTransfer.getData('typeSort') as TypeSort;
            const source = event.dataTransfer.getData('source');

            if (draggedTypeSort === typeSort) {
                if (source === 'equipped') {
                    // Réorganisation des sorts équipés
                    const sourceIndex = parseInt(event.dataTransfer.getData('sourceIndex'), 10);
                    if (typeSort === 'NEUTRE') {
                        this.sortFormService.swapSortNeutre(sourceIndex, index);
                    } else if (typeSort === 'PASSIF') {
                        this.sortFormService.swapSortPassif(sourceIndex, index);
                    }
                } else {
                    // Ajout depuis la liste
                    if (typeSort === 'NEUTRE') {
                        this.sortFormService.addSortNeutreAt(index, sortId);
                    } else if (typeSort === 'PASSIF') {
                        this.sortFormService.addSortPassifAt(index, sortId);
                    }
                }
            }
        }
        this.sortSelectionService.setDragSource(null);
    }

    protected selectSortById(sortId: number, typeSort: TypeSort): void {
        if (this.readonly()) { return; }

        if (typeSort === 'NEUTRE') {
            const sort = this.sortService.getDescriptionSortElementaireById(sortId) ||
                this.sortService.getDescriptionSortActifById(sortId);
            if (sort) {
                this.sortSelectionService.selectSort(sort, 'NEUTRE');
            }
        } else {
            const sort = this.sortService.getDescriptionSortPassifById(sortId);
            if (sort) {
                this.sortSelectionService.selectSort(sort, 'PASSIF');
            }
        }
    }

    protected removeSortFromBuild(typeSort: TypeSort, index: number): void {
        if (this.readonly()) { return; }
        if (typeSort === 'NEUTRE') {
            this.sortFormService.removeSortNeutreAt(index);
        } else if (typeSort === 'PASSIF') {
            this.sortFormService.removeSortPassifAt(index);
        }
    }
}
