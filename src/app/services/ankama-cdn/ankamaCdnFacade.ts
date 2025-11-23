import { inject, Injectable } from "@angular/core";
import { AnkamaCdnService } from "./ankamaCdnService";
import { BehaviorSubject, filter, tap } from "rxjs";
import { ActionsCdn } from "../../models/ankama-cdn/actionsCdn";
import { ItemCdn } from "../../models/ankama-cdn/itemCdn";
import { StatesCdn } from "../../models/ankama-cdn/statesCdn";
import { RecipeResultsCdn } from "../../models/ankama-cdn/recipeResulsCdn";

@Injectable({providedIn: 'root'})
export class AnkamaCdnFacade {

    private readonly ankamaCdnService = inject(AnkamaCdnService);

    private readonly config = new BehaviorSubject<string>("");
    public readonly config$ = this.config.asObservable().pipe(
        filter(config => config.length > 0),
    );
    
    private readonly action = new BehaviorSubject<ActionsCdn[]>([]);
    public readonly action$ = this.action.asObservable().pipe(
        filter(actions => actions.length > 0),
    );

    private readonly item = new BehaviorSubject<ItemCdn[]>([]);
    public readonly item$ = this.item.asObservable().pipe(
        filter(items => items.length > 0),
    );

    private readonly states = new BehaviorSubject<StatesCdn[]>([]);
    public readonly states$ = this.states.asObservable().pipe(
        filter(states => states.length > 0),
    );

    private readonly recipes = new BehaviorSubject<RecipeResultsCdn[]>([]);
    public readonly recipes$ = this.recipes.asObservable().pipe(
        filter(recipes => recipes.length > 0),
    );

    private loadItems(config: string): void {
        this.ankamaCdnService.getItems(config).pipe(tap(items => this.item.next(items))).subscribe();
    }

    private loadActions(config: string): void {
        this.ankamaCdnService.getActions(config).pipe(tap(actions => this.action.next(actions))).subscribe();
    }

    private loadStates(config: string): void {
        this.ankamaCdnService.getStates(config).pipe(tap(states => this.states.next(states))).subscribe();
    }

    private loadRecipesResult(config: string): void {
        this.ankamaCdnService.getRecipesResult(config).pipe(tap(recipes => this.recipes.next(recipes))).subscribe();
    }

    public load(): void {
        this.ankamaCdnService.getConfig()
            .pipe(
                tap(config => this.config.next(config.version)),
                tap(config => this.loadItems(config.version)),
                tap(config => this.loadActions(config.version)),
                tap(config => this.loadStates(config.version)),
                tap(config => this.loadRecipesResult(config.version)),
            ).subscribe();
    }

    public getActionList(): ActionsCdn[] {
        return this.action.getValue();
    }

    public getStatesList(): StatesCdn[] {
        return this.states.getValue();
    }
}