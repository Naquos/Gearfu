import { Injectable, signal } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { RarityItemEnum } from "../../models/enum/rarityItemEnum";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

export interface RareteItemForm {
    normal: boolean;
    rare: boolean;
    mythique: boolean;
    legendaire: boolean;
    souvenir: boolean;
    relique: boolean;
    epique: boolean;
}

@Injectable({ providedIn: 'root' })
export class RareteItemFormServices extends AbstractSignalFormService<RareteItemForm> {

    private static readonly DEFAULT_VALUE: RareteItemForm = {
        normal: false,
        rare: false,
        mythique: false,
        legendaire: false,
        souvenir: false,
        relique: false,
        epique: false,
    };

    private readonly rarity = new BehaviorSubject<number[]>([]);
    public readonly rarity$ = this.rarity.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_RARETE_ITEM;
    protected readonly model = signal<RareteItemForm>({ ...RareteItemFormServices.DEFAULT_VALUE });

    public readonly form = new FormGroup({
        normal: new FormControl<boolean>(false, { nonNullable: true }),
        rare: new FormControl<boolean>(false, { nonNullable: true }),
        mythique: new FormControl<boolean>(false, { nonNullable: true }),
        legendaire: new FormControl<boolean>(false, { nonNullable: true }),
        souvenir: new FormControl<boolean>(false, { nonNullable: true }),
        relique: new FormControl<boolean>(false, { nonNullable: true }),
        epique: new FormControl<boolean>(false, { nonNullable: true }),
    });

    constructor() {
        super();
        this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
            this.model.update(m => ({ ...m, ...(v as RareteItemForm) }));
        });
        this.init();
    }

    protected override handleChanges(value: RareteItemForm): void {
        const result: number[] = [];
        if (value.normal) { result.push(RarityItemEnum.NORMAL); }
        if (value.rare) { result.push(RarityItemEnum.RARE); }
        if (value.mythique) { result.push(RarityItemEnum.MYTHIQUE); }
        if (value.legendaire) { result.push(RarityItemEnum.LEGENDAIRE); }
        if (value.relique) { result.push(RarityItemEnum.RELIQUE); }
        if (value.souvenir) { result.push(RarityItemEnum.SOUVENIR); }
        if (value.epique) { result.push(RarityItemEnum.EPIQUE); }
        this.rarity.next(result);
        this.form.setValue(value, { emitEvent: false });
    }

    public override setValue(value: RareteItemForm | null): void {
        this.model.set({
            normal: value?.normal ?? false,
            rare: value?.rare ?? false,
            mythique: value?.mythique ?? false,
            legendaire: value?.legendaire ?? false,
            souvenir: value?.souvenir ?? false,
            relique: value?.relique ?? false,
            epique: value?.epique ?? false,
        });
    }

    public override setDefaultValue(): void {
        this.setRarity();
    }

    public setRarity(...rarity: RarityItemEnum[]): void {
        this.model.set({
            normal: rarity.includes(RarityItemEnum.NORMAL),
            rare: rarity.includes(RarityItemEnum.RARE),
            mythique: rarity.includes(RarityItemEnum.MYTHIQUE),
            legendaire: rarity.includes(RarityItemEnum.LEGENDAIRE),
            relique: rarity.includes(RarityItemEnum.RELIQUE),
            souvenir: rarity.includes(RarityItemEnum.SOUVENIR),
            epique: rarity.includes(RarityItemEnum.EPIQUE),
        });
    }
}
