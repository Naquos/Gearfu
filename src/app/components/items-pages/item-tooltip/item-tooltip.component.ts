import { AfterViewInit, ChangeDetectorRef, Component, inject, input, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { filter, map, takeUntil, tap } from 'rxjs';
import { ImageFallbackDirective } from '../../../directives/imageFallback.directive';
import { DifferentStatsItem } from '../../../models/data/differentsStatsItem';
import { Item } from '../../../models/data/item';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';
import { ParameterMajorActionEnum } from '../../../models/enum/parameterMajorActionEnum';
import { ActionsPipe } from '../../../pipe/actions/actions.pipe';
import { ColorRarityService } from '../../../services/colorRarityService';
import { ItemsService } from '../../../services/data/itemsService';
import { ItemAbstractComponent } from '../abstract/itemAbstract.component';
import { calculWeight, mapSortAction } from '../../../models/utils/utils';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-item-tooltip',
  imports: [TranslateModule, ActionsPipe, ImageFallbackDirective, CommonModule],
  templateUrl: './item-tooltip.component.html',
  styleUrl: './item-tooltip.component.scss',
})
export class ItemTooltipComponent extends ItemAbstractComponent implements AfterViewInit {

  protected readonly itemService = inject(ItemsService);
  protected readonly colorRarityService = inject(ColorRarityService);
  protected readonly cdr = inject(ChangeDetectorRef);

  item = input.required<Item>();
  indexItemChoosen = input(0);

  protected readonly ARMURE_DONNEE_RECUE = [IdActionsEnum.ARMURE_DONNEE_RECUE, IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE];

  protected listDifferentsStatsItem: DifferentStatsItem[] = [];
  protected readonly loaded = signal(false);
  protected weight = 0;

  private itemSelected$ = this.itemChoosen$.pipe(
    filter(items => items.length !== 0),
    map(items => items.map(x => x[this.indexItemChoosen()])),
    map(items => items.length >= 2 && items[0]?.id === items[1]?.id ? [items.find(x => x !== undefined)] : items),
    map(x => x.filter(item => item !== undefined)),
  );

  protected itemSelected = toSignal(this.itemSelected$, { initialValue: [] as Item[] });


  protected differentStatsItemList = toSignal(this.itemSelected$.pipe(
    takeUntil(this.destroy$),
    map(listItems => ({
      currentItem: this.getCurrentItem(),
      listItems,
    })),
    filter(({ currentItem }) => currentItem !== undefined),
    tap(listItems => {
      this.listDifferentsStatsItem = [];
      const currentItem = listItems.currentItem;
      if (!currentItem) {
        return;
      }

      this.fillListCurrentItem(currentItem);
      listItems.listItems.forEach(item => {
        if (item) {
          this.fillMapDifferentStatsItem(item, currentItem);
        }
      });
    }),
    map(() => this.listDifferentsStatsItem.sort((a, b) => (mapSortAction.get(a.actionId) ?? 999) - (mapSortAction.get(b.actionId) ?? 999)))),
    { initialValue: [] as DifferentStatsItem[] });

  constructor() {
    super();
  }




  public ngAfterViewInit(): void {
    const currentItem = this.getCurrentItem();
    if (currentItem) {
      currentItem.equipEffects = currentItem.equipEffects.sort((a, b) => (mapSortAction.get(a.actionId) ?? 999) - (mapSortAction.get(b.actionId) ?? 999));
      this.itemSelected$.pipe(
        takeUntil(this.destroy$),
      ).subscribe((itemSelected) => {
        this.resistances = currentItem.resistance;
        this.maitrises = currentItem.maitrise;
        this.weight = calculWeight(this.resistances, this.maitrises, currentItem.level);
        itemSelected.forEach(item => {
          if (item) {
            this.resistances -= item.resistance;
            this.maitrises -= item.maitrise;
            this.weight = calculWeight(this.resistances, this.maitrises, item.level)
          }
        })
        this.loaded.set(true);
        this.cdr.markForCheck();
      });

      this.initItemChoosen(currentItem);

      this.cdr.detectChanges();
    }
  }

  protected setItem(item: Item): void {
    const itemType = this.itemTypeService.getItemType(item.itemTypeId);
    if (!itemType) { return }
    this.itemChooseService.setItem(itemType, item);
  }

  protected getTitle(item?: Item): string {
    if (!item) { return "" }
    return item.title[this.translateService.currentLang as keyof typeof item.title];
  }

  protected getBackgroundDifferentsStatsOnValue(value: number): string {
    if (value > 0) {
      return "green";
    } else if (value < 0) {
      return "red";
    }
    return "";
  }


  protected getBackgroundDifferentsStats(stats: DifferentStatsItem): string {
    const isMalus = this.actionsService.isAMalus(stats.actionId);
    if (stats.value > 0 && !isMalus
      || stats.value < 0 && isMalus
      || stats.presentOnCurrentItem && !stats.presentOnEquippedItem && !isMalus) {
      return "green";
    } else if (
      stats.value < 0 && !isMalus
      || stats.value > 0 && isMalus
      || !stats.presentOnCurrentItem && stats.presentOnEquippedItem && isMalus) {
      return "red";
    }
    return "";
  }

