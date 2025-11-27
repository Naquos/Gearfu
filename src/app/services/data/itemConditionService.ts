import { inject, Injectable } from "@angular/core";
import { ItemCondition } from "../../models/data/itemCondition";
import { tap, shareReplay } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ItemConditionService {

    private readonly condition = new Map<number, ItemCondition>();
    private readonly http = inject(HttpClient);

    private loadPromise?: Promise<void>;
    
    public load(): Promise<void> {
        if (this.loadPromise) {
            return this.loadPromise;
        }

        this.loadPromise = new Promise((resolve,) => {
            this.http.get<ItemCondition[]>('/itemConditions.json')
                .pipe(
                    tap(conditions => conditions.forEach(x => this.condition.set(x.id, x))),
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


    public findCondition(id: number): ItemCondition  | undefined {
        return this.condition.get(id);
    }
}