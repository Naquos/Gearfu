import { computed, Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface OnlyNoElemModel {
    checked: boolean;
}

@Injectable({ providedIn: 'root' })
export class OnlyNoElemFormService extends AbstractSignalFormService<OnlyNoElemModel> {
    public static readonly DEFAULT_VALUE = false;

    private readonly onlyNoElem = new BehaviorSubject<boolean>(OnlyNoElemFormService.DEFAULT_VALUE);
    public readonly onlyNoElem$ = this.onlyNoElem.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_ONLY_NO_ELEM;
    protected readonly model = signal<OnlyNoElemModel>({ checked: OnlyNoElemFormService.DEFAULT_VALUE });

    public readonly currentValue = computed(() => this.model().checked);

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: OnlyNoElemModel): void {
        this.onlyNoElem.next(value.checked);
    }

    public override setValue(value: boolean | OnlyNoElemModel | null): void {
        this.model.set({ checked: this.normalizeStoredValue(value) });
    }

    public override setDefaultValue(): void {
        this.model.set({ checked: OnlyNoElemFormService.DEFAULT_VALUE });
    }

    private normalizeStoredValue(value: boolean | OnlyNoElemModel | null): boolean {
        if (typeof value === 'boolean') {
            return value;
        }
        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['checked'] ?? raw['value'];
            if (typeof candidate === 'boolean') return candidate;
        }
        return OnlyNoElemFormService.DEFAULT_VALUE;
    }
}
