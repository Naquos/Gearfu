import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigCdn } from "../models/ankama-cdn/config-cdn";
import { ItemCdn } from "../models/ankama-cdn/item-cdn";
import { BehaviorSubject, filter, iif, Observable, of, switchMap, tap } from "rxjs";
import { ActionsCdn } from "../models/ankama-cdn/actions-cdn";

@Injectable({providedIn: 'root'})
export class AnkamaCdnService {
    private readonly baseUrl = "https://wakfu.cdn.ankama.com/gamedata/";
    
    private readonly config = new BehaviorSubject<string>("");
    public readonly config$ = this.config.asObservable().pipe(
        switchMap(config => iif(() => config === "", 
            this.getConfig().pipe(tap(config => this.config.next(config.version))),
            of(config)),
        )
    );
    
    private readonly action = new BehaviorSubject<ActionsCdn[]>([]);
    public readonly action$ = this.action.asObservable().pipe(
        filter(actions => actions.length > 0),
    );

    constructor(private readonly http: HttpClient) {}

    public getItems():  Observable<ItemCdn[]> {
        return this.config$.pipe(switchMap((config) => this.http.get<ItemCdn[]>(this.baseUrl + config + "/items.json")));
    }

    public getActionList(): ActionsCdn[] {
        return this.action.getValue();
    }

    public loadActions(): void {
        this.config$.pipe(
            switchMap((config) => this.http.get<ActionsCdn[]>(this.baseUrl + config + "/actions.json")),
            tap(actions => this.action.next(actions)))
        .subscribe();
    }

    private getConfig(): Observable<ConfigCdn> {
        return this.http.get<ConfigCdn>(this.baseUrl + "config.json");
    }
}