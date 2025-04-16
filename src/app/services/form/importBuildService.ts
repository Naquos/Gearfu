import { Injectable } from "@angular/core";
import { SaveBuildService } from "../saveBuildService";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { ZenithApiService } from "../zenith/zenithApiService";
import { map, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class ImportBuildService extends AbstractFormService<FormControl<string>> {
    public static readonly DEFAULT_VALUE = "";

    constructor(private saveBuildService: SaveBuildService, private zenithApiService: ZenithApiService, protected override localStorageService: LocalStorageService) {
        super(KeyEnum.KEY_IMPORT_BUILD, localStorageService, new FormControl<string>(ImportBuildService.DEFAULT_VALUE, { nonNullable: true }));
            this.init();
    }

    private importBuildFromUrlGearfu(): void {
        const build = this.form.value.split("itemsId=")[1];
        if(build) {
            this.saveBuildService.addBuild(build);
        }
    }

    private importBuildFromUrlZenith(): void {
        const build = this.form.value.split("builder/")[1];
        if(build) {
            this.zenithApiService.getBuild(build).pipe(
                map(response => response.equipments.map(x => x.id_equipment)),
                tap(ids => this.saveBuildService.addBuild(ids.join(","))),
            ).subscribe();
        }
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected override handleChanges(_value: string): void {
        // No need to handle changes here, as the value is set directly from the input field.
    }

    public override setValue(value: string): void {
        this.form.setValue(value);
    }

    public override setDefaultValue(): void {
        this.form.setValue(ImportBuildService.DEFAULT_VALUE);
    }

    public importBuild(): void {
        if(this.form.value.includes("Gearfu")) {
            this.importBuildFromUrlGearfu();
        } else if(this.form.value.includes("zenithwakfu")) {
            this.importBuildFromUrlZenith();
        }
    }

}