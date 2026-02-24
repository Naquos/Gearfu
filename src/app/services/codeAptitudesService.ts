import { inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IdActionsEnum } from "../models/enum/idActionsEnum";
import { AptitudesForm, AptitudesFormService } from "./form/aptitudesFormService";

@Injectable({providedIn: 'root'})
export class CodeAptitudesService {
    private aptitudesFormService = inject(AptitudesFormService);
    private readonly code = new BehaviorSubject<string>('');
    public readonly code$ = this.code.asObservable();

    private mapCode = new Map<number, IdActionsEnum>([
        [1, IdActionsEnum.PERCENTAGE_PV],
        [16, IdActionsEnum.RESISTANCES_ELEMENTAIRE],
        [17, IdActionsEnum.BARRIERE],
        [27, IdActionsEnum.SOINS_RECUE],
        [36, IdActionsEnum.POINT_DE_VIE_EN_ARMURE],
        [23, IdActionsEnum.MAITRISES_ELEMENTAIRES],
        [26, IdActionsEnum.MAITRISES_MELEE],
        [30, IdActionsEnum.MAITRISES_DISTANCES],
        [31, IdActionsEnum.POINT_DE_VIE],
        [18, IdActionsEnum.TACLE],
        [19, IdActionsEnum.ESQUIVE],
        [20, IdActionsEnum.INITIATIVE],
        [21, IdActionsEnum.TACLE_ESQUIVE],
        [37, IdActionsEnum.VOLONTE],
        [9, IdActionsEnum.COUP_CRITIQUE],
        [10, IdActionsEnum.PARADE],
        [11, IdActionsEnum.MAITRISES_CRITIQUES],
        [12, IdActionsEnum.MAITRISES_DOS],
        [13, IdActionsEnum.MAITRISES_BERZERK],
        [14, IdActionsEnum.MAITRISES_SOIN],
        [15, IdActionsEnum.RESISTANCES_DOS],
        [34, IdActionsEnum.RESISTANCES_CRITIQUES],
        [2, IdActionsEnum.PA],
        [3, IdActionsEnum.PM],
        [4, IdActionsEnum.PORTEE],
        [5, IdActionsEnum.BOOST_PW],
        [8, IdActionsEnum.DI],
        [35, IdActionsEnum.RESISTANCES_ELEMENTAIRES_MAJEURES],
        [6, IdActionsEnum.ARMURE_DONNEE_RECUE],
        [38, IdActionsEnum.SOINS_REALISE],
        [39, IdActionsEnum.DI_INDIRECT],
    ]);

    private mapCodeReverse = new Map<IdActionsEnum, number>(Array.from(this.mapCode.entries()).map(([key, value]) => [value, key]));

    constructor() {
        // Le chargement depuis l'URL est maintenant géré dans aptitudesFormService
        this.aptitudesFormService.recapStat$.subscribe(() => {
            this.updateCode();
        });
    }

    /**
     * Retourne la map de correspondance entre les id du code et les IdActionsEnum
     * @returns 
     */
    public getMapCodeReverse(): Map<IdActionsEnum, number> {
        return this.mapCodeReverse;
    }

    private updateCode() {
        let codeAptitudes = '';
        const formValue = this.aptitudesFormService.form.value;
        if(!formValue) {
            this.code.next('');
            return;
        }

        if(formValue.percentagePV) {
            codeAptitudes += `1:${formValue.percentagePV}-`;
        }
        if(formValue.resistancesElementaires) {
            codeAptitudes += `16:${formValue.resistancesElementaires}-`;
        }
        if(formValue.barriere) {
            codeAptitudes += `17:${formValue.barriere}-`;
        }
        if(formValue.soinsRecus) {
            codeAptitudes += `27:${formValue.soinsRecus}-`;
        }
        if(formValue.pdvArmure) {
            codeAptitudes += `36:${formValue.pdvArmure}-`;
        }
        if(formValue.maitriseElem) {
            codeAptitudes += `23:${formValue.maitriseElem}-`;
        }
        if(formValue.maitrisesMelee) {
            codeAptitudes += `26:${formValue.maitrisesMelee}-`;
        }
        if(formValue.maitrisesDistance) {
            codeAptitudes += `30:${formValue.maitrisesDistance}-`;
        }
        if(formValue.pdv) {
            codeAptitudes += `31:${formValue.pdv}-`;
        }
        if(formValue.tacle) {
            codeAptitudes += `18:${formValue.tacle}-`;
        }
        if(formValue.esquive) {
            codeAptitudes += `19:${formValue.esquive}-`;
        }
        if(formValue.initiative) {
            codeAptitudes += `20:${formValue.initiative}-`;
        }
        if(formValue.tacleEsquive) {
            codeAptitudes += `21:${formValue.tacleEsquive}-`;
        }
        if(formValue.volonte) {
            codeAptitudes += `37:${formValue.volonte}-`;
        }
        if(formValue.percentageCC) {
            codeAptitudes += `9:${formValue.percentageCC}-`;
        }
        if(formValue.parade) {
            codeAptitudes += `10:${formValue.parade}-`;
        }
        if(formValue.maitriseCritique) {
            codeAptitudes += `11:${formValue.maitriseCritique}-`;
        }
        if(formValue.maitriseDos) {
            codeAptitudes += `12:${formValue.maitriseDos}-`;
        }
        if(formValue.maitriseBerzerk) {
            codeAptitudes += `13:${formValue.maitriseBerzerk}-`;
        }
        if(formValue.maitriseSoins) {
            codeAptitudes += `14:${formValue.maitriseSoins}-`;
        }
        if(formValue.resistancesDos) {
            codeAptitudes += `15:${formValue.resistancesDos}-`;
        }
        if(formValue.resistancesCritique) {
            codeAptitudes += `34:${formValue.resistancesCritique}-`;
        }
        if(formValue.pa) {
            codeAptitudes += `2:${formValue.pa}-`;
        }
        if(formValue.pm) {
            codeAptitudes += `3:${formValue.pm}-`;
        }
        if(formValue.po) {
            codeAptitudes += `4:${formValue.po}-`;
        }
        if(formValue.pw) {
            codeAptitudes += `5:${formValue.pw}-`;
        }
        if(formValue.di) {
            codeAptitudes += `8:${formValue.di}-`;
        }
        if(formValue.resistancesElementairesMajeur) {
            codeAptitudes += `35:${formValue.resistancesElementairesMajeur}-`;
        }
        if(formValue.armureDonnee) {
            codeAptitudes += `6:${formValue.armureDonnee}-`;
        }
        if(formValue.soinsRealise) {
            codeAptitudes += `38:${formValue.soinsRealise}-`;
        }
        if(formValue.diIndirect) {
            codeAptitudes += `39:${formValue.diIndirect}-`;
        }
        if(codeAptitudes.endsWith('-')) {
            codeAptitudes = codeAptitudes.slice(0, -1);
        }

        this.code.next(codeAptitudes);
    }

