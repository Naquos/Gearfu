import { Injectable } from "@angular/core";
import { Actions } from "../models/actions";
import actionsJson from "../../../public/actions.json";

@Injectable({providedIn: 'root'})
export class ActionService {

    protected actions: Actions[] = [];

    constructor() {
        actionsJson.forEach(x => this.actions.push({
            id: x.definition.id,
            effect: x.definition.effect
        }))
    }

    public getActions(): Actions[] {
        return this.actions;
    }

    public getEffectById(id: number): string {
        return this.actions.find(x => x.id === id)?.effect ?? "";
    }

    public isBuff(id: number) {
        const effect = this.getEffectById(id).split(":");
        return effect[0].includes("Gain") || effect[0].includes("Boost");
    }

}