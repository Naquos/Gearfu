import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { KeyEnum } from "../models/keyEnum";

@Injectable({providedIn: 'root'})
export class LocalStorageService {

    private localStorage?: Storage;

    constructor(@Inject(DOCUMENT) private document: Document) {
        this.localStorage = this.document.defaultView?.localStorage;
    }


    public getItem<T>(key: KeyEnum): T | null {
        const item = this.localStorage?.getItem(key);
        if (item) {
            return JSON.parse(item) as T;
        }
        return null;
    }

    public setItem<T>(key: KeyEnum, value: T): void {
        this.localStorage?.setItem(key, JSON.stringify(value));
    }

    public removeItem(key: KeyEnum): void {
        this.localStorage?.removeItem(key);
    }

    public clear(): void {
        this.localStorage?.clear();
    }
}