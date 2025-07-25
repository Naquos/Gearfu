import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { ZenithApiService } from "../zenith/zenithApiService";
import { tap } from "rxjs";
import { SaveBuildService } from "../saveBuildService";

@Injectable({providedIn: 'root'})
export class ImportBuildFormService extends AbstractFormService<FormControl<string>> {
    public static readonly DEFAULT_VALUE = "";

    constructor(private readonly saveBuildService: SaveBuildService, private readonly zenithApiService: ZenithApiService, protected override readonly localStorageService: LocalStorageService) {
        super(KeyEnum.KEY_IMPORT_BUILD, localStorageService, new FormControl<string>(ImportBuildFormService.DEFAULT_VALUE, { nonNullable: true }));
            this.init();
    }

    private importBuildFromUrlGearfu(): void {
        const codeBuild = this.form.value.split("itemsId=")[1];
        if(codeBuild) {
            this.saveBuildService.addBuild({codeBuild, nameBuild: "Gearfu - Build import"});
        }
    }

    private importBuildFromUrlZenith(): void {
        const codeBuild = this.form.value.split("builder/")[1];
        if(codeBuild) {
            this.zenithApiService.getBuild(codeBuild).pipe(tap(response => {
                const ids = response.equipments.map(x => x.id_equipment);
                this.saveBuildService.addBuild(
                    {
                        codeBuild: ids.join(","),
                        nameBuild: response.name_build,
                        codeZenith: response.link_build
                    });
            })).subscribe();
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
        this.form.setValue(ImportBuildFormService.DEFAULT_VALUE);
    }

    public importBuild(): void {
        if(this.form.value.includes("Gearfu")) {
            this.importBuildFromUrlGearfu();
        } else if(this.form.value.includes("zenithwakfu")) {
            this.importBuildFromUrlZenith();
        }
    }

}