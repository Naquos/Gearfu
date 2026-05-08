import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { form } from "@angular/forms/signals";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

export interface ItemLevelForm {
    levelMin: number;
    levelMax: number;
}

@Injectable({ providedIn: 'root' })
export class ItemLevelFormService extends AbstractSignalFormService<ItemLevelForm> {
    public static readonly DEFAULT_LEVEL_MIN = 200;
    public static readonly DEFAULT_LEVEL_MAX = 245;

    private readonly levelMin = new BehaviorSubject<number>(ItemLevelFormService.DEFAULT_LEVEL_MIN);
    public readonly levelMin$ = this.levelMin.asObservable();

    private readonly levelMax = new BehaviorSubject<number>(ItemLevelFormService.DEFAULT_LEVEL_MAX);
    public readonly levelMax$ = this.levelMax.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_ITEM_LEVEL;
    protected readonly model = signal<ItemLevelForm>({
        levelMin: ItemLevelFormService.DEFAULT_LEVEL_MIN,
        levelMax: ItemLevelFormService.DEFAULT_LEVEL_MAX
    });

    public readonly form = form(this.model);

    constructor() {
        super();
        this.init();
    }

    private validLevel(level: number): boolean {
        if (!level || isNaN(Number(level))) {
            return false;
        }
        return true;
    }

    protected override handleChanges(value: ItemLevelForm): void {
        this.levelMin.next(this.validLevel(value.levelMin) ? value.levelMin : ItemLevelFormService.DEFAULT_LEVEL_MIN);
        this.levelMax.next(this.validLevel(value.levelMax) ? value.levelMax : ItemLevelFormService.DEFAULT_LEVEL_MAX);
    }

    public override setValue(value: ItemLevelForm | null): void {
        const minRaw = value?.levelMin ?? ItemLevelFormService.DEFAULT_LEVEL_MIN;
        const maxRaw = value?.levelMax ?? ItemLevelFormService.DEFAULT_LEVEL_MAX;
        this.model.set({
            levelMin: this.validLevel(minRaw) ? minRaw : ItemLevelFormService.DEFAULT_LEVEL_MIN,
            levelMax: this.validLevel(maxRaw) ? maxRaw : ItemLevelFormService.DEFAULT_LEVEL_MAX
        });
    }

    public override setDefaultValue(): void {
        this.model.set({
            levelMin: ItemLevelFormService.DEFAULT_LEVEL_MIN,
            levelMax: ItemLevelFormService.DEFAULT_LEVEL_MAX
        });
    }
}
