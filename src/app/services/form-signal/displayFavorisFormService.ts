import { Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface DisplayFavorisModel {
    display: boolean;
}

@Injectable({ providedIn: 'root' })
export class DisplayFavorisFormService extends AbstractSignalFormService<DisplayFavorisModel> {
    public static readonly DEFAULT_VALUE = false;

    private readonly display = new BehaviorSubject<boolean>(DisplayFavorisFormService.DEFAULT_VALUE);
    public readonly display$ = this.display.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_DISPLAY_FAVORIS;
    protected readonly model = signal<DisplayFavorisModel>({ display: DisplayFavorisFormService.DEFAULT_VALUE });

    public readonly form = form(this.model);

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: DisplayFavorisModel): void {
        this.display.next(value.display);
    }

    public override setValue(value: boolean | DisplayFavorisModel | null): void {
        this.model.set({ display: this.normalizeStoredValue(value) });
    }

    public override setDefaultValue(): void {
        this.model.set({ display: DisplayFavorisFormService.DEFAULT_VALUE });
    }

    private normalizeStoredValue(value: boolean | DisplayFavorisModel | null): boolean {
        if (typeof value === 'boolean') {
            return value;
        }
        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['display'];
            if (typeof candidate === 'boolean') return candidate;
        }
        return DisplayFavorisFormService.DEFAULT_VALUE;
    }
}
