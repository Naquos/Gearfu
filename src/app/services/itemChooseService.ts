import { Inject, Injectable } from "@angular/core";
import { ItemTypeEnum } from "../models/itemTypeEnum";
import { BehaviorSubject, combineLatest, delay, filter, first, iif, map, Observable, of, switchMap, take, tap } from "rxjs";
import { Item } from "../models/item";
import { ItemTypeServices } from "./ItemTypesServices";
import { RarityItem } from "../models/rarityItem";
import { ActivatedRoute, Router } from "@angular/router";
import { ItemsService } from "./itemsService";
import { DOCUMENT } from "@angular/common";

@Injectable({providedIn: 'root'})
export class ItemChooseService {
    private KEY_BUILD = "KEY_BUILD";
    private mapItem = new Map<ItemTypeEnum, BehaviorSubject<(Item|undefined)[]>>();
    private idItems = new BehaviorSubject<string>("");
    public idItems$ = this.idItems.asObservable();

    private totalWeight = new BehaviorSubject<number>(0);
    public totalWeight$ = this.totalWeight.asObservable();
    private indexAnneau = 0;

    constructor(private itemTypeService: ItemTypeServices,
        private itemService: ItemsService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        @Inject(DOCUMENT) private document: Document
    ) {
        const localStorage = this.document.defaultView?.localStorage;
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

        this.activatedRoute.queryParams.pipe(
            filter(x => x !== undefined),
            map(x => x["itemsId"] ? x["itemsId"] as string : localStorage?.getItem(this.KEY_BUILD)),
            filter(x => x !== undefined && x !== null),
            take(1),
            map(x => x.split(",")),
            tap(x => x.forEach(id => this.setItemWithIdItem(parseInt(id))))
        ).subscribe();

        combineLatest([this.getObsItem(ItemTypeEnum.UNE_MAIN),
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
            delay(500),
            map(list => list.flat()),
            tap(list => this.calculTotalWeight(list)),
            map(list => list.map(items => items?.id)),
            map(list => list.filter(x => x).join(",")),
            tap(x => this.setIdItems(x))
        ).subscribe(x => {
            localStorage?.setItem(this.KEY_BUILD, x);

            this.router.navigate(
                [], 
                {
                    relativeTo: this.activatedRoute,
                    queryParams : { itemsId: x }, 
                    queryParamsHandling: 'merge', // remove to replace all query params by provided
                }
            );
        });
        
    }

    private calculTotalWeight(list: (Item | undefined)[]): void {
        let result = 0;
        const setItem = new Set(); // On met un Set pour éviter que l'arme à deux mains voit son poid compter 2 fois
        list.forEach(item => setItem.add(item));
        setItem.forEach(function(x) {
            result+= (x as (Item |undefined))?.weight ?? 0
        })
        this.totalWeight.next(result);
    }

    private setItemWithIdItem(idItem: number): void {
        this.itemService.searchItem(idItem)
        .pipe(
            first(),
            filter(x => x !== undefined)
        ).subscribe(item => 
            this.setItem(this.itemTypeService.getItemType(item.itemTypeId), item));
    }

    public setIdItems(idItems: string): void {
        this.idItems.next(idItems);
    }

    public getObsItem(itemType: ItemTypeEnum): Observable<(Item|undefined)[]> {
        return this.mapItem.get(itemType)?.asObservable() ?? of();
    }

    public deleteItem(itemType: ItemTypeEnum, indexItem: number) : void {
        this.getObsItem(itemType).pipe(
            first(),
            switchMap(x => 
                iif(() => x !== undefined && this.itemTypeService.getItemType(x[0]?.itemTypeId ?? 0) === ItemTypeEnum.DEUX_MAINS,
                of(x).pipe(tap(() => {
                    this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([undefined]);
                    this.mapItem.get(ItemTypeEnum.UNE_MAIN)?.next([undefined]);
                })),
                of(x).pipe(
                    map(x => {x[indexItem] = undefined; return x}),
                    tap(x => this.mapItem.get(itemType)?.next(x))))
            )
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
                //Si on met une arme à une main, et qu'une arme à deux main est equipé, il faut pouvoir l'enlever
                iif(() => itemType === ItemTypeEnum.UNE_MAIN,
                    this.getObsItem(ItemTypeEnum.BOUCLIER).pipe(
                        first(),
                        tap(() => this.mapItem.get(ItemTypeEnum.UNE_MAIN)?.next([item])),
                        map(x => x[0]),
                        filter(x => x !== undefined && this.itemTypeService.getItemType(x?.itemTypeId) === ItemTypeEnum.DEUX_MAINS),
                        tap(() => this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([undefined]))),
                    of(null)
                )
            ),
            switchMap(() =>
                // Mettre un anneau puis l'autre
                iif(() => itemType === ItemTypeEnum.ANNEAU,
                    this.getObsItem(ItemTypeEnum.ANNEAU).pipe(
                        first(),
                        switchMap(list => iif(() => !list.find(anneau => anneau?.title === item.title),
                            of(list).pipe(
                                map(x => {x[this.indexAnneau] = item; return x}),
                                tap(x => this.mapItem.get(ItemTypeEnum.ANNEAU)?.next(x)),
                                tap(() => this.indexAnneau = this.indexAnneau === 0 ? 1 : 0)),
                            of(null)
                        ) )
                    ),
                    of(null)
                )
            ),
            switchMap(() =>
                // Mise en place d'une arme à deux mains
                iif(() => itemType === ItemTypeEnum.DEUX_MAINS,
                    of(null).pipe(tap(() => {
                        this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([item]);
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

                if( itemType === ItemTypeEnum.DEUX_MAINS) { this.mapItem.get(ItemTypeEnum.UNE_MAIN)?.next([undefined]); this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([undefined]) } 
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