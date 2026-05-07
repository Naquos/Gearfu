import { computed, Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { BehaviorSubject } from "rxjs";
import { Mecanism } from "../../models/enum/ElemMaitrisesMecanismEnum";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

interface ModifierMecanismModel {
    mecanisms: string[];
}

@Injectable({ providedIn: 'root' })
export class ModifierMecanismFormService extends AbstractSignalFormService<ModifierMecanismModel> {

    public static readonly DEFAULT_VALUE: string[] = [];

    private readonly multiplicateurElem = new BehaviorSubject<number>(1);
    public readonly multiplicateurElem$ = this.multiplicateurElem.asObservable();

    private readonly denouement = new BehaviorSubject<boolean>(false);
    public readonly denouement$ = this.denouement.asObservable();

    private readonly demesure = new BehaviorSubject<boolean>(false);
    public readonly demesure$ = this.demesure.asObservable();

    private readonly chaos = new BehaviorSubject<boolean>(false);
    public readonly chaos$ = this.chaos.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_MODIFIER_MECANISM;
    protected readonly model = signal<ModifierMecanismModel>({ mecanisms: [...ModifierMecanismFormService.DEFAULT_VALUE] });

    public readonly form = form(this.model);
    public readonly selectedValues = computed(() => this.model().mecanisms);

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: ModifierMecanismModel): void {
        const selectedMecanisms = value.mecanisms;
        let result = 1;
        if (selectedMecanisms?.includes(Mecanism.COEUR_HUPPERMAGE.valueOf())) {
            result *= 1.2;
        }
        this.multiplicateurElem.next(result);

        this.denouement.next(selectedMecanisms?.includes(Mecanism.DENOUEMENT.valueOf()) ?? false);
        this.demesure.next(selectedMecanisms?.includes(Mecanism.DEMESURE.valueOf()) ?? false);
        this.chaos.next(selectedMecanisms?.includes(Mecanism.CHAOS.valueOf()) ?? false);
    }

    public override setValue(value: string[] | ModifierMecanismModel | null): void {
        this.model.set({ mecanisms: this.normalizeStoredValue(value) });
    }

    public setDefaultValue(): void {
        this.model.set({ mecanisms: [...ModifierMecanismFormService.DEFAULT_VALUE] });
    }

    private normalizeStoredValue(value: string[] | ModifierMecanismModel | null): string[] {
        if (Array.isArray(value)) {
            return [...value];
        }

        if (value && typeof value === 'object') {
            const raw = value as unknown as Record<string, unknown>;
            const candidate = raw['mecanisms'] ?? raw['value'];
            if (Array.isArray(candidate)) {
                return candidate.filter((item): item is string => typeof item === 'string');
            }
        }

        return [...ModifierMecanismFormService.DEFAULT_VALUE];
    }
}
