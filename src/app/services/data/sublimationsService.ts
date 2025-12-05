import { inject, Injectable } from "@angular/core";
import { tap, shareReplay } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { SublimationsDescriptions } from "../../models/data/sublimationsDescriptions";

@Injectable({providedIn: 'root'})
export class SublimationService {

    private readonly sublimations = new Map<string, SublimationsDescriptions>();
    private readonly sublimationsClassique: SublimationsDescriptions[] = [];
    private readonly sublimationsEpiqueRelique: SublimationsDescriptions[] = [];
    private readonly http = inject(HttpClient);

    private loadPromise?: Promise<void>;
    
    public load(): Promise<void> {
        if (this.loadPromise) {
            return this.loadPromise;
        }

        this.loadPromise = new Promise((resolve,) => {
            this.http.get<SublimationsDescriptions[]>('/sublimations.json')
                .pipe(
                    tap(sublimations => sublimations.forEach(x => this.sublimations.set(x.title.fr, x))),
                    tap(sublimations => this.sublimationsClassique.push(...sublimations.filter(sublimation => !sublimation.isEpic && !sublimation.isRelic))),
                    tap(sublimations => this.sublimationsEpiqueRelique.push(...sublimations.filter(sublimation => sublimation.isEpic || sublimation.isRelic))),
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
        return this.sublimationsClassique;
    }

    public getSublimationsEpiqueRelique(): SublimationsDescriptions[] {
        return this.sublimationsEpiqueRelique;
    }
}