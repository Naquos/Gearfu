import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, shareReplay, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Familier } from "../../models/data/familier";

@Injectable({providedIn: 'root'})
export class FamiliersService {

    private readonly http = inject(HttpClient);
    private readonly familiers = new BehaviorSubject<Familier[]>([]);
    public readonly familiers$ = this.familiers.asObservable();

    
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
            this.http.get<Familier[]>('/familiers_stats.json')
                .pipe(
                    tap(drops => this.familiers.next(drops)),
                    shareReplay(1)
                )
                .subscribe({
                    next: () => resolve(),
                    error: (err) => {
                        console.error('Failed to load monster drops:', err);
                        // Fallback sur données vides plutôt que de bloquer l'app
                        this.familiers.next([]);
                        resolve();
                    }
                });
        });

        return this.loadPromise;
    }

}
