import { Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface DisplayImpactInvocationSublimationModel {
    impactInvocation: boolean;
}

@Injectable({ providedIn: 'root' })
export class DisplayImpactInvocationSublimationFormService extends AbstractSignalFormService<DisplayImpactInvocationSublimationModel> {
    public static readonly DEFAULT_VALUE = false;

    private readonly impactInvocation = new BehaviorSubject<boolean>(DisplayImpactInvocationSublimationFormService.DEFAULT_VALUE);
    public readonly impactInvocation$ = this.impactInvocation.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_IMPACT_INVOCATION_SUBLI;
    protected readonly model = signal<DisplayImpactInvocationSublimationModel>({ impactInvocation: DisplayImpactInvocationSublimationFormService.DEFAULT_VALUE });

    public readonly form = form(this.model);

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: DisplayImpactInvocationSublimationModel): void {
        this.impactInvocation.next(value.impactInvocation);
    }

    public override setValue(value: boolean | DisplayImpactInvocationSublimationModel | null): void {
        this.model.set({ impactInvocation: this.normalizeStoredValue(value) });
    }

    public override setDefaultValue(): void {
        this.model.set({ impactInvocation: DisplayImpactInvocationSublimationFormService.DEFAULT_VALUE });
    }

    private normalizeStoredValue(value: boolean | DisplayImpactInvocationSublimationModel | null): boolean {
        if (typeof value === 'boolean') {
            return value;
        }
        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['impactInvocation'];
            if (typeof candidate === 'boolean') return candidate;
        }
        return DisplayImpactInvocationSublimationFormService.DEFAULT_VALUE;
    }
}
