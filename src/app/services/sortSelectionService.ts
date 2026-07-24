import { effect, inject, Injectable, signal } from '@angular/core';
import { DescriptionSort } from '../models/data/descriptionSort';
import { LevelFormService } from './form-signal/levelFormService';

export type TypeSort = 'NEUTRE' | 'PASSIF';
export type EffectDisplay = 'NORMAL' | 'CRITIQUE';

@Injectable({
    providedIn: 'root'
})
export class SortSelectionService {
    private readonly levelFormService = inject(LevelFormService);
    readonly sortSelected = signal<DescriptionSort | undefined>(undefined);
    readonly typeSortSelected = signal<TypeSort | undefined>(undefined);
    readonly effectDisplay = signal<EffectDisplay>('NORMAL');
    readonly spellLevel = signal<number>(246);
    readonly currentDragSource = signal<'list' | 'equipped' | null>(null);

    constructor() {
        effect(() => {
            const level = this.levelFormService.currentValue();
            this.spellLevel.set(Number.isNaN(level) ? this.spellLevel() : Number.parseInt(level.toString(), 10) + 1);
        });
    }

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
