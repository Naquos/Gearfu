import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigCdn } from "../models/ankama-cdn/config-cdn";
import { ItemCdn } from "../models/ankama-cdn/item-cdn";
import { Observable, switchMap, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class AnkamaCdnService {
    private readonly baseUrl = "https://wakfu.cdn.ankama.com/gamedata/";

    constructor(private readonly http: HttpClient) {}

    public getItems():  Observable<ItemCdn[]> {
        return this.http.get<ConfigCdn>(this.baseUrl + "config.json").pipe(
            tap((config) => console.log("Config CDN:", config)),
            switchMap((config) => this.http.get<ItemCdn[]>(this.baseUrl + config.version + "/items.json")),
            tap((items) => console.log("Items CDN:", items)));
    }
}