import { inject, Injectable } from "@angular/core";
import { AbstractDestroyService } from "./abstract/abstractDestroyService";
import { ActivatedRoute } from "@angular/router";
import { filter, map, takeUntil } from "rxjs";
import { KeyEnum } from "../models/enum/keyEnum";
import { LocalStorageService } from "./data/localStorageService";

@Injectable({providedIn: 'root'})
export class UrlServices extends AbstractDestroyService {

    private readonly localStorageService = inject(LocalStorageService);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly queryParams$ = this.activatedRoute.queryParams.pipe(
                takeUntil(this.destroy$),
                filter(x => x !== undefined));

    public readonly itemsId$ = this.queryParams$.pipe(
        map(x => x["itemsId"] ? x["itemsId"] as string : this.localStorageService.getItem<string>(KeyEnum.KEY_BUILD))) 
}