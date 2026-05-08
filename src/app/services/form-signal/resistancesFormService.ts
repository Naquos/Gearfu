import { Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { BehaviorSubject } from "rxjs";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

export interface ResistancesForm {
    feu: boolean;
    eau: boolean;
    terre: boolean;
    air: boolean;
}

@Injectable({ providedIn: 'root' })
export class ResistancesFormService extends AbstractSignalFormService<ResistancesForm> {

    private static readonly DEFAULT_VALUE: ResistancesForm = {
        feu: false, eau: false, terre: false, air: false,
    };

    private readonly idResistances = new BehaviorSubject<number[]>([]);
    public readonly idResistances$ = this.idResistances.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_RESISTANCES;
    protected readonly model = signal<ResistancesForm>({ ...ResistancesFormService.DEFAULT_VALUE });

    public readonly form = form(this.model);

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: ResistancesForm): void {
        const resultId: number[] = [];
        if (value.feu) { resultId.push(IdActionsEnum.RESISTANCES_FEU); }
        if (value.eau) { resultId.push(IdActionsEnum.RESISTANCES_EAU); }
        if (value.terre) { resultId.push(IdActionsEnum.RESISTANCES_TERRE); }
        if (value.air) { resultId.push(IdActionsEnum.RESISTANCES_AIR); }
        this.idResistances.next(resultId);
    }

    public override setValue(value: ResistancesForm | null): void {
        this.model.set({
            feu: value?.feu ?? false,
            eau: value?.eau ?? false,
            terre: value?.terre ?? false,
            air: value?.air ?? false,
        });
    }

    public override setDefaultValue(): void {
        this.model.set({ ...ResistancesFormService.DEFAULT_VALUE });
    }

    public orderResistances(): IdActionsEnum[] {
        const m = this.model();
        const entries: { key: keyof ResistancesForm; id: IdActionsEnum }[] = [
            { key: 'feu', id: IdActionsEnum.RESISTANCES_FEU },
            { key: 'eau', id: IdActionsEnum.RESISTANCES_EAU },
            { key: 'terre', id: IdActionsEnum.RESISTANCES_TERRE },
            { key: 'air', id: IdActionsEnum.RESISTANCES_AIR },
        ];
        const selected: IdActionsEnum[] = [];
        const unselected: IdActionsEnum[] = [];
        for (const { key, id } of entries) {
            if (m[key]) { selected.push(id); } else { unselected.push(id); }
        }
        return [...selected, ...unselected];
    }
}