  private getByActionId(actionId: IdActionsEnum, isArmureRecue: boolean): DifferentStatsItem | undefined {
    return this.listDifferentsStatsItem.find(x => x.actionId === actionId && x.isArmureRecue === isArmureRecue);
  }

  private pushSetDifferentsStatsItem(differentsStatsItem: DifferentStatsItem | undefined): void {
    if (!differentsStatsItem) { return; }
    this.listDifferentsStatsItem = this.listDifferentsStatsItem.filter(x => x.actionId !== differentsStatsItem.actionId || x.isArmureRecue !== differentsStatsItem.isArmureRecue);
    this.listDifferentsStatsItem.push(differentsStatsItem);
  }

  private fillListCurrentItem(currentItem: Item): void {
    currentItem.equipEffects.forEach(equipEffect => {
      const isArmureRecue = this.ARMURE_DONNEE_RECUE.includes(equipEffect.actionId) && equipEffect.params[4] === ParameterMajorActionEnum.ARMURE_RECUE;
      let effect = this.getByActionId(equipEffect.actionId, isArmureRecue);
      if (effect) {
        const tempParams = effect.params;
        tempParams[0] += equipEffect.params[0];
        effect = {
          ...effect,
          value: effect.value + equipEffect.params[0],
          params: tempParams,
          presentOnCurrentItem: true
        }

      } else {
        effect = {
          value: equipEffect.params[0],
          params: [...equipEffect.params],
          actionId: equipEffect.actionId,
          presentOnCurrentItem: true,
          presentOnEquippedItem: false,
          isArmureRecue: isArmureRecue
        }
      }

      this.pushSetDifferentsStatsItem(effect);
    })
  }

  private fillMapDifferentStatsItem(equippedItem: Item, currentItem: Item): void {

    equippedItem.equipEffects.forEach(equipEffect => {
      const isArmureRecue = this.ARMURE_DONNEE_RECUE.includes(equipEffect.actionId) && equipEffect.params[4] === ParameterMajorActionEnum.ARMURE_RECUE;
      let differentsStatsItem = this.getByActionId(equipEffect.actionId, isArmureRecue);
      const opposedStatsItem = currentItem.equipEffects.find(x => this.actionsService.isOpposed(x, equipEffect));
      if (opposedStatsItem) {
        const tempParams = [...equipEffect.params];
        tempParams[0] = opposedStatsItem.params[0] + tempParams[0];
        differentsStatsItem = {
          value: opposedStatsItem.params[0] + equipEffect.params[0],
          params: tempParams,
          actionId: opposedStatsItem.actionId,
          presentOnCurrentItem: true,
          presentOnEquippedItem: true,
          isArmureRecue: isArmureRecue,
        };

      } else if (differentsStatsItem && differentsStatsItem.isArmureRecue === isArmureRecue) {
        const tempParams = differentsStatsItem.params;
        tempParams[0] -= equipEffect.params[0];
        differentsStatsItem = {
          ...differentsStatsItem,
          value: differentsStatsItem.value - equipEffect.params[0],
          params: tempParams,
          presentOnEquippedItem: true
        }
      } else {
        const tempParams = [...equipEffect.params];
        tempParams[0] = -tempParams[0];
        differentsStatsItem = {
          value: -equipEffect.params[0],
          params: tempParams,
          actionId: equipEffect.actionId,
          presentOnCurrentItem: false,
          presentOnEquippedItem: true,
          isArmureRecue: isArmureRecue,
        }
      }
      this.pushSetDifferentsStatsItem(differentsStatsItem);
    })

    this.calculDifferenceResistance();
  }

  private calculDifferenceResistance(): void {

    const resisElem = this.getByActionId(IdActionsEnum.RESISTANCES_ELEMENTAIRE, false);
    const resisList = [IdActionsEnum.RESISTANCES_FEU, IdActionsEnum.RESISTANCES_EAU, IdActionsEnum.RESISTANCES_AIR, IdActionsEnum.RESISTANCES_TERRE];


    if (resisElem && resisList.find(x => this.getByActionId(x, false))) {
      resisList.forEach(resis => {
        let differentsStats = this.getByActionId(resis, false);
        if (differentsStats) {
          differentsStats.params[0] += resisElem.params[0];
          differentsStats.value += resisElem.params[0];
          differentsStats.presentOnCurrentItem = true;
          differentsStats.presentOnEquippedItem = true;
        } else {
          differentsStats = {
            ...resisElem,
            actionId: resis,
            presentOnCurrentItem: true,
            presentOnEquippedItem: true
          }
        }
        this.pushSetDifferentsStatsItem(differentsStats);
      })
      this.listDifferentsStatsItem = this.listDifferentsStatsItem.filter(x => x.actionId !== IdActionsEnum.RESISTANCES_ELEMENTAIRE);
    }
  }

  private getCurrentItem(): Item | undefined {
    try {
      return this.item();
    } catch {
      return undefined;
    }
  }
}
