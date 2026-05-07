import { Injectable, signal } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";
import { RecapStats } from "../../models/data/recap-stats";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { ParameterMajorActionEnum } from "../../models/enum/parameterMajorActionEnum";

export interface AptitudesForm {
    // Intelligence
    percentagePV: number;
    resistancesElementaires: number;
    barriere: number;
    soinsRecus: number;
    pdvArmure: number;

    // Force
    maitriseElem: number;
    maitrisesMelee: number;
    maitrisesDistance: number;
    pdv: number;

    // Agilite
    tacle: number;
    esquive: number;
    initiative: number;
    tacleEsquive: number;
    volonte: number;

    // Chance
    percentageCC: number;
    parade: number;
    maitriseCritique: number;
    maitriseDos: number;
    maitriseBerzerk: number;
    maitriseSoins: number;
    resistancesDos: number;
    resistancesCritique: number;

    // Majeur
    pa: number;
    pm: number;
    po: number;
    pw: number;
    di: number;
    resistancesElementairesMajeur: number;
    armureDonnee: number;
    soinsRealise: number;
    diIndirect: number;
}

@Injectable({ providedIn: 'root' })
export class AptitudesFormService extends AbstractSignalFormService<AptitudesForm> {
    public static readonly DEFAULT_VALUE = 0;

    private readonly recapStat = new BehaviorSubject<RecapStats[]>([]);
    public readonly recapStat$ = this.recapStat.asObservable();

    private readonly mapCode = new Map<number, IdActionsEnum>([
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
        [6, IdActionsEnum.CONTROLE],
        [8, IdActionsEnum.DI],
        [35, IdActionsEnum.RESISTANCES_ELEMENTAIRES_MAJEURES],
        [38, IdActionsEnum.SOINS_REALISE],
        [39, IdActionsEnum.DI_INDIRECT],
    ]);

    protected readonly keyEnum = KeyEnum.KEY_APTITUDES;
    protected readonly model = signal<AptitudesForm>({
        percentagePV: AptitudesFormService.DEFAULT_VALUE,
        resistancesElementaires: AptitudesFormService.DEFAULT_VALUE,
        barriere: AptitudesFormService.DEFAULT_VALUE,
        soinsRecus: AptitudesFormService.DEFAULT_VALUE,
        pdvArmure: AptitudesFormService.DEFAULT_VALUE,
        maitriseElem: AptitudesFormService.DEFAULT_VALUE,
        maitrisesMelee: AptitudesFormService.DEFAULT_VALUE,
        maitrisesDistance: AptitudesFormService.DEFAULT_VALUE,
        pdv: AptitudesFormService.DEFAULT_VALUE,
        tacle: AptitudesFormService.DEFAULT_VALUE,
        esquive: AptitudesFormService.DEFAULT_VALUE,
        initiative: AptitudesFormService.DEFAULT_VALUE,
        tacleEsquive: AptitudesFormService.DEFAULT_VALUE,
        volonte: AptitudesFormService.DEFAULT_VALUE,
        percentageCC: AptitudesFormService.DEFAULT_VALUE,
        parade: AptitudesFormService.DEFAULT_VALUE,
        maitriseCritique: AptitudesFormService.DEFAULT_VALUE,
        maitriseDos: AptitudesFormService.DEFAULT_VALUE,
        maitriseBerzerk: AptitudesFormService.DEFAULT_VALUE,
        maitriseSoins: AptitudesFormService.DEFAULT_VALUE,
        resistancesDos: AptitudesFormService.DEFAULT_VALUE,
        resistancesCritique: AptitudesFormService.DEFAULT_VALUE,
        pa: AptitudesFormService.DEFAULT_VALUE,
        pm: AptitudesFormService.DEFAULT_VALUE,
        po: AptitudesFormService.DEFAULT_VALUE,
        pw: AptitudesFormService.DEFAULT_VALUE,
        di: AptitudesFormService.DEFAULT_VALUE,
        resistancesElementairesMajeur: AptitudesFormService.DEFAULT_VALUE,
        armureDonnee: AptitudesFormService.DEFAULT_VALUE,
        soinsRealise: AptitudesFormService.DEFAULT_VALUE,
        diIndirect: AptitudesFormService.DEFAULT_VALUE
    });

