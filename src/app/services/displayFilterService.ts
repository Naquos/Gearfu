import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class DisplayFilterService {
    private isDisplayed = new BehaviorSubject<boolean>(false);
    public isDisplayed$ = this.isDisplayed.asObservable();

    public toggleDisplay(): void {
        this.isDisplayed.next(!this.isDisplayed.value);
    }

    public setDisplay(value: boolean): void {
        this.isDisplayed.next(value);
    }
}