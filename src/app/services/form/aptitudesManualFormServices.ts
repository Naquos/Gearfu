import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService, TypedControls } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";
import { RecapStats } from "../../models/data/recap-stats";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { ParameterMajorActionEnum } from "../../models/enum/parameterMajorActionEnum";
import { inject } from "@angular/core";
import { UrlServices } from "../urlServices";


export interface AptitudesManualForm {
    pointDeVie: number;
    pa: number;
    pm: number;
    pw: number;

    maitriseFeu: number;
    maitriseEau: number;
    maitriseTerre: number;
    maitriseAir: number;

    resistancesFeu: number;
    resistancesEau: number;
    resistancesTerre: number;
    resistancesAir: number;

    di: number;
    soinsRealises: number;
    cc: number;
    parade: number;
    initiative: number;
    portee: number;
    esquive: number;
    tacle: number;
    sagesse: number;
    prospection: number;
    controle: number;
    volonte: number;

    maitriseCritique: number;
    resistancesCritique: number;
    maitriseDos: number;
    resistancesDos: number;
    maitriseMelee: number;
    armureDonnee: number;
    maitriseDistance: number;
    armureRecue: number;
    maitriseSoins: number;
    DIindirect: number;
    maitriseBerzerk: number;
}

@Injectable({providedIn: 'root'})
export class AptitudesManualFormService extends AbstractFormService<FormGroup<TypedControls<AptitudesManualForm>>> {
  public static readonly DEFAULT_VALUE = 0;

  private readonly recapStat = new BehaviorSubject<RecapStats[]>([]);
  public readonly recapStat$ = this.recapStat.asObservable();

  protected readonly keyEnum = KeyEnum.KEY_APTITUDES_MANUAL;

  private readonly urlServices = inject(UrlServices);
  private isLoadingFromUrl = false;

  public readonly form = new FormGroup<TypedControls<AptitudesManualForm>>({
    pointDeVie: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    pa: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    pm: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    pw: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),

    maitriseFeu: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    maitriseEau: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    maitriseTerre: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    maitriseAir: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),

