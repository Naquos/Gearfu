import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ItemListComponent } from '../item-list/item-list.component';
import { DisplayFilterService } from '../../../services/displayFilterService';
import { RecapStatsComponent } from '../recap-stats/recap-stats.component';
import { ItemsService } from '../../../services/data/itemsService';
import { AnkamaCdnFacade } from '../../../services/ankama-cdn/ankamaCdnFacade';
import { MonsterDropService } from '../../../services/data/monsterDropService';
import { ItemConditionService } from '../../../services/data/itemConditionService';
import { StatesDefinitionService } from '../../../services/data/statesDefinitionService';
import { FamiliersService } from '../../../services/data/familiersService';
import { ItemsShellService } from '../../../services/itemsShellService';
import { forkJoin, from } from 'rxjs';

@Component({
  selector: 'app-list-item-router',
  imports: [ItemListComponent, RecapStatsComponent],
  templateUrl: './list-item-router.component.html',
  styleUrl: './list-item-router.component.scss'
})
export class ListItemRouterComponent implements OnInit {
  protected displayFilterService = inject(DisplayFilterService);
  private readonly itemService = inject(ItemsService);
  private readonly ankamaCdnFacade = inject(AnkamaCdnFacade);
  private readonly monsterDropService = inject(MonsterDropService);
  private readonly itemConditionService = inject(ItemConditionService);
  private readonly statesDefinitionService = inject(StatesDefinitionService);
  private readonly familiersService = inject(FamiliersService);
  private readonly itemsShellService = inject(ItemsShellService);
  private readonly platformId = inject(PLATFORM_ID);

  public ngOnInit(): void {
    this.itemsShellService.reset();

    this.ankamaCdnFacade.load();
    forkJoin([
      this.ankamaCdnFacade.ready$(),
      from(this.monsterDropService.load()),
      from(this.itemConditionService.load()),
      from(this.statesDefinitionService.load()),
      from(this.familiersService.load())
    ]).subscribe(() => {
      this.itemService.init();
      this.itemsShellService.setReady();
    });

    if (isPlatformBrowser(this.platformId)) {
      const checkLoading = setInterval(() => {
        if (!this.itemService.isLoading()) {
          this.removeLoader();
          clearInterval(checkLoading);
        }
      }, 100);

      setTimeout(() => {
        clearInterval(checkLoading);
        this.removeLoader();
      }, 10000);
    }
  }

  private removeLoader(): void {
    const loader = document.getElementById('app-loader');
    if (loader) {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.5s ease-out';
      setTimeout(() => {
        loader.remove();
      }, 500);
    }
  }
}
