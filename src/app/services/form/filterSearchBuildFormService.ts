import {  Injectable } from "@angular/core";
import { KeyEnum } from "../../models/enum/keyEnum";
import { FormControl, FormGroup } from "@angular/forms";
import { AbstractFormService, TypedControls } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";
import { ClassIdEnum } from "../../models/enum/classIdEnum";
import { OrderBySearchBuildEnum } from "../../models/enum/orderBySearchBuildEnum";

export interface FilterSearchBuildForm {
    class: ClassIdEnum;
    levelMin: number;
    levelMax: number;
    orderBy: OrderBySearchBuildEnum;
    PA: number;
    PM: number;
    PW: number;
    PO: number;
    CC: number;
    parade: number;
}

@Injectable({providedIn: 'root'})
export class FilterSearchBuildFormService extends AbstractFormService<FormGroup<TypedControls<FilterSearchBuildForm>>> {
    public static readonly DEFAULT_VALUE: FilterSearchBuildForm = {
        class: ClassIdEnum.Feca,
        levelMin: 200,
        levelMax: 245,
        orderBy: OrderBySearchBuildEnum.maitrises,
        PA: 0,
        PM: 0,
        PW: 0,
        PO: 0,
        CC: 0,
        parade: 0,
    };

    private readonly result = new BehaviorSubject<FilterSearchBuildForm>(FilterSearchBuildFormService.DEFAULT_VALUE);
    public readonly result$ = this.result.asObservable();

    
    protected readonly keyEnum = KeyEnum.KEY_FILTER_SEARCH_BUILD;
    public readonly form =  new FormGroup<TypedControls<FilterSearchBuildForm>>({
        class: new FormControl(FilterSearchBuildFormService.DEFAULT_VALUE.class, { nonNullable: true }),
        levelMin: new FormControl(FilterSearchBuildFormService.DEFAULT_VALUE.levelMin, { nonNullable: true }),
        levelMax: new FormControl(FilterSearchBuildFormService.DEFAULT_VALUE.levelMax, { nonNullable: true }),
        orderBy: new FormControl(FilterSearchBuildFormService.DEFAULT_VALUE.orderBy, { nonNullable: true }),
        PA: new FormControl(FilterSearchBuildFormService.DEFAULT_VALUE.PA, { nonNullable: true }),
        PM: new FormControl(FilterSearchBuildFormService.DEFAULT_VALUE.PM, { nonNullable: true }),
        PW: new FormControl(FilterSearchBuildFormService.DEFAULT_VALUE.PW, { nonNullable: true }),
        PO: new FormControl(FilterSearchBuildFormService.DEFAULT_VALUE.PO, { nonNullable: true }),
        CC: new FormControl(FilterSearchBuildFormService.DEFAULT_VALUE.CC, { nonNullable: true }),
        parade: new FormControl(FilterSearchBuildFormService.DEFAULT_VALUE.parade, { nonNullable: true }),
    });
    
    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: FilterSearchBuildForm): void {
        this.result.next(value);
    }
    
    public override setValue(value: FilterSearchBuildForm | null): void {
        this.form.setValue({
            class: value?.class ?? FilterSearchBuildFormService.DEFAULT_VALUE.class,
            levelMin: value?.levelMin ?? FilterSearchBuildFormService.DEFAULT_VALUE.levelMin,
            levelMax: value?.levelMax ?? FilterSearchBuildFormService.DEFAULT_VALUE.levelMax,
            orderBy: value?.orderBy ?? FilterSearchBuildFormService.DEFAULT_VALUE.orderBy,
            PA: value?.PA ?? FilterSearchBuildFormService.DEFAULT_VALUE.PA,
            PM: value?.PM ?? FilterSearchBuildFormService.DEFAULT_VALUE.PM,
            PW: value?.PW ?? FilterSearchBuildFormService.DEFAULT_VALUE.PW,
            PO: value?.PO ?? FilterSearchBuildFormService.DEFAULT_VALUE.PO,
            CC: value?.CC ?? FilterSearchBuildFormService.DEFAULT_VALUE.CC,
            parade: value?.parade ?? FilterSearchBuildFormService.DEFAULT_VALUE.parade,
        });
    }
    public override setDefaultValue(): void {
        this.form.setValue(FilterSearchBuildFormService.DEFAULT_VALUE);
    }
}