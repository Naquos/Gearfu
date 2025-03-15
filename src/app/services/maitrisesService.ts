import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class MaitrisesServices {
    private nbElements = new BehaviorSubject<number>(0);
    public nbElements$ = this.nbElements.asObservable();

    private idMaitrises = new BehaviorSubject<number[]>([]);
    public idMaitrises$ = this.idMaitrises.asObservable();

    public setNbElements(value: number) {
        this.nbElements.next(value);
    }

    public setIdMaitrises(value: number[]): void {
        this.idMaitrises.next(value);
    }
}