import { inject, Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AbstractFormService } from "./abstractFormService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { ZenithApiService } from "../zenith/zenithApiService";
import { map, switchMap, tap } from "rxjs";
import { SaveBuildService } from "../saveBuildService";
import { getBuildIdFromUrl } from "../../models/utils/utils";
import { SupabaseService } from "../supabase/supabaseService";
import { Spell } from "../../models/zenith/spell";
import { ZenithService } from "../zenith/zenithService";

@Injectable({providedIn: 'root'})
export class ImportBuildFormService extends AbstractFormService<FormControl<string>> {
    private readonly saveBuildService = inject(SaveBuildService);
    private readonly zenithApiService = inject(ZenithApiService);
    private readonly zenithService = inject(ZenithService);
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
        const spellsId = spells.map(spell => spell.gfx_id);
        while(spellsId.length < size) {
            spellsId.push("0");
        }
        return spellsId.join("-");
    }

    private importBuildFromUrlZenith(): void {
        const idBuild = this.form.value.split("builder/")[1];
        if(idBuild) {
            this.zenithApiService.getBuild(idBuild).pipe(
                switchMap(build => this.zenithService.getAptitudesCodeFromBuild(idBuild)
                    .pipe(map(aptitudes => ({build, aptitudes})))),
                switchMap(({build, aptitudes}) => this.zenithService.getEnchantCodeFromBuild(build.id_build.toString())
                    .pipe(map(enchantement => ({build, aptitudes, enchantement})))),
            tap(({build, aptitudes, enchantement}) => {
                const ids = build.equipments.map(x => x.id_equipment);
                const passives = this.fillSpellsListId(build.deck.passives, 6);
                const actives = this.fillSpellsListId(build.deck.actives, 12);
                const sorts = `${actives}-${passives}`;
                this.saveBuildService.createBuild(
                    {
                        itemsId: ids.join(","),
                        nameBuild: build.name_build,
                        codeZenith: build.link_build,
                        level: build.level_build,
                        classe: build.id_job,
                        sorts,
                        aptitudes,
                        enchantement,
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