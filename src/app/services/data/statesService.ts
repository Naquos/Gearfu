import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import states from "../../../../public/states.json";
import { States } from "../../models/data/states";

@Injectable({providedIn: 'root'})
export class StatesService {
    
    private readonly stateService = new BehaviorSubject<States[]>([]);
    public readonly stateService$ = this.stateService.asObservable();

    constructor() {
        const result: States[] = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (states as [any]).forEach(x => result.push({
            id: x.definition.id,
            fr: x.title?.fr ?? "",
            en: x.title?.en ?? "",
            es: x.title?.es ?? "",
            pt: x.title?.pt ?? ""
        }))
        this.stateService.next(result);
    }

    public findStates(id: number): Observable<States  | undefined> {
        return this.stateService$.pipe(map(x => x.find(state => state.id === id)));
    }
}