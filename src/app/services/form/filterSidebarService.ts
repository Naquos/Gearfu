import { Injectable } from "@angular/core";
import { KeyEnum } from "../../models/enum/keyEnum";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FilterSidebarService extends AbstractFormService<FormControl<boolean>> {
    public static readonly DEFAULT_VALUE = true;

    private readonly open = new BehaviorSubject<boolean>(FilterSidebarService.DEFAULT_VALUE);
    public readonly open$ = this.open.asObservable();


    protected readonly keyEnum = KeyEnum.KEY_FILTER_SIDEBAR;
    public readonly form = new FormControl<boolean>(FilterSidebarService.DEFAULT_VALUE, { nonNullable: true });

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: boolean): void {
        this.open.next(value);
    }

    public override setValue(value: boolean | null): void {
        this.form.setValue(value ?? FilterSidebarService.DEFAULT_VALUE);
    }
    public override setDefaultValue(): void {
        this.form.setValue(FilterSidebarService.DEFAULT_VALUE);
    }

    public getValue(): boolean {
        return this.open.getValue();
    }
}