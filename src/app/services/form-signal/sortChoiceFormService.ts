import { computed, Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { BehaviorSubject } from "rxjs";
import { SortChoiceEnum } from "../../models/enum/sortChoiceEnum";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface SortChoiceModel {
    sortChoice: SortChoiceEnum;
}

@Injectable({ providedIn: 'root' })
export class SortChoiceFormService extends AbstractSignalFormService<SortChoiceModel> {

    public static readonly DEFAULT_VALUE = SortChoiceEnum.MAITRISES;

    private readonly sort = new BehaviorSubject<SortChoiceEnum>(SortChoiceFormService.DEFAULT_VALUE);
    public readonly sort$ = this.sort.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_SORT_CHOICE;
    protected readonly model = signal<SortChoiceModel>({ sortChoice: SortChoiceFormService.DEFAULT_VALUE });

    public readonly form = form(this.model);
    public readonly currentValue = computed(() => this.model().sortChoice);

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: SortChoiceModel): void {
        this.sort.next(value.sortChoice);
    }

    public override setValue(value: SortChoiceEnum | SortChoiceModel | null): void {
        this.model.set({ sortChoice: this.normalizeStoredValue(value) });
    }

    public setDefaultValue(): void {
        this.model.set({ sortChoice: SortChoiceFormService.DEFAULT_VALUE });
    }

    private normalizeStoredValue(value: SortChoiceEnum | SortChoiceModel | null): SortChoiceEnum {
        if (typeof value === 'string' && Object.values(SortChoiceEnum).includes(value as SortChoiceEnum)) {
            return value as SortChoiceEnum;
        }

        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['sortChoice'] ?? raw['value'];
            if (typeof candidate === 'string' && Object.values(SortChoiceEnum).includes(candidate as SortChoiceEnum)) {
                return candidate as SortChoiceEnum;
            }
        }

        return SortChoiceFormService.DEFAULT_VALUE;
    }
}
