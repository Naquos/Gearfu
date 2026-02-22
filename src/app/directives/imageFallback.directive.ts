import { Directive, HostListener } from '@angular/core';
import { ImageService } from '../services/imageService';
import { GfxIdNeoEnum } from '../models/enum/gfxIdNeoEnum';
import { GfxIdMobEnum } from '../models/enum/gfxIdMobEnum';

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
      const neoImage = idImage ? this.neoImageMap.get(+idImage) : null;
      if(neoImage) {
        target.style.display = 'none'; // Masquer l'image cassée
        return;
      }
      const mobImage = idImage ? this.imageMap.get(+idImage) : null;
      target.src = mobImage ?? ImageService.IMAGE_ERROR; // Fallback image URL
    }
  }
}