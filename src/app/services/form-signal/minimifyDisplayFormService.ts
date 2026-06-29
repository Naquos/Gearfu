import { Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface MinimifyDisplayFormModel {
    minimify: boolean;
}

@Injectable({ providedIn: 'root' })
export class MinimifyDisplayFormService extends AbstractSignalFormService<MinimifyDisplayFormModel> {
    public static readonly DEFAULT_VALUE = false;

    private readonly minimify = new BehaviorSubject<boolean>(MinimifyDisplayFormService.DEFAULT_VALUE);
    public readonly minimify$ = this.minimify.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_MINIMIFY;
    protected readonly model = signal<MinimifyDisplayFormModel>({ minimify: MinimifyDisplayFormService.DEFAULT_VALUE });

    public readonly form = form(this.model);

    constructor() {
        super();
        this.init();
    }

    public currentValue(): boolean {
        return this.model().minimify;
    }

    protected override handleChanges(value: MinimifyDisplayFormModel): void {
        this.minimify.next(value.minimify);
    }

    public override setValue(value: boolean | MinimifyDisplayFormModel | null): void {
        this.model.set({ minimify: this.normalizeStoredValue(value) });
    }

    public override setDefaultValue(): void {
        this.model.set({ minimify: MinimifyDisplayFormService.DEFAULT_VALUE });
    }

    private normalizeStoredValue(value: boolean | MinimifyDisplayFormModel | null): boolean {
        if (typeof value === 'boolean') {
            return value;
        }
        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['minimify'];
            if (typeof candidate === 'boolean') return candidate;
        }
        return MinimifyDisplayFormService.DEFAULT_VALUE;
    }
}
