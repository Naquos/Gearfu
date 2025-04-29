import { Injectable } from "@angular/core";
import states from "../../../../public/states.json";
import { States } from "../../models/data/states";

@Injectable({providedIn: 'root'})
export class StatesService {
    
    private readonly stateService = new Map<number, States>();

    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (states as [any]).forEach(x => this.stateService.set(Number.parseInt(x.definition.id), {
            id: x.definition.id,
            fr: x.title?.fr ?? "",
            en: x.title?.en ?? "",
            es: x.title?.es ?? "",
            pt: x.title?.pt ?? ""
        }))
    }

    public findStates(id: number): States  | undefined {
        return this.stateService.get(id);
    }
}