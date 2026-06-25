import { Injectable, signal } from "@angular/core";
import { form } from "@angular/forms/signals";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

export interface ObtentionForm {
    DROP: boolean;
    CRAFTABLE: boolean;
    BOSS: boolean;
    ARCHI: boolean;
    PVP: boolean;
    ELEVAGE: boolean;
}

@Injectable({ providedIn: 'root' })
export class ObtentionFormService extends AbstractSignalFormService<ObtentionForm> {

    private static readonly DEFAULT_VALUE: ObtentionForm = {
        DROP: true,
        CRAFTABLE: true,
        BOSS: true,
        ARCHI: true,
        PVP: true,
        ELEVAGE: true
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

    private readonly elevage = new BehaviorSubject<boolean>(!ObtentionFormService.DEFAULT_VALUE.ELEVAGE);
    public readonly elevage$ = this.elevage.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_OBTENTION;
    protected readonly model = signal<ObtentionForm>({ ...ObtentionFormService.DEFAULT_VALUE });

    public readonly form = form(this.model);

    constructor() {
        super();
        this.init();
    }

    protected override handleChanges(value: ObtentionForm): void {
        this.drop.next(!value.DROP);
        this.craftable.next(!value.CRAFTABLE);
        this.boss.next(!value.BOSS);
        this.archi.next(!value.ARCHI);
        this.pvp.next(!value.PVP);
        this.elevage.next(!value.ELEVAGE);
    }

    public override setValue(value: ObtentionForm | null): void {
        this.model.set({
            DROP: value?.DROP ?? ObtentionFormService.DEFAULT_VALUE.DROP,
            CRAFTABLE: value?.CRAFTABLE ?? ObtentionFormService.DEFAULT_VALUE.CRAFTABLE,
            BOSS: value?.BOSS ?? ObtentionFormService.DEFAULT_VALUE.BOSS,
            ARCHI: value?.ARCHI ?? ObtentionFormService.DEFAULT_VALUE.ARCHI,
            PVP: value?.PVP ?? ObtentionFormService.DEFAULT_VALUE.PVP,
            ELEVAGE: value?.ELEVAGE ?? ObtentionFormService.DEFAULT_VALUE.ELEVAGE
        });
    }

    public override setDefaultValue(): void {
        this.model.set({ ...ObtentionFormService.DEFAULT_VALUE });
    }
}

