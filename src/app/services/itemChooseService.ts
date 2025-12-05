import { inject, Injectable } from "@angular/core";
import { ItemTypeEnum } from "../models/enum/itemTypeEnum";
import { BehaviorSubject, combineLatest, filter, first, iif, map, Observable, of, switchMap, take, takeUntil, tap } from "rxjs";
import { ItemTypeServices } from "./data/ItemTypesServices";
import { RarityItemEnum } from "../models/enum/rarityItemEnum";
import { ActivatedRoute, Router } from "@angular/router";
import { ItemsService } from "./data/itemsService";
import { KeyEnum } from "../models/enum/keyEnum";
import { LocalStorageService } from "./data/localStorageService";
import { ModifierMecanismFormService } from "./form/modifierElemMaitrisesFormService";
import { ResistancesFormService } from "./form/resistancesFormService";
import { MaitrisesFormService } from "./form/maitrisesFormService";
import { Item } from "../models/data/item";
import { AbstractDestroyService } from "./abstract/abstractDestroyService";
import { OnlyNoElemFormService } from "./form/onlyNoElemFormService";
import { OnlyNoSecondaryFormService } from "./form/onlyNoSecondaryFormService";
import { UrlServices } from "./urlServices";

@Injectable({providedIn: 'root'})
export class ItemChooseService extends AbstractDestroyService {
    private readonly itemTypeService = inject(ItemTypeServices);
    private readonly itemService = inject(ItemsService);
    private readonly router = inject(Router);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly localStorageService = inject(LocalStorageService);
    private readonly modifierElemMaitrisesFormService = inject(ModifierMecanismFormService);
    private readonly resistancesFormService = inject(ResistancesFormService);
    private readonly maitrisesFormService = inject(MaitrisesFormService);
    private readonly onlyNoElemFormService = inject(OnlyNoElemFormService);
    private readonly onlyNoSecondaryFormService = inject(OnlyNoSecondaryFormService);
    private readonly urlServices = inject(UrlServices);


    private readonly mapItem = new Map<ItemTypeEnum, BehaviorSubject<(Item|undefined)[]>>(
        [
            [ItemTypeEnum.UNE_MAIN, new BehaviorSubject<(Item|undefined)[]>([undefined])],
            [ItemTypeEnum.ANNEAU, new BehaviorSubject<(Item|undefined)[]>([undefined, undefined])],
            [ItemTypeEnum.BOTTES, new BehaviorSubject<(Item|undefined)[]>([undefined])],
            [ItemTypeEnum.AMULETTE, new BehaviorSubject<(Item|undefined)[]>([undefined])],
            [ItemTypeEnum.CAPE, new BehaviorSubject<(Item|undefined)[]>([undefined])],
            [ItemTypeEnum.CEINTURE, new BehaviorSubject<(Item|undefined)[]>([undefined])],
            [ItemTypeEnum.CASQUE, new BehaviorSubject<(Item|undefined)[]>([undefined])],
            [ItemTypeEnum.PLASTRON, new BehaviorSubject<(Item|undefined)[]>([undefined])],
            [ItemTypeEnum.EPAULETTES, new BehaviorSubject<(Item|undefined)[]>([undefined])],
            [ItemTypeEnum.ACCESSOIRES, new BehaviorSubject<(Item|undefined)[]>([undefined])],
            [ItemTypeEnum.BOUCLIER, new BehaviorSubject<(Item|undefined)[]>([undefined])],
            [ItemTypeEnum.FAMILIER, new BehaviorSubject<(Item|undefined)[]>([undefined])],
        ]
    );
    private readonly idItems = new BehaviorSubject<string>("");
    public readonly idItems$ = this.idItems.asObservable();

    private readonly totalWeight = new BehaviorSubject<number>(0);
    public readonly totalWeight$ = this.totalWeight.asObservable();

    private readonly listItem = new BehaviorSubject<Item[]>([]);
    public readonly listItem$ = this.listItem.asObservable();
    
    private readonly totalMaitrises = new BehaviorSubject<number>(0);
    public readonly totalMaitrises$ = this.totalMaitrises.asObservable();
    
    private readonly totalResistances = new BehaviorSubject<number>(0);
    public readonly totalResistances$ = this.totalResistances.asObservable();
    private indexAnneau = 0;

    constructor() {
        super();
        setTimeout(() => {
            this.initItemChooses();
            this.updateUrl();
        });

        this.handleCalculTotal();
    }

    private handleCalculTotal(): void {
        combineLatest([
            this.listItem$,
            this.maitrisesFormService.nbElements$,
            this.maitrisesFormService.idMaitrises$,
            this.modifierElemMaitrisesFormService.multiplicateurElem$,
            this.modifierElemMaitrisesFormService.denouement$,
            this.resistancesFormService.idResistances$,
            this.onlyNoElemFormService.onlyNoElem$,
            this.onlyNoSecondaryFormService.onlyNoSecondary$,
            this.modifierElemMaitrisesFormService.chaos$
        ]).pipe(
            takeUntil(this.destroy$),
            tap(([list, nbElements, idMaitrises, multiplicateurElem, denouement, idResistances, noElem, noSecondary, chaos]) => this.calculTotal(list, nbElements, idMaitrises, multiplicateurElem, idResistances, denouement, noElem, noSecondary, chaos))
        ).subscribe();
    }

