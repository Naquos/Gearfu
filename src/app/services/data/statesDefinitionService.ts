import { inject, Injectable } from "@angular/core";
import { StatesDefiniton } from "../../models/data/statesDefinition";
import { HttpClient } from "@angular/common/http";
import { tap, shareReplay } from "rxjs";

@Injectable({providedIn: 'root'})
export class StatesDefinitionService {
    
    private readonly stateDefinitionService = new Map<number,StatesDefiniton>();
    private readonly http = inject(HttpClient);

    private loadPromise?: Promise<void>;

    public load(): Promise<void> {
        if (this.loadPromise) {
            return this.loadPromise;
        }

        this.loadPromise = new Promise((resolve,) => {
            this.http.get<StatesDefiniton[]>('/statesDefinition.json')
                .pipe(
                    tap(statesDefinitions => statesDefinitions.forEach(x => this.stateDefinitionService.set(x.id, {
                        id: x.id,
                        description: {
                            fr: x.description.fr,
                            en: x.description.en,
                            es: x.description.es,
                            pt: x.description.pt
                        }
                    }))),
                    shareReplay(1)
                )
                .subscribe({
                    next: () => resolve(),
                    error: (err) => {
                        console.error('Failed to load monster drops:', err);
                        // Fallback sur données vides plutôt que de bloquer l'app
                        resolve();
                    }
                });
        });

        return this.loadPromise;
    }

    public findStatesDefinition(id: number): StatesDefiniton  | undefined {
        return this.stateDefinitionService.get(id);
    }
}