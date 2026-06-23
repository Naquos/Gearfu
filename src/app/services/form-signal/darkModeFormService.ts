import { computed, DOCUMENT, inject, Injectable, RendererFactory2, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface DarkModeModel {
    checked: boolean;
}

@Injectable({ providedIn: 'root' })
export class DarkModeFormService extends AbstractSignalFormService<DarkModeModel> {
    public static readonly DEFAULT_VALUE = false;

    private readonly darkMode = new BehaviorSubject<boolean>(DarkModeFormService.DEFAULT_VALUE);
    public readonly darkMode$ = this.darkMode.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_ONLY_DARK_MODE;
    protected readonly model = signal<DarkModeModel>({ checked: DarkModeFormService.DEFAULT_VALUE });

    private readonly rendererFactory = inject(RendererFactory2);
    private readonly document = inject(DOCUMENT);
    private readonly renderer = this.rendererFactory.createRenderer(this.document.body, null);

    public readonly currentValue = computed(() => this.model().checked);

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: DarkModeModel): void {
        this.darkMode.next(value.checked);
        // (window as any).getElementsByTagName('html')[0].setAttribute('data-theme', value.checked ? 'dark' : 'light');
        if (value.checked) {
            this.renderer.setAttribute(this.document.documentElement, 'data-theme', 'dark');
        } else {
            this.renderer.removeAttribute(this.document.documentElement, 'data-theme');
        }
    }

    public override setValue(value: boolean | DarkModeModel | null): void {
        this.model.set({ checked: this.normalizeStoredValue(value) });
    }

    public override setDefaultValue(): void {
        this.model.set({ checked: DarkModeFormService.DEFAULT_VALUE });
    }

    private normalizeStoredValue(value: boolean | DarkModeModel | null): boolean {
        if (typeof value === 'boolean') {
            return value;
        }
        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['checked'] ?? raw['value'];
            if (typeof candidate === 'boolean') return candidate;
        }
        return DarkModeFormService.DEFAULT_VALUE;
    }
}