    public getCode(): string {
        return this.code.getValue();
    }

    public saveCode(code: string) {
        const parts = code.split('-');
        const formValue: AptitudesForm = {} as AptitudesForm;
        parts.forEach(part => {
            const [idStr, valueStr] = part.split(':');
            const id = parseInt(idStr, 10);
            const value = parseInt(valueStr, 10);
            const actionEnum = this.mapCode.get(id);
            if(actionEnum !== undefined) {
                switch(actionEnum) {
                    case IdActionsEnum.PERCENTAGE_PV:
                        formValue.percentagePV = value;
                        break;
                    case IdActionsEnum.RESISTANCES_ELEMENTAIRE:
                        formValue.resistancesElementaires = value;
                        break;
                    case IdActionsEnum.BARRIERE:
                        formValue.barriere = value;
                        break;
                    case IdActionsEnum.SOINS_RECUE:
                        formValue.soinsRecus = value;
                        break;
                    case IdActionsEnum.POINT_DE_VIE_EN_ARMURE:
                        formValue.pdvArmure = value;
                        break;
                    case IdActionsEnum.MAITRISES_ELEMENTAIRES:
                        formValue.maitriseElem = value;
                        break;
                    case IdActionsEnum.MAITRISES_MELEE:
                        formValue.maitrisesMelee = value;
                        break;
                    case IdActionsEnum.MAITRISES_DISTANCES:
                        formValue.maitrisesDistance = value;
                        break;
                    case IdActionsEnum.POINT_DE_VIE:
                        formValue.pdv = value;
                        break;
                    case IdActionsEnum.TACLE:
                        formValue.tacle = value;
                        break;
                    case IdActionsEnum.ESQUIVE:
                        formValue.esquive = value;
                        break;
                    case IdActionsEnum.INITIATIVE:
                        formValue.initiative = value;
                        break;
                    case IdActionsEnum.TACLE_ESQUIVE:
                        formValue.tacleEsquive = value;
                        break;
                    case IdActionsEnum.VOLONTE:
                        formValue.volonte = value;
                        break;
                    case IdActionsEnum.COUP_CRITIQUE:
                        formValue.percentageCC = value;
                        break;
                    case IdActionsEnum.PARADE:
                        formValue.parade = value;
                        break;
                    case IdActionsEnum.MAITRISES_CRITIQUES:
                        formValue.maitriseCritique = value;
                        break;
                    case IdActionsEnum.MAITRISES_DOS:
                        formValue.maitriseDos = value;
                        break;
                    case IdActionsEnum.MAITRISES_BERZERK:
                        formValue.maitriseBerzerk = value;
                        break;
                    case IdActionsEnum.MAITRISES_SOIN:
                        formValue.maitriseSoins = value;
                        break;
                    case IdActionsEnum.RESISTANCES_DOS:
                        formValue.resistancesDos = value;
                        break;
                    case IdActionsEnum.RESISTANCES_CRITIQUES:
                        formValue.resistancesCritique = value;
                        break;
                    case IdActionsEnum.PA:
                        formValue.pa = value;
                        break;
                    case IdActionsEnum.PM:
                        formValue.pm = value;
                        break;
                    case IdActionsEnum.PORTEE:
                        formValue.po = value;
                        break;
                    case IdActionsEnum.BOOST_PW:
                        formValue.pw = value;
                        break;
                    case IdActionsEnum.DI:
                        formValue.di = value;
                        break;
                    case IdActionsEnum.RESISTANCES_ELEMENTAIRES_MAJEURES:
                        formValue.resistancesElementairesMajeur = value;
                        break;
                    case IdActionsEnum.ARMURE_DONNEE_RECUE:
                        formValue.armureDonnee = value;
                        break;
                    case IdActionsEnum.SOINS_REALISE:
                        formValue.soinsRealise = value;
                        break;
                    case IdActionsEnum.DI_INDIRECT:
                        formValue.diIndirect = value;
                        break;
                }
            }
        });
        this.aptitudesFormService.setValue(formValue);
    }

}