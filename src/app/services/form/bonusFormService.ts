import { inject, Injectable } from "@angular/core";
import { KeyEnum } from "../../models/enum/keyEnum";
import { FormControl, FormGroup } from "@angular/forms";
import { AbstractFormService, TypedControls } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";
import { RecapStats } from "../../models/data/recap-stats";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { LevelFormService } from "./levelFormService";

export interface BonusForm {
    dragodinde: boolean;
    guilde: boolean;
    neoFamilier1: boolean;
    neoFamilier2: boolean;
    neoFamilier3: boolean;
    neoFamilier4: boolean;
}

@Injectable({providedIn: 'root'})
export class BonusFormService extends AbstractFormService<FormGroup<TypedControls<BonusForm>>> {
    public static readonly DEFAULT_VALUE: BonusForm = {
        dragodinde: false,
        neoFamilier1: false,
        neoFamilier2: false,
        neoFamilier3: false,
        neoFamilier4: false,
        guilde: false
    };

    private readonly recapStats = new BehaviorSubject<RecapStats[]>([]);
    public readonly recapStats$ = this.recapStats.asObservable();

    private readonly levelFormService = inject(LevelFormService);

    
    protected readonly keyEnum = KeyEnum.KEY_BONUS;
    public readonly form =  new FormGroup<TypedControls<BonusForm>>({
        dragodinde: new FormControl(BonusFormService.DEFAULT_VALUE.dragodinde, { nonNullable: true }),
        neoFamilier1: new FormControl(BonusFormService.DEFAULT_VALUE.neoFamilier1, { nonNullable: true }),
        neoFamilier2: new FormControl(BonusFormService.DEFAULT_VALUE.neoFamilier2, { nonNullable: true }),
        neoFamilier3: new FormControl(BonusFormService.DEFAULT_VALUE.neoFamilier3, { nonNullable: true }),
        neoFamilier4: new FormControl(BonusFormService.DEFAULT_VALUE.neoFamilier4, { nonNullable: true }),
        guilde: new FormControl(BonusFormService.DEFAULT_VALUE.guilde, { nonNullable: true })
    });
    
    constructor() {
        super();
        this.init();
        this.levelFormService?.level$.subscribe(() => {
            this.handleChanges(this.form.value as BonusForm);
        });
    }

    protected override handleChanges(value: BonusForm): void {
        const level = this.levelFormService.form.value; 
        const result: RecapStats[] = [];
        if (value.dragodinde) {
            result.push({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: 40, params: [] }); 
        }
        if (value.guilde) {
            result.push({ id: IdActionsEnum.POINT_DE_VIE, value: 55, params: [] }); 
            result.push({ id: IdActionsEnum.RESISTANCES_ELEMENTAIRE, value: 20, params: [] }); 
            result.push({ id: IdActionsEnum.DI, value: 8, params: [] }); 
            result.push({ id: IdActionsEnum.PROSPECTION, value: 10, params: [] }); 
            result.push({ id: IdActionsEnum.SAGESSE, value: 10, params: [] }); 
            result.push({ id: IdActionsEnum.INITIATIVE, value: 10, params: [] }); 
            result.push({ id: IdActionsEnum.TACLE, value: 20, params: [] }); 
            result.push({ id: IdActionsEnum.ESQUIVE, value: 20, params: [] }); 
            result.push({ id: IdActionsEnum.SOINS_REALISE, value: 8, params: [] }); 
        }
        if (value.neoFamilier1) {
            result.push({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: level, params: [] }); 
            result.push({ id: IdActionsEnum.POINT_DE_VIE, value: 2 * level, params: [] }); 
            result.push({ id: IdActionsEnum.VOLONTE, value: 5, params: [] }); 
            result.push({ id: IdActionsEnum.COUP_CRITIQUE, value: 3, params: [] }); 
            result.push({ id: IdActionsEnum.PARADE, value: 3, params: [] }); 
        }
        if (value.neoFamilier2) {
            result.push({ id: IdActionsEnum.PM, value: 1, params: [] }); 
            result.push({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: Math.floor(1.5 * level), params: [] }); 
            result.push({ id: IdActionsEnum.POINT_DE_VIE, value: 3 * level, params: [] }); 
            result.push({ id: IdActionsEnum.VOLONTE, value: 10, params: [] }); 
            result.push({ id: IdActionsEnum.COUP_CRITIQUE, value: 3, params: [] }); 
            result.push({ id: IdActionsEnum.PARADE, value: 3, params: [] }); 
        }
        if (value.neoFamilier3) {
            result.push({ id: IdActionsEnum.PM, value: 1, params: [] }); 
            result.push({ id: IdActionsEnum.BOOST_PW, value: 2, params: [] }); 
            result.push({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: 2 * level, params: [] }); 
            result.push({ id: IdActionsEnum.POINT_DE_VIE, value: 4 * level, params: [] }); 
            result.push({ id: IdActionsEnum.VOLONTE, value: 15, params: [] }); 
            result.push({ id: IdActionsEnum.COUP_CRITIQUE, value: 3, params: [] }); 
            result.push({ id: IdActionsEnum.PARADE, value: 3, params: [] }); 
        }
        if (value.neoFamilier4) {
            result.push({ id: IdActionsEnum.PA, value: 1, params: [] }); 
            result.push({ id: IdActionsEnum.PM, value: 1, params: [] }); 
            result.push({ id: IdActionsEnum.BOOST_PW, value: 2, params: [] }); 
            result.push({ id: IdActionsEnum.MAITRISES_ELEMENTAIRES, value: 2 * level, params: [] }); 
            result.push({ id: IdActionsEnum.POINT_DE_VIE, value: 4 * level, params: [] }); 
            result.push({ id: IdActionsEnum.VOLONTE, value: 20, params: [] }); 
            result.push({ id: IdActionsEnum.COUP_CRITIQUE, value: 3, params: [] }); 
            result.push({ id: IdActionsEnum.PARADE, value: 3, params: [] }); 
        }
        this.recapStats.next(result);
    }
    
    public override setValue(value: BonusForm | null): void {
        this.form.setValue(value ?? BonusFormService.DEFAULT_VALUE);
    }
    public override setDefaultValue(): void {
        this.form.setValue(BonusFormService.DEFAULT_VALUE);
    }
}