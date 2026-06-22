import { Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface DisplayFavorisSublimationModel {
    display: boolean;
}

@Injectable({ providedIn: 'root' })
export class DisplayFavorisSublimationFormService extends AbstractSignalFormService<DisplayFavorisSublimationModel> {
    public static readonly DEFAULT_VALUE = false;

    private readonly display = new BehaviorSubject<boolean>(DisplayFavorisSublimationFormService.DEFAULT_VALUE);
    public readonly display$ = this.display.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_DISPLAY_SUBLI_FAVORIS;
    protected readonly model = signal<DisplayFavorisSublimationModel>({ display: DisplayFavorisSublimationFormService.DEFAULT_VALUE });

    public readonly form = form(this.model);

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: DisplayFavorisSublimationModel): void {
        this.display.next(value.display);
    }

    public override setValue(value: boolean | DisplayFavorisSublimationModel | null): void {
        this.model.set({ display: this.normalizeStoredValue(value) });
    }

    public override setDefaultValue(): void {
        this.model.set({ display: DisplayFavorisSublimationFormService.DEFAULT_VALUE });
    }

    private normalizeStoredValue(value: boolean | DisplayFavorisSublimationModel | null): boolean {
        if (typeof value === 'boolean') {
            return value;
        }
        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['display'];
            if (typeof candidate === 'boolean') return candidate;
        }
        return DisplayFavorisSublimationFormService.DEFAULT_VALUE;
    }
}
