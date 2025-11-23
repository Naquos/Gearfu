import { inject, Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, map, Observable, take, tap } from "rxjs";
import { SortChoiceEnum as SortChoiceEnum } from "../../models/enum/sortChoiceEnum";
import { IdActionsEnum } from "../../models/enum/idActionsEnum";
import { ItemTypeFormServices } from "../form/itemTypeFormServices";
import { ParameterMajorActionEnum } from "../../models/enum/parameterMajorActionEnum";
import { TranslateService } from "@ngx-translate/core";
import { SortChoiceFormService } from "../form/sortChoiceFormService";
import { OnlyNoSecondaryFormService } from "../form/onlyNoSecondaryFormService";
import { MajorPresentFormService } from "../form/majorPresentFormService";
import { ModifierMecanismFormService } from "../form/modifierElemMaitrisesFormService";
import { SearchItemNameFormService } from "../form/searchItemNameFormService";
import { RareteItemFormServices } from "../form/rareteItemFormService";
import { ItemLevelFormService } from "../form/itemLevelFormService";
import { ResistancesFormService } from "../form/resistancesFormService";
import { MaitrisesFormService } from "../form/maitrisesFormService";
import { Item } from "../../models/data/item";
import { MajorAction } from "../../models/data/majorActions";
import { AnkamaCdnFacade } from "../ankama-cdn/ankamaCdnFacade";
import { OnlyNoElemFormService } from "../form/onlyNoElemFormService";
import { ReverseFormService } from "../form/reverseFormService";
import { ItemTypeDefinitionEnum } from "../../models/enum/itemTypeDefinitionEnum";
import { EffetMaitrisesChassesEnum } from "../../models/enum/effetMaitrisesChassesEnum";
import { EffetResistancesChassesEnum } from "../../models/enum/effetResistancesChassesEnum";
import { RecipeResultsCdn } from "../../models/ankama-cdn/recipeResulsCdn";
import { WakassetCdnFacade } from "../wakasset-cdn/wakassetCdnFacade";
import { MonsterDropCdn } from "../../models/wakasset/monsterDropCdn";
import { ObtentionFormService } from "../form/obtentionFormService";
import { RarityItemEnum } from "../../models/enum/rarityItemEnum";
import { IdPierreDonjonEnum } from "../../models/enum/idPierreDonjonEnum";
import { JobsItemCdn } from "../../models/ankama-cdn/jobsItemCdn";

@Injectable({providedIn: 'root'})
export class ItemsService {
    private readonly itemTypeFormServices = inject(ItemTypeFormServices);
    private readonly translateService = inject(TranslateService);
    private readonly onlyNoSecondaryFormService = inject(OnlyNoSecondaryFormService);
    private readonly sortChoiceFormService = inject(SortChoiceFormService);
    private readonly majorPresentFormService = inject(MajorPresentFormService);
    private readonly modifierElemMaitrisesFormService = inject(ModifierMecanismFormService);
    private readonly searchItemNameFormService = inject(SearchItemNameFormService);
    private readonly rareteItemFormService = inject(RareteItemFormServices);
    private readonly itemLevelFormService = inject(ItemLevelFormService);
    private readonly resistanceFormService = inject(ResistancesFormService);
    private readonly maitrisesFormService = inject(MaitrisesFormService);
    private readonly ankamaCdnFacade = inject(AnkamaCdnFacade);
    private readonly wakassetCdnFacade = inject(WakassetCdnFacade);
    private readonly onlyNoElemFormService = inject(OnlyNoElemFormService);
    private readonly reverseFormService = inject(ReverseFormService);
    private readonly obtentionFormService = inject(ObtentionFormService);

    private readonly idPierresList = [
      IdPierreDonjonEnum.AVENTURE,
      IdPierreDonjonEnum.EQUILIBRE,
      IdPierreDonjonEnum.VITESSSE,
      IdPierreDonjonEnum.ENTOURAGE,
      IdPierreDonjonEnum.ULTIME
    ]

    protected items: Item[] = [];
    protected readonly fullItems$ = new BehaviorSubject<Item[]>([]);

    public items$?: Observable<Item[]>;

