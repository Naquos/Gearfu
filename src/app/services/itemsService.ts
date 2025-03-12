import { Injectable } from "@angular/core";
import itemsJson from "../../../public/items.json";
import { Item } from "../models/item";
import { MaitrisesServices } from "./maitrisesService";
import { combineLatest, map, Observable, of, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class ItemsService {
    protected items: Item[] = [];

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

    getItems(itemTypeIds: number[],
             rarity: number[],
             levelMin: number,
             levelMax: number): Observable<Item[]> {
        ;
        return combineLatest([this.maitrisesService.obsNbElements(), this.maitrisesService.obsIdMaitrises()])
        .pipe(map(([nbElements, idMaitrises]) => {
            return this.items.filter(x =>  itemTypeIds.length === 0 || itemTypeIds.includes(x.itemTypeId))
            .filter(x => rarity.length === 0 || rarity.includes(x.rarity))
            .filter(x => x.level >= levelMin && x.level <= levelMax)
            .sort((a,b) => {
                const poidsItemA = this.calculResistancesForAnItem(a) + this.calculMaitrisesForAnItem(a, nbElements, idMaitrises);
                const poidsItemB = this.calculResistancesForAnItem(b) + this.calculMaitrisesForAnItem(b, nbElements, idMaitrises);
                return poidsItemB - poidsItemA;
            }).slice(0,30);
        }))
    }

    public calculResistancesForAnItem(item: Item): number {
        let result = 0;
        const resistancesId = [82,83,84,85];
        const malusResistancesId = [96, 97, 98, 100];
        item.equipEffects.forEach(effect => {
          if(effect.actionId === 1069) { // résistances variables
            result += effect.params[0] * effect.params[2];
          } else if (effect.actionId === 80) { // résistances all
            result += effect.params[0] * 4;
          } else if (effect.actionId ===  90) { // perte résistances all
            result -= effect.params[0] * 4;
          } else if (resistancesId.includes(effect.actionId)) {
            result += effect.params[0];
          } else if (malusResistancesId.includes(effect.actionId)) {
            result -= effect.params[0];
          } 
        })
        return result;
      }

      
  public calculMaitrisesForAnItem(item: Item, nbElements: number, idMaitrises: number[]): number {
    let result = 0;
    const maitrisesIdElems = [120, 122, 123, 124,125];
    const perteMaitrisesId = [130, 132];

    item.equipEffects.forEach(effect => {
      if(maitrisesIdElems.includes(effect.actionId) ||
        idMaitrises.includes(effect.actionId) ||
       (effect.actionId === 1068 && effect.params[2] >= nbElements)) {
        result += effect.params[0];
      } else if (perteMaitrisesId.includes(effect.actionId)) {
        result -= effect.params[0];
      }
    })

    return result;
  }

}