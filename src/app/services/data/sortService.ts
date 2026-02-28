import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, map, Observable, shareReplay, tap } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";
import { ClasseFormService } from "../form/classeFormService";
import { Sort } from "../../models/data/sort";
import { DescriptionSort } from "../../models/data/descriptionSort";
import { sortNeutreCommun, sortPassifCommun } from "../../models/data/sort-communs";
import { SpellEffectService } from "../spellEffectService";
import { SortLevelService } from "./sortLevelService";
import { LevelUnlockSort } from "../../models/data/levelUnlockSort";
import { SortLevel } from "../../models/data/sortLevel";
import { GEARFU_RESOURCES_URL } from "../../models/utils/utils";
import { CompressionService } from "../compression/compressionService";

@Injectable({ providedIn: 'root' })
export class SortService {

    private readonly classeFormService = inject(ClasseFormService);
    private readonly spellEffectService = inject(SpellEffectService);
    private readonly sortLevelService = inject(SortLevelService);
    private readonly compressionService = inject(CompressionService);
    private readonly sorts = new BehaviorSubject<Sort[]>([]);
    public readonly sorts$ = this.sorts.asObservable();
    public readonly sortsClasse = toSignal(combineLatest([this.sorts$, this.classeFormService.classe$, this.sortLevelService.sortsLevel$]).pipe(
        map(([sorts, idClasse, sortLevel]): [Sort | undefined, SortLevel | undefined] => {
            const _sorts = sorts.filter(sort => sort.idClasse === idClasse)[0]
            const _sortLevel = sortLevel.filter(sort => sort.idClasse === idClasse)[0];
            return [_sorts, _sortLevel]
        }),
        map(([sorts, sortLevel]) => {
            return sorts ? {
                ...sorts,
                sortActifs: [...this.setUnlockedSortLevels([...sorts.sortActifs, ...sortNeutreCommun], sortLevel?.sortActifs || [])],
                sortPassifs: [...this.setUnlockedSortLevels([...sorts.sortPassifs, ...sortPassifCommun], sortLevel?.sortPassifs || [])],
                sortElementaires: {
                    feu: [...this.setUnlockedSortLevels([...sorts.sortElementaires.feu], sortLevel?.sortElementaires.feu || [])],
                    eau: [...this.setUnlockedSortLevels([...sorts.sortElementaires.eau], sortLevel?.sortElementaires.eau || [])],
                    air: [...this.setUnlockedSortLevels([...sorts.sortElementaires.air], sortLevel?.sortElementaires.air || [])],
                    terre: [...this.setUnlockedSortLevels([...sorts.sortElementaires.terre], sortLevel?.sortElementaires.terre || [])]
                }
            } : undefined
        }),
    ), { initialValue: undefined });

    private getUnlockedSortLevels(sortId: number, levelUnlockSort: LevelUnlockSort[]): number {
        const level = levelUnlockSort.find(s => s.idSort == sortId);
        return level ? level.levelUnlockSort : 1;
    }

    private setUnlockedSortLevels(descriptionSorts: DescriptionSort[], levelUnlockSort: LevelUnlockSort[]): DescriptionSort[] {
        return descriptionSorts.map(sort => ({
            ...sort,
            levelUnlock: this.getUnlockedSortLevels(sort.gfxId, levelUnlockSort)
        })).sort((a, b) => a.levelUnlock - b.levelUnlock);
    }

    /**
     * Charge les données des sorts
     * Utilise un cache pour éviter les chargements multiples
     */
    public load(): Observable<void> {
        return this.compressionService.decompressGzipJson<{ imageDict: Record<string, string>, classes: Sort[] }>(GEARFU_RESOURCES_URL + 'sorts.json.gz').pipe(
            tap(data => {
                this.spellEffectService.setImageDictionary(data.imageDict);
                this.sorts.next(data.classes);
            }),
            shareReplay(1),
            map(() => { })
        );
    }

    public getDescriptionSortElementaireById(sortId: number): DescriptionSort | undefined {
        return this.sortsClasse()?.sortElementaires.feu.find(s => s.gfxId === sortId)
            || this.sortsClasse()?.sortElementaires.eau.find(s => s.gfxId === sortId)
            || this.sortsClasse()?.sortElementaires.air.find(s => s.gfxId === sortId)
            || this.sortsClasse()?.sortElementaires.terre.find(s => s.gfxId === sortId);
    }

    public getDescriptionSortPassifById(sortId: number): DescriptionSort | undefined {
        return this.sortsClasse()?.sortPassifs.find(s => s.gfxId === sortId);
    }

    public getDescriptionSortActifById(sortId: number): DescriptionSort | undefined {
        return this.sortsClasse()?.sortActifs.find(s => s.gfxId === sortId);
    }

}