    public itemsFilterByItemName$!: Observable<Item[]>;

    protected itemsFilters$!: Observable<Item[]>;

    private static readonly ARMURE_DONNEE_RECUE_LIST = [IdActionsEnum.ARMURE_DONNEE_RECUE, IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE];

    private recipesByProductId = new Map<number, RecipeResultsCdn>();
    private itemsByImage = new Map<number, Item[]>();
    private monsterDropsByItemId = new Map<number, MonsterDropCdn[]>();
    private archiIds = new Set<number>();

    public init(): void {
        this.initItemsList();
        this.initFilter();

        const itemsFilters$ = combineLatest([
          this.itemsFilters$,
          this.maitrisesFormService.nbElements$,
          this.maitrisesFormService.idMaitrises$,
          this.sortChoiceFormService.sort$,
          this.modifierElemMaitrisesFormService.multiplicateurElem$,
          this.modifierElemMaitrisesFormService.denouement$,
          this.resistanceFormService.idResistances$,
          this.onlyNoElemFormService.onlyNoElem$,
          this.onlyNoSecondaryFormService.onlyNoSecondary$,
          this.modifierElemMaitrisesFormService.chaos$
        ])
        .pipe(
          tap(([items,nbElements, idMaitrises, sort, multiplicateurElem, denouement, idResistances, onlyNoElem, onlyNoSecondary, chaos]) => 
            this.fillItemWeightMap(items, nbElements, idMaitrises, sort, multiplicateurElem, idResistances, denouement, onlyNoElem, onlyNoSecondary, chaos)),
          map(([items,]) => items));

          this.items$ = combineLatest([itemsFilters$, this.reverseFormService.reverse$])
          .pipe(
            map(([items, reverse]) => {
              const sortedItems = items.sort(this.sortItems());
              return reverse  ? sortedItems.reverse() : sortedItems;
            }),
            map(items => items.slice(0,32)));
    }

    private sortItems(): ((a: Item, b: Item) => number) | undefined {
      return (itemA, itemB) => itemB.weightForSort > itemA.weightForSort ? 1 : itemB.weightForSort === itemA.weightForSort ? itemB.weight - itemA.weight : -1;
    }

    private isNotWIP(item: Item): boolean {
      return !!item.title;
    }

