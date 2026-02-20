import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EnchantementComponent } from "../enchantement/enchantement.component";
import { SublimationService } from '../../../services/data/sublimationService';

@Component({
  selector: 'app-enchantement-router',
  imports: [EnchantementComponent],
  templateUrl: './enchantement-router.component.html',
  styleUrl: './enchantement-router.component.scss'
})
export class EnchantementRouterComponent implements OnInit {
  private readonly sublimationService = inject(SublimationService);
  private readonly platformId = inject(PLATFORM_ID);

  public ngOnInit(): void {
    this.sublimationService.load().finally(() => {
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
