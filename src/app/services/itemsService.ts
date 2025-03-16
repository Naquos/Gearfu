import { Injectable } from "@angular/core";
import itemsJson from "../../../public/items.json";
import { Item } from "../models/item";
import { MaitrisesServices } from "./maitrisesService";
import { BehaviorSubject, combineLatest, map, merge, Observable, tap } from "rxjs";
import { SortChoiceEnum as SortChoiceEnum } from "../models/sortChoiceEnum";
import { IdActionsEnum } from "../models/idActionsEnum";
import { ItemTypeFormServices } from "./itemTypeFormServices";

@Injectable({providedIn: 'root'})
export class ItemsService {
    protected items: Item[] = [];
    protected fullItems$ = new BehaviorSubject<Item[]>([]);

    public items$: Observable<Item[]>;

    private sort = new BehaviorSubject<SortChoiceEnum>(SortChoiceEnum.POIDS);
    public sort$ = this.sort.asObservable();

    private onlyNoSecondary = new BehaviorSubject<boolean>(false);
    public onlyNoSecondary$ = this.onlyNoSecondary.asObservable();

    private idMajor = new BehaviorSubject<number[]>([]);
    public idMajor$ = this.idMajor.asObservable() ;


    private multiplicateurElem = new BehaviorSubject<number>(1);
    public multiplicateurElem$ = this.multiplicateurElem.asObservable();

    private itemName = new BehaviorSubject<string>("");
    public itemName$ = this.itemName.asObservable();

    private rarirty = new BehaviorSubject<number[]>([]);
    public rarity$ = this.rarirty.asObservable();

    private levelMin = new BehaviorSubject<number>(200);
    public levelMin$ = this.levelMin.asObservable();

    private levelMax = new BehaviorSubject<number>(245);
    public levelMax$ = this.levelMax.asObservable();


    protected itemsFilterByLevelMin$ = combineLatest([this.fullItems$, this.levelMin$])
    .pipe(map(([items, levelMin]) => items.filter(x => x.level >= levelMin)));

    protected itemsFilterByLevelMax$ = combineLatest([this.itemsFilterByLevelMin$, this.levelMax$])
    .pipe(map(([items, levelMax]) => items.filter(x => x.level <= levelMax)));

    protected itemsFilterByRarity$ = combineLatest([this.itemsFilterByLevelMax$, this.rarirty])
    .pipe(map(([items, rarity]) => items.filter(x => rarity.length === 0 || rarity.includes(x.rarity))));

    protected itemsFilterByItemName$ = combineLatest([this.itemsFilterByRarity$, this.itemName$])
    .pipe(map(([items, itemName]) => items.filter(x => x.title.toUpperCase().includes(itemName.toUpperCase()))));

    protected itemsFilterByOnlyNoSecondary$ = combineLatest([this.itemsFilterByItemName$, this.onlyNoSecondary$])
    .pipe(map(([items, onlyNoSecondary]) => items.filter(x => !onlyNoSecondary || 
      !x.equipEffects.find(y => [IdActionsEnum.MAITRISES_CRITIQUES, IdActionsEnum.MAITRISES_DOS, IdActionsEnum.MAITRISES_MELEE, IdActionsEnum.MAITRISES_DISTANCES, IdActionsEnum.MAITRISES_SOIN, IdActionsEnum.MAITRISES_BERZERK].includes(y.actionId)))));

    protected itemsFilterByMajor$ = combineLatest([this.itemsFilterByOnlyNoSecondary$, this.idMajor$])
    .pipe(map(([items, idMajor]) => items.filter(x => this.majorIsPresent(idMajor, x))));

    protected itemsFilterByItemType$: Observable<Item[]>;

