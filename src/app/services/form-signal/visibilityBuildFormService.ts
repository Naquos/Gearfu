import { computed, Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface VisibilityBuildModel {
    visible: boolean;
}

@Injectable({ providedIn: 'root' })
export class VisibilityBuildFormService extends AbstractSignalFormService<VisibilityBuildModel> {
    public static readonly DEFAULT_VALUE = false;

    protected readonly keyEnum = KeyEnum.KEY_VISIBILITY_BUILD;
    protected readonly model = signal<VisibilityBuildModel>({ visible: VisibilityBuildFormService.DEFAULT_VALUE });

    public readonly currentValue = computed(() => this.model().visible);

    private readonly _visibilityBuild = new BehaviorSubject<boolean>(VisibilityBuildFormService.DEFAULT_VALUE);
    public readonly visibilityBuild$ = this._visibilityBuild.asObservable();

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: VisibilityBuildModel): void {
        this._visibilityBuild.next(value.visible);
    }

    public override setValue(value: boolean | VisibilityBuildModel | null): void {
        this.model.set({ visible: this.normalizeStoredValue(value) });
    }

    public override setDefaultValue(): void {
        this.model.set({ visible: VisibilityBuildFormService.DEFAULT_VALUE });
    }

    public visibilityBuild(): boolean {
        return this._visibilityBuild.getValue();
    }

    private normalizeStoredValue(value: boolean | VisibilityBuildModel | null): boolean {
        if (typeof value === 'boolean') {
            return value;
        }
        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['visible'] ?? raw['visibilityBuild'];
            if (typeof candidate === 'boolean') return candidate;
        }
        return VisibilityBuildFormService.DEFAULT_VALUE;
    }
}
