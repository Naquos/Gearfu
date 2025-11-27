import { Directive, ElementRef, OnInit, Renderer2, OnDestroy } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'img',
  standalone: true,
  host: {
    '[class.lazy-loading]': 'isLoading',
    '[class.lazy-loaded]': '!isLoading'
  }
})
export class LazyImageDirective implements OnInit, OnDestroy {
  isLoading = true;
  private loadListener?: () => void;
  private errorListener?: () => void;

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // Ajouter automatiquement loading="lazy" si non présent
    const loadingAttr = this.el.nativeElement.getAttribute('loading');
    if (!loadingAttr) {
      this.renderer.setAttribute(this.el.nativeElement, 'loading', 'lazy');
    }

    // Injecter les styles dans le document
    this.injectStyles();

    // Écouter l'événement de chargement
    this.loadListener = this.renderer.listen(this.el.nativeElement, 'load', () => {
      this.isLoading = false;
    });

    // Écouter l'événement d'erreur
    this.errorListener = this.renderer.listen(this.el.nativeElement, 'error', () => {
      this.isLoading = false;
    });

    // Si l'image est déjà en cache, elle peut être déjà chargée
    if (this.el.nativeElement.complete && this.el.nativeElement.naturalHeight !== 0) {
      this.isLoading = false;
    }
  }

  private injectStyles(): void {
    const styleId = 'lazy-image-styles';
    
    // Vérifier si les styles sont déjà injectés
    if (document.getElementById(styleId)) {
      return;
    }

    const style = this.renderer.createElement('style');
    this.renderer.setAttribute(style, 'id', styleId);
    this.renderer.setAttribute(style, 'type', 'text/css');
    
    const css = `
      img.lazy-loading {
        background-color: rgba(255, 255, 255, 0.1) !important;
        animation: lazy-pulse 1.5s ease-in-out infinite;
      }

      img.lazy-loaded {
        background-color: transparent !important;
        animation: none;
      }

      @keyframes lazy-pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }
    `;
    
    const textNode = this.renderer.createText(css);
    this.renderer.appendChild(style, textNode);
    this.renderer.appendChild(document.head, style);
  }

  ngOnDestroy(): void {
    // Nettoyer les listeners
    if (this.loadListener) {
      this.loadListener();
    }
    if (this.errorListener) {
      this.errorListener();
    }
  }
}