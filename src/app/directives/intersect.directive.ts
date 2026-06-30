import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject, input, output } from '@angular/core';

@Directive({
  selector: '[appIntersect]',
  standalone: true
})
export class IntersectDirective implements OnInit, OnDestroy {
  appIntersect = output<void>();
  intersectRoot = input<HTMLElement | undefined>(undefined); // Conteneur de scroll optionnel

  private observer?: IntersectionObserver;
  private readonly el = inject(ElementRef);

  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.appIntersect.emit();
          }
        });
      },
      {
        root: this.intersectRoot() || null, // Utilise le root custom ou le viewport par défaut
        threshold: 0.1,
        rootMargin: '300px' // Commence à charger 300px avant
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}