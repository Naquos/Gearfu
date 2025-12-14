import { inject, Injectable, signal } from "@angular/core";
import { BehaviorSubject, combineLatest, map, Observable, take, tap, shareReplay, filter } from "rxjs";
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
import { ObtentionFormService } from "../form/obtentionFormService";
import { RarityItemEnum } from "../../models/enum/rarityItemEnum";
import { IdPierreDonjonEnum } from "../../models/enum/idPierreDonjonEnum";
import { JobsItemCdn } from "../../models/ankama-cdn/jobsItemCdn";
import { MonsterDropService } from "./monsterDropService";
import { MonsterDrop } from "../../models/data/monsterDrop";
import { isExcludeIdItem } from "../../models/enum/excludeIdItemEnum";
import { BaseEffect, SublimationsDescriptions } from "../../models/data/sublimationsDescriptions";
import { LEVEL_RATIOS_CHASSE, normalizeString, truncate2 } from "../../models/utils/utils";
import { FamiliersService } from "./familiersService";

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
    private readonly onlyNoElemFormService = inject(OnlyNoElemFormService);
    private readonly reverseFormService = inject(ReverseFormService);
    private readonly obtentionFormService = inject(ObtentionFormService);
    private readonly monsterDropService = inject(MonsterDropService);
    private readonly familiersService = inject(FamiliersService);

    // Constants
    private static readonly ARMURE_DONNEE_RECUE_LIST = [IdActionsEnum.ARMURE_DONNEE_RECUE, IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE];
    private static readonly RESISTANCE_ELEM_IDS = [
      IdActionsEnum.RESISTANCES_AIR,
      IdActionsEnum.RESISTANCES_EAU,
      IdActionsEnum.RESISTANCES_TERRE,
      IdActionsEnum.RESISTANCES_FEU
    ];
    private static readonly MALUS_RESIS_ELEM_IDS = [
      IdActionsEnum.PERTE_RESISTANCES_FEU,
      IdActionsEnum.PERTE_RESISTANCES_TERRE,
      IdActionsEnum.PERTE_RESISTANCE_EAU
    ];
    private static readonly MAITRISES_ELEM_IDS = [
      IdActionsEnum.MAITRISES_FEU,
      IdActionsEnum.MAITRISES_TERRE,
      IdActionsEnum.MAITRISES_EAU,
      IdActionsEnum.MAITRISES_AIR
    ];
    private static readonly PERTE_MAITRISES_IDS = [
      IdActionsEnum.PERTE_MAITRISES_ELEMENTAIRES,
      IdActionsEnum.PERTE_MAITRISES_FEU
    ];
    private static readonly EQUILIBRE_RESISTANCE_MULTIPLIER = 1.2;
    private static readonly DEFAULT_NB_ELEMENTS = 4;

    private readonly idPierresList = [
      IdPierreDonjonEnum.AVENTURE,
      IdPierreDonjonEnum.EQUILIBRE,
      IdPierreDonjonEnum.VITESSSE,
      IdPierreDonjonEnum.ENTOURAGE,
      IdPierreDonjonEnum.ULTIME
    ];



    protected items: Item[] = [];
    protected readonly fullItems$ = new BehaviorSubject<Item[]>([]);

    public items$?: Observable<Item[]>;
    public itemsFilterByItemName$!: Observable<Item[]>;
    protected itemsFilters$!: Observable<Item[]>;

    private recipesByProductId = new Map<number, RecipeResultsCdn>();
    private itemsByName = new Map<string, Item[]>();
    private monsterDropsByItemId = new Map<number, MonsterDrop[]>();
    private archiIds = new Set<number>();

    private readonly sublimations = new BehaviorSubject<Item[]>([]);
    public readonly sublimations$ = this.sublimations.asObservable();

    public readonly isLoading = signal<boolean>(true);

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
            tap(() => this.isLoading.set(false)),
            shareReplay(1)
          );
          this.items$.pipe(take(1)).subscribe();
    }

    private initFamiliers(): void {
      this.familiersService.familiers$.pipe(take(1)).subscribe((familiers) => {
        const mapItem = new Map<number, Item>();
        this.items.forEach(item => {
          mapItem.set(item.id, item);
        });
        familiers.forEach(familier => {
          const item = mapItem.get(familier.id);
          if(item) {
            familier.statsList.forEach((stat, index) => {
              if(index < item.equipEffects.length) {
                item.equipEffects[index].params[0] = stat;
              }
            });
          }
        });


      });
    }

    private sortItems(): ((a: Item, b: Item) => number) | undefined {
      return (itemA, itemB) => itemB.weightForSort > itemA.weightForSort ? 1 : itemB.weightForSort === itemA.weightForSort ? itemB.weight - itemA.weight : -1;
    }

    private isNotWIP(item: Item): boolean {
      return !!item.title;
    }

    private filterObtention(item: Item, seeDrop: boolean, seeCraftable: boolean, seeBoss: boolean, seeArchi: boolean, seePvP: boolean): boolean {
      let result = item.isCraftable && !seeCraftable;
      result = result || (item.mobDropable.length > 0 && !seeDrop);
      result = result || (item.bossDropable.length > 0 && !seeBoss);
      result = result || (item.archiDropable.length > 0 && !seeArchi);
      result = result || (item.isPvP && !seePvP);
      // Items without obtention method
      result = result || (item.mobDropable.length === 0 && item.bossDropable.length === 0 && item.archiDropable.length === 0 && !item.isCraftable && !item.isPvP); 
      return result;
    }

    private loadSublimations(): void {

      const sublimations = this.items.filter(x => x.itemTypeId === ItemTypeDefinitionEnum.SUBLIMATIONS);
      //Nettoyage des sublimations
      const sublimationsCleaned: Item[] = sublimations.filter(x => x.enchantement.isEpic || x.enchantement.isRelic 
        || ["I", "II", "III"].includes(x.title.fr.split(' ').pop() || ""))
        .sort((a, b) => a.title.fr.localeCompare(b.title.fr));
      this.sublimations.next(sublimationsCleaned);
      this.prepareJsonSublimations(sublimationsCleaned);
    }

    private prepareJsonSublimations(sublimations: Item[]): void {
      const result: SublimationsDescriptions[] = [];

      const mapSublimations = new Map<string, Item[]>();
      sublimations.forEach(sublimation => {
        if(sublimation.enchantement.isEpic || sublimation.enchantement.isRelic) {
          mapSublimations.set(sublimation.title.fr, [sublimation]);
        } else {
          const baseTitle = sublimation.title.fr.replace(/ I{1,3}$| II$| III$/,'').trim();
          if(!mapSublimations.has(baseTitle)) {
            mapSublimations.set(baseTitle, []);
          }
          mapSublimations.get(baseTitle)?.push(sublimation);
        }
      });
      mapSublimations.forEach((sublimationList) => {
        const linkSublimation: {id: number; level: 1 | 2 | 3}[] = [];
        sublimationList.forEach(sublimation => {
          if(sublimation.enchantement.isEpic || sublimation.enchantement.isRelic) {
            linkSublimation.push({id: sublimation.id, level: 1});
          } else {
            const level = sublimation.title.fr.endsWith(' III') ? 3 : sublimation.title.fr.endsWith(' II') ? 2 : 1;
            linkSublimation.push({id: sublimation.id, level: level as 1 | 2 | 3});
          }
        });
        let maxLevel = 0;
        const sublimation = sublimationList[0];

        if(!sublimation.enchantement.isEpic && !sublimation.enchantement.isRelic) {
          const tempMaxLevel = sublimation.description.fr.slice(sublimation.description.fr.length - 2, sublimation.description.fr.length -1);
         maxLevel = Number.parseInt(tempMaxLevel || "0");
        }
        const isEpicOrRelic = sublimation.enchantement.isEpic || sublimation.enchantement.isRelic;
        const baseEffects: BaseEffect[] = [];
        result.push({
          linkSublimation: linkSublimation,
          title: {
            fr: isEpicOrRelic ? sublimationList[0].title.fr : sublimationList[0].title.fr.replace(/ I{1,3}$| II$| III$/, '').trim(),
            en: isEpicOrRelic ? sublimationList[0].title.en : sublimationList[0].title.en.replace(/ I{1,3}$| II$| III$/, '').trim(),
            es: isEpicOrRelic ? sublimationList[0].title.es : sublimationList[0].title.es.replace(/ I{1,3}$| II$| III$/, '').trim(),
            pt: isEpicOrRelic ? sublimationList[0].title.pt : sublimationList[0].title.pt.replace(/ I{1,3}$| II$| III$/, '').trim(),
          },
          description: {
            fr: "",
            en: "",
            es: "",
            pt: ""
          },
          levelMax: maxLevel,
          baseEffect: baseEffects,
          id: linkSublimation[0].id,
          gfxId: sublimation.idImage,
          isEpic: sublimation.enchantement.isEpic,
          isRelic: sublimation.enchantement.isRelic,
          slotColorPattern: sublimation.enchantement.slotColorPattern,
          bossDropable: [],
          isCraftable: false
        });
      });
    }

    private initFilter(): void {
      // this.loadSublimations();
      this.items = this.items.filter(x => ![ItemTypeDefinitionEnum.LANTERNE, ItemTypeDefinitionEnum.STATISTIQUES, ItemTypeDefinitionEnum.SUBLIMATIONS].includes(x.itemTypeId))
        .filter(x => this.isNotWIP(x));
      this.initFamiliers();
      this.fullItems$.next(this.items);

      this.itemsFilterByItemName$ = combineLatest([this.fullItems$, this.searchItemNameFormService.itemName$])
      .pipe(map(([items, itemName]) => items.filter(x => normalizeString(x.title[this.translateService.currentLang as keyof typeof x.title].toString()).includes(normalizeString(itemName)))));

      const itemsFilterByObtention$ = combineLatest([this.itemsFilterByItemName$, this.obtentionFormService.drop$, this.obtentionFormService.craftable$, this.obtentionFormService.boss$, this.obtentionFormService.archi$, this.obtentionFormService.pvp$])
      .pipe(map(([items, drop, craftable, boss, archi, pvp]) => items.filter(x => this.filterObtention(x, drop, craftable, boss, archi, pvp))));
      
      const itemsFilterByLevelMin$ = combineLatest([itemsFilterByObtention$, this.itemLevelFormService.levelMin$])
      .pipe(map(([items, levelMin]) => items.filter(x => x.level >= levelMin || x.itemTypeId === ItemTypeDefinitionEnum.FAMILIER)));
  
      const itemsFilterByLevelMax$ = combineLatest([itemsFilterByLevelMin$, this.itemLevelFormService.levelMax$])
      .pipe(map(([items, levelMax]) => items.filter(x => x.level <= levelMax || x.itemTypeId === ItemTypeDefinitionEnum.FAMILIER)));

      const itemsFilterByRarity$ = combineLatest([itemsFilterByLevelMax$, this.rareteItemFormService.rarity$])
      .pipe(map(([items, rarity]) => items.filter(x => rarity.length === 0 || rarity.includes(x.rarity) || x.itemTypeId === ItemTypeDefinitionEnum.FAMILIER)));

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
        const effectsMap = this.createEffectsMap(item);
        item.weightForSort = this.calculateWeightForSort(item, sort, effectsMap, maxMaistrises, maxResistances);
      })
    }

    private createEffectsMap(item: Item): Map<number, number> {
      const effectsMap = new Map<number, number>();
      item.equipEffects.forEach(effect => {
        effectsMap.set(effect.actionId, effect.params[0]);
      });
      return effectsMap;
    }

    private calculateWeightForSort(item: Item, sort: SortChoiceEnum, effectsMap: Map<number, number>, maxMaistrises: number, maxResistances: number): number {
      switch(sort) {
        case SortChoiceEnum.POIDS:
          return item.weight;
        
        case SortChoiceEnum.MAITRISES:
          return item.maitrise;
        
        case SortChoiceEnum.EQUILIBRE:
          return item.maitrise / maxMaistrises + ItemsService.EQUILIBRE_RESISTANCE_MULTIPLIER * (item.resistance / maxResistances);
        
        case SortChoiceEnum.POINT_DE_VIE:
          return this.calculateNetEffect(effectsMap, IdActionsEnum.POINT_DE_VIE, IdActionsEnum.PERTE_POINT_DE_VIE);
        
        case SortChoiceEnum.PARADE_ARMURE_DONNEE:
          return this.calculateParadeArmureDonnee(item, effectsMap);
        
        case SortChoiceEnum.TACLE:
          return this.calculateNetEffect(effectsMap, IdActionsEnum.TACLE, IdActionsEnum.PERTE_TACLE);
        
        case SortChoiceEnum.ESQUIVE:
          return this.calculateNetEffect(effectsMap, IdActionsEnum.ESQUIVE, IdActionsEnum.PERTE_ESQUIVE);
        
        case SortChoiceEnum.TACLE_ESQUIVE:
          return this.calculateNetEffect(effectsMap, IdActionsEnum.TACLE, IdActionsEnum.PERTE_TACLE) +
                 this.calculateNetEffect(effectsMap, IdActionsEnum.ESQUIVE, IdActionsEnum.PERTE_ESQUIVE);
        
        case SortChoiceEnum.CRITIQUE:
          return this.calculateNetEffect(effectsMap, IdActionsEnum.COUP_CRITIQUE, IdActionsEnum.PERTE_COUP_CRITIQUE);
        
        case SortChoiceEnum.PARADE:
          return this.calculateNetEffect(effectsMap, IdActionsEnum.PARADE, IdActionsEnum.PERTE_PARADE);
        
        case SortChoiceEnum.CRITIQUE_PARADE:
          return this.calculateNetEffect(effectsMap, IdActionsEnum.COUP_CRITIQUE, IdActionsEnum.PERTE_COUP_CRITIQUE) +
                 this.calculateNetEffect(effectsMap, IdActionsEnum.PARADE, IdActionsEnum.PERTE_PARADE);
        
        case SortChoiceEnum.PA:
          return this.calculateNetEffect(effectsMap, IdActionsEnum.PA, IdActionsEnum.PERTE_PA);
        
        case SortChoiceEnum.PM:
          return this.calculateNetEffect(effectsMap, IdActionsEnum.PM, IdActionsEnum.PERTE_PM);
        
        case SortChoiceEnum.PO:
          return this.calculateNetEffect(effectsMap, IdActionsEnum.PORTEE, IdActionsEnum.PERTE_PORTEE);
        
        case SortChoiceEnum.PW:
          return this.calculateNetEffect(effectsMap, IdActionsEnum.PW, IdActionsEnum.PERTE_PW) +
                 this.calculateNetEffect(effectsMap, IdActionsEnum.BOOST_PW, IdActionsEnum.DEBOOST_PW);
        
        default:
          return item.resistance;
      }
    }

    private calculateParadeArmureDonnee(item: Item, effectsMap: Map<number, number>): number {
      let result = effectsMap.get(IdActionsEnum.PARADE) ?? 0;
      item.equipEffects.forEach(effect => {
        if(effect.actionId === IdActionsEnum.ARMURE_DONNEE_RECUE && effect.params[4] === ParameterMajorActionEnum.ARMURE_DONNEE) {
          result += effect.params[0];
        }
      });
      return result;
    }

    private getEffectValue(effectsMap: Map<number, number>, actionId: number): number {
      return effectsMap.get(actionId) ?? 0;
    }

    private calculateNetEffect(effectsMap: Map<number, number>, positiveId: number, negativeId: number): number {
      return this.getEffectValue(effectsMap, positiveId) - this.getEffectValue(effectsMap, negativeId);
    }

    public calculWeight(resistance: number, maitrises: number, level: number): number {
      return Math.trunc(this.ratioWeightByLevel(level) * resistance + maitrises);
    }

    public ratioWeightByLevel(level: number): number {
      const levelConfig = LEVEL_RATIOS_CHASSE.find(config => level < config.maxLevel);
      return levelConfig?.ratio ?? truncate2(EffetMaitrisesChassesEnum.LEVEL_11 / EffetResistancesChassesEnum.LEVEL_11);
    }

    private initItemsList(): void {
      combineLatest([this.ankamaCdnFacade.item$, this.ankamaCdnFacade.recipes$, this.ankamaCdnFacade.idSiouperes$, this.monsterDropService.monsterDrops$]).pipe(
        take(1),
        tap(([itemsCdn, recipes, idSiouperes, monsterDrops]) => {
        itemsCdn.filter(x => !isExcludeIdItem(x.definition.item.id))
          .forEach(x => this.items.push({
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
            title: {
              fr: x.title.fr.trim(),
              en: x.title.en.trim(),
              es: x.title.es.trim(),
              pt: x.title.pt.trim()
            },
            description: x.description,
            idImage: x.definition.item.graphicParameters.gfxId,
            weightForSort: 0,
            weight: 0,
            maitrise: 0,
            resistance: 0,
            isCraftable: false,
            mobDropable: [],
            bossDropable: [],
            archiDropable: [],
            isPvP: false,
            enchantement: {
              slotColorPattern: x.definition.item.sublimationParameters?.slotColorPattern ?? [],
              isEpic: x.definition.item.sublimationParameters?.isEpic ?? false,
              isRelic: x.definition.item.sublimationParameters?.isRelic ?? false,
            }
        }));
        this.buildIndexes(recipes, monsterDrops, idSiouperes);
        this.items.forEach(item => this.calculItemIsCraftable(item));
        this.items.forEach(item => this.calculItemIsDropable(item));
        this.items.forEach(item => this.calculIsItemPvP(item));

      })).subscribe();
    }

    private buildIndexes(recipes: RecipeResultsCdn[], monsterDrops: MonsterDrop[], idSiouperes: JobsItemCdn[]): void {
      for(const r of recipes) {
        this.recipesByProductId.set(r.productedItemId, r);
      }

      for(const item of this.items) {
        if(!this.itemsByName.has(item.title.fr)) {
          this.itemsByName.set(item.title.fr, []);
        }
        this.itemsByName.get(item.title.fr)!.push(item);
      }

      for(const monster of monsterDrops) {
        for(const drop of monster.idsDrop) {
          if(!this.monsterDropsByItemId.has(drop)) {
            this.monsterDropsByItemId.set(drop, []);
          }
          this.monsterDropsByItemId.get(drop)!.push(monster);
        }
      }

      for(const sioup of idSiouperes) {
        this.archiIds.add(sioup.definition.id);
      }
    }

    private calculIsItemPvP(item: Item): void {
      const isPvP = this.ankamaCdnFacade.isItemPvP(item.id);
      if(!isPvP) return;

      const itemsSameName = this.itemsByName.get(item.title.fr);
      if (!itemsSameName) return;

      itemsSameName.forEach(x => x.isPvP = true);
    }
    
    private calculItemIsCraftable(item: Item): void {
        if (item.isCraftable) return;

        const recipe = this.recipesByProductId.get(item.id);
        if (!recipe) return;

        if (item.rarity === RarityItemEnum.SOUVENIR) {
          item.isCraftable = true;
          return;
        }

        const itemsSameName = this.itemsByName.get(item.title.fr);
        if (!itemsSameName) return;

        const hasLowerRarity = itemsSameName.some(x => {
          if (item.level <= 35) return x.rarity < item.rarity;
          return x.rarity < item.rarity && x.level >= 35;
        });
        if (hasLowerRarity) return;

        for (const it of itemsSameName) {
          it.isCraftable = true;
        }
    }

    private calculItemIsDropable(item: Item): void {
        if (item.mobDropable.length) return;

        let dropList = this.monsterDropsByItemId.get(item.id);
        if (!dropList || dropList.length === 0) return;

        const dropListOnBoss = dropList.filter(m => 
          m.idsDrop.some(id => this.idPierresList.includes(id))
        );

        const dropListOnArchi = dropList.filter(m =>
          m.idsDrop.some(id => this.archiIds.has(id))
        ).filter(m => !dropListOnBoss.includes(m));

        dropList = dropList.filter(m => 
          !dropListOnBoss.includes(m) && !dropListOnArchi.includes(m)
        );

        if (item.rarity === RarityItemEnum.SOUVENIR) {
          if(dropList.length) item.mobDropable = dropList;
          if(dropListOnBoss.length) item.bossDropable = dropListOnBoss;
          if(dropListOnArchi.length) item.archiDropable = dropListOnArchi;
          return;
        }

        const sameNameItems = this.itemsByName.get(item.title.fr);
        if (!sameNameItems) return;

        for (const x of sameNameItems) {
          if (x.rarity === RarityItemEnum.SOUVENIR) continue;

          if((x.rarity !== RarityItemEnum.NORMAL || x.level <= 35) &&
            x.level >= item.level &&
            (dropList.length)) {
              x.mobDropable = dropList;
            }

          if(dropListOnBoss.length) x.bossDropable = dropListOnBoss;
          if(dropListOnArchi.length) x.archiDropable = dropListOnArchi;
        }
    }

    public searchItem(idItem : number): Observable<Item | undefined> {
      return this.fullItems$.pipe(
        filter(items => items.length > 0),
        map(x => x.find(x => x.id === idItem)));
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
        const nbElements = idResistances.length === 0 ? ItemsService.DEFAULT_NB_ELEMENTS : idResistances.length;
        
        item.equipEffects.forEach(effect => {
          if(effect.actionId === IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE && effect.params[2] >= idResistances.length) {
            result += effect.params[0] * Math.min(effect.params[2], nbElements);
          } else if (effect.actionId === IdActionsEnum.RESISTANCES_ELEMENTAIRE) {
            result += effect.params[0] * nbElements;
          } else if (effect.actionId ===  IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE || effect.actionId === IdActionsEnum.PERTE_RESISTANCES_ELEMENTAIRE_SANS_CAP) {
            result -= effect.params[0] * nbElements;
          } else if (ItemsService.RESISTANCE_ELEM_IDS.includes(effect.actionId) && (nbElements === ItemsService.DEFAULT_NB_ELEMENTS || idResistances.includes(effect.actionId))) {
            result += effect.params[0];
          } else if ((nbElements === ItemsService.DEFAULT_NB_ELEMENTS && ItemsService.MALUS_RESIS_ELEM_IDS.includes(effect.actionId)) ||
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
      const idMaitrisesWithoutElem = [...idMaitrises].filter(x => !ItemsService.MAITRISES_ELEM_IDS.includes(x));

      item.equipEffects.forEach(effect => {
        if(!noElem && !chaos && (effect.actionId === IdActionsEnum.MAITRISES_ELEMENTAIRES ||
          (effect.actionId === IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE && effect.params[2] >= nbElements) ||
          (effect.actionId === IdActionsEnum.MAITRISES_CRITIQUES && denouement))) {
            result += effect.params[0] * multiplicateurElem;
        } else if (!noSecondary && idMaitrisesWithoutElem.includes(effect.actionId)) {
          result += effect.params[0];
        } else if (!noElem && !chaos && ItemsService.PERTE_MAITRISES_IDS.includes(effect.actionId) ||
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

      const effectMaitrises = item.equipEffects.find(x => ItemsService.MAITRISES_ELEM_IDS.includes(x.actionId) && (nbElements === 0 || (nbElements === 1 && idMaitrises.includes(x.actionId)))); 
      if(!noElem && !chaos && effectMaitrises) {
        result += effectMaitrises.params[0] * multiplicateurElem;
      }
      return result;
    }
}