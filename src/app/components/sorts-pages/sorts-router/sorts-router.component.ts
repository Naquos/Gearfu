import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SortsComponent } from '../sorts/sorts.component';
import { SortService } from '../../../services/data/sortService';
import { SortLevelService } from '../../../services/data/sortLevelService';

@Component({
  selector: 'app-sorts-router',
  imports: [SortsComponent],
  templateUrl: './sorts-router.component.html',
  styleUrl: './sorts-router.component.scss'
})
export class SortsRouterComponent implements OnInit {
  private readonly sortService = inject(SortService);
  private readonly sortLevelService = inject(SortLevelService);
  private readonly platformId = inject(PLATFORM_ID);

  public ngOnInit(): void {
    Promise.all([
      this.sortLevelService.load(),
      this.sortService.load()
    ]).finally(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.removeLoader();
      }
    });
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
