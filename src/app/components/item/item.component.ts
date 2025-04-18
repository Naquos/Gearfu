import { AfterViewInit, ChangeDetectorRef, Component,ElementRef,Input, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionService } from '../../services/data/actionService';
import { BehaviorSubject, map, Observable, take, tap } from 'rxjs';
import { ItemsService } from '../../services/data/itemsService';
import { ColorRarityService } from '../../services/colorRarityService';
import { ItemChooseService } from '../../services/itemChooseService';
import { ItemTypeServices } from '../../services/data/ItemTypesServices';
import { MatIconModule } from '@angular/material/icon';
import { TooltipService } from '../../services/TooltipService';
import { ItemsTooltipComponent } from '../items-tooltip/items-tooltip.component';
import { ItemAbstractComponent } from '../abstract/itemAbstract.component';
import { StatesService } from '../../services/data/statesService';
import { StatesComponent } from '../states/states.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { States } from '../../models/data/states';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ItemConditionService } from '../../services/data/itemConditionService';
import { ItemCondition } from '../../models/data/itemCondition';
import { Item } from '../../models/data/item';

@Component({
  selector: 'app-item',
  imports: [CommonModule, MatIconModule, TranslateModule, MatTooltipModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent extends ItemAbstractComponent implements AfterViewInit {
  
  @Input()
  public item!: Item;

  private condition = new BehaviorSubject<ItemCondition | undefined>(undefined);
  protected condition$ = this.condition.asObservable();

  constructor(
    private viewContainerRef: ViewContainerRef,
    private el: ElementRef,
    protected _translateService: TranslateService,
    protected _actionsService : ActionService,
    protected itemService : ItemsService,
    protected colorRarityService: ColorRarityService,
    protected _itemChooseService: ItemChooseService,
    protected _itemTypeService: ItemTypeServices,
    protected tooltipService: TooltipService<{itemsChoosen: Item[], item: Item}>,
    protected stateTooltipService: TooltipService<{statesDefinitionId: number, nameStates: string}>,
    protected cdr: ChangeDetectorRef,
    protected _statesService: StatesService,
    protected itemConditionService: ItemConditionService
  ) {
    super(_translateService, _itemTypeService, _itemChooseService, _actionsService, _statesService);
  }

  protected setItemChoosen() : void {
    const itemType = this.itemTypeService.getItemType(this.item.itemTypeId);
    if(!itemType) { return; }
    this.itemChooseService.setItem(itemType, this.item)
  }


  protected itemIsPresentAndNotChoosen(itemsList: (Item | undefined)[][]): boolean {
    return !!itemsList.find(items =>items.find(x => x !== undefined) && !items.find(item => item?.id === this.item.id));
  }

  ngAfterViewInit(): void {
    if(this.item) {
      this.item.equipEffects = this.item.equipEffects.sort((a, b) => (this.mapSortAction.get(a.actionId) ?? 999) - (this.mapSortAction.get(b.actionId) ?? 999));
 
      this.initItemChoosen(this.item);
      this.itemConditionService.findCondition(this.item.id)
      .pipe(
        take(1),
        tap(x => this.condition.next(x))
      ).subscribe()

      this.cdr.detectChanges();
    }
  }

  protected textCondition(): Observable<string | undefined> {
    return this.condition$.pipe(map(x => x?.description[this.translateService.currentLang as keyof typeof x.description] ?? undefined));
  }

  protected openTooltip(event: MouseEvent, item: Item): void {
    const mouseOnRight = event.pageX > window.screen.width / 2;

    this.tooltipService.closeTooltip();
    this.itemChoosen$.pipe(take(1), map(x => x.find(y => y.find(z => z)))).subscribe(itemsChoosen => {
        this.tooltipService.openTooltip(this.viewContainerRef, ItemsTooltipComponent, event, {item, itemsChoosen},
          [{ 
            originX: mouseOnRight ? 'end' : 'center', originY: 'bottom',
            overlayX: mouseOnRight ? 'end' : 'center', overlayY: 'bottom',
            offsetY: 0, offsetX: mouseOnRight ? -this.el.nativeElement.offsetWidth : 340
          }], false
        );
      })
  }

  protected openEncyclopedie(itemId: number): void {
    window.open('https://www.wakfu.com/fr/mmorpg/encyclopedie/armures/' + itemId);
  }

  protected getStatesTranslate(state?: States | null): string {
    if(!state) { return ""}
    const lang = this.translateService.currentLang;
    const result = state[lang as keyof typeof state];
    return result.toString() ?? "";
  }

  protected getTitle(): string {
    return this.item.title[this.translateService.currentLang as keyof typeof this.item.title];
  }

  protected openStatesTooltip(event: MouseEvent, statesDefinitionId: number, nameStates: string): void {
    this.stateTooltipService.closeTooltip();
    this.stateTooltipService.openTooltip(this.viewContainerRef, StatesComponent, event, {statesDefinitionId, nameStates},
      [{ 
        originX: 'center', originY: 'top',
        overlayX: 'center', overlayY: 'top',
        offsetY: 20, offsetX: 0
      }]
    )
  }

}
