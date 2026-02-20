import { inject, Injectable } from "@angular/core";
import { AnkamaCdnService } from "./ankamaCdnService";
import { BehaviorSubject, combineLatest, filter, map, Observable, take, tap } from "rxjs";
import { ActionsCdn } from "../../models/ankama-cdn/actionsCdn";
import { ItemCdn } from "../../models/ankama-cdn/itemCdn";
import { StatesCdn } from "../../models/ankama-cdn/statesCdn";
import { RecipeResultsCdn } from "../../models/ankama-cdn/recipeResulsCdn";
import { JobsItemCdn } from "../../models/ankama-cdn/jobsItemCdn";
import { RecipeIngredientCdn } from "../../models/ankama-cdn/recipeIngredient";
import { isItemIdPvp } from "../../models/enum/itemIdPvpEnum";

@Injectable({providedIn: 'root'})
export class AnkamaCdnFacade {

    private readonly ankamaCdnService = inject(AnkamaCdnService);
    private static readonly MEDAILLE_BRAVOURE_ITEM_ID = 24705; 

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

    private readonly idSiouperes = new BehaviorSubject<JobsItemCdn[]>([]);
    public readonly idSiouperes$ = this.idSiouperes.asObservable().pipe(
        filter(idSioupere => idSioupere.length > 0),
    );

    private readonly recipeIngredients = new BehaviorSubject<RecipeIngredientCdn[]>([]);
    public readonly recipeIngredients$ = this.recipeIngredients.asObservable().pipe(
        filter(recipeIngredients => recipeIngredients.length > 0),
    );

    private readonly mapProductItemIdToRecipeResult = new Map<number, RecipeResultsCdn>();
    private readonly mapRecipeIdToRecipeIngredients = new Map<number, RecipeIngredientCdn[]>();

    private loadStarted = false;

    private loadItems(config: string): void {
        this.ankamaCdnService.getItems(config).pipe(tap(items => this.item.next(items))).subscribe();
    }

    private loadActions(config: string): void {
        this.ankamaCdnService.getActions(config).pipe(tap(actions => this.action.next(actions))).subscribe();
    }

    private loadStates(config: string): void {
        this.ankamaCdnService.getStates(config).pipe(tap(states => this.states.next(states))).subscribe();
    }

    private loadRecipeIngredients(config: string): void {
        this.ankamaCdnService.getRecipeIngredients(config)
        .pipe(tap(recipeIngredients => this.recipeIngredients.next(recipeIngredients)),
            tap(recipeIngredients => {
                recipeIngredients.forEach(recipeIngredient => {
                    const ingredients = this.mapRecipeIdToRecipeIngredients.get(recipeIngredient.recipeId) || [];
                    ingredients.push(recipeIngredient);
                    this.mapRecipeIdToRecipeIngredients.set(recipeIngredient.recipeId, ingredients);
                });
            })
        ).subscribe();
    }

    private loadRecipesResult(config: string): void {
        this.ankamaCdnService.getRecipesResult(config)
        .pipe(
            tap(recipes => this.recipes.next(recipes)),
            tap(recipes => {
                recipes.forEach(recipe => {
                    this.mapProductItemIdToRecipeResult.set(recipe.productedItemId, recipe);
                });
            })
        ).subscribe();
    }

    private loadIdSioupere(config: string): void {
        this.ankamaCdnService.getJobsItems(config)
        .pipe(
            map(jobsItems => jobsItems.filter(item => item.title.fr.toLowerCase().includes("sioupère"))),
            tap(idSioupere => this.idSiouperes.next(idSioupere)))
        .subscribe();
    }

    public load(): void {
        if (this.loadStarted) {
            return;
        }
        this.loadStarted = true;

        this.ankamaCdnService.getConfig()
            .pipe(
                tap(config => this.config.next(config.version)),
                tap(config => this.loadItems(config.version)),
                tap(config => this.loadActions(config.version)),
                tap(config => this.loadStates(config.version)),
                tap(config => this.loadRecipesResult(config.version)),
                tap(config => this.loadIdSioupere(config.version)),
                tap(config => this.loadRecipeIngredients(config.version)),
            ).subscribe();
    }

    public ready$(): Observable<void> {
        return combineLatest([
            this.item$,
            this.recipes$,
            this.idSiouperes$,
            this.action$,
            this.states$,
            this.recipeIngredients$
        ]).pipe(
            take(1),
            map(() => undefined)
        );
    }

    public getActionList(): ActionsCdn[] {
        return this.action.getValue();
    }

    public getStatesList(): StatesCdn[] {
        return this.states.getValue();
    }

    public isItemPvP(itemId: number): boolean {
        if(isItemIdPvp(itemId)) {
            return true;
        }
        const recipe = this.mapProductItemIdToRecipeResult.get(itemId);
        if (!recipe) {
            return false;
        }
        const ingredients = this.mapRecipeIdToRecipeIngredients.get(recipe.recipeId) || [];
        return ingredients.some(ingredient => ingredient.itemId === AnkamaCdnFacade.MEDAILLE_BRAVOURE_ITEM_ID);
    }
}