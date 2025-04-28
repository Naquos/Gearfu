import { Injectable } from "@angular/core";
import itemsJson from "../../../../public/items.json";
import { BehaviorSubject, combineLatest, map, Observable, tap } from "rxjs";
import { SortChoiceEnum as SortChoiceEnum } from "../../models/enum/sortChoiceEnum";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { ItemTypeFormServices } from "../form/itemTypeFormServices";
import { ItemTypeEnum } from "../../models/enum/itemTypeEnum";
import { CraftableChoiceEnum } from "../../models/enum/craftableChoiceEnum";
import { ParameterMajorActionEnum } from "../../models/enum/parameterMajorActionEnum";
import { TranslateService } from "@ngx-translate/core";
import { SortChoiceFormService } from "../form/sortChoiceFormService";
import { CraftableChoiceFormService } from "../form/craftableChoiceFormService";
import { OnlyNoSecondaryFormService } from "../form/onlyNoSecondaryFormService";
import { MajorPresentFormService } from "../form/majorPresentFormService";
import { ModifierElemMaitrisesFormService } from "../form/modifierElemMaitrisesFormService";
import { SearchItemNameFormService } from "../form/searchItemNameFormService";
import { RareteItemFormServices } from "../form/rareteItemFormService";
import { ItemLevelFormService } from "../form/itemLevelFormService";
import { ResistancesFormService } from "../form/resistancesFormService";
import { MaitrisesFormService } from "../form/maitrisesFormService";
import { Item } from "../../models/data/item";
import { MajorAction } from "../../models/data/majorActions";

@Injectable({providedIn: 'root'})
export class ItemsService {
    protected items: Item[] = [];
    protected readonly fullItems$ = new BehaviorSubject<Item[]>([]);

    public items$: Observable<Item[]>;

    public itemsFilterByItemName$!: Observable<Item[]>;

    protected itemsFilters$!: Observable<Item[]>;

    constructor(private itemTypeFormServices: ItemTypeFormServices,
                private translateService: TranslateService,
                private onlyNoSecondaryFormService: OnlyNoSecondaryFormService,
                private sortChoiceFormService: SortChoiceFormService,
                private majorPresentFormService: MajorPresentFormService,
                private modifierElemMaitrisesFormService: ModifierElemMaitrisesFormService,
                private searchItemNameFormService: SearchItemNameFormService,
                private rareteItemFormService: RareteItemFormServices,
                private itemLevelFormService: ItemLevelFormService,
                private craftableChoiceFormService: CraftableChoiceFormService,
                private resistanceFormService: ResistancesFormService,
                private maitrisesFormService: MaitrisesFormService,
    ) {
        this.initItemsList();
        this.initFilter();

        this.items$ = combineLatest([
          this.itemsFilters$,
          this.maitrisesFormService.nbElements$,
          this.maitrisesFormService.idMaitrises$,
          this.sortChoiceFormService.sort$,
          this.modifierElemMaitrisesFormService.multiplicateurElem$,
          this.modifierElemMaitrisesFormService.denouement$,
          this.resistanceFormService.idResistances$
        ])
        .pipe(
          tap(([items,nbElements, idMaitrises, sort, multiplicateurElem, denouement, idResistances]) => this.fillItemWeightMap(items, nbElements, idMaitrises, sort, multiplicateurElem, idResistances, denouement)),
          map(([items,]) => items),
          map(items => items.sort((itemA, itemB) => itemB.weightForSort - itemA.weightForSort).slice(0,32)))
    }