    private updateUrl(): void {
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
        this.getObsItem(ItemTypeEnum.FAMILIER),
        ]).pipe(
            takeUntil(this.destroy$),
            map(list => list.flat()),
            map(list => list.filter(x => x !== undefined && x !== null)),
            tap(list => this.listItem.next([...new Set<Item>(list)])),
            map(list => list.map(items => items?.id)),
            map(list => list.filter(x => x).join(",")),
            tap(x => this.setIdItems(x))
        ).subscribe(x => {
            this.localStorageService.setItem<string>(KeyEnum.KEY_BUILD, x);
            this.router.navigate(
                [],
                {
                    relativeTo: this.activatedRoute,
                    queryParams: { itemsId: x },
                    queryParamsHandling: 'merge',
                }
            );
        });
    }

    private initItemChooses(): void {
        // this.activatedRoute.queryParams.pipe(
        //     takeUntil(this.destroy$),
        //     filter(x => x !== undefined),
        //     map(x => x["itemsId"] ? x["itemsId"] as string : this.localStorageService.getItem<string>(KeyEnum.KEY_BUILD)),
    this.urlServices.itemsId$.pipe(
            filter(x => x !== undefined && x !== null),
            take(1),
            map(x => x.split(",")),
            tap(x => x.forEach(id => this.setItemWithIdItem(parseInt(id))))
        ).subscribe();
    }

    private calculTotal(list: Item [], nbElements: number, idMaitrises: number[], multiplicateurElem: number, idResistances: number[], denouement: boolean, noElem: boolean, noSecondary: boolean, chaos: boolean): void {
        let weight = 0;
        let resistance = 0;
        let maitrise = 0;
        list.forEach(x => {
            const tempResis  = this.itemService.calculResistancesForAnItem(x, idResistances);
            const tempMaitrise = this.itemService.calculMaitrisesForAnItem(x, nbElements, idMaitrises, multiplicateurElem, denouement, noElem, noSecondary, chaos);
            resistance+= tempResis;
            maitrise+= tempMaitrise;
            weight+= this.itemService.calculWeight(tempResis, tempMaitrise, x.level)
        })
        this.totalWeight.next(Math.trunc(weight));
        this.totalMaitrises.next(Math.trunc(maitrise));
        this.totalResistances.next(Math.trunc(resistance));
    }

    private setItemWithIdItem(idItem: number): void {
        this.itemService.searchItem(idItem)
        .pipe(
            first(),
            filter(x => x !== undefined)
        ).subscribe(item => {
                const itemType = this.itemTypeService.getItemType(item.itemTypeId);
                if(!itemType) {return ;} 
                this.setItem(itemType, item, false)
            }
        );
    }

    public cleanItemChoosen(): void {
        this.indexAnneau = 0;
        this.mapItem.forEach((value, key) => { value.next(key === ItemTypeEnum.ANNEAU ? [undefined, undefined] : [undefined]) });
    }

    public setIdItemsFromBuild(idItems: string): void {
        this.cleanItemChoosen();
        this.idItems.next(idItems);
        const idItemList = idItems.split(",");
        if(!idItemList) {return;}
        idItemList.forEach(idItem => {
            const item = this.itemService.getItem(parseInt(idItem));
            if(!item) {return;}

            const itemType = this.itemTypeService.getItemType(item.itemTypeId);
            if(!itemType) {return;}

            this.setItem(itemType, item, false)
        })
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
                iif(() => x !== undefined && !!x[0]?.itemTypeId && this.itemTypeService.getItemType(x[0]?.itemTypeId) === ItemTypeEnum.DEUX_MAINS,
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
    public setItem(itemType: ItemTypeEnum, item: Item, deleteItem = true): void {
        of(null).pipe(
            first(),
            switchMap(() => 
                iif(() => deleteItem, 
                    this.deleteItemInBuild(item).pipe(filter(itemFound => !itemFound)),
                    of(null))),
            switchMap(() => this.ensureUniqueRelic(item)),
            switchMap(() => this.ensureCompatibleWithSecondHand(itemType, item)),
            switchMap(() => this.ensureCompatibleWithFirstHand(itemType, item)),
            switchMap(() => this.handleRings(itemType, item)),
            switchMap(() => this.handleDeuxMains(itemType, item)),
            switchMap(() => this.finalEquip(itemType, item))
        ).subscribe();
    }

    private ensureUniqueRelic(item: Item): Observable<null> {
        return [RarityItemEnum.EPIQUE, RarityItemEnum.RELIQUE].includes(item.rarity)
            ? this.deleteFirstItemOnRarity(item.rarity)
            : of(null);
    }
    
    private ensureCompatibleWithSecondHand(itemType: ItemTypeEnum, item: Item): Observable<null> {
        if (![ItemTypeEnum.DAGUE, ItemTypeEnum.BOUCLIER].includes(itemType)) {
            return of(null);
        }
    
        return this.getObsItem(ItemTypeEnum.UNE_MAIN).pipe(
            first(),
            tap(() => this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([item])),
            map(x => x[0]),
            filter(x => x !== undefined && this.itemTypeService.getItemType(x.itemTypeId) === ItemTypeEnum.DEUX_MAINS),
            tap(() => this.mapItem.get(ItemTypeEnum.UNE_MAIN)?.next([undefined])),
            map(() => null)
        );
    }
    
    private ensureCompatibleWithFirstHand(itemType: ItemTypeEnum, item: Item): Observable<null> {
        if (itemType !== ItemTypeEnum.UNE_MAIN) {
            return of(null);
        }
    
        return this.getObsItem(ItemTypeEnum.BOUCLIER).pipe(
            first(),
            tap(() => this.mapItem.get(ItemTypeEnum.UNE_MAIN)?.next([item])),
            map(x => x[0]),
            filter(x => x !== undefined && this.itemTypeService.getItemType(x.itemTypeId) === ItemTypeEnum.DEUX_MAINS),
            tap(() => this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([undefined])),
            map(() => null)
        );
    }
    
    private handleRings(itemType: ItemTypeEnum, item: Item): Observable<null> {
        if (itemType !== ItemTypeEnum.ANNEAU) {
            return of(null);
        }
    
        return this.getObsItem(ItemTypeEnum.ANNEAU).pipe(
            first(),
            switchMap(list =>
                !list.find(anneau => anneau?.title === item.title)
                    ? of(list).pipe(
                        map(oldList => {
                            const newList = [...oldList];
                            newList[this.indexAnneau] = item;
                            return newList;
                        }),
                        tap(updatedList => this.mapItem.get(ItemTypeEnum.ANNEAU)?.next(updatedList)),
                        tap(() => this.indexAnneau = this.indexAnneau === 0 ? 1 : 0)
                    )
                    : of(null)
            ),
            map(() => null)
        );
    }
    
    private handleDeuxMains(itemType: ItemTypeEnum, item: Item): Observable<null> {
        if (itemType !== ItemTypeEnum.DEUX_MAINS) {
            return of(null);
        }
    
        return of(null).pipe(
            tap(() => {
                this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([item]);
                this.mapItem.get(ItemTypeEnum.UNE_MAIN)?.next([item]);
            })
        );
    }
    
    private finalEquip(itemType: ItemTypeEnum, item: Item): Observable<null> {
        if (itemType === ItemTypeEnum.ANNEAU) {
            return of(null); // déjà géré dans `handleRings`
        }
    
        return of(null).pipe(
            tap(() => this.mapItem.get(itemType)?.next([item]))
        );
    }
    

    private deleteFirstItemOnRarity(rarity: RarityItemEnum):Observable<null> {
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
                const itemTypeId=  list.find(x => x !== undefined)?.itemTypeId;
                if(!itemTypeId) { return; }
                const itemType = this.itemTypeService.getItemType(itemTypeId); 

                if( itemType === ItemTypeEnum.DEUX_MAINS) { this.mapItem.get(ItemTypeEnum.UNE_MAIN)?.next([undefined]); this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([undefined]) } 
                else if(itemType === ItemTypeEnum.DAGUE) { this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([undefined]) } 
                else if (itemType === ItemTypeEnum.ANNEAU) {
                    const indexRarity = list.findIndex(x => x?.rarity === rarity);
                    this.indexAnneau = indexRarity;
                    list[indexRarity] = undefined;
                    this.mapItem.get(ItemTypeEnum.ANNEAU)?.next(list);
                } else if(itemType !== undefined) {
                    this.mapItem.get(itemType)?.next([undefined])
                }
            })),
            map(() => null)
        )
    }

    private deleteItemInBuild(newItem: Item):Observable<boolean> {
        let itemFind = false;
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
            map(itemList => itemList.filter(list => list.find(item => item?.id === newItem.id))),
            tap(itemList => itemList.forEach(list => {
                const itemTypeId=  list.find(x => x !== undefined)?.itemTypeId;
                if(!itemTypeId) { return; }
                itemFind = true;
                const itemType = this.itemTypeService.getItemType(itemTypeId); 

                if (itemType === ItemTypeEnum.DEUX_MAINS) { this.mapItem.get(ItemTypeEnum.UNE_MAIN)?.next([undefined]); this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([undefined]) }
                else if (itemType === ItemTypeEnum.DAGUE) { this.mapItem.get(ItemTypeEnum.BOUCLIER)?.next([undefined]) }
                else if (itemType === ItemTypeEnum.ANNEAU) {
                    const index = list.findIndex(x => x?.id === newItem.id);
                    list[index] = undefined;
                    this.indexAnneau = index;
                    this.mapItem.get(ItemTypeEnum.ANNEAU)?.next(list);
                } else if(itemType !== undefined) {
                    this.mapItem.get(itemType)?.next([undefined])
                }
            })),
            map(() => itemFind)
        )
    }
}