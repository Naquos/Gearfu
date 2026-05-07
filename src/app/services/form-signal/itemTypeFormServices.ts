import { inject, Injectable, signal } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ItemTypeServices } from "../data/ItemTypesServices";
import { ItemTypeEnum } from "../../models/enum/itemTypeEnum";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractSignalFormService } from "./abstractSignalFormService";

export interface ItemTypeForm {
    deuxMains: boolean;
    uneMain: boolean;
    anneau: boolean;
    bottes: boolean;
    amulette: boolean;
    cape: boolean;
    ceinture: boolean;
    casque: boolean;
    plastron: boolean;
    epaulettes: boolean;
    bouclier: boolean;
    dague: boolean;
    accessoires: boolean;
    familier: boolean;
}

@Injectable({ providedIn: 'root' })
export class ItemTypeFormServices extends AbstractSignalFormService<ItemTypeForm> {

    private static readonly DEFAULT_VALUE: ItemTypeForm = {
        deuxMains: false, uneMain: false, anneau: false, bottes: false,
        amulette: false, cape: false, ceinture: false, casque: false,
        plastron: false, epaulettes: false, bouclier: false, dague: false,
        accessoires: false, familier: false,
    };

    private readonly itemTypeServices = inject(ItemTypeServices);

    private readonly selected = new BehaviorSubject<number[]>([]);
    public readonly selected$ = this.selected.asObservable();

    protected readonly keyEnum = KeyEnum.KEY_ITEM_TYPE;
    protected readonly model = signal<ItemTypeForm>({ ...ItemTypeFormServices.DEFAULT_VALUE });

    public readonly form = new FormGroup({
        deuxMains: new FormControl<boolean>(false, { nonNullable: true }),
        uneMain: new FormControl<boolean>(false, { nonNullable: true }),
        anneau: new FormControl<boolean>(false, { nonNullable: true }),
        bottes: new FormControl<boolean>(false, { nonNullable: true }),
        amulette: new FormControl<boolean>(false, { nonNullable: true }),
        cape: new FormControl<boolean>(false, { nonNullable: true }),
        ceinture: new FormControl<boolean>(false, { nonNullable: true }),
        casque: new FormControl<boolean>(false, { nonNullable: true }),
        plastron: new FormControl<boolean>(false, { nonNullable: true }),
        epaulettes: new FormControl<boolean>(false, { nonNullable: true }),
        bouclier: new FormControl<boolean>(false, { nonNullable: true }),
        dague: new FormControl<boolean>(false, { nonNullable: true }),
        accessoires: new FormControl<boolean>(false, { nonNullable: true }),
        familier: new FormControl<boolean>(false, { nonNullable: true }),
    });

    constructor() {
        super();
        this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(v => {
            this.model.update(m => ({ ...m, ...(v as ItemTypeForm) }));
        });
        this.init();
    }

    protected override handleChanges(value: ItemTypeForm): void {
        const result: (number[] | undefined)[] = [];
        if (value.uneMain) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.UNE_MAIN)?.ids); }
        if (value.deuxMains) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.DEUX_MAINS)?.ids); }
        if (value.anneau) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.ANNEAU)?.ids); }
        if (value.bottes) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.BOTTES)?.ids); }
        if (value.amulette) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.AMULETTE)?.ids); }
        if (value.cape) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.CAPE)?.ids); }
        if (value.ceinture) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.CEINTURE)?.ids); }
        if (value.casque) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.CASQUE)?.ids); }
        if (value.plastron) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.PLASTRON)?.ids); }
        if (value.epaulettes) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.EPAULETTES)?.ids); }
        if (value.bouclier) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.BOUCLIER)?.ids); }
        if (value.dague) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.DAGUE)?.ids); }
        if (value.accessoires) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.ACCESSOIRES)?.ids); }
        if (value.familier) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.FAMILIER)?.ids); }
        this.selected.next(result.flat() as number[]);
        this.form.setValue(value, { emitEvent: false });
    }

    public override setValue(value: ItemTypeForm | null): void {
        this.model.set({
            deuxMains: value?.deuxMains ?? false,
            uneMain: value?.uneMain ?? false,
            anneau: value?.anneau ?? false,
            bottes: value?.bottes ?? false,
            amulette: value?.amulette ?? false,
            cape: value?.cape ?? false,
            ceinture: value?.ceinture ?? false,
            casque: value?.casque ?? false,
            plastron: value?.plastron ?? false,
            epaulettes: value?.epaulettes ?? false,
            bouclier: value?.bouclier ?? false,
            dague: value?.dague ?? false,
            accessoires: value?.accessoires ?? false,
            familier: value?.familier ?? false,
        });
    }

    public override setDefaultValue(): void {
        this.setItemType();
    }

    public setItemType(...itemType: ItemTypeEnum[]): void {
        this.model.set({
            deuxMains: itemType.includes(ItemTypeEnum.DEUX_MAINS),
            uneMain: itemType.includes(ItemTypeEnum.UNE_MAIN),
            anneau: itemType.includes(ItemTypeEnum.ANNEAU),
            bottes: itemType.includes(ItemTypeEnum.BOTTES),
            amulette: itemType.includes(ItemTypeEnum.AMULETTE),
            cape: itemType.includes(ItemTypeEnum.CAPE),
            ceinture: itemType.includes(ItemTypeEnum.CEINTURE),
            casque: itemType.includes(ItemTypeEnum.CASQUE),
            plastron: itemType.includes(ItemTypeEnum.PLASTRON),
            epaulettes: itemType.includes(ItemTypeEnum.EPAULETTES),
            bouclier: itemType.includes(ItemTypeEnum.BOUCLIER),
            dague: itemType.includes(ItemTypeEnum.DAGUE),
            accessoires: itemType.includes(ItemTypeEnum.ACCESSOIRES),
            familier: itemType.includes(ItemTypeEnum.FAMILIER),
        });
    }
}
