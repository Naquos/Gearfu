import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ResistancesServices {

    private idResistances = new BehaviorSubject<number[]>([]);
    public idResistances$ = this.idResistances.asObservable();


    public setIdResistances(value: number[]): void {
        this.idResistances.next(value);
    }
}