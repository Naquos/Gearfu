import { Injectable } from "@angular/core";
import { KeyEnum } from "../../models/enum/keyEnum";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class NameBuildFormService extends AbstractFormService<FormControl<string>> {
    public static readonly DEFAULT_VALUE = "";

    protected readonly keyEnum = KeyEnum.KEY_NAME_BUILD;
    public readonly form = new FormControl<string>(NameBuildFormService.DEFAULT_VALUE, { nonNullable: true });

    private readonly name = new BehaviorSubject<string>(NameBuildFormService.DEFAULT_VALUE);
    public readonly name$ = this.name.asObservable();


    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: string): void {
        this.name.next(value);
    }

    public override setValue(value: string | null): void {
        this.form.setValue(value ?? NameBuildFormService.DEFAULT_VALUE);
        this.name.next(this.form.value);
    }
    public override setDefaultValue(): void {
        this.form.setValue(NameBuildFormService.DEFAULT_VALUE);
        this.name.next(this.form.value);
    }

    public getName(): string {
        return this.form.value;
    }
}