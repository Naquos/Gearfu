import { Injectable, signal } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

export interface MaitrisesForm {
    feu: boolean;
    eau: boolean;
    terre: boolean;
    air: boolean;
    critique: boolean;
    dos: boolean;
    melee: boolean;
    distance: boolean;
    soin: boolean;
    berzerk: boolean;
}

@Injectable({ providedIn: 'root' })
export class MaitrisesFormService extends AbstractSignalFormService<MaitrisesForm> {

    private static readonly DEFAULT_VALUE: MaitrisesForm = {
        feu: false, eau: false, terre: false, air: false,
        critique: false, dos: false, melee: false, distance: false,
        soin: false, berzerk: false,
    };

    private readonly nbElements = new BehaviorSubject<number>(0);
    public readonly nbElements$ = this.nbElements.asObservable();

    private readonly idMaitrises = new BehaviorSubject<number[]>([]);
    public readonly idMaitrises$ = this.idMaitrises.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_MAITRISES;
    protected readonly model = signal<MaitrisesForm>({ ...MaitrisesFormService.DEFAULT_VALUE });

    public readonly form = new FormGroup({
        feu: new FormControl<boolean>(false, { nonNullable: true }),
        eau: new FormControl<boolean>(false, { nonNullable: true }),
        terre: new FormControl<boolean>(false, { nonNullable: true }),
        air: new FormControl<boolean>(false, { nonNullable: true }),
        critique: new FormControl<boolean>(false, { nonNullable: true }),
        dos: new FormControl<boolean>(false, { nonNullable: true }),
        melee: new FormControl<boolean>(false, { nonNullable: true }),
        distance: new FormControl<boolean>(false, { nonNullable: true }),
        soin: new FormControl<boolean>(false, { nonNullable: true }),
        berzerk: new FormControl<boolean>(false, { nonNullable: true }),
    });

    constructor() {
        super();
        this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
            this.model.update(m => ({ ...m, ...(v as MaitrisesForm) }));
        });
        this.init();
    }

    protected override handleChanges(value: MaitrisesForm): void {
        let nbElem = 0;
        const resultId: IdActionsEnum[] = [];

        if (value.feu) { nbElem++; resultId.push(IdActionsEnum.MAITRISES_FEU); }
        if (value.eau) { nbElem++; resultId.push(IdActionsEnum.MAITRISES_EAU); }
        if (value.terre) { nbElem++; resultId.push(IdActionsEnum.MAITRISES_TERRE); }
        if (value.air) { nbElem++; resultId.push(IdActionsEnum.MAITRISES_AIR); }
        this.nbElements.next(nbElem);

        if (value.critique) { resultId.push(IdActionsEnum.MAITRISES_CRITIQUES); }
        if (value.dos) { resultId.push(IdActionsEnum.MAITRISES_DOS); }
        if (value.melee) { resultId.push(IdActionsEnum.MAITRISES_MELEE); }
        if (value.distance) { resultId.push(IdActionsEnum.MAITRISES_DISTANCES); }
        if (value.soin) { resultId.push(IdActionsEnum.MAITRISES_SOIN); }
        if (value.berzerk) { resultId.push(IdActionsEnum.MAITRISES_BERZERK); }
        this.idMaitrises.next(resultId);

        this.form.setValue(value, { emitEvent: false });
    }

    public override setValue(value: MaitrisesForm | null): void {
        this.model.set({
            feu: value?.feu ?? false,
            eau: value?.eau ?? false,
            terre: value?.terre ?? false,
            air: value?.air ?? false,
            critique: value?.critique ?? false,
            dos: value?.dos ?? false,
            melee: value?.melee ?? false,
            distance: value?.distance ?? false,
            soin: value?.soin ?? false,
            berzerk: value?.berzerk ?? false,
        });
    }

    public override setDefaultValue(): void {
        this.setMaitrises();
    }

    public setMaitrises(...maitrises: IdActionsEnum[]): void {
        this.model.set({
            feu: maitrises.includes(IdActionsEnum.MAITRISES_FEU),
            eau: maitrises.includes(IdActionsEnum.MAITRISES_EAU),
            terre: maitrises.includes(IdActionsEnum.MAITRISES_TERRE),
            air: maitrises.includes(IdActionsEnum.MAITRISES_AIR),
            critique: maitrises.includes(IdActionsEnum.MAITRISES_CRITIQUES),
            dos: maitrises.includes(IdActionsEnum.MAITRISES_DOS),
            melee: maitrises.includes(IdActionsEnum.MAITRISES_MELEE),
            distance: maitrises.includes(IdActionsEnum.MAITRISES_DISTANCES),
            soin: maitrises.includes(IdActionsEnum.MAITRISES_SOIN),
            berzerk: maitrises.includes(IdActionsEnum.MAITRISES_BERZERK),
        });
    }

    public orderMaitrises(): IdActionsEnum[] {
        const m = this.model();
        const entries: Array<{ key: keyof MaitrisesForm; id: IdActionsEnum }> = [
            { key: 'feu', id: IdActionsEnum.MAITRISES_FEU },
            { key: 'eau', id: IdActionsEnum.MAITRISES_EAU },
            { key: 'terre', id: IdActionsEnum.MAITRISES_TERRE },
            { key: 'air', id: IdActionsEnum.MAITRISES_AIR },
        ];
        const selected: IdActionsEnum[] = [];
        const unselected: IdActionsEnum[] = [];
        for (const { key, id } of entries) {
            if (m[key]) { selected.push(id); } else { unselected.push(id); }
        }
        return [...selected, ...unselected];
    }
}
