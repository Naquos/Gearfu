import { inject, Injectable } from "@angular/core";
import { KeyEnum } from "../../models/enum/keyEnum";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { SaveBuildService } from "../saveBuildService";

@Injectable({providedIn: 'root'})
export class NameBuildFormService extends AbstractFormService<FormControl<string>> {
    private readonly saveBuildService = inject(SaveBuildService);

    public static readonly DEFAULT_VALUE = "";
    
    protected readonly keyEnum = KeyEnum.KEY_NAME_BUILD;
    public readonly form =  new FormControl<string>(NameBuildFormService.DEFAULT_VALUE, { nonNullable: true });
    
    constructor() {
        super();
        this.init();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    protected override handleChanges(_value: string): void {}
    
    public override setValue(value: string | null): void {
        this.form.setValue(value ?? NameBuildFormService.DEFAULT_VALUE);
    }
    public override setDefaultValue(): void {
        this.form.setValue(NameBuildFormService.DEFAULT_VALUE);
    }

    public addBuild(): void {
        this.saveBuildService.saveCurrentBuild(this.form.value || undefined);
    }
}