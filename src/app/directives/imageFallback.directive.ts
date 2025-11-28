import { Directive, HostListener } from '@angular/core';
import { ImageService } from '../services/imageService';
import { GfxIdNeoEnum } from '../models/enum/gfxIdNeoEnum';

@Directive({
  selector: 'img[appFallback]'
})
export class ImageFallbackDirective {

  private neoImageMap = new Map<GfxIdNeoEnum, string>([
    [GfxIdNeoEnum.NEO_BOUFTOU_ROYAL, "néo/neo-bouftou-royal.png"],
    [GfxIdNeoEnum.NEO_CHENE_MOU, "néo/neo-chene-mou.png"],
    [GfxIdNeoEnum.NEO_CORBEAU_NOIR, "néo/neo-corbeau-noir.png"],
    [GfxIdNeoEnum.NEO_GLIGLI_ROYAL, "néo/neo-gligli-royal.png"],
    [GfxIdNeoEnum.NEO_GOEL_LE_GOLEM, "néo/neo-goel-le-golem.png"],
    [GfxIdNeoEnum.NEO_KYA_MISSIZ_FRIZZ, "néo/neo-kya-missiz-frizz.png"],
    [GfxIdNeoEnum.NEO_MOOGR_ROYAL, "néo/neo-moogr-royale.png"],
    [GfxIdNeoEnum.NEO_OGREST, "néo/neo-ogrest.png"],
    [GfxIdNeoEnum.NEO_PANDORE, "néo/neo-pandore.png"],
    [GfxIdNeoEnum.NEO_PIOU_ROYAL, "néo/neo-piou-royal.png"],
    [GfxIdNeoEnum.NEO_REMIGTON_SMISSE, "néo/neo-remington-smisse.png"],
    [GfxIdNeoEnum.NEO_VAMPYRO, "néo/neo-vampyro.png"],
    [GfxIdNeoEnum.NEO_WA_WABBIT, "néo/neo-wa-wabbit.png"],
  ]);

  @HostListener('error', ['$event.target'])
  onError(target: EventTarget | null) {
    if (target instanceof HTMLImageElement) {
      const idImage = target.src.split('/').pop()?.split('.').shift();
      const neoImage = idImage ? this.neoImageMap.get(+idImage) : null;
      console.log('Image load error, applying fallback for id:', idImage);
      target.src = neoImage ?? ImageService.IMAGE_ERROR; // Fallback image URL
    }
  }
}