    resistancesFeu: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    resistancesEau: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    resistancesTerre: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    resistancesAir: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),

    di: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    soinsRealises: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    cc: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    parade: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    initiative: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    portee: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    esquive: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    tacle: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    sagesse: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    prospection: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    controle: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    volonte: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),

    maitriseCritique: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    resistancesCritique: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    maitriseDos: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    resistancesDos: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    maitriseMelee: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    armureDonnee: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    maitriseDistance: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    armureRecue: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    maitriseSoins: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    DIindirect: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    maitriseBerzerk: new FormControl<number>(AptitudesManualFormService.DEFAULT_VALUE, { nonNullable: true }),
    });

  constructor() {
    super();
    const codeAptitudesManual = this.urlServices.getAptitudesManualFromUrl();
    this.init();
    if (codeAptitudesManual) {
      this.isLoadingFromUrl = true;
      this.decodeAndSaveCodeBuild(codeAptitudesManual);
      this.isLoadingFromUrl = false;
    }
  }

  /**
   * Génère un code compact pour l'URL représentant les aptitudes manuelles
   * Format: pv,pa,pm,pw,mFeu,mEau,mTerre,mAir,rFeu,rEau,rTerre,rAir,di,soins,cc,parade,init,portee,esq,tacle,sag,prosp,ctrl,vol,mCrit,rCrit,mDos,rDos,mMelee,armD,mDist,armR,mSoins,diInd,mBerz
   * Seules les valeurs non-nulles sont encodées avec leur index
   */
  private generateCodeBuild(value: AptitudesManualForm): string {
    const values = [
      value.pointDeVie,
      value.pa,
      value.pm,
      value.pw,
      value.maitriseFeu,
      value.maitriseEau,
      value.maitriseTerre,
      value.maitriseAir,
      value.resistancesFeu,
      value.resistancesEau,
      value.resistancesTerre,
      value.resistancesAir,
      value.di,
      value.soinsRealises,
      value.cc,
      value.parade,
      value.initiative,
      value.portee,
      value.esquive,
      value.tacle,
      value.sagesse,
      value.prospection,
      value.controle,
      value.volonte,
      value.maitriseCritique,
      value.resistancesCritique,
      value.maitriseDos,
      value.resistancesDos,
      value.maitriseMelee,
      value.armureDonnee,
      value.maitriseDistance,
      value.armureRecue,
      value.maitriseSoins,
      value.DIindirect,
      value.maitriseBerzerk
    ];

    // Encoder uniquement les valeurs non-nulles avec leur index
    const parts: string[] = [];
    values.forEach((val, index) => {
      if (val !== 0) {
        parts.push(`${index}:${val}`);
      }
    });

    return parts.join(',');
  }

  /**
   * Décode un code build depuis l'URL et l'applique au formulaire
   */
  public decodeAndSaveCodeBuild(codeBuild: string): void {
    try {
      const aptitudesManual: AptitudesManualForm = {
        pointDeVie: 0,
        pa: 0,
        pm: 0,
        pw: 0,
        maitriseFeu: 0,
        maitriseEau: 0,
        maitriseTerre: 0,
        maitriseAir: 0,
        resistancesFeu: 0,
        resistancesEau: 0,
        resistancesTerre: 0,
        resistancesAir: 0,
        di: 0,
        soinsRealises: 0,
        cc: 0,
        parade: 0,
        initiative: 0,
        portee: 0,
        esquive: 0,
        tacle: 0,
        sagesse: 0,
        prospection: 0,
        controle: 0,
        volonte: 0,
        maitriseCritique: 0,
        resistancesCritique: 0,
        maitriseDos: 0,
        resistancesDos: 0,
        maitriseMelee: 0,
        armureDonnee: 0,
        maitriseDistance: 0,
        armureRecue: 0,
        maitriseSoins: 0,
        DIindirect: 0,
        maitriseBerzerk: 0
      };

      const keys: (keyof AptitudesManualForm)[] = [
        'pointDeVie', 'pa', 'pm', 'pw',
        'maitriseFeu', 'maitriseEau', 'maitriseTerre', 'maitriseAir',
        'resistancesFeu', 'resistancesEau', 'resistancesTerre', 'resistancesAir',
        'di', 'soinsRealises', 'cc', 'parade', 'initiative', 'portee',
        'esquive', 'tacle', 'sagesse', 'prospection', 'controle', 'volonte',
        'maitriseCritique', 'resistancesCritique', 'maitriseDos', 'resistancesDos',
        'maitriseMelee', 'armureDonnee', 'maitriseDistance', 'armureRecue',
        'maitriseSoins', 'DIindirect', 'maitriseBerzerk'
      ];

      const parts = codeBuild.split(',');
      parts.forEach(part => {
        const [indexStr, valueStr] = part.split(':');
        const index = parseInt(indexStr, 10);
        const value = parseInt(valueStr, 10);
        
        if (!isNaN(index) && !isNaN(value) && index >= 0 && index < keys.length) {
          aptitudesManual[keys[index]] = value;
        }
      });

      this.setValue(aptitudesManual);
    } catch (error) {
      console.error('Error decoding aptitudes manual from URL:', error);
    }
  }
  
  protected override handleChanges(value: AptitudesManualForm): void {
    const recapStatsList = [
        { id: IdActionsEnum.POINT_DE_VIE, value: value.pointDeVie, params: [] },
        { id: IdActionsEnum.PA, value: value.pa, params: [] },
        { id: IdActionsEnum.PM, value: value.pm, params: [] },
        { id: IdActionsEnum.BOOST_PW, value: value.pw, params: [] },

        { id: IdActionsEnum.MAITRISES_FEU, value: value.maitriseFeu, params: [] },
        { id: IdActionsEnum.MAITRISES_EAU, value: value.maitriseEau, params: [] },
        { id: IdActionsEnum.MAITRISES_TERRE, value: value.maitriseTerre, params: [] },
        { id: IdActionsEnum.MAITRISES_AIR, value: value.maitriseAir, params: [] },

        { id: IdActionsEnum.RESISTANCES_FEU, value: value.resistancesFeu, params: [] },
        { id: IdActionsEnum.RESISTANCES_EAU, value: value.resistancesEau, params: [] },
        { id: IdActionsEnum.RESISTANCES_TERRE, value: value.resistancesTerre, params: [] },
        { id: IdActionsEnum.RESISTANCES_AIR, value: value.resistancesAir, params: [] },


        { id: IdActionsEnum.DI, value: value.di, params: [] },
        { id: IdActionsEnum.SOINS_REALISE, value: value.soinsRealises, params: [] },
        { id: IdActionsEnum.COUP_CRITIQUE, value: value.cc, params: [] },
        { id: IdActionsEnum.PARADE, value: value.parade, params: [] },
        { id: IdActionsEnum.INITIATIVE, value: value.initiative, params: [] },
        { id: IdActionsEnum.PORTEE, value: value.portee, params: [] },
        { id: IdActionsEnum.ESQUIVE, value: value.esquive, params: [] },
        { id: IdActionsEnum.TACLE, value: value.tacle, params: [] },
        { id: IdActionsEnum.SAGESSE, value: value.sagesse, params: [] },
        { id: IdActionsEnum.PROSPECTION, value: value.prospection, params: [] },
        { id: IdActionsEnum.CONTROLE, value: value.controle, params: [] },
        { id: IdActionsEnum.VOLONTE, value: value.volonte, params: [] },


        { id: IdActionsEnum.MAITRISES_CRITIQUES, value: value.maitriseCritique, params: [] },
        { id: IdActionsEnum.RESISTANCES_CRITIQUES, value: value.resistancesCritique, params: [] },
        { id: IdActionsEnum.MAITRISES_DOS, value: value.maitriseDos, params: [] },
        { id: IdActionsEnum.RESISTANCES_DOS, value: value.resistancesDos, params: [] },
        { id: IdActionsEnum.MAITRISES_MELEE, value: value.maitriseMelee, params: [] },
        { id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: value.armureDonnee, ParameterMajorActionEnum: ParameterMajorActionEnum.ARMURE_DONNEE, params: [] },
        { id: IdActionsEnum.MAITRISES_DISTANCES, value: value.maitriseDistance, params: [] },
        { id: IdActionsEnum.ARMURE_DONNEE_RECUE, value: value.armureRecue, ParameterMajorActionEnum: ParameterMajorActionEnum.ARMURE_RECUE, params: [] },
        { id: IdActionsEnum.MAITRISES_SOIN, value: value.maitriseSoins, params: [] },
        { id: IdActionsEnum.DI_INDIRECT, value: value.DIindirect, params: [] },
        { id: IdActionsEnum.MAITRISES_BERZERK, value: value.maitriseBerzerk, params: [] },

    ];
    this.recapStat.next(recapStatsList);
    
    // Synchroniser avec l'URL seulement si on ne charge pas depuis l'URL
    if (!this.isLoadingFromUrl) {
      const codeBuild = this.generateCodeBuild(value);
      this.urlServices.setAptitudesManualInUrl(codeBuild);
    }
  }

  public override setValue(value: AptitudesManualForm | null): void {
    this.form.setValue({
        pointDeVie: value?.pointDeVie ?? AptitudesManualFormService.DEFAULT_VALUE,
        pa: value?.pa ?? AptitudesManualFormService.DEFAULT_VALUE,
        pm: value?.pm ?? AptitudesManualFormService.DEFAULT_VALUE,
        pw: value?.pw ?? AptitudesManualFormService.DEFAULT_VALUE,

        maitriseFeu: value?.maitriseFeu ?? AptitudesManualFormService.DEFAULT_VALUE,
        maitriseEau: value?.maitriseEau ?? AptitudesManualFormService.DEFAULT_VALUE,
        maitriseTerre: value?.maitriseTerre ?? AptitudesManualFormService.DEFAULT_VALUE,
        maitriseAir: value?.maitriseAir ?? AptitudesManualFormService.DEFAULT_VALUE,

        resistancesFeu: value?.resistancesFeu ?? AptitudesManualFormService.DEFAULT_VALUE,
        resistancesEau: value?.resistancesEau ?? AptitudesManualFormService.DEFAULT_VALUE,
        resistancesTerre: value?.resistancesTerre ?? AptitudesManualFormService.DEFAULT_VALUE,
        resistancesAir: value?.resistancesAir ?? AptitudesManualFormService.DEFAULT_VALUE,

        di: value?.di ?? AptitudesManualFormService.DEFAULT_VALUE,
        soinsRealises: value?.soinsRealises ?? AptitudesManualFormService.DEFAULT_VALUE,
        cc: value?.cc ?? AptitudesManualFormService.DEFAULT_VALUE,
        parade: value?.parade ?? AptitudesManualFormService.DEFAULT_VALUE,
        initiative: value?.initiative ?? AptitudesManualFormService.DEFAULT_VALUE,
        portee: value?.portee ?? AptitudesManualFormService.DEFAULT_VALUE,
        esquive: value?.esquive ?? AptitudesManualFormService.DEFAULT_VALUE,
        tacle: value?.tacle ?? AptitudesManualFormService.DEFAULT_VALUE,
        sagesse: value?.sagesse ?? AptitudesManualFormService.DEFAULT_VALUE,
        prospection: value?.prospection ?? AptitudesManualFormService.DEFAULT_VALUE,
        controle: value?.controle ?? AptitudesManualFormService.DEFAULT_VALUE,
        volonte: value?.volonte ?? AptitudesManualFormService.DEFAULT_VALUE,

        maitriseCritique: value?.maitriseCritique ?? AptitudesManualFormService.DEFAULT_VALUE,
        resistancesCritique: value?.resistancesCritique ?? AptitudesManualFormService.DEFAULT_VALUE,
        maitriseDos: value?.maitriseDos ?? AptitudesManualFormService.DEFAULT_VALUE,
        resistancesDos: value?.resistancesDos ?? AptitudesManualFormService.DEFAULT_VALUE,
        maitriseMelee: value?.maitriseMelee ?? AptitudesManualFormService.DEFAULT_VALUE,
        armureDonnee: value?.armureDonnee ?? AptitudesManualFormService.DEFAULT_VALUE,
        maitriseDistance: value?.maitriseDistance ?? AptitudesManualFormService.DEFAULT_VALUE,
        armureRecue: value?.armureRecue ?? AptitudesManualFormService.DEFAULT_VALUE,
        maitriseSoins: value?.maitriseSoins ?? AptitudesManualFormService.DEFAULT_VALUE,
        DIindirect: value?.DIindirect ?? AptitudesManualFormService.DEFAULT_VALUE,
        maitriseBerzerk: value?.maitriseBerzerk ?? AptitudesManualFormService.DEFAULT_VALUE,
    });
  }
  

  public override setDefaultValue(): void {
    this.form.setValue({
        pointDeVie: AptitudesManualFormService.DEFAULT_VALUE,
        pa: AptitudesManualFormService.DEFAULT_VALUE,
        pm: AptitudesManualFormService.DEFAULT_VALUE,
        pw: AptitudesManualFormService.DEFAULT_VALUE,

        maitriseFeu: AptitudesManualFormService.DEFAULT_VALUE,
        maitriseEau: AptitudesManualFormService.DEFAULT_VALUE,
        maitriseTerre: AptitudesManualFormService.DEFAULT_VALUE,
        maitriseAir: AptitudesManualFormService.DEFAULT_VALUE,

        resistancesFeu: AptitudesManualFormService.DEFAULT_VALUE,
        resistancesEau: AptitudesManualFormService.DEFAULT_VALUE,
        resistancesTerre: AptitudesManualFormService.DEFAULT_VALUE,
        resistancesAir: AptitudesManualFormService.DEFAULT_VALUE,

        di: AptitudesManualFormService.DEFAULT_VALUE,
        soinsRealises: AptitudesManualFormService.DEFAULT_VALUE,
        cc: AptitudesManualFormService.DEFAULT_VALUE,
        parade: AptitudesManualFormService.DEFAULT_VALUE,
        initiative: AptitudesManualFormService.DEFAULT_VALUE,
        portee: AptitudesManualFormService.DEFAULT_VALUE,
        esquive: AptitudesManualFormService.DEFAULT_VALUE,
        tacle: AptitudesManualFormService.DEFAULT_VALUE,
        sagesse: AptitudesManualFormService.DEFAULT_VALUE,
        prospection: AptitudesManualFormService.DEFAULT_VALUE,
        controle: AptitudesManualFormService.DEFAULT_VALUE,
        volonte: AptitudesManualFormService.DEFAULT_VALUE,

        maitriseCritique: AptitudesManualFormService.DEFAULT_VALUE,
        resistancesCritique: AptitudesManualFormService.DEFAULT_VALUE,
        maitriseDos: AptitudesManualFormService.DEFAULT_VALUE,
        resistancesDos: AptitudesManualFormService.DEFAULT_VALUE,
        maitriseMelee: AptitudesManualFormService.DEFAULT_VALUE,
        armureDonnee: AptitudesManualFormService.DEFAULT_VALUE,
        maitriseDistance: AptitudesManualFormService.DEFAULT_VALUE,
        armureRecue: AptitudesManualFormService.DEFAULT_VALUE,
        maitriseSoins: AptitudesManualFormService.DEFAULT_VALUE,
        DIindirect: AptitudesManualFormService.DEFAULT_VALUE,
        maitriseBerzerk: AptitudesManualFormService.DEFAULT_VALUE,
    });
  }
}