    public readonly form = new FormGroup({
        percentagePV: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        resistancesElementaires: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(10)] }),
        barriere: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(10)] }),
        soinsRecus: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(5)] }),
        pdvArmure: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(10)] }),
        maitriseElem: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        maitrisesMelee: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(40)] }),
        maitrisesDistance: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(40)] }),
        pdv: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        tacle: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        esquive: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        initiative: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(20)] }),
        tacleEsquive: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        volonte: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(20)] }),
        percentageCC: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(20)] }),
        parade: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(20)] }),
        maitriseCritique: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        maitriseDos: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        maitriseBerzerk: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        maitriseSoins: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        resistancesDos: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(20)] }),
        resistancesCritique: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(20)] }),
        pa: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] }),
        pm: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] }),
        po: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] }),
        pw: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] }),
        di: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] }),
        resistancesElementairesMajeur: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] }),
        armureDonnee: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] }),
        soinsRealise: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] }),
        diIndirect: new FormControl<number>(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] })
    });

    constructor() {
        super();
        this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
            this.model.update(m => ({ ...m, ...(v as AptitudesForm) }));
        });
        this.init();
    }

    protected override handleChanges(value: AptitudesForm): void {
        const recapStatsList: RecapStats[] = [
            { id: IdActionsEnum.PERCENTAGE_PV, value: 4 * value.percentagePV, params: [] },
            { id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: 10 * value.resistancesElementaires, params: [] },
            { id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: 5 * value.maitriseElem, params: [] },
            { id: IdActionsEnum.MAITRISES_MELEE, value: 8 * value.maitrisesMelee, params: [] },
            { id: IdActionsEnum.MAITRISES_DISTANCES, value: 8 * value.maitrisesDistance, params: [] },
            { id: IdActionsEnum.POINT_DE_VIE, value: 20 * value.pdv, params: [] },
            { id: IdActionsEnum.TACLE, value: 6 * value.tacle, params: [] },
            { id: IdActionsEnum.ESQUIVE, value: 6 * value.esquive, params: [] },
            { id: IdActionsEnum.INITIATIVE, value: 4 * value.initiative, params: [] },
            { id: IdActionsEnum.VOLONTE, value: value.volonte, params: [] },
            { id: IdActionsEnum.COUP_CRITIQUE, value: value.percentageCC, params: [] },
            { id: IdActionsEnum.PARADE, value: value.parade, params: [] },
            { id: IdActionsEnum.MAITRISES_CRITIQUES, value: 4 * value.maitriseCritique, params: [] },
            { id: IdActionsEnum.MAITRISES_DOS, value: 6 * value.maitriseDos, params: [] },
            { id: IdActionsEnum.MAITRISES_BERZERK, value: 8 * value.maitriseBerzerk, params: [] },
            { id: IdActionsEnum.MAITRISES_SOIN, value: 6 * value.maitriseSoins, params: [] },
            { id: IdActionsEnum.RESISTANCES_DOS, value: 4 * value.resistancesDos, params: [] },
            { id: IdActionsEnum.RESISTANCES_CRITIQUES, value: 4 * value.resistancesCritique, params: [] },
            { id: IdActionsEnum.PA, value: value.pa, params: [] },
            { id: IdActionsEnum.BOOST_PW, value: 2 * value.pw, params: [] },
            { id: IdActionsEnum.DI, value: 10 * value.di, params: [] },
        ];
        if (value.resistancesElementairesMajeur > 0) {
            recapStatsList.push({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: 50, params: [] });
        }
        if (value.tacleEsquive > 0) {
            recapStatsList.push({ id: IdActionsEnum.TACLE, value: 4 * value.tacleEsquive, params: [] });
            recapStatsList.push({ id: IdActionsEnum.ESQUIVE, value: 4 * value.tacleEsquive, params: [] });
        }
        if (value.pm > 0) {
            recapStatsList.push({ id: IdActionsEnum.PM, value: value.pm, params: [] });
            recapStatsList.push({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: 20, params: [] });
        }
        if (value.po > 0) {
            recapStatsList.push({ id: IdActionsEnum.PORTEE, value: value.po, params: [] });
            recapStatsList.push({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: 40, params: [] });
        }
        if (value.armureDonnee > 0) {
            recapStatsList.push({
                id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: 20,
                parameterMajorAction: ParameterMajorActionEnum.ARMURE_DONNEE, params: []
            });
        }
        if (value.soinsRealise > 0) {
            recapStatsList.push({ id: IdActionsEnum.SOINS_REALISE, value: 10, params: [] });
        }
        if (value.diIndirect > 0) {
            recapStatsList.push({ id: IdActionsEnum.DI_INDIRECT, value: 10, params: [] });
            recapStatsList.push({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: 40, params: [] });
        }

        this.recapStat.next(recapStatsList);
        this.form.setValue(value, { emitEvent: false });
    }

    public override setValue(value: AptitudesForm | null): void {
        this.model.set({
            percentagePV: value?.percentagePV ?? AptitudesFormService.DEFAULT_VALUE,
            resistancesElementaires: value?.resistancesElementaires ?? AptitudesFormService.DEFAULT_VALUE,
            barriere: value?.barriere ?? AptitudesFormService.DEFAULT_VALUE,
            soinsRecus: value?.soinsRecus ?? AptitudesFormService.DEFAULT_VALUE,
            pdvArmure: value?.pdvArmure ?? AptitudesFormService.DEFAULT_VALUE,
            maitriseElem: value?.maitriseElem ?? AptitudesFormService.DEFAULT_VALUE,
            maitrisesMelee: value?.maitrisesMelee ?? AptitudesFormService.DEFAULT_VALUE,
            maitrisesDistance: value?.maitrisesDistance ?? AptitudesFormService.DEFAULT_VALUE,
            pdv: value?.pdv ?? AptitudesFormService.DEFAULT_VALUE,
            tacle: value?.tacle ?? AptitudesFormService.DEFAULT_VALUE,
            esquive: value?.esquive ?? AptitudesFormService.DEFAULT_VALUE,
            initiative: value?.initiative ?? AptitudesFormService.DEFAULT_VALUE,
            tacleEsquive: value?.tacleEsquive ?? AptitudesFormService.DEFAULT_VALUE,
            volonte: value?.volonte ?? AptitudesFormService.DEFAULT_VALUE,
            percentageCC: value?.percentageCC ?? AptitudesFormService.DEFAULT_VALUE,
            parade: value?.parade ?? AptitudesFormService.DEFAULT_VALUE,
            maitriseCritique: value?.maitriseCritique ?? AptitudesFormService.DEFAULT_VALUE,
            maitriseDos: value?.maitriseDos ?? AptitudesFormService.DEFAULT_VALUE,
            maitriseBerzerk: value?.maitriseBerzerk ?? AptitudesFormService.DEFAULT_VALUE,
            maitriseSoins: value?.maitriseSoins ?? AptitudesFormService.DEFAULT_VALUE,
            resistancesDos: value?.resistancesDos ?? AptitudesFormService.DEFAULT_VALUE,
            resistancesCritique: value?.resistancesCritique ?? AptitudesFormService.DEFAULT_VALUE,
            pa: value?.pa ?? AptitudesFormService.DEFAULT_VALUE,
            pm: value?.pm ?? AptitudesFormService.DEFAULT_VALUE,
            po: value?.po ?? AptitudesFormService.DEFAULT_VALUE,
            pw: value?.pw ?? AptitudesFormService.DEFAULT_VALUE,
            di: value?.di ?? AptitudesFormService.DEFAULT_VALUE,
            resistancesElementairesMajeur: value?.resistancesElementairesMajeur ?? AptitudesFormService.DEFAULT_VALUE,
            armureDonnee: value?.armureDonnee ?? AptitudesFormService.DEFAULT_VALUE,
            soinsRealise: value?.soinsRealise ?? AptitudesFormService.DEFAULT_VALUE,
            diIndirect: value?.diIndirect ?? AptitudesFormService.DEFAULT_VALUE
        });
    }

    public override setDefaultValue(): void {
        this.model.set({
            percentagePV: AptitudesFormService.DEFAULT_VALUE,
            resistancesElementaires: AptitudesFormService.DEFAULT_VALUE,
            barriere: AptitudesFormService.DEFAULT_VALUE,
            soinsRecus: AptitudesFormService.DEFAULT_VALUE,
            pdvArmure: AptitudesFormService.DEFAULT_VALUE,
            maitriseElem: AptitudesFormService.DEFAULT_VALUE,
            maitrisesMelee: AptitudesFormService.DEFAULT_VALUE,
            maitrisesDistance: AptitudesFormService.DEFAULT_VALUE,
            pdv: AptitudesFormService.DEFAULT_VALUE,
            tacle: AptitudesFormService.DEFAULT_VALUE,
            esquive: AptitudesFormService.DEFAULT_VALUE,
            initiative: AptitudesFormService.DEFAULT_VALUE,
            tacleEsquive: AptitudesFormService.DEFAULT_VALUE,
            volonte: AptitudesFormService.DEFAULT_VALUE,
            percentageCC: AptitudesFormService.DEFAULT_VALUE,
            parade: AptitudesFormService.DEFAULT_VALUE,
            maitriseCritique: AptitudesFormService.DEFAULT_VALUE,
            maitriseDos: AptitudesFormService.DEFAULT_VALUE,
            maitriseBerzerk: AptitudesFormService.DEFAULT_VALUE,
            maitriseSoins: AptitudesFormService.DEFAULT_VALUE,
            resistancesDos: AptitudesFormService.DEFAULT_VALUE,
            resistancesCritique: AptitudesFormService.DEFAULT_VALUE,
            pa: AptitudesFormService.DEFAULT_VALUE,
            pm: AptitudesFormService.DEFAULT_VALUE,
            po: AptitudesFormService.DEFAULT_VALUE,
            pw: AptitudesFormService.DEFAULT_VALUE,
            di: AptitudesFormService.DEFAULT_VALUE,
            resistancesElementairesMajeur: AptitudesFormService.DEFAULT_VALUE,
            armureDonnee: AptitudesFormService.DEFAULT_VALUE,
            soinsRealise: AptitudesFormService.DEFAULT_VALUE,
            diIndirect: AptitudesFormService.DEFAULT_VALUE
        });
    }

    public resetIntelligence(): void {
        this.model.update(m => ({
            ...m,
            percentagePV: AptitudesFormService.DEFAULT_VALUE,
            resistancesElementaires: AptitudesFormService.DEFAULT_VALUE,
            barriere: AptitudesFormService.DEFAULT_VALUE,
            soinsRecus: AptitudesFormService.DEFAULT_VALUE,
            pdvArmure: AptitudesFormService.DEFAULT_VALUE
        }));
    }

    public resetForce(): void {
        this.model.update(m => ({
            ...m,
            maitriseElem: AptitudesFormService.DEFAULT_VALUE,
            maitrisesMelee: AptitudesFormService.DEFAULT_VALUE,
            maitrisesDistance: AptitudesFormService.DEFAULT_VALUE,
            pdv: AptitudesFormService.DEFAULT_VALUE
        }));
    }

    public resetAgilite(): void {
        this.model.update(m => ({
            ...m,
            tacle: AptitudesFormService.DEFAULT_VALUE,
            esquive: AptitudesFormService.DEFAULT_VALUE,
            initiative: AptitudesFormService.DEFAULT_VALUE,
            tacleEsquive: AptitudesFormService.DEFAULT_VALUE,
            volonte: AptitudesFormService.DEFAULT_VALUE
        }));
    }

    public resetChance(): void {
        this.model.update(m => ({
            ...m,
            percentageCC: AptitudesFormService.DEFAULT_VALUE,
            parade: AptitudesFormService.DEFAULT_VALUE,
            maitriseCritique: AptitudesFormService.DEFAULT_VALUE,
            maitriseDos: AptitudesFormService.DEFAULT_VALUE,
            maitriseBerzerk: AptitudesFormService.DEFAULT_VALUE,
            maitriseSoins: AptitudesFormService.DEFAULT_VALUE,
            resistancesDos: AptitudesFormService.DEFAULT_VALUE,
            resistancesCritique: AptitudesFormService.DEFAULT_VALUE
        }));
    }

    public resetMajeur(): void {
        this.model.update(m => ({
            ...m,
            pa: AptitudesFormService.DEFAULT_VALUE,
            pm: AptitudesFormService.DEFAULT_VALUE,
            po: AptitudesFormService.DEFAULT_VALUE,
            pw: AptitudesFormService.DEFAULT_VALUE,
            di: AptitudesFormService.DEFAULT_VALUE,
            resistancesElementairesMajeur: AptitudesFormService.DEFAULT_VALUE,
            armureDonnee: AptitudesFormService.DEFAULT_VALUE,
            soinsRealise: AptitudesFormService.DEFAULT_VALUE,
            diIndirect: AptitudesFormService.DEFAULT_VALUE
        }));
    }

    public nbPointUseInIntelligence(): number {
        const v = this.model();
        return Number.parseInt(`${v.percentagePV}`) +
            Number.parseInt(`${v.resistancesElementaires}`) +
            Number.parseInt(`${v.barriere}`) +
            Number.parseInt(`${v.soinsRecus}`) +
            Number.parseInt(`${v.pdvArmure}`);
    }

    public nbPointUseInForce(): number {
        const v = this.model();
        return Number.parseInt(`${v.maitriseElem}`) +
            Number.parseInt(`${v.maitrisesMelee}`) +
            Number.parseInt(`${v.maitrisesDistance}`) +
            Number.parseInt(`${v.pdv}`);
    }

    public nbPointUseInAgilite(): number {
        const v = this.model();
        return Number.parseInt(`${v.tacle}`) +
            Number.parseInt(`${v.esquive}`) +
            Number.parseInt(`${v.initiative}`) +
            Number.parseInt(`${v.tacleEsquive}`) +
            Number.parseInt(`${v.volonte}`);
    }

    public nbPointUseInChance(): number {
        const v = this.model();
        return Number.parseInt(`${v.percentageCC}`) +
            Number.parseInt(`${v.parade}`) +
            Number.parseInt(`${v.maitriseCritique}`) +
            Number.parseInt(`${v.maitriseDos}`) +
            Number.parseInt(`${v.maitriseBerzerk}`) +
            Number.parseInt(`${v.maitriseSoins}`) +
            Number.parseInt(`${v.resistancesDos}`) +
            Number.parseInt(`${v.resistancesCritique}`);
    }

    public nbPointUseInMajeur(): number {
        const v = this.model();
        return Number.parseInt(`${v.pa}`) +
            Number.parseInt(`${v.pm}`) +
            Number.parseInt(`${v.po}`) +
            Number.parseInt(`${v.pw}`) +
            Number.parseInt(`${v.di}`) +
            Number.parseInt(`${v.resistancesElementairesMajeur}`) +
            Number.parseInt(`${v.armureDonnee}`) +
            Number.parseInt(`${v.soinsRealise}`) +
            Number.parseInt(`${v.diIndirect}`);
    }
}