    constructor(protected maitrisesService : MaitrisesServices,
                private itemTypeFormServices: ItemTypeFormServices
    ) {
        this.initItemsList();
        this.fullItems$.next(this.items)

        this.itemsFilterByItemType$ = combineLatest([this.itemsFilterByMajor$, this.itemTypeFormServices.selected$])
          .pipe(map(([items, itemTypeIds]) => items.filter(x => itemTypeIds.length === 0 || itemTypeIds.includes(x.itemTypeId))));

        this.items$ = combineLatest([
          this.itemsFilterByItemType$,
          this.maitrisesService.nbElements$,
          this.maitrisesService.idMaitrises$,
          this.sort$,
          this.multiplicateurElem$,
        ])
        .pipe(
          tap(([items,nbElements, idMaitrises, sort, multiplicateurElem]) => this.fillItemWeightMap(items, nbElements, idMaitrises, sort, multiplicateurElem)),
          map(([items,]) => items),
          map(items => items.sort((itemA, itemB) => itemB.weightForSort - itemA.weightForSort).slice(0,30)))
    }

    private fillItemWeightMap(items: Item[], nbElements: number, idMaitrises: number[], sort: SortChoiceEnum, multiplicateurElem: number): void {
      let maxMaistrises = 0;
      let maxResistances = 0;

      if(sort === SortChoiceEnum.EQUILIBRE && items.length) {
        maxMaistrises = this.calculMaitrisesForAnItem(
          items.sort((itemA, itemB) => this.calculMaitrisesForAnItem(itemB, nbElements, idMaitrises, multiplicateurElem) - this.calculMaitrisesForAnItem(itemA, nbElements, idMaitrises, multiplicateurElem))[0], 
          nbElements, 
          idMaitrises, 
          multiplicateurElem);

          maxResistances = this.calculResistancesForAnItem(items.sort((itemA, itemB) => this.calculResistancesForAnItem(itemB) - this.calculResistancesForAnItem(itemA))[0]);
      }



      items.forEach(item => {
        if(sort === SortChoiceEnum.POIDS) {
          item.weightForSort = this.calculResistancesForAnItem(item) + this.calculMaitrisesForAnItem(item, nbElements, idMaitrises, multiplicateurElem);
        } else if (sort === SortChoiceEnum.MAITRISES) {
          item.weightForSort = this.calculMaitrisesForAnItem(item, nbElements, idMaitrises, multiplicateurElem);
        } else if (sort === SortChoiceEnum.EQUILIBRE) {
          item.weightForSort = (this.calculMaitrisesForAnItem(item, nbElements, idMaitrises, multiplicateurElem) / maxMaistrises);
          item.weightForSort += (this.calculResistancesForAnItem(item) / maxResistances);
        }
         else {
          item.weightForSort = this.calculResistancesForAnItem(item);
        }
      })
    }

    private initItemsList(): void {
        (itemsJson as [any]).forEach(x => this.items.push({
            id: x.definition.item.id,
            level: x.definition.item.level,
            rarity: x.definition.item.baseParameters.rarity,
            itemTypeId: x.definition.item.baseParameters.itemTypeId,
            equipEffects: (x.definition.equipEffects as [any]).map(equipEffect => {
                return {
                    id: equipEffect.effect.definition.id as number,
                    actionId: equipEffect.effect.definition.actionId as number,
                    params: equipEffect.effect.definition.params as number[]
                };
            }),
            title: x.title.fr,
            idImage: x.definition.item.graphicParameters.gfxId,
            weightForSort: 0
        }));
    }
    
    public searchItem(idItem : number): Item | undefined {
      return this.items.find(x => x.id === idItem);
    }

    public setItemName(value: string): void {
      this.itemName.next(value);
    }

    public setMultiplicateurElem(value: number): void {
      this.multiplicateurElem.next(value);
    }

    public setIdMajor(value: number[]): void {
      this.idMajor.next(value);
    }

    public setOnlyNoSecondary(value: boolean): void {
      this.onlyNoSecondary.next(value);
    }

    public setSort(value: SortChoiceEnum): void {
      this.sort.next(value);
    }

    public setRarity(value: number[]): void {
      this.rarirty.next(value); 
    }