    private initFilter(): void {
      this.items = this.items.filter(x => ![480,812].includes(x.itemTypeId))
      this.fullItems$.next(this.items);

      this.itemsFilterByItemName$ = combineLatest([this.fullItems$, this.searchItemNameFormService.itemName$])
      .pipe(map(([items, itemName]) => items.filter(x => this.normalizeString(x.title[this.translateService.currentLang as keyof typeof x.title].toString()).includes(this.normalizeString(itemName)))));
  
      const itemsFilterByLevelMin$ = combineLatest([this.itemsFilterByItemName$, this.itemLevelFormService.levelMin$])
      .pipe(map(([items, levelMin]) => items.filter(x => x.level >= levelMin || x.itemTypeId === ItemTypeEnum.FAMILIER)));
  
      const itemsFilterByLevelMax$ = combineLatest([itemsFilterByLevelMin$, this.itemLevelFormService.levelMax$])
      .pipe(map(([items, levelMax]) => items.filter(x => x.level <= levelMax || x.itemTypeId === ItemTypeEnum.FAMILIER)));
  
      const itemsFilterByRarity$ = combineLatest([itemsFilterByLevelMax$, this.rareteItemFormService.rarity$])
      .pipe(map(([items, rarity]) => items.filter(x => rarity.length === 0 || rarity.includes(x.rarity))));
  
      const itemsFilterByOnlyNoSecondary$ = combineLatest([itemsFilterByRarity$, this.onlyNoSecondaryFormService.onlyNoSecondary$, this.modifierElemMaitrisesFormService.denouement$])
      .pipe(map(([items, onlyNoSecondary, denouement]) => 
        items.filter(x => !onlyNoSecondary || (
          !x.equipEffects.find(y => [IdActionsEnum.MAITRISES_DOS, IdActionsEnum.MAITRISES_MELEE, IdActionsEnum.MAITRISES_DISTANCES, IdActionsEnum.MAITRISES_SOIN, IdActionsEnum.MAITRISES_BERZERK].includes(y.actionId))
          && (denouement || !x.equipEffects.find(y => y.actionId === IdActionsEnum.MAITRISES_CRITIQUES))))
        ))
  
      const itemsFilterByMajor$ = combineLatest([itemsFilterByOnlyNoSecondary$, this.majorPresentFormService.idMajor$])
      .pipe(map(([items, idMajor]) => items.filter(x => this.majorIsPresent(idMajor, x))));
  
      const itemsFilterCraftable$ = combineLatest([itemsFilterByMajor$, this.craftableChoiceFormService.craftable$]).pipe(
        map(([items, craftable]) => {
          if(craftable === CraftableChoiceEnum.CRAFT_DROP) {
            return items;
          } else if(craftable === CraftableChoiceEnum.CRAFT) {
            return items.filter(x => x.craftable);
          } 
          return items.filter(x => x.dropable);
        })
      );

      this.itemsFilters$ = combineLatest([itemsFilterCraftable$, this.itemTypeFormServices.selected$])
      .pipe(map(([items, itemTypeIds]) => items.filter(x => itemTypeIds.length === 0 || itemTypeIds.includes(x.itemTypeId))));
    }

