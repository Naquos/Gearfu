import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Input, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appIntersect]',
  standalone: true
})
export class IntersectDirective implements OnInit, OnDestroy {
  @Output() appIntersect = new EventEmitter<void>();
  @Input() intersectRoot?: HTMLElement; // Conteneur de scroll optionnel
  
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
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
        root: this.intersectRoot || null, // Utilise le root custom ou le viewport par défaut
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