    public setLevelMin(value: number): void {
      this.levelMin.next(value);
    }

    public setLevelMax(value: number): void {
      this.levelMax.next(value);
    }

    private majorIsPresent(idMajor: number[], x: Item): boolean {
      return !idMajor.find(id => (id !== IdActionsEnum.ARMURE_DONNEE_RECUE && !x.equipEffects.map(effect => effect.actionId).includes(id)) 
                              || (id === IdActionsEnum.ARMURE_DONNEE_RECUE && !x.equipEffects.find(effect => effect.actionId === IdActionsEnum.ARMURE_DONNEE_RECUE && effect.params[4] === 120 )));
    }

    public calculResistancesForAnItem(item: Item): number {
        let result = 0;
        const resistancesId = [IdActionsEnum.RESISTANCES_AIR,IdActionsEnum.RESISTANCES_EAU,IdActionsEnum.RESISTANCES_TERRE,IdActionsEnum.RESISTANCES_FEU];
        const malusResistancesId = [IdActionsEnum.PERTE_RESISTANCES_FEU, IdActionsEnum.PERTE_RESISTANCES_TERRE, IdActionsEnum.PERTE_RESISTANCE_EAU];
        item.equipEffects.forEach(effect => {
          if(effect.actionId === IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE) {
            result += effect.params[0] * effect.params[2];
          } else if (effect.actionId === IdActionsEnum.RESISTANCES_ELEMENTAIRE) {
            result += effect.params[0] * 4;
          } else if (effect.actionId ===  IdActionsEnum.PERTE_RESITANCES_ELEMENTAIRE) {
            result -= effect.params[0] * 4;
          } else if (resistancesId.includes(effect.actionId)) {
            result += effect.params[0];
          } else if (malusResistancesId.includes(effect.actionId)) {
            result -= effect.params[0];
          } 
        })
        return result;
      }

      
  public calculMaitrisesForAnItem(item: Item, nbElements: number, idMaitrises: number[], multiplicateurElem: number): number {
    let result = 0;
    const maitrisesIdElems = [IdActionsEnum.MAITRISES_ELEMENTAIRES,IdActionsEnum.MAITRISES_FEU,IdActionsEnum.MAITRISES_TERRE,IdActionsEnum.MAITRISES_EAU,IdActionsEnum.MAITRISES_AIR];
    const perteMaitrisesId = [IdActionsEnum.PERTE_MAITRISES_ELEMENTAIRES,IdActionsEnum.PERTE_MAITRISES_FEU];

    item.equipEffects.forEach(effect => {
      if(maitrisesIdElems.includes(effect.actionId) ||
        (effect.actionId === IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE && effect.params[2] >= nbElements)) {
        result += effect.params[0] * multiplicateurElem;
      } else if (idMaitrises.includes(effect.actionId)) {
        result += effect.params[0];
      }
       else if (perteMaitrisesId.includes(effect.actionId) ||
                (effect.actionId === IdActionsEnum.PERTE_MAITRISES_CRITIQUE && idMaitrises.includes(IdActionsEnum.MAITRISES_CRITIQUES)) ||
                (effect.actionId === IdActionsEnum.PERTE_MAITRISES_DOS && idMaitrises.includes(IdActionsEnum.MAITRISES_DOS)) ||
                (effect.actionId === IdActionsEnum.PERTE_MAITRISES_MELEE && idMaitrises.includes(IdActionsEnum.MAITRISES_MELEE)) ||
                (effect.actionId === IdActionsEnum.PERTE_MAITRISES_DISTANCE && idMaitrises.includes(IdActionsEnum.MAITRISES_DISTANCES)) ||
                (effect.actionId === IdActionsEnum.PERTE_MAITRISES_BERZERK && idMaitrises.includes(IdActionsEnum.MAITRISES_BERZERK)) ) {
        result -= effect.params[0];
      }
    })

    return result;
  }

}