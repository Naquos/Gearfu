import { inject, Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { ZenithApiService } from "../zenith/zenithApiService";
import { tap } from "rxjs";
import { SaveBuildService } from "../saveBuildService";
import { getBuildIdFromUrl } from "../../models/utils/utils";
import { SupabaseService } from "../supabase/supabaseService";
import { Spell } from "../../models/zenith/spell";

@Injectable({providedIn: 'root'})
export class ImportBuildFormService extends AbstractFormService<FormControl<string>> {
    private readonly saveBuildService = inject(SaveBuildService);
    private readonly zenithApiService = inject(ZenithApiService);
    private readonly supabaseService = inject(SupabaseService);
    public static readonly DEFAULT_VALUE = "";
    
    public readonly form = new FormControl<string>(ImportBuildFormService.DEFAULT_VALUE, { nonNullable: true });
    protected readonly keyEnum = KeyEnum.KEY_IMPORT_BUILD;

    constructor() {
        super();
        this.init();
    }

    private importBuildFromUrlGearfu(): void {
        const buildId = getBuildIdFromUrl(this.form.value);
        if(buildId) {
            this.supabaseService.getBuildById(buildId).pipe(tap(build => {
                if(build) {
                    this.saveBuildService.addBuildToLocalStorage(build);
                }
            })).subscribe();
        }
    }

    /**
     * Retourne un string contenant les id des sorts
     * @param spells 
     * @param size 
     * @returns 
     */
    private fillSpellsListId(spells: Spell[], size: number): string {
        const spellsId = spells.map(spell => spell.id_spell);
        while(spellsId.length < size) {
            spellsId.push(0);
        }
        return spellsId.join("-");
    }

    private importBuildFromUrlZenith(): void {
        const itemsId = this.form.value.split("builder/")[1];
        if(itemsId) {
            this.zenithApiService.getBuild(itemsId).pipe(tap(response => {
                const ids = response.equipments.map(x => x.id_equipment);
                const passives = this.fillSpellsListId(response.deck.passives, 6);
                const actives = this.fillSpellsListId(response.deck.actives, 12);
                const sorts = `${passives}-${actives}`;
                this.saveBuildService.createBuild(
                    {
                        itemsId: ids.join(","),
                        nameBuild: response.name_build,
                        codeZenith: response.link_build,
                        level: response.level_build,
                        classe: response.id_job,
                        sorts
                    });
            })).subscribe();
        }
    }
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected override handleChanges(_value: string): void {
        // No need to handle changes here, as the value is set directly from the input field.
    }

    public override setValue(value: string | null): void {
        this.form.setValue(value ?? ImportBuildFormService.DEFAULT_VALUE);
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