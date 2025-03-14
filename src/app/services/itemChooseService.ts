import { Injectable } from "@angular/core";
import { ItemTypeEnum } from "../models/itemTypeEnum";
import { BehaviorSubject, filter, first, map, Observable, of, tap } from "rxjs";
import { Item } from "../models/item";
import { ItemTypeServices } from "./ItemTypesServices";

@Injectable({providedIn: 'root'})
export class ItemChooseService {
    private mapItem:Map<ItemTypeEnum, BehaviorSubject<(Item|undefined)[]>> = new Map();
    private indexAnneau = 0;

    constructor(private itemTypeService: ItemTypeServices) {
        this.mapItem.set(ItemTypeEnum.UNE_MAIN, new BehaviorSubject<(Item|undefined)[]>([undefined]))
        this.mapItem.set(ItemTypeEnum.ANNEAU, new BehaviorSubject<(Item|undefined)[]>([undefined, undefined]))
        this.mapItem.set(ItemTypeEnum.BOTTES, new BehaviorSubject<(Item|undefined)[]>([undefined]))
        this.mapItem.set(ItemTypeEnum.AMULETTE, new BehaviorSubject<(Item|undefined)[]>([undefined]))
        this.mapItem.set(ItemTypeEnum.CAPE, new BehaviorSubject<(Item|undefined)[]>([undefined]))
        this.mapItem.set(ItemTypeEnum.CEINTURE, new BehaviorSubject<(Item|undefined)[]>([undefined]))
        this.mapItem.set(ItemTypeEnum.CASQUE, new BehaviorSubject<(Item|undefined)[]>([undefined]))
        this.mapItem.set(ItemTypeEnum.PLASTRON, new BehaviorSubject<(Item|undefined)[]>([undefined]))
        this.mapItem.set(ItemTypeEnum.EPAULETTES, new BehaviorSubject<(Item|undefined)[]>([undefined]))
        this.mapItem.set(ItemTypeEnum.ACCESSOIRES, new BehaviorSubject<(Item|undefined)[]>([undefined]))
        this.mapItem.set(ItemTypeEnum.DAGUE, new BehaviorSubject<(Item|undefined)[]>([undefined]))
        this.mapItem.set(ItemTypeEnum.BOUCLIER, new BehaviorSubject<(Item|undefined)[]>([undefined]))
        this.mapItem.set(ItemTypeEnum.FAMILIER, new BehaviorSubject<(Item|undefined)[]>([undefined]))
    }

    public getObsItem(itemType: ItemTypeEnum): Observable<(Item|undefined)[]> {
        return this.mapItem.get(itemType)?.asObservable() ?? of();
    }

    public setItem(itemType: ItemTypeEnum, item?: Item): void {
        //Vérification cas particulier
        // ==> Si on met une seconde main, alors la première main ne doit pas être une arme à deux mains
        if([ItemTypeEnum.DAGUE, ItemTypeEnum.BOUCLIER].includes(itemType)) {
            this.getObsItem(ItemTypeEnum.UNE_MAIN).pipe(
                first(),
                tap(() => this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([item])),
                map(x => x[0]),
                filter(x => x !== undefined && this.itemTypeService.getItemType(x?.itemTypeId) === ItemTypeEnum.DEUX_MAINS),
                tap(() => this.mapItem.get(ItemTypeEnum.UNE_MAIN)?.next([undefined]))
            ).subscribe()
        }

        //Mise en place des items
        if(itemType === ItemTypeEnum.DEUX_MAINS) {
            this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([undefined]);
            this.mapItem.get(ItemTypeEnum.UNE_MAIN)?.next([item]);
        } else if (itemType === ItemTypeEnum.ANNEAU) {
            this.getObsItem(ItemTypeEnum.ANNEAU).pipe(
                first(),
                map(x => {x[this.indexAnneau] = item; return x}),
                tap(x => this.mapItem.get(ItemTypeEnum.ANNEAU)?.next(x)),
                tap(() => this.indexAnneau = this.indexAnneau === 0 ? 1 : 0)
            ).subscribe()
        } else {
            this.mapItem.get(itemType)?.next([item]);
        }
    }
}