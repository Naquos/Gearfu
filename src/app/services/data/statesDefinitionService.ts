import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import statesDefinition from "../../../../public/statesDefinition.json";
import { StatesDefiniton } from "../../models/data/statesDefinition";

@Injectable({providedIn: 'root'})
export class StatesDefinitionService {
    
    private readonly stateDefinitionService = new BehaviorSubject<StatesDefiniton[]>([]);
    public readonly stateDefinitionService$ = this.stateDefinitionService.asObservable();

    constructor() {
        const result: StatesDefiniton[] = [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (statesDefinition as [any]).forEach(x => result.push({
            id: x.id,
            description: {
                fr: x.description.fr,
                en: x.description.en,
                es: x.description.es,
                pt: x.description.pt
            }
        }))
        this.stateDefinitionService.next(result);
    }

    public findStatesDefinition(id: number): Observable<StatesDefiniton  | undefined> {
        return this.stateDefinitionService$.pipe(map(x => x.find(stateDefinition => stateDefinition.id === id)));
    }
}