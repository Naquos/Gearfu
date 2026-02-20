import { Directive, HostListener } from '@angular/core';
import { ImageService } from '../services/imageService';
import { GfxIdMobEnum } from '../models/enum/gfxIdMobEnum';

@Directive({
  selector: 'img[appFallback]'
})
export class ImageFallbackDirective {

  private imageMap = new Map<GfxIdMobEnum, string>([
    [GfxIdMobEnum.YDALIPE, "mob/ydalipe.png"],
    [GfxIdMobEnum.BILBYGIRL, "mob/bilbygirl.png"],
    [GfxIdMobEnum.BILBYBOY, "mob/bilbyboy.png"],
    [GfxIdMobEnum.GELEE_REGLISSE, "mob/gelee-reglisse.png"],
    [GfxIdMobEnum.ASSASSIN_ENCAPUCHONNE, "mob/assassin-encapuchonne.png"],
    [GfxIdMobEnum.PROTECTEUR_ENCAPUCHONNE, "mob/protecteur-encapuchonne.png"],
    [GfxIdMobEnum.RATCHITIK, "mob/ratchitik.png"],
    [GfxIdMobEnum.LELA, "mob/lela.png"],
    [GfxIdMobEnum.ERPEL, "mob/erpel.png"],
    [GfxIdMobEnum.EENCA, "mob/eenca.png"],
    [GfxIdMobEnum.RATAGASD_LE_MARRON, "mob/ratagasd-le-marron.png"],
    [GfxIdMobEnum.MOUMOUTE_LA_POSTICHE, "mob/moumoute-la-postiche.png"],
    [GfxIdMobEnum.SCARABOSS, "mob/scaraboss.png"],
    [GfxIdMobEnum.SCARAFON, "mob/scarafon.png"],
    [GfxIdMobEnum.SCARAMEL, "mob/scaramel.png"],
    [GfxIdMobEnum.SCARABRUNI, "mob/scarabruni.png"],
  ]);


  @HostListener('error', ['$event.target'])
  onError(target: EventTarget | null) {
    if (target instanceof HTMLImageElement) {
      const idImage = target.src.split('/').pop()?.split('.').shift();
      const mobImage = idImage ? this.imageMap.get(+idImage) : null;
      target.src = mobImage ?? ImageService.IMAGE_ERROR; // Fallback image URL
    }
  }
}