    private normalizeString(str: string): string {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    private fillItemWeightMap(items: Item[], nbElements: number, idMaitrises: number[], sort: SortChoiceEnum, multiplicateurElem: number, idResistances: number[], denouement: boolean): void {
      let maxMaistrises = 0;
      let maxResistances = 0;

      items.forEach(item => {
        item.resistance = Math.trunc(this.calculResistancesForAnItem(item, idResistances));
        item.maitrise = Math.trunc(this.calculMaitrisesForAnItem(item, nbElements, idMaitrises, multiplicateurElem, denouement));
        item.weight = this.calculWeight(item.resistance, item.maitrise);
        item.weightForSort = 0;
      })

      if(sort === SortChoiceEnum.EQUILIBRE && items.length) {
          maxMaistrises =  items.sort((itemA, itemB) => itemB.maitrise - itemA.maitrise)[0].maitrise;
          maxResistances = items.sort((itemA, itemB) => itemB.resistance - itemA.resistance)[0].resistance;
      }

      items.forEach(item => {
        if(sort === SortChoiceEnum.POIDS) {
          item.weightForSort = item.weight;
        } else if (sort === SortChoiceEnum.MAITRISES) {
          item.weightForSort = item.maitrise;
        } else if (sort === SortChoiceEnum.EQUILIBRE) {
          item.weightForSort =  item.maitrise / maxMaistrises;
          item.weightForSort += 1.2 * (item.resistance / maxResistances);
        } else if (sort === SortChoiceEnum.POINT_DE_VIE) {
          item.weightForSort = item.equipEffects.find(x => x.actionId === IdActionsEnum.POINT_DE_VIE)?.params[0] ?? 0;
          item.weightForSort -= item.equipEffects.find(x => x.actionId === IdActionsEnum.PERTE_POINT_DE_VIE)?.params[0] ?? 0;
        } else if (sort === SortChoiceEnum.PARADE_ARMURE_DONNEE) {
          item.equipEffects.forEach(effect => {
            if(effect.actionId === IdActionsEnum.PARADE ||
              effect.actionId === IdActionsEnum.ARMURE_DONNEE_RECUE && effect.params[4] === ParameterMajorActionEnum.ARMURE_DONNEE
            ) {
              item.weightForSort += effect.params[0]
            }
          })
        } else if(sort === SortChoiceEnum.TACLE) {
          item.weightForSort = item.equipEffects.find(x => x.actionId === IdActionsEnum.TACLE)?.params[0] ?? 0;
          item.weightForSort -= item.equipEffects.find(x => x.actionId === IdActionsEnum.PERTE_TACLE)?.params[0] ?? 0;
        } else if(sort === SortChoiceEnum.ESQUIVE) {  
          item.weightForSort = item.equipEffects.find(x => x.actionId === IdActionsEnum.ESQUIVE)?.params[0] ?? 0;
          item.weightForSort -= item.equipEffects.find(x => x.actionId === IdActionsEnum.PERTE_ESQUIVE)?.params[0] ?? 0;
        } else if(sort === SortChoiceEnum.TACLE_ESQUIVE) {
          item.weightForSort = item.equipEffects.find(x => x.actionId === IdActionsEnum.TACLE)?.params[0] ?? 0;
          item.weightForSort += item.equipEffects.find(x => x.actionId === IdActionsEnum.ESQUIVE)?.params[0] ?? 0;
          item.weightForSort -= item.equipEffects.find(x => x.actionId === IdActionsEnum.PERTE_TACLE)?.params[0] ?? 0;
          item.weightForSort -= item.equipEffects.find(x => x.actionId === IdActionsEnum.PERTE_ESQUIVE)?.params[0] ?? 0;
        } else if(sort === SortChoiceEnum.CRITIQUE) {
          item.weightForSort = item.equipEffects.find(x => x.actionId === IdActionsEnum.COUP_CRITIQUE)?.params[0] ?? 0;
          item.weightForSort -= item.equipEffects.find(x => x.actionId === IdActionsEnum.PERTE_COUP_CRITIQUE)?.params[0] ?? 0;
        } else if (sort === SortChoiceEnum.PARADE) {
          item.weightForSort = item.equipEffects.find(x => x.actionId === IdActionsEnum.PARADE)?.params[0] ?? 0;
          item.weightForSort -= item.equipEffects.find(x => x.actionId === IdActionsEnum.PERTE_PARADE)?.params[0] ?? 0;
        }else {
          item.weightForSort = item.resistance;
        }
      })
    }

    public calculWeight(resistance: number, maitrises: number): number {
      return Math.trunc(1.2 * resistance + maitrises);
    }

    private initItemsList(): void {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (itemsJson as [any]).forEach(x => this.items.push({
            id: x.definition.item.id,
            level: x.definition.item.level,
            rarity: x.definition.item.baseParameters.rarity,
            itemTypeId: x.definition.item.baseParameters.itemTypeId,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            equipEffects: (x.definition.equipEffects as [any]).map(equipEffect => {
                return {
                    id: equipEffect.effect.definition.id as number,
                    actionId: equipEffect.effect.definition.actionId as number,
                    params: equipEffect.effect.definition.params as number[]
                };
            }),
            title: {
              fr: x.title.fr,
              en: x.title.en,
              es: x.title.es,
              pt: x.title.pt
            },
            idImage: x.definition.item.graphicParameters.gfxId,
            weightForSort: 0,
            craftable: x.definition.item.craftable,
            dropable: x.definition.item.dropable,
            weight: 0,
            maitrise: 0,
            resistance: 0
        }));
    }
    
    public searchItem(idItem : number): Observable<Item | undefined> {
      return this.fullItems$.pipe(map(x => x.find(x => x.id === idItem)));
    }

    public getItem(idItem : number): Item | undefined {
      return this.fullItems$.value.find(x => x.id === idItem);
    }

    private majorIsPresent(idMajor: MajorAction[], x: Item): boolean {
      return !idMajor.find(major => (major.id !== IdActionsEnum.ARMURE_DONNEE_RECUE && !x.equipEffects.map(effect => effect.actionId).includes(major.id)) 
                              || (major.id === IdActionsEnum.ARMURE_DONNEE_RECUE && !x.equipEffects.find(effect => effect.actionId === IdActionsEnum.ARMURE_DONNEE_RECUE && effect.params[4] === major.parameter)));
    }

    public calculResistancesForAnItem(item: Item, idResistances: number[]): number {
        let result = 0;
        const resisElemId = [IdActionsEnum.RESISTANCES_AIR,IdActionsEnum.RESISTANCES_EAU,IdActionsEnum.RESISTANCES_TERRE,IdActionsEnum.RESISTANCES_FEU];
        const malusResisElemId = [IdActionsEnum.PERTE_RESISTANCES_FEU, IdActionsEnum.PERTE_RESISTANCES_TERRE, IdActionsEnum.PERTE_RESISTANCE_EAU];
        const nbElements = idResistances.length === 0 ? 4 : idResistances.length;
        item.equipEffects.forEach(effect => {
          if(effect.actionId === IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE && effect.params[2] >= idResistances.length) {
            result += effect.params[0] * Math.min(effect.params[2], nbElements);
          } else if (effect.actionId === IdActionsEnum.RESISTANCES_ELEMENTAIRE) {
            result += effect.params[0] * nbElements;
          } else if (effect.actionId ===  IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE) {
            result -= effect.params[0] * nbElements;
          } else if (resisElemId.includes(effect.actionId) && (nbElements === 4 || idResistances.includes(effect.actionId))) {
            result += effect.params[0];
          } else if ((nbElements === 4 && malusResisElemId.includes(effect.actionId)) ||
                    (effect.actionId === IdActionsEnum.PERTE_RESISTANCES_FEU && idResistances.includes(IdActionsEnum.RESISTANCES_FEU)) ||
                    (effect.actionId === IdActionsEnum.PERTE_RESISTANCES_TERRE && idResistances.includes(IdActionsEnum.RESISTANCES_TERRE)) ||
                    (effect.actionId === IdActionsEnum.PERTE_RESISTANCE_EAU && idResistances.includes(IdActionsEnum.RESISTANCES_EAU))) {
            result -= effect.params[0];
          } 
        })
        return result;
      }

      
  public calculMaitrisesForAnItem(item: Item, nbElements: number, idMaitrises: number[], multiplicateurElem: number, denouement: boolean): number {
    let result = 0;
    const maitrisesIdElems = [IdActionsEnum.MAITRISES_FEU,IdActionsEnum.MAITRISES_TERRE,IdActionsEnum.MAITRISES_EAU,IdActionsEnum.MAITRISES_AIR];
    const perteMaitrisesId = [IdActionsEnum.PERTE_MAITRISES_ELEMENTAIRES,IdActionsEnum.PERTE_MAITRISES_FEU];
    const idMaitrisesWithoutElem = [...idMaitrises].filter(x => !maitrisesIdElems.includes(x));

    item.equipEffects.forEach(effect => {
      if(effect.actionId === IdActionsEnum.MAITRISES_ELEMENTAIRES ||
        (effect.actionId === IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE && effect.params[2] >= nbElements) ||
        (effect.actionId === IdActionsEnum.MAITRISES_CRITIQUES && denouement)) {
          result += effect.params[0] * multiplicateurElem;
      } else if (idMaitrisesWithoutElem.includes(effect.actionId)) {
        result += effect.params[0];
      }
       else if (perteMaitrisesId.includes(effect.actionId) ||
                (effect.actionId === IdActionsEnum.PERTE_MAITRISES_CRITIQUE && idMaitrises.includes(IdActionsEnum.MAITRISES_CRITIQUES)) ||
                (effect.actionId === IdActionsEnum.PERTE_MAITRISES_DOS && idMaitrises.includes(IdActionsEnum.MAITRISES_DOS)) ||
                (effect.actionId === IdActionsEnum.PERTE_MAITRISES_MELEE && idMaitrises.includes(IdActionsEnum.MAITRISES_MELEE)) ||
                (effect.actionId === IdActionsEnum.PERTE_MAITRISES_DISTANCE && idMaitrises.includes(IdActionsEnum.MAITRISES_DISTANCES)) ||
                (effect.actionId === IdActionsEnum.PERTE_MAITRISES_BERZERK && idMaitrises.includes(IdActionsEnum.MAITRISES_BERZERK))) {
        result -= effect.params[0];
      }
    })

    const effectMaitrises = item.equipEffects.find(x => maitrisesIdElems.includes(x.actionId) && (nbElements === 0 || (nbElements === 1 && idMaitrises.includes(x.actionId)))); 
    if(effectMaitrises) {
      result += effectMaitrises.params[0] * multiplicateurElem;
    }
    return result;
  }
}