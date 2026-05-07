import { computed, Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface LevelModel {
    level: string;
}

@Injectable({ providedIn: 'root' })
export class LevelFormService extends AbstractSignalFormService<LevelModel> {
    public static readonly DEFAULT_VALUE = 200;
    private static readonly DEFAULT_STR = String(LevelFormService.DEFAULT_VALUE);

    private readonly level = new BehaviorSubject<number>(LevelFormService.DEFAULT_VALUE);
    public readonly level$ = this.level.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_LEVEL;
    protected readonly model = signal<LevelModel>({ level: LevelFormService.DEFAULT_STR });

    public readonly form = form(this.model);
    public readonly currentValue = computed(() => this.model().level);

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: LevelModel): void {
        const parsed = parseInt(value.level, 10);
        this.level.next(isNaN(parsed) ? LevelFormService.DEFAULT_VALUE : parsed);
    }

    public override setValue(value: number | string | LevelModel | null): void {
        this.model.set({ level: this.normalizeStoredValue(value) });
    }

    public override setDefaultValue(): void {
        this.model.set({ level: LevelFormService.DEFAULT_STR });
    }

    public getValue(): number {
        return this.level.getValue();
    }

    private normalizeStoredValue(value: number | string | LevelModel | null): string {
        if (typeof value === 'number') {
            return String(value);
        }

        if (typeof value === 'string') {
            return value;
        }

        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['level'] ?? raw['value'];
            if (typeof candidate === 'number') return String(candidate);
            if (typeof candidate === 'string') return candidate;
        }

        return LevelFormService.DEFAULT_STR;
    }
}
