import { inject, Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { catchError, filter, of, takeUntil, tap } from "rxjs";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractDestroyService } from "../abstract/abstractDestroyService";

type FormValue<T> =
  T extends FormControl<infer V> ? V :
  T extends FormGroup<infer G> ? { [K in keyof G]: FormValue<G[K]> } :
  never;

export type TypedControls<T> = {
    [K in keyof T]: FormControl<T[K]>;
  };

@Injectable({providedIn: 'root'})
export abstract class AbstractFormService<TControl extends FormControl | FormGroup> extends AbstractDestroyService {

    protected readonly localStorageService = inject(LocalStorageService);
    public readonly abstract form: TControl;
    protected readonly abstract keyEnum: KeyEnum;

    constructor() {super();}

    protected init(): void {
        this.form.valueChanges
            .pipe(
                takeUntil(this.destroy$),
                filter(value => value !== null),
                tap(value => this.handleChanges(value)),
                tap(value => this.localStorageService.setItem<FormValue<TControl>>(this.keyEnum, value)),
                catchError(() => {
                    this.setDefaultValue();
                    return of(null);
                }))
            .subscribe()

        const value = this.localStorageService.getItem<FormValue<TControl>>(this.keyEnum);
        try {
            this.setValue(value);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_) {
            this.setDefaultValue();
        }
    }

    protected abstract handleChanges(value: FormValue<TControl>): void;
    public abstract setValue(value: FormValue<TControl> | null): void;
    public abstract setDefaultValue(): void;
}