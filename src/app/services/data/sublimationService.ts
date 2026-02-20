import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, shareReplay, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SublimationsDescriptions } from "../../models/data/sublimationsDescriptions";

@Injectable({providedIn: 'root'})
export class SublimationService {

    private readonly sublimations = new Map<string, SublimationsDescriptions>();
    private readonly sublimationsClassiqueSubject = new BehaviorSubject<SublimationsDescriptions[]>([]);
    private readonly sublimationsEpiqueReliqueSubject = new BehaviorSubject<SublimationsDescriptions[]>([]);
    public readonly sublimationsClassique$ = this.sublimationsClassiqueSubject.asObservable();
    public readonly sublimationsEpiqueRelique$ = this.sublimationsEpiqueReliqueSubject.asObservable();
    private readonly http = inject(HttpClient);

    private loadPromise?: Promise<void>;
    
    public load(): Promise<void> {
        if (this.loadPromise) {
            return this.loadPromise;
        }

        this.loadPromise = new Promise((resolve,) => {
            this.http.get<SublimationsDescriptions[]>('/Gearfu/sublimations.json')
                .pipe(
                    tap(sublimations => {
                        this.sublimations.clear();
                        sublimations.forEach(x => this.sublimations.set(x.title.fr, x));

                        const classique = sublimations.filter(sublimation => !sublimation.isEpic && !sublimation.isRelic);
                        const epiqueRelique = sublimations.filter(sublimation => sublimation.isEpic || sublimation.isRelic);

                        this.sublimationsClassiqueSubject.next(classique);
                        this.sublimationsEpiqueReliqueSubject.next(epiqueRelique);
                    }),
                    shareReplay(1)
                )
                .subscribe({
                    next: () => resolve(),
                    error: (err) => {
                        console.error('Failed to load sublimations:', err);
                        // Fallback sur données vides plutôt que de bloquer l'app
                        resolve();
                    }
                });
        });

        return this.loadPromise;
    }
    
    public getSublimations(): SublimationsDescriptions[] {
        return this.sublimationsClassiqueSubject.value;
    }

    public getSublimationsEpiqueRelique(): SublimationsDescriptions[] {
        return this.sublimationsEpiqueReliqueSubject.value;
    }

    public getSublimationById(id: number): SublimationsDescriptions | undefined {
        for (const sublimation of this.sublimations.values()) {
            if (sublimation.id === id) {
                return sublimation;
            }
        }
        return undefined;
    }
}