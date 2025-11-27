import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Input } from '@angular/core';

@Directive({
  selector: '[appIntersect]',
  standalone: true
})
export class IntersectDirective implements OnInit, OnDestroy {
  @Output() appIntersect = new EventEmitter<void>();
  @Input() intersectRoot?: HTMLElement; // Conteneur de scroll optionnel
  
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
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