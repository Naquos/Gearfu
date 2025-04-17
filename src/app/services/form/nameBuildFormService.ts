import { Injectable } from "@angular/core";
import { LocalStorageService } from "../data/localStorageService";
import { take, tap } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { SaveBuildService } from "../saveBuildService";
import { ItemChooseService } from "../itemChooseService";

@Injectable({providedIn: 'root'})
export class NameBuildFormService extends AbstractFormService<FormControl<string>> {
    
    public static readonly DEFAULT_VALUE = "";
    
    constructor(protected override localStorageService: LocalStorageService,
        private saveBuildService: SaveBuildService,
        private itemChooseService: ItemChooseService) {
        super(KeyEnum.KEY_NAME_BUILD, localStorageService, new FormControl<string>(NameBuildFormService.DEFAULT_VALUE, { nonNullable: true }));
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
            tap(ids => this.saveBuildService.addBuild(ids, this.form.value))
        ).subscribe();
    }
}