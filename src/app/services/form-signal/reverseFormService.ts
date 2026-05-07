import { Injectable, signal } from "@angular/core";
import { FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface ReverseModel {
    reverse: boolean;
}

@Injectable({ providedIn: 'root' })
export class ReverseFormService extends AbstractSignalFormService<ReverseModel> {
    public static readonly DEFAULT_VALUE = false;

    private readonly reverse = new BehaviorSubject<boolean>(ReverseFormService.DEFAULT_VALUE);
    public readonly reverse$ = this.reverse.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_REVERSE;
    protected readonly model = signal<ReverseModel>({ reverse: ReverseFormService.DEFAULT_VALUE });

    // Bridge FormControl for backward compatibility with ButtonCheckboxComponent
    public readonly form = new FormControl<boolean>(ReverseFormService.DEFAULT_VALUE, { nonNullable: true });

    constructor() {
        super();
        // Sync FormControl → model (user interaction from ButtonCheckboxComponent)
        this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(val => {
            this.model.update(m => ({ ...m, reverse: val }));
        });
        this.init();
    }

    protected override handleChanges(value: ReverseModel): void {
        this.reverse.next(value.reverse);
        // Sync model → FormControl (emitEvent: false to break circular update)
        this.form.setValue(value.reverse, { emitEvent: false });
    }

    public override setValue(value: boolean | ReverseModel | null): void {
        this.model.set({ reverse: this.normalizeStoredValue(value) });
    }

    public override setDefaultValue(): void {
        this.model.set({ reverse: ReverseFormService.DEFAULT_VALUE });
    }

    private normalizeStoredValue(value: boolean | ReverseModel | null): boolean {
        if (typeof value === 'boolean') {
            return value;
        }
        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['reverse'];
            if (typeof candidate === 'boolean') return candidate;
        }
        return ReverseFormService.DEFAULT_VALUE;
    }
}
