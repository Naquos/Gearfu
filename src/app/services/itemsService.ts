import { Injectable } from "@angular/core";
import itemsJson from "../../../public/items.json";
import { Item } from "../models/item";
import { MaitrisesServices } from "./maitrisesService";
import { BehaviorSubject, combineLatest, map, Observable } from "rxjs";
import { SortChoiceEnum as SortChoiceEnum } from "../models/sortChoiceEnum";
import { IdActionsEnum } from "../models/idActionsEnum";

@Injectable({providedIn: 'root'})
export class ItemsService {
    protected items: Item[] = [];
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

    constructor(protected maitrisesService : MaitrisesServices) {
        this.initItemsList();

    }

    private initItemsList() {
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
            idImage: x.definition.item.graphicParameters.gfxId
        }));
    }

    private sortItem(itemA: Item, itemB:Item, nbElements: number, idMaitrises: number[], sort: SortChoiceEnum, multiplicateurElem: number): number {
      if(sort === SortChoiceEnum.POIDS) {
        const poidsItemA = this.calculResistancesForAnItem(itemA) + this.calculMaitrisesForAnItem(itemA, nbElements, idMaitrises, multiplicateurElem);
        const poidsItemB = this.calculResistancesForAnItem(itemB) + this.calculMaitrisesForAnItem(itemB, nbElements, idMaitrises, multiplicateurElem);
        return poidsItemB - poidsItemA;
      } else if (sort === SortChoiceEnum.MAITRISES) {
        return this.calculMaitrisesForAnItem(itemB, nbElements, idMaitrises, multiplicateurElem) -  this.calculMaitrisesForAnItem(itemA, nbElements, idMaitrises, multiplicateurElem);
      } else {
        return this.calculResistancesForAnItem(itemB) - this.calculResistancesForAnItem(itemA);
      }
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


    public getItems(itemTypeIds: number[],
             rarity: number[],
             levelMin: number,
             levelMax: number): Observable<Item[]> {
        ;
        return combineLatest([this.maitrisesService.nbElements$, this.maitrisesService.idMaitrises$, this.sort$, this.onlyNoSecondary$, this.idMajor$, this.multiplicateurElem$, this.itemName$])
        .pipe(map(([nbElements, idMaitrises, sort, onlyNoSecondary, idMajor, multiplicateurElem, itemName]) => {
          const listSecondaryMaitrises = [IdActionsEnum.MAITRISES_CRITIQUES, IdActionsEnum.MAITRISES_DOS, IdActionsEnum.MAITRISES_MELEE, IdActionsEnum.MAITRISES_DISTANCES, IdActionsEnum.MAITRISES_SOIN, IdActionsEnum.MAITRISES_BERZERK];
            return this.items
            .filter(x => x.level >= levelMin && x.level <= levelMax)
            .filter(x =>  itemTypeIds.length === 0 || itemTypeIds.includes(x.itemTypeId))
            .filter(x => rarity.length === 0 || rarity.includes(x.rarity))
            .filter(x => x.title.toUpperCase().includes(itemName.toUpperCase()))
            .filter(x => !onlyNoSecondary || !x.equipEffects.find(y => listSecondaryMaitrises.includes(y.actionId)))
            .filter(x => this.majorIsPresent(idMajor, x))
            .sort((a,b) => this.sortItem(a, b, nbElements, idMaitrises, sort, multiplicateurElem)).slice(0,30);
        }))
    }

  private majorIsPresent(idMajor: number[], x: Item): unknown {
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