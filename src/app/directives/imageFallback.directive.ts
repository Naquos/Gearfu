import { Directive, HostListener } from '@angular/core';
import { ImageService } from '../services/imageService';

@Directive({
  selector: 'img[appFallback]'
})
export class ImageFallbackDirective {

  @HostListener('error', ['$event.target'])
  onError(target: EventTarget | null) {
    if (target instanceof HTMLImageElement) {
      target.src = ImageService.IMAGE_ERROR; // Fallback image URL
    }
  }
}