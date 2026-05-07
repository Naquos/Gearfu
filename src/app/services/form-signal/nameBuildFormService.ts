import { computed, Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface NameBuildModel {
    name: string;
}

@Injectable({ providedIn: 'root' })
export class NameBuildFormService extends AbstractSignalFormService<NameBuildModel> {
    public static readonly DEFAULT_VALUE = "";

    protected readonly keyEnum = KeyEnum.KEY_NAME_BUILD;
    protected readonly model = signal<NameBuildModel>({ name: NameBuildFormService.DEFAULT_VALUE });

    public readonly form = form(this.model);
    public readonly currentValue = computed(() => this.model().name);

    private readonly name = new BehaviorSubject<string>(NameBuildFormService.DEFAULT_VALUE);
    public readonly name$ = this.name.asObservable();

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: NameBuildModel): void {
        this.name.next(value.name);
    }

    public override setValue(value: string | NameBuildModel | null): void {
        this.model.set({ name: this.normalizeStoredValue(value) });
    }

    public override setDefaultValue(): void {
        this.model.set({ name: NameBuildFormService.DEFAULT_VALUE });
    }

    public getName(): string {
        return this.currentValue();
    }

    private normalizeStoredValue(value: string | NameBuildModel | null): string {
        if (typeof value === 'string') {
            return value;
        }

        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['name'] ?? raw['value'];
            if (typeof candidate === 'string') {
                return candidate;
            }
        }

        return NameBuildFormService.DEFAULT_VALUE;
    }
}
