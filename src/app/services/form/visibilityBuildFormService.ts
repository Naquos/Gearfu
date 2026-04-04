import { Injectable } from "@angular/core";
import { KeyEnum } from "../../models/enum/keyEnum";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class VisibilityBuildFormService extends AbstractFormService<FormControl<boolean>> {
    public static readonly DEFAULT_VALUE = false;

    protected readonly keyEnum = KeyEnum.KEY_VISIBILITY_BUILD;
    public readonly form = new FormControl<boolean>(VisibilityBuildFormService.DEFAULT_VALUE, { nonNullable: true });

    private readonly _visibilityBuild = new BehaviorSubject<boolean>(VisibilityBuildFormService.DEFAULT_VALUE);
    public readonly visibilityBuild$ = this._visibilityBuild.asObservable();

    constructor() {
        super();
        this.init();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    protected override handleChanges(_value: boolean): void { }

    public override setValue(value: boolean | null): void {
        this.form.setValue(value ?? VisibilityBuildFormService.DEFAULT_VALUE);
        this._visibilityBuild.next(this.form.value);
    }
    public override setDefaultValue(): void {
        this.form.setValue(VisibilityBuildFormService.DEFAULT_VALUE);
        this._visibilityBuild.next(VisibilityBuildFormService.DEFAULT_VALUE);
    }
    public visibilityBuild(): boolean {
        return this._visibilityBuild.getValue();
    }
}