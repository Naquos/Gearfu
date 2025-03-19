import { Injectable } from "@angular/core";
import { Actions } from "../models/actions";
import actionsJson from "../../../public/actions.json";
import { IdActionsEnum } from "../models/idActionsEnum";

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

    public isAMalus(id: IdActionsEnum) {
        return [
            IdActionsEnum.PERTE_POINT_DE_VIE,
            IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE,
            IdActionsEnum.PERTE_PA,
            IdActionsEnum.PERTE_PM,
            IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE,
            IdActionsEnum.PERTE_RESISTANCES_TERRE,
            IdActionsEnum.PERTE_RESISTANCES_FEU,
            IdActionsEnum.PERTE_RESISTANCE_EAU,
            IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE_SANS_CAP,
            IdActionsEnum.PERTE_MAITRISES_ELEMENTAIRES,
            IdActionsEnum.PERTE_MAITRISES_FEU,
            IdActionsEnum.PERTE_PORTEE,
            IdActionsEnum.PERTE_COUP_CRITIQUE,
            IdActionsEnum.PERTE_INITIATIVE,
            IdActionsEnum.PERTE_TACLE,
            IdActionsEnum.PERTE_ESQUIVE,
            IdActionsEnum.PERTE_MAITRISES_DOS,
            IdActionsEnum.DEBOOST_PW,
            IdActionsEnum.PERTE_PW,
            IdActionsEnum.PERTE_PARADE,
            IdActionsEnum.PERTE_MAITRISES_CRITIQUE,
            IdActionsEnum.PERTE_MAITRISES_MELEE,
            IdActionsEnum.PERTE_MAITRISES_DISTANCE,
            IdActionsEnum.PERTE_MAITRISES_BERZERK,
            IdActionsEnum.PERTE_RESISTANCES_CRITIQUE,
            IdActionsEnum.PERTE_RESISTANCES_DOS,

        ].includes(id);
    }

}