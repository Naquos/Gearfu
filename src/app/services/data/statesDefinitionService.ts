import { Injectable } from "@angular/core";
import statesDefinition from "../../../../public/statesDefinition.json";
import { StatesDefiniton } from "../../models/data/statesDefinition";

@Injectable({providedIn: 'root'})
export class StatesDefinitionService {
    
    private readonly stateDefinitionService = new Map<number,StatesDefiniton>();

    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (statesDefinition as [any]).forEach(x => this.stateDefinitionService.set(x.id, {
            id: x.id,
            description: {
                fr: x.description.fr,
                en: x.description.en,
                es: x.description.es,
                pt: x.description.pt
            }
        }))
    }

    public findStatesDefinition(id: number): StatesDefiniton  | undefined {
        return this.stateDefinitionService.get(id);
    }
}