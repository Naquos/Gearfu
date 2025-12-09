import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, shareReplay, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SortLevel } from "../../models/data/sortLevel";

@Injectable({providedIn: 'root'})
export class SortLevelService {

    private readonly http = inject(HttpClient);
    private readonly sortsLevel = new BehaviorSubject<SortLevel[]>([]);
    public readonly sortsLevel$ = this.sortsLevel.asObservable();
    
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
            this.http.get<SortLevel[]>('/sortsLevel.json')
                .pipe(
                    tap(data => {
                        this.sortsLevel.next(data);
                    }),
                    shareReplay(1)
                )
                .subscribe({
                    next: () => resolve(),
                    error: (err) => {
                        console.error('Failed to load sortLevel:', err);
                        // Fallback sur données vides plutôt que de bloquer l'app
                        this.sortsLevel.next([]);
                        resolve();
                    }
                });
        });

        return this.loadPromise;
    }

}
