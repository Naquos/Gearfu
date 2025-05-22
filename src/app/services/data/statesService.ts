import { Injectable } from "@angular/core";
import { States } from "../../models/data/states";
import { AnkamaCdnFacade } from "../ankama-cdn/ankamaCdnFacade";

@Injectable({providedIn: 'root'})
export class StatesService {

    constructor(private readonly AnkamaCdnFacade: AnkamaCdnFacade) {}

    public findStates(id: number): States  | undefined {
        const state = this.AnkamaCdnFacade.getStatesList().find((state) => state.definition.id === id);
        if(!state) { return undefined; }
        return {
            id: state.definition.id,
            fr: state.title.fr,
            en: state.title.en,
            es: state.title.es,
            pt: state.title.pt
        };
    }
}