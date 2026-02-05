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
}

@Injectable({providedIn: 'root'})
export class BonusFormService extends AbstractFormService<FormGroup<TypedControls<BonusForm>>> {
    public static readonly DEFAULT_VALUE: BonusForm = {
        dragodinde: false,
        guilde: false
    };

    private readonly recapStats = new BehaviorSubject<RecapStats[]>([]);
    public readonly recapStats$ = this.recapStats.asObservable();

    private readonly levelFormService = inject(LevelFormService);

    
    protected readonly keyEnum = KeyEnum.KEY_BONUS;
    public readonly form =  new FormGroup<TypedControls<BonusForm>>({
        dragodinde: new FormControl(BonusFormService.DEFAULT_VALUE.dragodinde, { nonNullable: true }),
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
        this.recapStats.next(result);
    }
    
    // les form.setValue ont été modifié pour éviter les plantages dues aux localStorage 
    // qui contenait les valeurs liés aux néo-serveurs
    public override setValue(value: BonusForm | null): void {
        this.form.setValue({
            dragodinde: value?.dragodinde ?? BonusFormService.DEFAULT_VALUE.dragodinde,
            guilde: value?.guilde ?? BonusFormService.DEFAULT_VALUE.guilde
        });
    }
    public override setDefaultValue(): void {
        this.form.setValue({
            dragodinde: BonusFormService.DEFAULT_VALUE.dragodinde,
            guilde: BonusFormService.DEFAULT_VALUE.guilde
        });
    }
}