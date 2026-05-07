import { computed, Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface OnlyNoSecondaryModel {
    checked: boolean;
}

@Injectable({ providedIn: 'root' })
export class OnlyNoSecondaryFormService extends AbstractSignalFormService<OnlyNoSecondaryModel> {
    public static readonly DEFAULT_VALUE = false;

    private readonly onlyNoSecondary = new BehaviorSubject<boolean>(OnlyNoSecondaryFormService.DEFAULT_VALUE);
    public readonly onlyNoSecondary$ = this.onlyNoSecondary.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_ONLY_NO_SECONDARY;
    protected readonly model = signal<OnlyNoSecondaryModel>({ checked: OnlyNoSecondaryFormService.DEFAULT_VALUE });

    public readonly currentValue = computed(() => this.model().checked);

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: OnlyNoSecondaryModel): void {
        this.onlyNoSecondary.next(value.checked);
    }

    public override setValue(value: boolean | OnlyNoSecondaryModel | null): void {
        this.model.set({ checked: this.normalizeStoredValue(value) });
    }

    public override setDefaultValue(): void {
        this.model.set({ checked: OnlyNoSecondaryFormService.DEFAULT_VALUE });
    }

    private normalizeStoredValue(value: boolean | OnlyNoSecondaryModel | null): boolean {
        if (typeof value === 'boolean') {
            return value;
        }
        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['checked'] ?? raw['value'];
            if (typeof candidate === 'boolean') return candidate;
        }
        return OnlyNoSecondaryFormService.DEFAULT_VALUE;
    }
}
