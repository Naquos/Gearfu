import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ConfigCdn } from "../../models/ankama-cdn/configCdn";
import { ItemCdn } from "../../models/ankama-cdn/itemCdn";
import { from, map, Observable, of, tap } from "rxjs";
import { ActionsCdn } from "../../models/ankama-cdn/actionsCdn";
import { StatesCdn } from "../../models/ankama-cdn/statesCdn";
import { RecipeResultsCdn } from "../../models/ankama-cdn/recipeResulsCdn";
import { JobsItemCdn } from "../../models/ankama-cdn/jobsItemCdn";
import { RecipeIngredientCdn } from "../../models/ankama-cdn/recipeIngredient";
import { CompressionService } from "../compression/compressionService";
import { GEARFU_RESOURCES_URL } from "../../models/utils/utils";

@Injectable({providedIn: 'root'})
export class AnkamaCdnService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = "https://wakfu.cdn.ankama.com/gamedata/";
    private readonly compressionService = inject(CompressionService);

    public getConfig(): Observable<ConfigCdn> {
        return this.http.get<ConfigCdn>(this.baseUrl + "config.json");
    }

    public getItems():  Observable<ItemCdn[]> {
        return this.compressionService.decompressGzipJson<ItemCdn[]>(GEARFU_RESOURCES_URL + "items.json.gz");
    }

    public getActions(): Observable<ActionsCdn[]> {
        return this.compressionService.decompressGzipJson<ActionsCdn[]>(GEARFU_RESOURCES_URL + "actions.json.gz");
    }

    public getStates(): Observable<StatesCdn[]> {
        return this.compressionService.decompressGzipJson<StatesCdn[]>(GEARFU_RESOURCES_URL + "states.json.gz");
    }

    public getRecipesResult(): Observable<RecipeResultsCdn[]> {
        return this.compressionService.decompressGzipJson<RecipeResultsCdn[]>(GEARFU_RESOURCES_URL + "recipeResults.json.gz");
    }

    public getJobsItems(): Observable<JobsItemCdn[]> {
        return this.compressionService.decompressGzipJson<JobsItemCdn[]>(GEARFU_RESOURCES_URL + "jobsItems.json.gz");
    }

    public getRecipeIngredients(): Observable<RecipeIngredientCdn[]> {
        return this.compressionService.decompressGzipJson<RecipeIngredientCdn[]>(GEARFU_RESOURCES_URL + "recipeIngredients.json.gz");
    }
}