import { Component, inject, OnInit, OnDestroy, Inject, PLATFORM_ID, ChangeDetectionStrategy, computed } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ItemSkeletonComponent } from '../item-skeleton/item-skeleton.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../../../models/data/item';
import { ItemsService } from '../../../services/data/itemsService';
import { toSignal } from '@angular/core/rxjs-interop';
import { DisplayFavorisFormService } from '../../../services/form-signal/displayFavorisFormService';
import { ItemFavorisFormService } from '../../../services/form-signal/itemFavorisFormService';
import { IntersectDirective } from '../../../directives/intersect.directive';

@Component({
  selector: 'app-item-list',
  imports: [ItemComponent, CommonModule, ItemSkeletonComponent, IntersectDirective],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit, OnDestroy {
  protected readonly itemsService = inject(ItemsService);
  private readonly fullItems = toSignal(this.itemsService.items$, { initialValue: [] });
  protected readonly skeletonArray = Array(36).fill(0).map((x, i) => i); // Tableau pour afficher 36 skeletons
  private readonly displayFavorisFormService = inject(DisplayFavorisFormService);
  protected readonly displayFavoris = toSignal(this.displayFavorisFormService.display$);

  private readonly itemsFavorisFormService = inject(ItemFavorisFormService);
  private readonly idsFavoris = toSignal(this.itemsFavorisFormService.ids$, { initialValue: [] });
  protected readonly favorisItems = computed(() => {
    this.fullItems(); // Déclenche la réévaluation lorsque fullItems change
    const ids = this.idsFavoris();
    const result: Item[] = [];
    for (const id of ids) {
      const item = this.itemsService.getItem(id);
      if (item) {
        result.push(item);
      }
    }
    return result;
  });

  private displayedItems$ = new BehaviorSubject<Item[]>([]);
  protected readonly displayedItems = toSignal(this.displayedItems$);
  protected allItems: Item[] = [];
  private itemsPerLoad = 36; // Charger 36 items à la fois
  protected currentIndex = 0;
  private observer?: IntersectionObserver;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.itemsService.items$.subscribe(items => {
      this.allItems = items;
      this.currentIndex = 0;
      this.displayedItems$.next([]); // Réinitialiser
      this.loadMoreItems();

      // Remonter le scroll en haut
      if (this.isBrowser) {
        this.scrollToTop();
      }
    });
  }

  private scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  private loadMoreItems(): void {
    const nextItems = this.allItems.slice(this.currentIndex, this.currentIndex + this.itemsPerLoad);
    const currentItems = this.displayedItems$.value;
    this.displayedItems$.next([...currentItems, ...nextItems]);
    this.currentIndex += this.itemsPerLoad;

  }

  protected onScrollEnd(): void {
    if (this.currentIndex < this.allItems.length) {
      this.loadMoreItems();
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
