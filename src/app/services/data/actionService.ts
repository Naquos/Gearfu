import { Injectable } from "@angular/core";
import { Actions } from "../../models/data/actions";
import actionsJson from "../../../../public/actions.json";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { EquipEffects } from "../../models/data/equipEffects";
import { TranslateService } from "@ngx-translate/core";

@Injectable({providedIn: 'root'})
export class ActionService {

    private static readonly malusActions = new Set<IdActionsEnum>([
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
    ]);

    private static readonly opposedEffects = new Map<IdActionsEnum, IdActionsEnum>();

    private static readonly opposedPairs: [IdActionsEnum, IdActionsEnum, boolean?][] = [
        [IdActionsEnum.POINT_DE_VIE, IdActionsEnum.PERTE_POINT_DE_VIE],
        [IdActionsEnum.ARMURE_DONNEE_RECUE, IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE, true], // special case: params[4] must match
        [IdActionsEnum.RESISTANCES_ELEMENTAIRE, IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE],
        [IdActionsEnum.RESISTANCES_TERRE, IdActionsEnum.PERTE_RESISTANCES_TERRE],
        [IdActionsEnum.RESISTANCES_FEU, IdActionsEnum.PERTE_RESISTANCES_FEU],
        [IdActionsEnum.RESISTANCES_EAU, IdActionsEnum.PERTE_RESISTANCE_EAU],
        [IdActionsEnum.RESISTANCES_ELEMENTAIRE, IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE_SANS_CAP],
        [IdActionsEnum.MAITRISES_ELEMENTAIRES, IdActionsEnum.PERTE_MAITRISES_ELEMENTAIRES],
        [IdActionsEnum.MAITRISES_FEU, IdActionsEnum.PERTE_MAITRISES_FEU],
        [IdActionsEnum.COUP_CRITIQUE, IdActionsEnum.PERTE_COUP_CRITIQUE],
        [IdActionsEnum.INITIATIVE, IdActionsEnum.PERTE_INITIATIVE],
        [IdActionsEnum.TACLE, IdActionsEnum.PERTE_TACLE],
        [IdActionsEnum.ESQUIVE, IdActionsEnum.PERTE_ESQUIVE],
        [IdActionsEnum.MAITRISES_DOS, IdActionsEnum.PERTE_MAITRISES_DOS],
        [IdActionsEnum.BOOST_PW, IdActionsEnum.DEBOOST_PW],
        [IdActionsEnum.PW, IdActionsEnum.DEBOOST_PW],
        [IdActionsEnum.PARADE, IdActionsEnum.PERTE_PARADE],
        [IdActionsEnum.MAITRISES_CRITIQUES, IdActionsEnum.PERTE_MAITRISES_CRITIQUE],
        [IdActionsEnum.MAITRISES_MELEE, IdActionsEnum.PERTE_MAITRISES_MELEE],
        [IdActionsEnum.MAITRISES_DISTANCES, IdActionsEnum.PERTE_MAITRISES_DISTANCE],
        [IdActionsEnum.MAITRISES_BERZERK, IdActionsEnum.PERTE_MAITRISES_BERZERK],
        [IdActionsEnum.RESISTANCES_CRITIQUES, IdActionsEnum.PERTE_RESISTANCES_CRITIQUE],
        [IdActionsEnum.RESISTANCES_DOS, IdActionsEnum.PERTE_RESISTANCES_DOS],
        [IdActionsEnum.PA, IdActionsEnum.PERTE_PA],
        [IdActionsEnum.PM, IdActionsEnum.PERTE_PM],
        [IdActionsEnum.PORTEE, IdActionsEnum.PERTE_PORTEE],
    ];

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

        for (const [positive, negative] of ActionService.opposedPairs) {
            ActionService.opposedEffects.set(positive, negative);
            ActionService.opposedEffects.set(negative, positive);
        }
        
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
        return ActionService.malusActions.has(id);

    }

    public isOpposed(effect1: EquipEffects, effect2: EquipEffects): boolean {
        const id1 = effect1.actionId;
        const id2 = effect2.actionId;
    
        for (const [positive, negative, checkParam4] of ActionService.opposedPairs) {
            const hasPositive = id1 === positive || id2 === positive;
            const hasNegative = id1 === negative || id2 === negative;
    
            if (hasPositive && hasNegative) {
                return checkParam4 ? effect1.params[4] === effect2.params[4] : true;
            }
        }
        return false;
    }

    public getOpposedEffect(idAction: IdActionsEnum): IdActionsEnum {
       return ActionService.opposedEffects.get(idAction) ?? idAction;
    }
}