import { inject, Injectable, WritableSignal, effect } from "@angular/core";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractDestroyService } from "../abstract/abstractDestroyService";

@Injectable({ providedIn: 'root' })
export abstract class AbstractSignalFormService<T extends object> extends AbstractDestroyService {

    protected readonly localStorageService = inject(LocalStorageService);
    protected abstract readonly model: WritableSignal<T>;
    protected abstract readonly keyEnum: KeyEnum;

    constructor() { super(); }

    protected init(): void {
        effect(() => {
            const value = this.model();
            try {
                this.handleChanges(value);
                this.localStorageService.setItem<T>(this.keyEnum, value);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (_) {
                this.setDefaultValue();
            }
        });

        const saved = this.localStorageService.getItem<T>(this.keyEnum);
        try {
            this.setValue(saved);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_) {
            this.setDefaultValue();
        }
    }

    protected abstract handleChanges(value: T): void;
    public abstract setValue(value: T | null): void;
    public abstract setDefaultValue(): void;
}
