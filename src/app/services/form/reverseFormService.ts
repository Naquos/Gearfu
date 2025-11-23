import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ReverseFormService extends AbstractFormService<FormControl<boolean>> {
    public static readonly DEFAULT_VALUE = false;
    private readonly reverse = new BehaviorSubject<boolean>(ReverseFormService.DEFAULT_VALUE);
    public readonly reverse$ = this.reverse.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_REVERSE;
    public readonly form =  new FormControl<boolean>(ReverseFormService.DEFAULT_VALUE, { nonNullable: true });

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: boolean): void {
        this.reverse.next(value ?? ReverseFormService.DEFAULT_VALUE);
    }
    public override setValue(value: boolean | null): void {
        this.form.setValue(value ?? ReverseFormService.DEFAULT_VALUE);
    }
    public override setDefaultValue(): void {
        this.form.setValue(ReverseFormService.DEFAULT_VALUE);
    }
}