import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AptitudesComponent } from '../aptitudes/aptitudes.component';

@Component({
  selector: 'app-aptitudes-router',
  imports: [AptitudesComponent],
  templateUrl: './aptitudes-router.component.html',
  styleUrl: './aptitudes-router.component.scss'
})
export class AptitudesRouterComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.removeLoader();
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
