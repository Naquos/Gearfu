import { inject, Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { BehaviorSubject, distinctUntilChanged } from "rxjs";
import { ClassIdEnum } from "../../models/enum/classIdEnum";
import { takeUntil } from "rxjs/operators";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";
import { ClasseFormService } from "./classeFormService";
import { LevelFormService } from "./levelFormService";
import { SortService } from "../data/sortService";

export interface SortForm {
    sortNeutres: number[];
    sortPassifs: number[];
}

@Injectable({ providedIn: 'root' })
export class SortFormService extends AbstractSignalFormService<SortForm> {
    private readonly classeFormService = inject(ClasseFormService);
    private readonly levelFormService = inject(LevelFormService);
    private readonly sortService = inject(SortService);

    public static readonly DEFAULT_SORT_NEUTRE: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    public static readonly DEFAULT_SORT_PASSIF: number[] = [0, 0, 0, 0, 0, 0];

    private readonly sortNeutres = new BehaviorSubject<number[]>(SortFormService.DEFAULT_SORT_NEUTRE);
    public readonly sortNeutres$ = this.sortNeutres.asObservable();

    private readonly sortPassifs = new BehaviorSubject<number[]>(SortFormService.DEFAULT_SORT_PASSIF);
    public readonly sortPassifs$ = this.sortPassifs.asObservable();

    private readonly codeBuild = new BehaviorSubject<string>('');
    public readonly codeBuild$ = this.codeBuild.asObservable();

    private firstLoad = true;
    private _lastLoadedClass: ClassIdEnum | null = null;

    public readonly unlockedEmplacementSortNeutre = [0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 60, 80];
    public readonly unlockedEmplacementSortPassif = [10, 30, 50, 100, 150, 200];

    protected readonly keyEnum = KeyEnum.KEY_SORT;
    protected readonly model = signal<SortForm>({
        sortNeutres: [...SortFormService.DEFAULT_SORT_NEUTRE],
        sortPassifs: [...SortFormService.DEFAULT_SORT_PASSIF]
    });

    public readonly form = form(this.model);

    constructor() {
        super();
        this.init();
        this.classeFormService.classe$.pipe(distinctUntilChanged(), takeUntil(this.destroy$)).subscribe((newClass) => {
            if (!this.firstLoad && newClass !== this._lastLoadedClass) {
                this.setDefaultValue();
            }
            this._lastLoadedClass = null;
            this.firstLoad = false;
        });
    }

    protected override handleChanges(value: SortForm): void {
        this.sortNeutres.next(value.sortNeutres ?? SortFormService.DEFAULT_SORT_NEUTRE);
        this.sortPassifs.next(value.sortPassifs ?? SortFormService.DEFAULT_SORT_PASSIF);
        const code = this.generateCodeBuild(value);
        this.codeBuild.next(code);
    }

    public override setValue(value: SortForm | null): void {
        this.model.set({
            sortNeutres: value?.sortNeutres ?? SortFormService.DEFAULT_SORT_NEUTRE,
            sortPassifs: value?.sortPassifs ?? SortFormService.DEFAULT_SORT_PASSIF
        });
    }

    private generateCodeBuild(value: SortForm): string {
        const neutres = value.sortNeutres?.join('-') || '';
        const passifs = value.sortPassifs?.join('-') || '';
        return `${neutres}-${passifs}`;
    }

    public getCodeBuild(): string {
        return this.codeBuild.getValue();
    }

    public decodeAndSaveCodeBuild(codeBuild: string): void {
        // Mémorise la classe active (signal synchrone, déjà mis à jour avant cet appel)
        // pour empêcher le reset asynchrone déclenché par l'effect de ClasseFormService
        this._lastLoadedClass = this.classeFormService.currentValue();
        const parts = codeBuild.split('-');
        const neutres = parts.slice(0, 12).map(part => parseInt(part, 10));
        const passifs = parts.slice(12).map(part => parseInt(part, 10));
        this.setValue({
            sortNeutres: neutres,
            sortPassifs: passifs
        });
    }

    private sortAlreadySet(sortId: number): boolean {
        const neutres = this.sortNeutres.getValue();
        const passifs = this.sortPassifs.getValue();
        return neutres.includes(sortId) || passifs.includes(sortId);
    }

    public override setDefaultValue(): void {
        this.model.set({
            sortNeutres: [...SortFormService.DEFAULT_SORT_NEUTRE],
            sortPassifs: [...SortFormService.DEFAULT_SORT_PASSIF]
        });
    }

    public addSortNeutreAt(index: number, sortId: number): void {
        if (this.sortAlreadySet(sortId)) {
            this.removeSortNeutre(sortId);
        }
        const sort = this.sortService.getDescriptionSortActifById(sortId) || this.sortService.getDescriptionSortElementaireById(sortId);
        if (!sort || this.levelFormService.getValue() < sort.levelUnlock) {
            return;
        }
        const current = this.sortNeutres.getValue();
        if (this.unlockedEmplacementSortNeutre[index] > this.levelFormService.getValue()) {
            return;
        }
        const updated = [...current];
        updated[index] = sortId;
        this.model.update(m => ({ ...m, sortNeutres: updated }));
    }

    public addSortNeutre(sortId: number): void {
        if (this.sortAlreadySet(sortId)) {
            return;
        }
        const sort = this.sortService.getDescriptionSortActifById(sortId) || this.sortService.getDescriptionSortElementaireById(sortId);
        if (!sort || this.levelFormService.getValue() < sort.levelUnlock) {
            return;
        }
        const current = this.sortNeutres.getValue();
        const emptyIndex = current.indexOf(0);
        if (emptyIndex !== -1 && this.unlockedEmplacementSortNeutre[emptyIndex] <= this.levelFormService.getValue()) {
            const updated = [...current];
            updated[emptyIndex] = sortId;
            this.model.update(m => ({ ...m, sortNeutres: updated }));
        }
    }

    public addSortPassifAt(index: number, sortId: number): void {
        if (this.sortAlreadySet(sortId)) {
            this.removeSortPassif(sortId);
        }
        const sort = this.sortService.getDescriptionSortPassifById(sortId);
        if (!sort || this.levelFormService.getValue() < sort.levelUnlock) {
            return;
        }
        if (this.unlockedEmplacementSortPassif[index] > this.levelFormService.getValue()) {
            return;
        }
        const current = this.sortPassifs.getValue();
        const updated = [...current];
        updated[index] = sortId;
        this.model.update(m => ({ ...m, sortPassifs: updated }));
    }

    public addSortPassif(sortId: number): void {
        if (this.sortAlreadySet(sortId)) {
            return;
        }
        const sort = this.sortService.getDescriptionSortPassifById(sortId);
        if (!sort || this.levelFormService.getValue() < sort.levelUnlock) {
            return;
        }
        const current = this.sortPassifs.getValue();
        const emptyIndex = current.indexOf(0);
        if (emptyIndex !== -1 && this.unlockedEmplacementSortPassif[emptyIndex] <= this.levelFormService.getValue()) {
            const updated = [...current];
            updated[emptyIndex] = sortId;
            this.model.update(m => ({ ...m, sortPassifs: updated }));
        }
    }

    public removeSortNeutre(sortId: number): void {
        const current = this.sortNeutres.getValue();
        const updated = current.map(id => (id === sortId ? 0 : id));
        this.model.update(m => ({ ...m, sortNeutres: updated }));
    }

    public removeSortPassif(sortId: number): void {
        const current = this.sortPassifs.getValue();
        const updated = current.map(id => (id === sortId ? 0 : id));
        this.model.update(m => ({ ...m, sortPassifs: updated }));
    }

    public removeSortNeutreAt(index: number): void {
        const current = [...this.sortNeutres.getValue()];
        current[index] = 0;
        this.model.update(m => ({ ...m, sortNeutres: current }));
    }

    public removeSortPassifAt(index: number): void {
        const current = [...this.sortPassifs.getValue()];
        current[index] = 0;
        this.model.update(m => ({ ...m, sortPassifs: current }));
    }

    public swapSortNeutre(fromIndex: number, toIndex: number): void {
        const current = [...this.sortNeutres.getValue()];
        const temp = current[fromIndex];
        current[fromIndex] = current[toIndex];
        current[toIndex] = temp;
        this.model.update(m => ({ ...m, sortNeutres: current }));
    }

    public swapSortPassif(fromIndex: number, toIndex: number): void {
        const current = [...this.sortPassifs.getValue()];
        const temp = current[fromIndex];
        current[fromIndex] = current[toIndex];
        current[toIndex] = temp;
        this.model.update(m => ({ ...m, sortPassifs: current }));
    }

    public getSortPassifs(): number[] {
        return this.sortPassifs.getValue();
    }
}