    private initFilter(): void {
      this.items = this.items.filter(x => ![ItemTypeDefinitionEnum.LANTERNE, ItemTypeDefinitionEnum.STATISTIQUES, ItemTypeDefinitionEnum.SUBLIMATIONS].includes(x.itemTypeId))
        .filter(x => this.isNotWIP(x));
      this.fullItems$.next(this.items);

      this.itemsFilterByItemName$ = combineLatest([this.fullItems$, this.searchItemNameFormService.itemName$])
      .pipe(map(([items, itemName]) => items.filter(x => this.normalizeString(x.title[this.translateService.currentLang as keyof typeof x.title].toString()).includes(this.normalizeString(itemName)))));

      const itemsFilterByDrop$ = combineLatest([this.itemsFilterByItemName$, this.obtentionFormService.drop$])
      .pipe(map(([items, drop]) => items.filter(x => !drop || x.isDropable === false)));
      
      const itemsFilterByCraftable$ = combineLatest([itemsFilterByDrop$, this.obtentionFormService.craftable$])
      .pipe(map(([items, craftable]) => items.filter(x =>  !craftable || x.isCraftable === false)));

      const itemsFilterByBoss$ = combineLatest([itemsFilterByCraftable$, this.obtentionFormService.boss$])
      .pipe(map(([items, boss]) => items.filter(x => !boss || x.isDropableOnBoss === false)));

      const itemsFilterByArchi$ = combineLatest([itemsFilterByBoss$, this.obtentionFormService.archi$])
      .pipe(map(([items, archi]) => items.filter(x => !archi || x.isDropableOnArchi === false)));
  
      const itemsFilterByLevelMin$ = combineLatest([itemsFilterByArchi$, this.itemLevelFormService.levelMin$])
      .pipe(map(([items, levelMin]) => items.filter(x => x.level >= levelMin || x.itemTypeId === ItemTypeDefinitionEnum.FAMILIER)));
  
      const itemsFilterByLevelMax$ = combineLatest([itemsFilterByLevelMin$, this.itemLevelFormService.levelMax$])
      .pipe(map(([items, levelMax]) => items.filter(x => x.level <= levelMax || x.itemTypeId === ItemTypeDefinitionEnum.FAMILIER)));

      const itemsFilterByRarity$ = combineLatest([itemsFilterByLevelMax$, this.rareteItemFormService.rarity$])
      .pipe(map(([items, rarity]) => items.filter(x => rarity.length === 0 || rarity.includes(x.rarity))));

      const itemsFilterByOnlyNoElem$ = combineLatest([itemsFilterByRarity$, this.onlyNoElemFormService.onlyNoElem$])
      .pipe(map(([items, onlyNoElem]) =>
        items.filter(x => !onlyNoElem || !x.equipEffects.find(y => [IdActionsEnum.MAITRISES_FEU, IdActionsEnum.MAITRISES_EAU, IdActionsEnum.MAITRISES_TERRE, IdActionsEnum.MAITRISES_AIR,
           IdActionsEnum.MAITRISES_ELEMENTAIRES, IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE].includes(y.actionId)))
      ));
  
      const itemsFilterByOnlyNoSecondary$ = combineLatest([itemsFilterByOnlyNoElem$, this.onlyNoSecondaryFormService.onlyNoSecondary$, this.modifierElemMaitrisesFormService.denouement$, this.onlyNoElemFormService.onlyNoElem$])
      .pipe(map(([items, onlyNoSecondary, denouement, onlyNoElem]) => 
        items.filter(x => !onlyNoSecondary || (
          !x.equipEffects.find(y => [IdActionsEnum.MAITRISES_DOS, IdActionsEnum.MAITRISES_MELEE, IdActionsEnum.MAITRISES_DISTANCES, IdActionsEnum.MAITRISES_SOIN, IdActionsEnum.MAITRISES_BERZERK].includes(y.actionId))
          && ((denouement && !onlyNoElem) || !x.equipEffects.find(y => y.actionId === IdActionsEnum.MAITRISES_CRITIQUES))))
        ))
  
      const itemsFilterByMajor$ = combineLatest([itemsFilterByOnlyNoSecondary$, this.majorPresentFormService.idMajor$])
      .pipe(map(([items, idMajor]) => items.filter(x => this.majorIsPresent(idMajor, x))));

      const itemsFilterByDemesure$ = combineLatest([itemsFilterByMajor$, this.modifierElemMaitrisesFormService.demesure$])
      .pipe(map(([items, demesure]) => items.filter(x => !demesure || x.equipEffects.find(effect => [IdActionsEnum.PARADE, IdActionsEnum.COUP_CRITIQUE].includes(effect.actionId)))));

      this.itemsFilters$ = combineLatest([itemsFilterByDemesure$, this.itemTypeFormServices.selected$])
      .pipe(map(([items, itemTypeIds]) => items.filter(x => itemTypeIds.length === 0 || itemTypeIds.includes(x.itemTypeId))));
    }

    private normalizeString(str: string): string {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }

