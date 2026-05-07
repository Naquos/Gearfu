import { computed, Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";
import { inject } from "@angular/core";
import { ZenithApiService } from "../zenith/zenithApiService";
import { SaveBuildService } from "../saveBuildService";
import { getBuildIdFromUrl } from "../../models/utils/utils";
import { SupabaseService } from "../supabase/supabaseService";
import { Spell } from "../../models/zenith/spell";
import { ZenithService } from "../zenith/zenithService";
import { map, switchMap, tap } from "rxjs";

interface ImportBuildModel {
    url: string;
}

@Injectable({ providedIn: 'root' })
export class ImportBuildFormService extends AbstractSignalFormService<ImportBuildModel> {
    private readonly saveBuildService = inject(SaveBuildService);
    private readonly zenithApiService = inject(ZenithApiService);
    private readonly zenithService = inject(ZenithService);
    private readonly supabaseService = inject(SupabaseService);

    public static readonly DEFAULT_VALUE = "";

    protected readonly keyEnum = KeyEnum.KEY_IMPORT_BUILD;
    protected readonly model = signal<ImportBuildModel>({ url: ImportBuildFormService.DEFAULT_VALUE });

    public readonly form = form(this.model);
    public readonly currentUrl = computed(() => this.model().url);

    constructor() {
        super();
        this.init();
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected override handleChanges(_value: ImportBuildModel): void {
        // No side effects needed on change
    }

    public override setValue(value: string | ImportBuildModel | null): void {
        this.model.set({ url: this.normalizeStoredValue(value) });
    }

    public override setDefaultValue(): void {
        this.model.set({ url: ImportBuildFormService.DEFAULT_VALUE });
    }

    private normalizeStoredValue(value: string | ImportBuildModel | null): string {
        if (typeof value === 'string') {
            return value;
        }
        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['url'] ?? raw['value'];
            if (typeof candidate === 'string') return candidate;
        }
        return ImportBuildFormService.DEFAULT_VALUE;
    }

    private importBuildFromUrlGearfu(): void {
        const buildId = getBuildIdFromUrl(this.currentUrl());
        if (buildId) {
            this.supabaseService.getBuildById(buildId).pipe(tap(build => {
                if (build) {
                    this.saveBuildService.addBuildToLocalStorage(build);
                }
            })).subscribe();
        }
    }

    private fillSpellsListId(spells: Spell[], size: number): string {
        const spellsId = spells.map(spell => spell.gfx_id);
        while (spellsId.length < size) {
            spellsId.push("0");
        }
        return spellsId.slice(0, size).join("-");
    }

    private importBuildFromUrlZenith(): void {
        const currentUrl = this.currentUrl();
        const idBuild = currentUrl.split("builder/")[1];
        if (idBuild) {
            this.zenithApiService.getBuild(idBuild).pipe(
                switchMap(build => this.zenithService.getAptitudesCodeFromBuild(idBuild)
                    .pipe(map(aptitudes => ({ build, aptitudes })))),
                switchMap(({ build, aptitudes }) => this.zenithService.getEnchantCodeFromBuild(build.id_build.toString())
                    .pipe(map(enchantement => ({ build, aptitudes, enchantement })))),
                tap(({ build, aptitudes, enchantement }) => {
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
                            token: this.localStorageService.getItem(KeyEnum.KEY_TOKEN) ?? undefined
                        });
                })).subscribe();
        }
    }

    public importBuild(): void {
        const url = this.currentUrl();
        if (url.includes("Gearfu")) {
            this.importBuildFromUrlGearfu();
        } else if (url.includes("zenithwakfu")) {
            this.importBuildFromUrlZenith();
        }
    }
}
