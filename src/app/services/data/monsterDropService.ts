import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, shareReplay, tap } from "rxjs";
import { MonsterDrop } from "../../models/data/monsterDrop";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class MonsterDropService {

    private readonly http = inject(HttpClient);
    private readonly monsterDrops = new BehaviorSubject<MonsterDrop[]>([]);
    public readonly monsterDrops$ = this.monsterDrops.asObservable();

    
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
            this.http.get<MonsterDrop[]>('/monstres_drops_gfx.json')
                .pipe(
                    tap(drops => this.monsterDrops.next(drops)),
                    shareReplay(1)
                )
                .subscribe({
                    next: () => resolve(),
                    error: (err) => {
                        console.error('Failed to load monster drops:', err);
                        // Fallback sur données vides plutôt que de bloquer l'app
                        this.monsterDrops.next([]);
                        resolve();
                    }
                });
        });

        return this.loadPromise;
    }

}
