import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigCdn } from "../models/ankama-cdn/config-cdn";
import { ItemCdn } from "../models/ankama-cdn/item-cdn";
import { BehaviorSubject, filter, Observable, switchMap } from "rxjs";

@Injectable({providedIn: 'root'})
export class AnkamaCdnService {
    private readonly baseUrl = "https://wakfu.cdn.ankama.com/gamedata/";
    private readonly configVersion = new BehaviorSubject<string>("");
    private readonly configVersion$ = this.configVersion.asObservable().pipe(filter(x => x !== ""));

    constructor(private http: HttpClient) {
        this.http.get<ConfigCdn>(this.baseUrl + "config.json").subscribe((data) => {
            this.configVersion.next(data.version);
        });
    }

    public getItems():  Observable<ItemCdn[]> {
        return this.configVersion$.pipe(
            switchMap(version => this.http.get<ItemCdn[]>(this.baseUrl + version + "/items.json"))
        );
    }
}