import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ItemTypeServices } from "../data/ItemTypesServices";
import { ItemTypeEnum } from "../../models/enum/itemTypeEnum";
import { BehaviorSubject } from "rxjs";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService, TypedControls } from "./abstractFormService";

export interface ItemTypeForm {
    deuxMains: boolean;
    uneMain: boolean,
    anneau: boolean,
    bottes: boolean,
    amulette: boolean,
    cape: boolean,
    ceinture: boolean,
    casque: boolean,
    plastron: boolean,
    epaulettes: boolean,
    bouclier: boolean,
    dague: boolean,
    accessoires: boolean,
    familier: boolean
  }

@Injectable({providedIn: 'root'})
export class ItemTypeFormServices extends AbstractFormService<FormGroup<TypedControls<ItemTypeForm>>> {
    protected readonly selected = new BehaviorSubject<number[]>([]);
    public readonly selected$ = this.selected.asObservable();
    

    constructor(
        private readonly itemTypeServices: ItemTypeServices,
        protected override readonly localStorageService: LocalStorageService) {

        super(KeyEnum.KEY_ITEM_TYPE, localStorageService, new FormGroup<TypedControls<ItemTypeForm>>({
            deuxMains: new FormControl(),
            uneMain: new FormControl(),
            anneau: new FormControl(),
            bottes: new FormControl(),
            amulette: new FormControl(),
            cape: new FormControl(),
            ceinture: new FormControl(),
            casque: new FormControl(),
            plastron: new FormControl(),
            epaulettes: new FormControl(),
            bouclier: new FormControl(),
            dague: new FormControl(),
            accessoires: new FormControl(),
            familier: new FormControl()
        }));
        this.init();
    }

    protected override handleChanges(value: ItemTypeForm): void {
        const result = [];
        if(value.uneMain) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.UNE_MAIN)?.ids) };
        if(value.deuxMains) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.DEUX_MAINS)?.ids) };
        if(value.anneau) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.ANNEAU)?.ids) };
        if(value.bottes) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.BOTTES)?.ids) };
        if(value.amulette) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.AMULETTE)?.ids) };
        if(value.cape) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.CAPE)?.ids) };
        if(value.ceinture) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.CEINTURE)?.ids) };
        if(value.casque) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.CASQUE)?.ids) };
        if(value.plastron) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.PLASTRON)?.ids) };
        if(value.epaulettes) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.EPAULETTES)?.ids) };
        if(value.bouclier) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.BOUCLIER)?.ids) };
        if(value.dague) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.DAGUE)?.ids) };
        if(value.accessoires) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.ACCESSOIRES)?.ids) };
        if(value.familier) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.FAMILIER)?.ids) };

        this.selected.next(result.flat() as number[]);
    }
    
    public override setValue(value: ItemTypeForm): void {
        this.form.setValue({
            deuxMains: value.deuxMains ?? false,
            uneMain: value.uneMain ?? false,
            anneau: value.anneau ?? false,
            bottes: value.bottes ?? false,
            amulette: value.amulette ?? false,
            cape: value.cape ?? false,
            ceinture: value.ceinture ?? false,
            casque: value.casque ?? false,
            plastron: value.plastron ?? false,
            epaulettes: value.epaulettes ?? false,
            bouclier: value.bouclier ?? false,
            dague: value.dague ?? false,
            accessoires: value.accessoires ?? false,
            familier: value.familier ?? false
        });
    }

    public setDefaultValue(): void {
        this.setItemType();
    }

    public setItemType(...itemType: ItemTypeEnum[]) {
        this.form.setValue({
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
            familier: itemType.includes(ItemTypeEnum.FAMILIER)
        });
    }
}