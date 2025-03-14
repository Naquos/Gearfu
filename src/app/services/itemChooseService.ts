import { Injectable } from "@angular/core";
import { ItemTypeEnum } from "../models/itemTypeEnum";
import { BehaviorSubject, combineLatest, EMPTY, filter, first, iif, map, NEVER, Observable, of, switchMap, tap } from "rxjs";
import { Item } from "../models/item";
import { ItemTypeServices } from "./ItemTypesServices";
import { RarityItem } from "../models/rarityItem";

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
        this.mapItem.set(ItemTypeEnum.BOUCLIER, new BehaviorSubject<(Item|undefined)[]>([undefined]))
        this.mapItem.set(ItemTypeEnum.FAMILIER, new BehaviorSubject<(Item|undefined)[]>([undefined]))
    }

    public getObsItem(itemType: ItemTypeEnum): Observable<(Item|undefined)[]> {
        return this.mapItem.get(itemType)?.asObservable() ?? of();
    }

    public deleteItem(itemType: ItemTypeEnum, indexItem: number) : void {
        this.getObsItem(itemType).pipe(
            first(),
            map(x => {x[indexItem] = undefined; return x}),
            tap(x => this.mapItem.get(itemType)?.next(x))
        ).subscribe();
    }

    public setItem(itemType: ItemTypeEnum, item: Item): void {
        of(null).pipe(
            first(),
            switchMap(() => 
                // Qu'une seule épique / relique par stuff
                iif(() => [RarityItem.EPIQUE, RarityItem.RELIQUE].includes(item.rarity),
                    this.deleteFirstItemOnRarity(item?.rarity),
                    of(null)
                )
            ),
            switchMap(() =>
                // Si on met une seconde main, alors la première main ne doit pas être une arme à deux mains
                iif(() => [ItemTypeEnum.DAGUE, ItemTypeEnum.BOUCLIER].includes(itemType),
                    this.getObsItem(ItemTypeEnum.UNE_MAIN).pipe(
                        first(),
                        tap(() => this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([item])),
                        map(x => x[0]),
                        filter(x => x !== undefined && this.itemTypeService.getItemType(x?.itemTypeId) === ItemTypeEnum.DEUX_MAINS),
                        tap(() => this.mapItem.get(ItemTypeEnum.UNE_MAIN)?.next([undefined]))
                    ),
                    of(null)
                )
            ),
            switchMap(() =>
                // Mettre un anneau puis l'autre
                iif(() => itemType === ItemTypeEnum.ANNEAU,
                    this.getObsItem(ItemTypeEnum.ANNEAU).pipe(
                        first(),
                        map(x => {x[this.indexAnneau] = item; return x}),
                        tap(x => this.mapItem.get(ItemTypeEnum.ANNEAU)?.next(x)),
                        tap(() => this.indexAnneau = this.indexAnneau === 0 ? 1 : 0)
                    ),
                    of(null)
                )
            ),
            switchMap(() =>
                // Mise en place d'une arme à deux mains
                iif(() => itemType === ItemTypeEnum.DEUX_MAINS,
                    of(null).pipe(tap(() => {
                        this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([undefined]);
                        this.mapItem.get(ItemTypeEnum.UNE_MAIN)?.next([item]);
                    })),
                    of(null)
                )
            ),
            switchMap(() =>
                iif(() => itemType !== ItemTypeEnum.ANNEAU,
                    of(null).pipe(tap(() => this.mapItem.get(itemType)?.next([item]))),
                    of(null)
                ) 
            ),
        ).subscribe();
    }

    private deleteFirstItemOnRarity(rarity: RarityItem):Observable<null> {
        return combineLatest([this.getObsItem(ItemTypeEnum.UNE_MAIN),
            this.getObsItem(ItemTypeEnum.ANNEAU),
            this.getObsItem(ItemTypeEnum.BOTTES),
            this.getObsItem(ItemTypeEnum.AMULETTE),
            this.getObsItem(ItemTypeEnum.CAPE),
            this.getObsItem(ItemTypeEnum.CEINTURE),
            this.getObsItem(ItemTypeEnum.CASQUE),
            this.getObsItem(ItemTypeEnum.PLASTRON),
            this.getObsItem(ItemTypeEnum.EPAULETTES),
            this.getObsItem(ItemTypeEnum.ACCESSOIRES),
            this.getObsItem(ItemTypeEnum.BOUCLIER),
            this.getObsItem(ItemTypeEnum.FAMILIER)
        ]).pipe(
            first(),
            map(itemList => itemList.filter(list => list.find(item => item?.rarity === rarity))),
            tap(itemList => itemList.forEach(list => {
                const itemType = this.itemTypeService.getItemType(list.find(x => x !== undefined)?.itemTypeId ?? 0); 

                if( itemType === ItemTypeEnum.DEUX_MAINS) { this.mapItem.get(ItemTypeEnum.UNE_MAIN)?.next([undefined]) } 
                else if(itemType === ItemTypeEnum.DAGUE) { this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([undefined]) } 
                else if (itemType === ItemTypeEnum.ANNEAU) {
                    const indexRarity = list.findIndex(x => x?.rarity === rarity);
                    list[indexRarity] = undefined;
                    this.mapItem.get(ItemTypeEnum.ANNEAU)?.next(list);
                } else {
                    this.mapItem.get(itemType)?.next([undefined])
                }
            })),
            map(() => null)
        )
    }
}