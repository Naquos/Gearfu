import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ConfigCdn } from "../../models/ankama-cdn/configCdn";
import { ItemCdn } from "../../models/ankama-cdn/itemCdn";
import { Observable } from "rxjs";
import { ActionsCdn } from "../../models/ankama-cdn/actionsCdn";
import { StatesCdn } from "../../models/ankama-cdn/statesCdn";
import { RecipeResultsCdn } from "../../models/ankama-cdn/recipeResulsCdn";

@Injectable({providedIn: 'root'})
export class AnkamaCdnService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = "https://wakfu.cdn.ankama.com/gamedata/";

    public getConfig(): Observable<ConfigCdn> {
        return this.http.get<ConfigCdn>(this.baseUrl + "config.json");
    }

    public getItems(config: string):  Observable<ItemCdn[]> {
        return this.http.get<ItemCdn[]>(this.baseUrl + config + "/items.json");
    }

    public getActions(config:  string): Observable<ActionsCdn[]> {
        return this.http.get<ActionsCdn[]>(this.baseUrl + config + "/actions.json");
    }

    public getStates(config: string): Observable<StatesCdn[]> {
        return this.http.get<StatesCdn[]>(this.baseUrl + config + "/states.json");
    }

    public getRecipesResult(config: string): Observable<RecipeResultsCdn[]> {
        return this.http.get<RecipeResultsCdn[]>(this.baseUrl + config + "/recipeResults.json");
    }
}