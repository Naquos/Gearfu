import { Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";
import { ClassIdEnum } from "../../models/enum/classIdEnum";
import { OrderBySearchBuildEnum } from "../../models/enum/orderBySearchBuildEnum";

export interface FilterSearchBuildForm {
    class: ClassIdEnum | null;
    name: string;
    levelMin: number;
    levelMax: number;
    orderBy: OrderBySearchBuildEnum;
    PA: number;
    PM: number;
    PW: number;
    PO: number;
    CC: number;
    parade: number;
    sublimationEpique: string;
    sublimationRelique: string;
    sublimations: string[];
    idItems: string[][];
}

@Injectable({ providedIn: 'root' })
export class FilterSearchBuildFormService extends AbstractSignalFormService<FilterSearchBuildForm> {
    public static readonly DEFAULT_VALUE: FilterSearchBuildForm = {
        class: null,
        name: '',
        levelMin: 200,
        levelMax: 245,
        orderBy: OrderBySearchBuildEnum.maitrises,
        PA: 0,
        PM: 0,
        PW: 0,
        PO: 0,
        CC: 0,
        parade: 0,
        sublimationEpique: '',
        sublimationRelique: '',
        sublimations: [],
        idItems: []
    };

    private readonly result = new BehaviorSubject<FilterSearchBuildForm>(FilterSearchBuildFormService.DEFAULT_VALUE);
    public readonly result$ = this.result.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_FILTER_SEARCH_BUILD;
    protected readonly model = signal<FilterSearchBuildForm>({ ...FilterSearchBuildFormService.DEFAULT_VALUE });

    public readonly form = form(this.model);

    public get value(): FilterSearchBuildForm { return this.model(); }

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: FilterSearchBuildForm): void {
        this.result.next(value);
    }

    public override setValue(value: FilterSearchBuildForm | null): void {
        this.model.set({
            class: value?.class ?? FilterSearchBuildFormService.DEFAULT_VALUE.class,
            name: value?.name ?? FilterSearchBuildFormService.DEFAULT_VALUE.name,
            levelMin: value?.levelMin ?? FilterSearchBuildFormService.DEFAULT_VALUE.levelMin,
            levelMax: value?.levelMax ?? FilterSearchBuildFormService.DEFAULT_VALUE.levelMax,
            orderBy: value?.orderBy ?? FilterSearchBuildFormService.DEFAULT_VALUE.orderBy,
            PA: value?.PA ?? FilterSearchBuildFormService.DEFAULT_VALUE.PA,
            PM: value?.PM ?? FilterSearchBuildFormService.DEFAULT_VALUE.PM,
            PW: value?.PW ?? FilterSearchBuildFormService.DEFAULT_VALUE.PW,
            PO: value?.PO ?? FilterSearchBuildFormService.DEFAULT_VALUE.PO,
            CC: value?.CC ?? FilterSearchBuildFormService.DEFAULT_VALUE.CC,
            parade: value?.parade ?? FilterSearchBuildFormService.DEFAULT_VALUE.parade,
            sublimationEpique: FilterSearchBuildFormService.DEFAULT_VALUE.sublimationEpique,
            sublimationRelique: FilterSearchBuildFormService.DEFAULT_VALUE.sublimationRelique,
            sublimations: value?.sublimations ?? FilterSearchBuildFormService.DEFAULT_VALUE.sublimations,
            idItems: value?.idItems ?? FilterSearchBuildFormService.DEFAULT_VALUE.idItems,
        });
    }

    public override setDefaultValue(): void {
        this.model.set({ ...FilterSearchBuildFormService.DEFAULT_VALUE });
    }
}
