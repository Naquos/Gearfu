import { Injectable, signal, inject, computed } from "@angular/core";
import { SaveBuildService } from '../saveBuildService';
import { BehaviorSubject } from "rxjs";
import { form } from "@angular/forms/signals";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";
import { toSignal } from '@angular/core/rxjs-interop';
import { ClassIdEnum } from "../../models/enum/classIdEnum";

export interface MyBuildsForm {
    levelMin: string;
    levelMax: string;
    name: string;
    class: number;
}

@Injectable({ providedIn: 'root' })
export class MyBuildsFormService extends AbstractSignalFormService<MyBuildsForm> {
    private readonly saveBuildService = inject(SaveBuildService);

    public static readonly DEFAULT_LEVEL_MIN = 0;
    public static readonly DEFAULT_LEVEL_MAX = 245;
    private static readonly DEFAULT_LEVEL_MIN_STRING = String(MyBuildsFormService.DEFAULT_LEVEL_MIN);
    private static readonly DEFAULT_LEVEL_MAX_STRING = String(MyBuildsFormService.DEFAULT_LEVEL_MAX);
    public static readonly DEFAULT_NAME = '';
    public static readonly DEFAULT_CLASS = 0;

    private readonly levelMin = new BehaviorSubject<number>(MyBuildsFormService.DEFAULT_LEVEL_MIN);
    public readonly levelMin$ = this.levelMin.asObservable();

    private readonly levelMax = new BehaviorSubject<number>(MyBuildsFormService.DEFAULT_LEVEL_MAX);
    public readonly levelMax$ = this.levelMax.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_MY_BUILDS;
    protected readonly model = signal<MyBuildsForm>({
        levelMin: MyBuildsFormService.DEFAULT_LEVEL_MIN_STRING,
        levelMax: MyBuildsFormService.DEFAULT_LEVEL_MAX_STRING,
        name: MyBuildsFormService.DEFAULT_NAME,
        class: MyBuildsFormService.DEFAULT_CLASS
    });

    public readonly form = form(this.model);

    protected readonly buildsList = toSignal(this.saveBuildService.buildList$, { initialValue: [] });

    public readonly buildList = computed(() => {
        const formValue = this.form().value;
        const buildList = this.buildsList();

        return buildList.filter(build => {
            const levelMin = this.parseLevel(formValue().levelMin, MyBuildsFormService.DEFAULT_LEVEL_MIN);
            const levelMax = this.parseLevel(formValue().levelMax, MyBuildsFormService.DEFAULT_LEVEL_MAX);
            const buildLevel = this.parseLevel(build.level, MyBuildsFormService.DEFAULT_LEVEL_MIN);
            return buildLevel >= levelMin && buildLevel <= levelMax;
        }).filter(build => {
            const name = formValue().name.toLowerCase();
            return build.nameBuild?.toLowerCase().includes(name);
        }).filter(build => {
            const classId = formValue().class;
            return classId === 0 || build.classe === classId;
        });
    });


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

    protected override handleChanges(value: MyBuildsForm): void {
        this.levelMin.next(this.parseLevel(value.levelMin, MyBuildsFormService.DEFAULT_LEVEL_MIN));
        this.levelMax.next(this.parseLevel(value.levelMax, MyBuildsFormService.DEFAULT_LEVEL_MAX));
    }

    public override setValue(value: MyBuildsForm | null): void {
        const raw = value as unknown;
        const minRaw = typeof raw === 'object' && raw !== null && 'levelMin' in raw
            ? (raw as { levelMin?: unknown }).levelMin
            : undefined;
        const maxRaw = typeof raw === 'object' && raw !== null && 'levelMax' in raw
            ? (raw as { levelMax?: unknown }).levelMax
            : undefined;

        this.model.set({
            levelMin: this.normalizeStoredLevel(minRaw, MyBuildsFormService.DEFAULT_LEVEL_MIN_STRING),
            levelMax: this.normalizeStoredLevel(maxRaw, MyBuildsFormService.DEFAULT_LEVEL_MAX_STRING),
            name: value?.name ?? MyBuildsFormService.DEFAULT_NAME,
            class: value?.class ?? MyBuildsFormService.DEFAULT_CLASS
        });
    }

    public override setDefaultValue(): void {
        this.model.set({
            levelMin: MyBuildsFormService.DEFAULT_LEVEL_MIN_STRING,
            levelMax: MyBuildsFormService.DEFAULT_LEVEL_MAX_STRING,
            name: MyBuildsFormService.DEFAULT_NAME,
            class: MyBuildsFormService.DEFAULT_CLASS
        });
    }

    public setNameDefault(): void {
        this.model.set({
            ...this.model(),
            name: MyBuildsFormService.DEFAULT_NAME
        });
    }

    public changeClasses(idClass: ClassIdEnum): void {
        const current = this.form.class().value();
        this.form.class().value.set(current === idClass ? MyBuildsFormService.DEFAULT_CLASS : idClass);
    }
}
