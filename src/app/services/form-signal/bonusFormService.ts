import { inject, Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { BehaviorSubject, takeUntil } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { RecapStats } from "../../models/data/recap-stats";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { LevelFormService } from "./levelFormService";
import { AbstractSignalFormService } from "./abstractSignalFormService";

export interface BonusForm {
    dragodinde: boolean;
    guilde: boolean;
}

@Injectable({ providedIn: 'root' })
export class BonusFormService extends AbstractSignalFormService<BonusForm> {

    public static readonly DEFAULT_VALUE: BonusForm = {
        dragodinde: false,
        guilde: false,
    };

    private readonly recapStats = new BehaviorSubject<RecapStats[]>([]);
    public readonly recapStats$ = this.recapStats.asObservable();

    private readonly levelFormService = inject(LevelFormService);

    protected readonly keyEnum = KeyEnum.KEY_BONUS;
    protected readonly model = signal<BonusForm>({ ...BonusFormService.DEFAULT_VALUE });

    public readonly form = form(this.model);

    constructor() {
        super();
        this.init();
        this.levelFormService.level$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.handleChanges(this.model());
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

    public override setValue(value: BonusForm | null): void {
        this.model.set({
            dragodinde: value?.dragodinde ?? BonusFormService.DEFAULT_VALUE.dragodinde,
            guilde: value?.guilde ?? BonusFormService.DEFAULT_VALUE.guilde,
        });
    }

    public override setDefaultValue(): void {
        this.model.set({ ...BonusFormService.DEFAULT_VALUE });
    }
}
