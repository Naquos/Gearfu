import { Injectable } from "@angular/core";
import { Actions } from "../models/actions";
import actionsJson from "../../../public/actions.json";
import { IdActionsEnum } from "../models/idActionsEnum";
import { EquipEffects } from "../models/equipEffects";

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

    public isAMalus(id: IdActionsEnum): boolean {
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

    public isOpposed(effect1: EquipEffects, effect2: EquipEffects): boolean {
        const list = [effect1.id, effect2.id];
        return list.includes(IdActionsEnum.POINT_DE_VIE) && list.includes(IdActionsEnum.PERTE_POINT_DE_VIE)
            || list.includes(IdActionsEnum.ARMURE_DONNEE_RECUE) && list.includes(IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE) && effect1.params[4] === effect2.params[4]
            || list.includes(IdActionsEnum.RESISTANCES_ELEMENTAIRE) && list.includes(IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE)
            || list.includes(IdActionsEnum.RESISTANCES_TERRE) && list.includes(IdActionsEnum.PERTE_RESISTANCES_TERRE)
            || list.includes(IdActionsEnum.RESISTANCES_FEU) && list.includes(IdActionsEnum.PERTE_RESISTANCES_FEU)
            || list.includes(IdActionsEnum.RESISTANCES_EAU) && list.includes(IdActionsEnum.PERTE_RESISTANCE_EAU)
            || list.includes(IdActionsEnum.RESISTANCES_ELEMENTAIRE) && list.includes(IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE_SANS_CAP)
            || list.includes(IdActionsEnum.MAITRISES_ELEMENTAIRES) && list.includes(IdActionsEnum.PERTE_MAITRISES_ELEMENTAIRES)
            || list.includes(IdActionsEnum.MAITRISES_FEU) && list.includes(IdActionsEnum.PERTE_MAITRISES_FEU)
            || list.includes(IdActionsEnum.COUP_CRITIQUE) && list.includes(IdActionsEnum.PERTE_COUP_CRITIQUE)
            || list.includes(IdActionsEnum.INITIATIVE) && list.includes(IdActionsEnum.PERTE_INITIATIVE)
            || list.includes(IdActionsEnum.TACLE) && list.includes(IdActionsEnum.PERTE_TACLE)
            || list.includes(IdActionsEnum.ESQUIVE) && list.includes(IdActionsEnum.PERTE_ESQUIVE)
            || list.includes(IdActionsEnum.MAITRISES_DOS) && list.includes(IdActionsEnum.PERTE_MAITRISES_DOS)
            || list.includes(IdActionsEnum.BOOST_PW) && list.includes(IdActionsEnum.DEBOOST_PW)
            || list.includes(IdActionsEnum.PW) && list.includes(IdActionsEnum.DEBOOST_PW)
            || list.includes(IdActionsEnum.PARADE) && list.includes(IdActionsEnum.PERTE_PARADE)
            || list.includes(IdActionsEnum.MAITRISES_CRITIQUES) && list.includes(IdActionsEnum.PERTE_MAITRISES_CRITIQUE)
            || list.includes(IdActionsEnum.MAITRISES_MELEE) && list.includes(IdActionsEnum.PERTE_MAITRISES_MELEE)
            || list.includes(IdActionsEnum.MAITRISES_DISTANCES) && list.includes(IdActionsEnum.PERTE_MAITRISES_DISTANCE)
            || list.includes(IdActionsEnum.MAITRISES_BERZERK) && list.includes(IdActionsEnum.PERTE_MAITRISES_BERZERK)
            || list.includes(IdActionsEnum.RESISTANCES_CRITIQUES) && list.includes(IdActionsEnum.PERTE_RESISTANCES_CRITIQUE)
            || list.includes(IdActionsEnum.RESISTANCES_DOS) && list.includes(IdActionsEnum.PERTE_RESISTANCES_DOS)
            || list.includes(IdActionsEnum.PA) && list.includes(IdActionsEnum.PERTE_PA)
            || list.includes(IdActionsEnum.PM) && list.includes(IdActionsEnum.PERTE_PM)
            || list.includes(IdActionsEnum.PORTEE) && list.includes(IdActionsEnum.PERTE_PORTEE);
    }

}