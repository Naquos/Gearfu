import { Injectable, signal } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
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

    public readonly form = new FormGroup({
        feu: new FormControl<boolean>(false, { nonNullable: true }),
        eau: new FormControl<boolean>(false, { nonNullable: true }),
        terre: new FormControl<boolean>(false, { nonNullable: true }),
        air: new FormControl<boolean>(false, { nonNullable: true }),
    });

    constructor() {
        super();
        this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
            this.model.update(m => ({ ...m, ...(v as ResistancesForm) }));
        });
        this.init();
    }

    protected override handleChanges(value: ResistancesForm): void {
        const resultId: number[] = [];
        if (value.feu) { resultId.push(IdActionsEnum.RESISTANCES_FEU); }
        if (value.eau) { resultId.push(IdActionsEnum.RESISTANCES_EAU); }
        if (value.terre) { resultId.push(IdActionsEnum.RESISTANCES_TERRE); }
        if (value.air) { resultId.push(IdActionsEnum.RESISTANCES_AIR); }
        this.idResistances.next(resultId);
        this.form.setValue(value, { emitEvent: false });
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
        const entries: Array<{ key: keyof ResistancesForm; id: IdActionsEnum }> = [
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
