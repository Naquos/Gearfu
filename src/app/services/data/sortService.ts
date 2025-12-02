import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, map, shareReplay, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { toSignal } from "@angular/core/rxjs-interop";
import { ClasseFormService } from "../form/classeFormService";
import { Sort } from "../../models/data/sort";
import { DescriptionSort } from "../../models/data/descriptionSort";
import { sortNeutreCommun, sortPassifCommun } from "../../models/data/sort-communs";

@Injectable({providedIn: 'root'})
export class SortService {

    private readonly http = inject(HttpClient);
    private readonly classeFormService = inject(ClasseFormService)
    private readonly sorts = new BehaviorSubject<Sort[]>([]);
    public readonly sorts$ = this.sorts.asObservable();
    public readonly sortsClasse = toSignal(combineLatest([this.sorts$, this.classeFormService.classe$]).pipe(
        map(([sorts, idClasse]) => sorts.filter(sort => sort.idClasse === idClasse)[0]),
        map(sorts => {
            return sorts ? {
                ...sorts,
                sortActifs: [...sorts.sortActifs],
                sortPassifs: [...sorts.sortPassifs],
                sortElementaires: {
                    feu: [...sorts.sortElementaires.feu],
                    eau: [...sorts.sortElementaires.eau],
                    air: [...sorts.sortElementaires.air],
                    terre: [...sorts.sortElementaires.terre]
                }
            } : undefined
        }),
        tap(sorts => sorts?.sortActifs.push(...sortNeutreCommun)),
        tap(sorts => sorts?.sortPassifs.push(...sortPassifCommun))
    ), {initialValue: undefined});

    
    private loadPromise?: Promise<void>;

    /**
     * Charge les données des drops de monstres
     * Utilise un cache pour éviter les chargements multiples
     */
    public load(): Promise<void> {
        if (this.loadPromise) {
            return this.loadPromise;
        }

        this.loadPromise = new Promise((resolve,) => {
            this.http.get<Sort[]>('/sorts.json')
                .pipe(
                    tap(sorts => this.sorts.next(sorts)),
                    shareReplay(1)
                )
                .subscribe({
                    next: () => resolve(),
                    error: (err) => {
                        console.error('Failed to load monster drops:', err);
                        // Fallback sur données vides plutôt que de bloquer l'app
                        this.sorts.next([]);
                        resolve();
                    }
                });
        });

        return this.loadPromise;
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
