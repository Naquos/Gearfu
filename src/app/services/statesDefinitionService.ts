import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import statesDefinition from "../../../public/statesDefinition.json";
import { StatesDefiniton } from "../models/statesDefinition";

@Injectable({providedIn: 'root'})
export class StatesDefinitionService {
    
    private stateDefinitionService = new BehaviorSubject<StatesDefiniton[]>([]);
    public stateDefinitionService$ = this.stateDefinitionService.asObservable();

    constructor() {
        const result: StatesDefiniton[] = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (statesDefinition as [any]).forEach(x => result.push({
            id: x.id,
            description: x.description
        }))
        this.stateDefinitionService.next(result);
    }

    public findStatesDefinition(id: number): Observable<StatesDefiniton  | undefined> {
        return this.stateDefinitionService$.pipe(map(x => x.find(stateDefinition => stateDefinition.id === id)));
    }
}