    private fillItemWeightMap(items: Item[], nbElements: number, idMaitrises: number[], sort: SortChoiceEnum, multiplicateurElem: number, idResistances: number[], denouement: boolean, noElem: boolean, noSecondary: boolean, chaos: boolean): void {
      let maxMaistrises = 0;
      let maxResistances = 0;

      items.forEach(item => {
        item.resistance = Math.trunc(this.calculResistancesForAnItem(item, idResistances));
        item.maitrise = Math.trunc(this.calculMaitrisesForAnItem(item, nbElements, idMaitrises, multiplicateurElem, denouement, noElem, noSecondary, chaos));
        item.weight = this.calculWeight(item.resistance, item.maitrise, item.level);
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
        } else if (sort === SortChoiceEnum.CRITIQUE_PARADE) {
          item.weightForSort = item.equipEffects.find(x => x.actionId === IdActionsEnum.COUP_CRITIQUE)?.params[0] ?? 0;
          item.weightForSort -= item.equipEffects.find(x => x.actionId === IdActionsEnum.PERTE_COUP_CRITIQUE)?.params[0] ?? 0;
          item.weightForSort += item.equipEffects.find(x => x.actionId === IdActionsEnum.PARADE)?.params[0] ?? 0;
          item.weightForSort -= item.equipEffects.find(x => x.actionId === IdActionsEnum.PERTE_PARADE)?.params[0] ?? 0;
        } else if (sort === SortChoiceEnum.PA) {
          item.weightForSort = item.equipEffects.find(x => x.actionId === IdActionsEnum.PA)?.params[0] ?? 0;
          item.weightForSort -= item.equipEffects.find(x => x.actionId === IdActionsEnum.PERTE_PA)?.params[0] ?? 0;
        } else if (sort === SortChoiceEnum.PM) {
          item.weightForSort = item.equipEffects.find(x => x.actionId === IdActionsEnum.PM)?.params[0] ?? 0;
          item.weightForSort -= item.equipEffects.find(x => x.actionId === IdActionsEnum.PERTE_PM)?.params[0] ?? 0;
        } else if (sort === SortChoiceEnum.PO) {
          item.weightForSort = item.equipEffects.find(x => x.actionId === IdActionsEnum.PORTEE)?.params[0] ?? 0;
          item.weightForSort -= item.equipEffects.find(x => x.actionId === IdActionsEnum.PERTE_PORTEE)?.params[0] ?? 0;
        } else if (sort === SortChoiceEnum.PW) {
          item.weightForSort = item.equipEffects.find(x => x.actionId === IdActionsEnum.PW)?.params[0] ?? 0;
          item.weightForSort -= item.equipEffects.find(x => x.actionId === IdActionsEnum.PERTE_PW)?.params[0] ?? 0;
          item.weightForSort += item.equipEffects.find(x => x.actionId === IdActionsEnum.BOOST_PW)?.params[0] ?? 0;
          item.weightForSort -= item.equipEffects.find(x => x.actionId === IdActionsEnum.DEBOOST_PW)?.params[0] ?? 0;
        } else {
          item.weightForSort = item.resistance;
        }
      })
    }

    public calculWeight(resistance: number, maitrises: number, level: number): number {
      return Math.trunc(this.ratioWeightByLevel(level) * resistance + maitrises);
    }

    public ratioWeightByLevel(level: number): number {
      if(level < 36) {
        return this.truncate2(EffetMaitrisesChassesEnum.LEVEL_1 / EffetResistancesChassesEnum.LEVEL_1);
      } else if (level < 51) {
        return this.truncate2(EffetMaitrisesChassesEnum.LEVEL_2 / EffetResistancesChassesEnum.LEVEL_2);
      } else if (level < 66) {
        return this.truncate2(EffetMaitrisesChassesEnum.LEVEL_3 / EffetResistancesChassesEnum.LEVEL_3);
      } else if (level < 81) {
        return this.truncate2(EffetMaitrisesChassesEnum.LEVEL_4 / EffetResistancesChassesEnum.LEVEL_4);
      } else if (level < 96) {
        return this.truncate2(EffetMaitrisesChassesEnum.LEVEL_5 / EffetResistancesChassesEnum.LEVEL_5);
      } else if (level < 126) {
        return this.truncate2(EffetMaitrisesChassesEnum.LEVEL_6 / EffetResistancesChassesEnum.LEVEL_6);
      } else if (level < 141) {
        return this.truncate2(EffetMaitrisesChassesEnum.LEVEL_7 / EffetResistancesChassesEnum.LEVEL_7);
      } else if (level < 171) {
        return this.truncate2(EffetMaitrisesChassesEnum.LEVEL_8 / EffetResistancesChassesEnum.LEVEL_8);
      } else if (level < 186) {
        return this.truncate2(EffetMaitrisesChassesEnum.LEVEL_9 / EffetResistancesChassesEnum.LEVEL_9);
      } else if (level < 216) {
        return this.truncate2(EffetMaitrisesChassesEnum.LEVEL_10 / EffetResistancesChassesEnum.LEVEL_10);
      }
      return this.truncate2(EffetMaitrisesChassesEnum.LEVEL_11 / EffetResistancesChassesEnum.LEVEL_11);
    }

    private truncate2(num: number): number {
      return Math.trunc(num * 100) / 100;
    }

    private initItemsList(): void {
      combineLatest([this.ankamaCdnFacade.item$, this.ankamaCdnFacade.recipes$, this.ankamaCdnFacade.idSiouperes$, this.wakassetCdnFacade.monsterDrops$]).pipe(
        take(1),
        tap(([itemsCdn, recipes, idSiouperes, monsterDrops]) => {
        itemsCdn.forEach(x => this.items.push({
            id: x.definition.item.id,
            level: x.definition.item.level,
            rarity: x.definition.item.baseParameters.rarity,
            itemTypeId: x.definition.item.baseParameters.itemTypeId,
            equipEffects: x.definition.equipEffects.map(equipEffect => {
                return {
                    id: equipEffect.effect.definition.id,
                    actionId: equipEffect.effect.definition.actionId,
                    params: equipEffect.effect.definition.params
                };
            }),
            title: x.title,
            description: x.description,
            idImage: x.definition.item.graphicParameters.gfxId,
            weightForSort: 0,
            weight: 0,
            maitrise: 0,
            resistance: 0,
            isCraftable: false,
            isDropable: false,
            isDropableOnBoss: false,
            isDropableOnArchi: false,
        }));
        this.buildIndexes(recipes, monsterDrops, idSiouperes);
        this.items.forEach(item => this.calculItemIsCraftable(item));
        this.items.forEach(item => this.calculItemIsDropable(item));

      })).subscribe();
    }

    private buildIndexes(recipes: RecipeResultsCdn[], monsterDrops: MonsterDropCdn[], idSiouperes: JobsItemCdn[]): void {
      for(const r of recipes) {
        this.recipesByProductId.set(r.productedItemId, r);
      }

      for(const item of this.items) {
        if(!this.itemsByImage.has(item.idImage)) {
          this.itemsByImage.set(item.idImage, []);
        }
        this.itemsByImage.get(item.idImage)!.push(item);
      }

      for(const monster of monsterDrops) {
        for(const drop of monster.drops) {
          if(!this.monsterDropsByItemId.has(drop.itemId)) {
            this.monsterDropsByItemId.set(drop.itemId, []);
          }
          this.monsterDropsByItemId.get(drop.itemId)!.push(monster);
        }
      }

      for(const sioup of idSiouperes) {
        this.archiIds.add(sioup.definition.id);
      }
    }
    
    private calculItemIsCraftable(item: Item): void {
        if (item.isCraftable) return;

        const recipe = this.recipesByProductId.get(item.id);
        if (!recipe) return;

        // Souvenir : directement craftable
        if (item.rarity === RarityItemEnum.SOUVENIR) {
          item.isCraftable = true;
          return;
        }

        const itemsSameImage = this.itemsByImage.get(item.idImage);
        if (!itemsSameImage) return;

        // S'il existe un item avec une rareté inférieure → pas craftable
        const hasLowerRarity = itemsSameImage.some(x => x.rarity < item.rarity);
        if (hasLowerRarity) return;

        // Tous les items partageant le même idImage deviennent craftables
        for (const it of itemsSameImage) {
          it.isCraftable = true;
        }
    }

    private calculItemIsDropable(item: Item): void {
        if (item.isDropable) return;

        const dropList = this.monsterDropsByItemId.get(item.id);
        if (!dropList || dropList.length === 0) return;

        const isDropableOnBoss = dropList.some(m => 
          m.drops.some(d => this.idPierresList.includes(d.itemId))
        );

        const isDropableOnArchi = dropList.some(m =>
          m.drops.some(d => this.archiIds.has(d.itemId))
        );

        if (item.rarity === RarityItemEnum.SOUVENIR) {
          item.isDropable = !isDropableOnBoss && !isDropableOnArchi;
          item.isDropableOnBoss = isDropableOnBoss;
          item.isDropableOnArchi = isDropableOnArchi;
          return;
        }

        const sameNameItems = this.itemsByImage.get(item.idImage);
        if (!sameNameItems) return;

        for (const x of sameNameItems) {
          x.isDropable =
            (x.rarity !== RarityItemEnum.NORMAL || x.level <= 35) &&
            x.level >= item.level &&
            (!isDropableOnBoss && !isDropableOnArchi);

          x.isDropableOnBoss = isDropableOnBoss;
          x.isDropableOnArchi = isDropableOnArchi;
        }
    }

    public searchItem(idItem : number): Observable<Item | undefined> {
      return this.fullItems$.pipe(map(x => x.find(x => x.id === idItem)));
    }

    public getItem(idItem : number): Item | undefined {
      return this.fullItems$.value.find(x => x.id === idItem);
    }

    private majorIsPresent(idMajor: MajorAction[], x: Item): boolean {
      return !idMajor.find(major => (!ItemsService.ARMURE_DONNEE_RECUE_LIST.includes(major.id) && !x.equipEffects.map(effect => effect.actionId).includes(major.id)) 
                              || (major.id === IdActionsEnum.ARMURE_DONNEE_RECUE && !x.equipEffects.find(effect => effect.actionId === IdActionsEnum.ARMURE_DONNEE_RECUE && effect.params[4] === major.parameter))
                              || (major.id === IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE && !x.equipEffects.find(effect => effect.actionId === IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE && effect.params[4] === major.parameter))
                            );
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
          } else if (effect.actionId ===  IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE || effect.actionId === IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE_SANS_CAP) {
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

      
  public calculMaitrisesForAnItem(item: Item, nbElements: number, idMaitrises: number[], multiplicateurElem: number, denouement: boolean, noElem: boolean, noSecondary: boolean, chaos: boolean): number {
    let result = 0;
    const maitrisesIdElems = [IdActionsEnum.MAITRISES_FEU,IdActionsEnum.MAITRISES_TERRE,IdActionsEnum.MAITRISES_EAU,IdActionsEnum.MAITRISES_AIR];
    const perteMaitrisesId = [IdActionsEnum.PERTE_MAITRISES_ELEMENTAIRES,IdActionsEnum.PERTE_MAITRISES_FEU];
    const idMaitrisesWithoutElem = [...idMaitrises].filter(x => !maitrisesIdElems.includes(x));

    item.equipEffects.forEach(effect => {
      if(!noElem && !chaos && (effect.actionId === IdActionsEnum.MAITRISES_ELEMENTAIRES ||
        (effect.actionId === IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE && effect.params[2] >= nbElements) ||
        (effect.actionId === IdActionsEnum.MAITRISES_CRITIQUES && denouement))) {
          result += effect.params[0] * multiplicateurElem;
      } else if (!noSecondary && idMaitrisesWithoutElem.includes(effect.actionId)) {
        result += effect.params[0];
      } else if (!noElem && !chaos && perteMaitrisesId.includes(effect.actionId) ||
                !noSecondary && (
                  (effect.actionId === IdActionsEnum.PERTE_MAITRISES_CRITIQUE && idMaitrises.includes(IdActionsEnum.MAITRISES_CRITIQUES)) ||
                  (effect.actionId === IdActionsEnum.PERTE_MAITRISES_DOS && idMaitrises.includes(IdActionsEnum.MAITRISES_DOS)) ||
                  (effect.actionId === IdActionsEnum.PERTE_MAITRISES_MELEE && idMaitrises.includes(IdActionsEnum.MAITRISES_MELEE)) ||
                  (effect.actionId === IdActionsEnum.PERTE_MAITRISES_DISTANCE && idMaitrises.includes(IdActionsEnum.MAITRISES_DISTANCES)) ||
                  (effect.actionId === IdActionsEnum.PERTE_MAITRISES_BERZERK && idMaitrises.includes(IdActionsEnum.MAITRISES_BERZERK))
                )) {
        result -= effect.params[0];
      }
    })

    const effectMaitrises = item.equipEffects.find(x => maitrisesIdElems.includes(x.actionId) && (nbElements === 0 || (nbElements === 1 && idMaitrises.includes(x.actionId)))); 
    if(!noElem && !chaos && effectMaitrises) {
      result += effectMaitrises.params[0] * multiplicateurElem;
    }
    return result;
  }
}