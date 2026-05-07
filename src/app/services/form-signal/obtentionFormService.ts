import { Injectable, signal } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

export interface ObtentionForm {
    DROP: boolean;
    CRAFTABLE: boolean;
    BOSS: boolean;
    ARCHI: boolean;
    PVP: boolean;
}

@Injectable({ providedIn: 'root' })
export class ObtentionFormService extends AbstractSignalFormService<ObtentionForm> {

    private static readonly DEFAULT_VALUE: ObtentionForm = {
        DROP: true,
        CRAFTABLE: true,
        BOSS: true,
        ARCHI: true,
        PVP: true,
    };

    // Inverted: BehaviorSubject emits !value.FIELD (true = excluded, false = included)
    private readonly drop = new BehaviorSubject<boolean>(!ObtentionFormService.DEFAULT_VALUE.DROP);
    public readonly drop$ = this.drop.asObservable();

    private readonly craftable = new BehaviorSubject<boolean>(!ObtentionFormService.DEFAULT_VALUE.CRAFTABLE);
    public readonly craftable$ = this.craftable.asObservable();

    private readonly boss = new BehaviorSubject<boolean>(!ObtentionFormService.DEFAULT_VALUE.BOSS);
    public readonly boss$ = this.boss.asObservable();

    private readonly archi = new BehaviorSubject<boolean>(!ObtentionFormService.DEFAULT_VALUE.ARCHI);
    public readonly archi$ = this.archi.asObservable();

    private readonly pvp = new BehaviorSubject<boolean>(!ObtentionFormService.DEFAULT_VALUE.PVP);
    public readonly pvp$ = this.pvp.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_OBTENTION;
    protected readonly model = signal<ObtentionForm>({ ...ObtentionFormService.DEFAULT_VALUE });

    public readonly form = new FormGroup({
        DROP: new FormControl<boolean>(ObtentionFormService.DEFAULT_VALUE.DROP, { nonNullable: true }),
        CRAFTABLE: new FormControl<boolean>(ObtentionFormService.DEFAULT_VALUE.CRAFTABLE, { nonNullable: true }),
        BOSS: new FormControl<boolean>(ObtentionFormService.DEFAULT_VALUE.BOSS, { nonNullable: true }),
        ARCHI: new FormControl<boolean>(ObtentionFormService.DEFAULT_VALUE.ARCHI, { nonNullable: true }),
        PVP: new FormControl<boolean>(ObtentionFormService.DEFAULT_VALUE.PVP, { nonNullable: true }),
    });

    constructor() {
        super();
        this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
            this.model.update(m => ({ ...m, ...(v as ObtentionForm) }));
        });
        this.init();
    }

    protected override handleChanges(value: ObtentionForm): void {
        this.drop.next(!value.DROP);
        this.craftable.next(!value.CRAFTABLE);
        this.boss.next(!value.BOSS);
        this.archi.next(!value.ARCHI);
        this.pvp.next(!value.PVP);
        this.form.setValue(value, { emitEvent: false });
    }

    public override setValue(value: ObtentionForm | null): void {
        this.model.set({
            DROP: value?.DROP ?? ObtentionFormService.DEFAULT_VALUE.DROP,
            CRAFTABLE: value?.CRAFTABLE ?? ObtentionFormService.DEFAULT_VALUE.CRAFTABLE,
            BOSS: value?.BOSS ?? ObtentionFormService.DEFAULT_VALUE.BOSS,
            ARCHI: value?.ARCHI ?? ObtentionFormService.DEFAULT_VALUE.ARCHI,
            PVP: value?.PVP ?? ObtentionFormService.DEFAULT_VALUE.PVP,
        });
    }

    public override setDefaultValue(): void {
        this.model.set({ ...ObtentionFormService.DEFAULT_VALUE });
    }
}
