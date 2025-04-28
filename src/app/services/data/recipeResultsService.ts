import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { RecipeResult } from "../../models/data/recipeResult";
import recipeResult from "../../../../public/recipeResults.json";

@Injectable({providedIn: 'root'})
export class RecipeResultsService {
    private readonly recipeResults = new BehaviorSubject<RecipeResult[]>([]);
    public readonly recipeResults$ = this.recipeResults.asObservable();

    constructor() {
        const result: RecipeResult[] = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (recipeResult as [any]).forEach(x => result.push({
            recipeId: x.recipeId,
            productedItemId: x.productedItemId,
            productOrder: x.productOrder,
            productedItemQuantity: x.productedItemQuantity
        }))

        this.recipeResults.next(result);
    }
}