import { inject, Injectable } from "@angular/core";
import { AnkamaCdnService } from "./ankamaCdnService";
import { BehaviorSubject, filter, forkJoin, map, Observable, tap } from "rxjs";
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

    private loadItems(): Observable<ItemCdn[]> {
        return this.ankamaCdnService.getItems().pipe(tap(items => this.item.next(items)));
    }

    private loadActions(): Observable<ActionsCdn[]> {
        return this.ankamaCdnService.getActions().pipe(tap(actions => this.action.next(actions)));
    }

    private loadStates(): Observable<StatesCdn[]> {
        return this.ankamaCdnService.getStates().pipe(tap(states => this.states.next(states)));
    }

    private loadRecipeIngredients(): Observable<RecipeIngredientCdn[]> {
        return this.ankamaCdnService.getRecipeIngredients()
        .pipe(tap(recipeIngredients => this.recipeIngredients.next(recipeIngredients)),
            tap(recipeIngredients => {
                recipeIngredients.forEach(recipeIngredient => {
                    const ingredients = this.mapRecipeIdToRecipeIngredients.get(recipeIngredient.recipeId) || [];
                    ingredients.push(recipeIngredient);
                    this.mapRecipeIdToRecipeIngredients.set(recipeIngredient.recipeId, ingredients);
                });
            })
        );
    }

    private loadRecipesResult(): Observable<RecipeResultsCdn[]> {
        return this.ankamaCdnService.getRecipesResult()
        .pipe(
            tap(recipes => this.recipes.next(recipes)),
            tap(recipes => {
                recipes.forEach(recipe => {
                    this.mapProductItemIdToRecipeResult.set(recipe.productedItemId, recipe);
                });
            })
        );
    }

    private loadIdSioupere(): Observable<JobsItemCdn[]> {
        return this.ankamaCdnService.getJobsItems()
        .pipe(
            map(jobsItems => jobsItems.filter(item => item.title.fr.toLowerCase().includes("sioupère"))),
            tap(idSioupere => this.idSiouperes.next(idSioupere)));
    }

    public load(): Observable<void> {
        return forkJoin([
                this.loadItems(),
                this.loadActions(),
                this.loadStates(),
                this.loadRecipesResult(),
                this.loadIdSioupere(),
                this.loadRecipeIngredients()
            ]).pipe(map(() => void 0)
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