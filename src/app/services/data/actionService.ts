import { Injectable } from "@angular/core";
import { Actions } from "../../models/data/actions";
import actionsJson from "../../../../public/actions.json";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { EquipEffects } from "../../models/data/equipEffects";
import { TranslateService } from "@ngx-translate/core";

@Injectable({providedIn: 'root'})
export class ActionService {

    protected actions: Actions[] = [];

    constructor(private translateService: TranslateService) {
        actionsJson.forEach(x => this.actions.push({
            id: x.definition.id,
            description: {
                fr: x.description?.fr ?? "",
                en: x.description?.en ?? "",
                es: x.description?.es ?? "",
                pt: x.description?.pt ?? ""
            } 
        }))
    }

    public getActions(): Actions[] {
        return this.actions;
    }

    public getEffectById(id: number): string {
        const action = this.actions.find(x => x.id === id); 
        return action?.description[this.translateService.currentLang as keyof typeof action.description] ?? "";
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
        const list = [effect1.actionId, effect2.actionId];
        return list.includes(IdActionsEnum.POINT_DE_VIE) && list.includes(IdActionsEnum.PERTE_POINT_DE_VIE)
            || (list.includes(IdActionsEnum.ARMURE_DONNEE_RECUE) && list.includes(IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE) && effect1.params[4] === effect2.params[4])
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

    public getOpposedEffect(idAction: IdActionsEnum): IdActionsEnum {
        switch (idAction) {
            case IdActionsEnum.POINT_DE_VIE:
                return IdActionsEnum.PERTE_POINT_DE_VIE;
            case IdActionsEnum.ARMURE_DONNEE_RECUE:
                return IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE;
            case IdActionsEnum.RESISTANCES_ELEMENTAIRE:
                return IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE;
            case IdActionsEnum.RESISTANCES_TERRE:
                return IdActionsEnum.PERTE_RESISTANCES_TERRE;
            case IdActionsEnum.RESISTANCES_FEU:
                return IdActionsEnum.PERTE_RESISTANCE_EAU;
            case IdActionsEnum.MAITRISES_ELEMENTAIRES:
                return IdActionsEnum.PERTE_MAITRISES_ELEMENTAIRES;
            case IdActionsEnum.MAITRISES_FEU:
                return IdActionsEnum.PERTE_MAITRISES_FEU;
            case IdActionsEnum.COUP_CRITIQUE:
                return IdActionsEnum.PERTE_COUP_CRITIQUE;
            case IdActionsEnum.INITIATIVE:
                return IdActionsEnum.PERTE_INITIATIVE;
            case IdActionsEnum.TACLE:
                return IdActionsEnum.PERTE_TACLE;
            case IdActionsEnum.ESQUIVE:
                return IdActionsEnum.PERTE_ESQUIVE;
            case IdActionsEnum.MAITRISES_DOS:
                return IdActionsEnum.PERTE_MAITRISES_DOS;
            case IdActionsEnum.BOOST_PW:
                return IdActionsEnum.DEBOOST_PW;
            case IdActionsEnum.PW:
                return IdActionsEnum.DEBOOST_PW;
            case IdActionsEnum.MAITRISES_CRITIQUES:
                return IdActionsEnum.PERTE_MAITRISES_CRITIQUE;
            case IdActionsEnum.MAITRISES_MELEE:
                return IdActionsEnum.PERTE_MAITRISES_MELEE;
            case IdActionsEnum.MAITRISES_DISTANCES:
                return IdActionsEnum.PERTE_MAITRISES_DISTANCE;
            case IdActionsEnum.MAITRISES_BERZERK:
                return IdActionsEnum.PERTE_MAITRISES_BERZERK;
            case IdActionsEnum.RESISTANCES_CRITIQUES:
                return IdActionsEnum.PERTE_RESISTANCES_CRITIQUE;
            case IdActionsEnum.RESISTANCES_DOS:
                return IdActionsEnum.PERTE_RESISTANCES_DOS;
            case IdActionsEnum.PA:
                return IdActionsEnum.PERTE_PA;
            case IdActionsEnum.PM:
                return IdActionsEnum.PERTE_PM;
            case IdActionsEnum.PORTEE:
                return IdActionsEnum.PERTE_PORTEE;
            case IdActionsEnum.PARADE:
                return IdActionsEnum.PERTE_PARADE;
            case IdActionsEnum.PERTE_POINT_DE_VIE:
                return IdActionsEnum.POINT_DE_VIE;
            case IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE:
                return IdActionsEnum.ARMURE_DONNEE_RECUE;
            case IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE:
                return IdActionsEnum.RESISTANCES_ELEMENTAIRE;
            case IdActionsEnum.PERTE_RESISTANCES_TERRE:
                return IdActionsEnum.RESISTANCES_TERRE;
            case IdActionsEnum.PERTE_RESISTANCES_FEU:
                return IdActionsEnum.RESISTANCES_FEU;
            case IdActionsEnum.PERTE_RESISTANCE_EAU:
                return IdActionsEnum.RESISTANCES_EAU;
            case IdActionsEnum.PERTE_MAITRISES_ELEMENTAIRES:
                return IdActionsEnum.MAITRISES_ELEMENTAIRES;
            case IdActionsEnum.PERTE_MAITRISES_FEU:
                return IdActionsEnum.MAITRISES_FEU;
            case IdActionsEnum.PERTE_COUP_CRITIQUE:
                return IdActionsEnum.COUP_CRITIQUE;
            case IdActionsEnum.PERTE_INITIATIVE:
                return IdActionsEnum.INITIATIVE;
            case IdActionsEnum.PERTE_TACLE:
                return IdActionsEnum.TACLE;
            case IdActionsEnum.PERTE_ESQUIVE:
                return IdActionsEnum.ESQUIVE;
            case IdActionsEnum.PERTE_MAITRISES_DOS:
                return IdActionsEnum.MAITRISES_DOS;
            case IdActionsEnum.DEBOOST_PW:
                return IdActionsEnum.BOOST_PW;
            case IdActionsEnum.PERTE_PW:
                return IdActionsEnum.PW;
            case IdActionsEnum.PERTE_PARADE:
                return IdActionsEnum.PARADE;
            case IdActionsEnum.PERTE_MAITRISES_CRITIQUE:
                return IdActionsEnum.MAITRISES_CRITIQUES;
            case IdActionsEnum.PERTE_MAITRISES_MELEE:
                return IdActionsEnum.MAITRISES_MELEE;
            case IdActionsEnum.PERTE_MAITRISES_DISTANCE:
                return IdActionsEnum.MAITRISES_DISTANCES;
            case IdActionsEnum.PERTE_MAITRISES_BERZERK:
                return IdActionsEnum.MAITRISES_BERZERK;
            case IdActionsEnum.PERTE_RESISTANCES_CRITIQUE:
                return IdActionsEnum.RESISTANCES_CRITIQUES;
            case IdActionsEnum.PERTE_RESISTANCES_DOS:
                return IdActionsEnum.RESISTANCES_DOS;
            case IdActionsEnum.PERTE_PORTEE:
                return IdActionsEnum.PORTEE;
            case IdActionsEnum.PERTE_PM:
                return IdActionsEnum.PM;
            case IdActionsEnum.PERTE_PA:
                return IdActionsEnum.PA;
            default:
                return idAction;
        }
    }
}