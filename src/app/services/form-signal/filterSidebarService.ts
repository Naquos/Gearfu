import { computed, Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface FilterSidebarModel {
    open: boolean;
}

@Injectable({ providedIn: 'root' })
export class FilterSidebarService extends AbstractSignalFormService<FilterSidebarModel> {
    public static readonly DEFAULT_VALUE = true;

    private readonly open = new BehaviorSubject<boolean>(FilterSidebarService.DEFAULT_VALUE);
    public readonly open$ = this.open.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_FILTER_SIDEBAR;
    protected readonly model = signal<FilterSidebarModel>({ open: FilterSidebarService.DEFAULT_VALUE });

    public readonly currentValue = computed(() => this.model().open);

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: FilterSidebarModel): void {
        this.open.next(value.open);
    }

    public override setValue(value: boolean | FilterSidebarModel | null): void {
        this.model.set({ open: this.normalizeStoredValue(value) });
    }

    public override setDefaultValue(): void {
        this.model.set({ open: FilterSidebarService.DEFAULT_VALUE });
    }

    public getValue(): boolean {
        return this.open.getValue();
    }

    private normalizeStoredValue(value: boolean | FilterSidebarModel | null): boolean {
        if (typeof value === 'boolean') {
            return value;
        }
        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['open'];
            if (typeof candidate === 'boolean') return candidate;
        }
        return FilterSidebarService.DEFAULT_VALUE;
    }
}
