import { inject, Injectable } from "@angular/core";
import { take, tap } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { SaveBuildService } from "../saveBuildService";
import { ItemChooseService } from "../itemChooseService";

@Injectable({providedIn: 'root'})
export class NameBuildFormService extends AbstractFormService<FormControl<string>> {
    private readonly saveBuildService = inject(SaveBuildService);
    private readonly itemChooseService = inject(ItemChooseService);

    public static readonly DEFAULT_VALUE = "";
    
    protected readonly keyEnum = KeyEnum.KEY_NAME_BUILD;
    public readonly form =  new FormControl<string>(NameBuildFormService.DEFAULT_VALUE, { nonNullable: true });
    
    constructor() {
        super();
        this.init();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    protected override handleChanges(_value: string): void {}
    
    public override setValue(value: string): void {
        this.form.setValue(value);
    }
    public override setDefaultValue(): void {
        this.form.setValue(NameBuildFormService.DEFAULT_VALUE);
    }

    public addBuild(): void {
        this.itemChooseService.idItems$.pipe(
            take(1),
            tap(ids => this.saveBuildService.addBuild({codeBuild: ids, nameBuild: this.form.value}))
        ).subscribe();
    }
}