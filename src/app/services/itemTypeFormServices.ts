import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ItemTypeServices } from "./ItemTypesServices";
import { ItemTypeEnum } from "../models/itemTypeEnum";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class ItemTypeFormServices {
    public form = new FormGroup({
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
      });

    protected selected = new BehaviorSubject<number[]>([]);
    public selected$ = this.selected.asObservable();
    

    constructor(private itemTypeServices: ItemTypeServices) {
        this.form.valueChanges.subscribe(x => {
            const result = [];
            if(x.uneMain) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.UNE_MAIN)?.id) };
            if(x.deuxMains) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.DEUX_MAINS)?.id) };
            if(x.anneau) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.ANNEAU)?.id) };
            if(x.bottes) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.BOTTES)?.id) };
            if(x.amulette) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.AMULETTE)?.id) };
            if(x.cape) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.CAPE)?.id) };
            if(x.ceinture) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.CEINTURE)?.id) };
            if(x.casque) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.CASQUE)?.id) };
            if(x.plastron) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.PLASTRON)?.id) };
            if(x.epaulettes) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.EPAULETTES)?.id) };
            if(x.bouclier) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.BOUCLIER)?.id) };
            if(x.dague) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.DAGUE)?.id) };
            if(x.accessoires) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.ACCESSOIRES)?.id) };
            if(x.familier) { result.push(this.itemTypeServices.getItemTypes().get(ItemTypeEnum.FAMILIER)?.id) };
            this.selected.next(result.flat() as number[]);
        });
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