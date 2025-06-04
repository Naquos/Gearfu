import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appFallback]'
})
export class ImageFallbackDirective {

  @HostListener('error', ['$event.target'])
  onError(target: HTMLImageElement) {
    target.src = 'https://vertylo.github.io/wakassets/items/0000000.png'; // Fallback image URL
  }
}