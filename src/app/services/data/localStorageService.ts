
import { Injectable, DOCUMENT, inject } from "@angular/core";
import { KeyEnum } from "../../models/enum/keyEnum";

@Injectable({providedIn: 'root'})
export class LocalStorageService {

    private readonly document = inject(DOCUMENT);

    private localStorage?: Storage;

    constructor() {
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