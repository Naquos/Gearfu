import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class MaitrisesServices {
    private nbElements = new BehaviorSubject<number>(0);
    private idMaitrises = new BehaviorSubject<number[]>([]);

    public obsNbElements(): Observable<number> {
        return this.nbElements.asObservable();
    }

    public setNbElements(value: number) {
        this.nbElements.next(value);
    }

    public obsIdMaitrises(): Observable<number[]> {
        return this.idMaitrises.asObservable();
    }

    public setIdMaitrises(value: number[]): void {
        this.idMaitrises.next(value);
    }
}