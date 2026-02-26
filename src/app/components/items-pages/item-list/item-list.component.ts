import { Component, inject, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ItemSkeletonComponent } from '../item-skeleton/item-skeleton.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { IntersectDirective } from '../../../directives/intersect.directive';
import { Item } from '../../../models/data/item';
import { ItemsService } from '../../../services/data/itemsService';

@Component({
  selector: 'app-item-list',
  imports: [ItemComponent, CommonModule, ItemSkeletonComponent, IntersectDirective],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent implements OnInit, OnDestroy {
  protected readonly itemsService = inject(ItemsService);
  protected readonly skeletonArray = Array(36).fill(0).map((x, i) => i); // Tableau pour afficher 36 skeletons
  
  protected displayedItems$ = new BehaviorSubject<Item[]>([]);
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
