import { AfterViewInit, ChangeDetectorRef, Component,ElementRef,Input, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionService } from '../../services/data/actionService';
import { BehaviorSubject, map, Observable, take } from 'rxjs';
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
import { ImageService } from '../../services/imageService';
import { ActionsPipe } from "../../pipe/actions/actions.pipe";
import { ImageFallbackDirective } from '../../directives/imageFallback.directive';

@Component({
  selector: 'app-item',
  imports: [CommonModule, MatIconModule, TranslateModule, MatTooltipModule, ActionsPipe, ImageFallbackDirective],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent extends ItemAbstractComponent implements AfterViewInit {
  
  @Input()
  public item!: Item;

  private readonly condition = new BehaviorSubject<ItemCondition | undefined>(undefined);
  protected readonly condition$ = this.condition.asObservable();

  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly el: ElementRef,
    protected readonly _translateService: TranslateService,
    protected readonly _actionsService : ActionService,
    protected readonly itemService : ItemsService,
    protected readonly colorRarityService: ColorRarityService,
    protected readonly _itemChooseService: ItemChooseService,
    protected readonly _itemTypeService: ItemTypeServices,
    protected readonly tooltipService: TooltipService<{itemsChoosen: Item[], item: Item}>,
    protected readonly stateTooltipService: TooltipService<{statesDefinitionId: number, nameStates: string}>,
    protected readonly cdr: ChangeDetectorRef,
    protected readonly _statesService: StatesService,
    protected readonly itemConditionService: ItemConditionService,
    protected readonly _imageService: ImageService
  ) {
    super(_translateService, _itemTypeService, _itemChooseService, _actionsService, _statesService, _imageService);
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
      const condition = this.itemConditionService.findCondition(this.item.id);
      if(condition) {
        this.condition.next(condition);
      }

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
