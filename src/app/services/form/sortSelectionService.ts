import { Injectable, signal } from '@angular/core';
import { DescriptionSort } from '../../models/data/descriptionSort';

export type TypeSort = 'NEUTRE' | 'PASSIF';
export type EffectDisplay = 'NORMAL' | 'CRITIQUE';

@Injectable({
    providedIn: 'root'
})
export class SortSelectionService {
    readonly sortSelected = signal<DescriptionSort | undefined>(undefined);
    readonly typeSortSelected = signal<TypeSort | undefined>(undefined);
    readonly effectDisplay = signal<EffectDisplay>('NORMAL');
    readonly spellLevel = signal<number>(246);
    readonly currentDragSource = signal<'list' | 'equipped' | null>(null);

    selectSort(sort: DescriptionSort, typeSort: TypeSort): void {
        this.sortSelected.set(sort);
        this.typeSortSelected.set(typeSort);
    }

    clearSelection(): void {
        this.sortSelected.set(undefined);
        this.typeSortSelected.set(undefined);
    }

    setEffectDisplay(display: EffectDisplay): void {
        this.effectDisplay.set(display);
    }

    setSpellLevel(level: number): void {
        this.spellLevel.set(level);
    }

    setDragSource(source: 'list' | 'equipped' | null): void {
        this.currentDragSource.set(source);
    }
}
