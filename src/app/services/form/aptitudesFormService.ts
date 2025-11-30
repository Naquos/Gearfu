import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService, TypedControls } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";
import { RecapStats } from "../../models/data/recap-stats";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";


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
    controle: number;
    di: number;
    resistancesElementairesMajeur: number;
}

@Injectable({providedIn: 'root'})
export class AptitudesFormService extends AbstractFormService<FormGroup<TypedControls<AptitudesForm>>> {
  public static readonly DEFAULT_VALUE = 0;

  private readonly recapStat = new BehaviorSubject<RecapStats[]>([]);
  public readonly recapStat$ = this.recapStat.asObservable();

  protected readonly keyEnum = KeyEnum.KEY_APTITUDES;

  public readonly form = new FormGroup<TypedControls<AptitudesForm>>({
        percentagePV: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        resistancesElementaires: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(10)] }),
        barriere: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(10)] }),
        soinsRecus: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(5)] }),
        pdvArmure: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(10)] }),

        maitriseElem: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        maitrisesMelee: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(40)] }),
        maitrisesDistance: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(40)] }),
        pdv: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        tacle: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        esquive: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        initiative: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(20)] }),
        tacleEsquive: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        volonte: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(20)] }),
        percentageCC: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(20)] }),
        parade: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(20)] }),
        maitriseCritique: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        maitriseDos: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        maitriseBerzerk: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        maitriseSoins: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true }),
        resistancesDos: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(20)] }),
        resistancesCritique: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(20)] }),
        pa: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] }),
        pm: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] }),
        po: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] }),
        pw: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] }),
        controle: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] }),
        di: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] }),
        resistancesElementairesMajeur: new FormControl(AptitudesFormService.DEFAULT_VALUE, { nonNullable: true, validators: [Validators.max(1)] })
      });

  constructor() {
    super();
    this.init();
  }

  protected override handleChanges(value: AptitudesForm): void {
    const recapStatsList = [
        // { id: IdActionsEnum.POINT_DE_VIE, value: value.percentagePV, params: [] },
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
        { id: IdActionsEnum.PW, value: 2 * value.pw, params: [] },
        { id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: 50 * value.resistancesElementairesMajeur, params: [] }
    ];
    if(value.tacleEsquive > 0) {
        recapStatsList.push({ id: IdActionsEnum.TACLE, value: 4 * value.tacleEsquive, params: [] });
        recapStatsList.push({ id: IdActionsEnum.ESQUIVE, value: 4 * value.tacleEsquive, params: [] });
    }
    if(value.pm > 0) {
        recapStatsList.push({ id: IdActionsEnum.PM, value: value.pm, params: [] });
        recapStatsList.push({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: 20, params: [] });
    }
    if(value.po > 0) {
        recapStatsList.push({ id: IdActionsEnum.PORTEE, value: value.po, params: [] });
        recapStatsList.push({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: 40, params: [] });
    }
    if(value.controle > 0) {
        recapStatsList.push({ id: IdActionsEnum.CONTROLE, value: 2, params: [] });
        recapStatsList.push({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: 40, params: [] });
    }
    this.recapStat.next(recapStatsList);
  }

  public override setValue(value: AptitudesForm | null): void {
    this.form.setValue({
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
        controle: value?.controle ?? AptitudesFormService.DEFAULT_VALUE,
        di: value?.di ?? AptitudesFormService.DEFAULT_VALUE,
        resistancesElementairesMajeur: value?.resistancesElementairesMajeur ?? AptitudesFormService.DEFAULT_VALUE
    });
  }
  

  public override setDefaultValue(): void {
    this.form.setValue({
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
        controle: AptitudesFormService.DEFAULT_VALUE,
        di: AptitudesFormService.DEFAULT_VALUE,
        resistancesElementairesMajeur: AptitudesFormService.DEFAULT_VALUE
    });
  }
}