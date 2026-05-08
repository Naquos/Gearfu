import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { form } from "@angular/forms/signals";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

export interface ItemLevelForm {
    levelMin: string;
    levelMax: string;
}

@Injectable({ providedIn: 'root' })
export class ItemLevelFormService extends AbstractSignalFormService<ItemLevelForm> {
    public static readonly DEFAULT_LEVEL_MIN = 200;
    public static readonly DEFAULT_LEVEL_MAX = 245;
    private static readonly DEFAULT_LEVEL_MIN_STRING = String(ItemLevelFormService.DEFAULT_LEVEL_MIN);
    private static readonly DEFAULT_LEVEL_MAX_STRING = String(ItemLevelFormService.DEFAULT_LEVEL_MAX);

    private readonly levelMin = new BehaviorSubject<number>(ItemLevelFormService.DEFAULT_LEVEL_MIN);
    public readonly levelMin$ = this.levelMin.asObservable();

    private readonly levelMax = new BehaviorSubject<number>(ItemLevelFormService.DEFAULT_LEVEL_MAX);
    public readonly levelMax$ = this.levelMax.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_ITEM_LEVEL;
    protected readonly model = signal<ItemLevelForm>({
        levelMin: ItemLevelFormService.DEFAULT_LEVEL_MIN_STRING,
        levelMax: ItemLevelFormService.DEFAULT_LEVEL_MAX_STRING
    });

    public readonly form = form(this.model);

    constructor() {
        super();
        this.init();
    }

    private parseLevel(value: unknown, fallback: number): number {
        const levelNumber = Number(value);
        if (!levelNumber || Number.isNaN(levelNumber)) {
            return fallback;
        }
        return levelNumber;
    }

    private normalizeStoredLevel(value: unknown, fallback: string): string {
        if (typeof value === 'string') {
            return value;
        }

        if (typeof value === 'number' && !Number.isNaN(value)) {
            return String(value);
        }

        return fallback;
    }

    protected override handleChanges(value: ItemLevelForm): void {
        this.levelMin.next(this.parseLevel(value.levelMin, ItemLevelFormService.DEFAULT_LEVEL_MIN));
        this.levelMax.next(this.parseLevel(value.levelMax, ItemLevelFormService.DEFAULT_LEVEL_MAX));
    }

    public override setValue(value: ItemLevelForm | null): void {
        const raw = value as unknown;
        const minRaw = typeof raw === 'object' && raw !== null && 'levelMin' in raw
            ? (raw as { levelMin?: unknown }).levelMin
            : undefined;
        const maxRaw = typeof raw === 'object' && raw !== null && 'levelMax' in raw
            ? (raw as { levelMax?: unknown }).levelMax
            : undefined;

        this.model.set({
            levelMin: this.normalizeStoredLevel(minRaw, ItemLevelFormService.DEFAULT_LEVEL_MIN_STRING),
            levelMax: this.normalizeStoredLevel(maxRaw, ItemLevelFormService.DEFAULT_LEVEL_MAX_STRING)
        });
    }

    public override setDefaultValue(): void {
        this.model.set({
            levelMin: ItemLevelFormService.DEFAULT_LEVEL_MIN_STRING,
            levelMax: ItemLevelFormService.DEFAULT_LEVEL_MAX_STRING
        });
    }
}
