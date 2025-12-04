import { Component, inject, signal } from '@angular/core';
import { ImageService } from '../../../services/imageService';
import { ChasseFormService } from '../../../services/form/chasseFormService';
import { toSignal } from '@angular/core/rxjs-interop';
import { ItemTypeEnum } from '../../../models/enum/itemTypeEnum';
import { ImageItemComponent } from "../image-item/image-item.component";
import { Chasse } from '../../../models/data/chasse';
import { IdChassesEnum } from '../../../models/enum/idChassesEnum';
import { ItemTypeServices } from '../../../services/data/ItemTypesServices';
import { TranslateModule } from '@ngx-translate/core';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';

interface DisplayTypeItem {
  indexItem: number;
  itemType: ItemTypeEnum;
  background: string;
}

interface EffetDescription {
  id: number;
  chasse: Chasse;
  libelle: string;
  logos: [ItemTypeEnum, ItemTypeEnum];
}

@Component({
  selector: 'app-enchantement',
  imports: [ImageItemComponent, TranslateModule],
  templateUrl: './enchantement.component.html',
  styleUrl: './enchantement.component.scss'
})
export class EnchantementComponent {

  protected readonly imageService = inject(ImageService);
  protected readonly chasseFormService = inject(ChasseFormService);
  protected readonly chasses = toSignal(this.chasseFormService.chasse$);
  protected readonly itemTypeService = inject(ItemTypeServices);
  protected readonly effectToApply = signal<EffetDescription | undefined>(undefined);
  protected readonly itemTypeSelected = signal<ItemTypeEnum | undefined>(undefined);

  protected readonly displayTypeItem: DisplayTypeItem[] = [
    {indexItem: 0, itemType: ItemTypeEnum.CASQUE, background: './aptitudes/EmplacementCoiffe.png'},
    {indexItem: 0, itemType: ItemTypeEnum.AMULETTE, background: './aptitudes/EmplacementAmulette.png'},
    {indexItem: 0, itemType: ItemTypeEnum.PLASTRON, background: './aptitudes/EmplacementPlastron.png'},
    {indexItem: 0, itemType: ItemTypeEnum.ANNEAU, background: './aptitudes/EmplacementAnneauGauche.png'},
    {indexItem: 1, itemType: ItemTypeEnum.ANNEAU, background: './aptitudes/EmplacementAnneauDroite.png'},
    {indexItem: 0, itemType: ItemTypeEnum.BOTTES, background: './aptitudes/EmplacementBottes.png'},
    {indexItem: 0, itemType: ItemTypeEnum.CAPE, background: './aptitudes/EmplacementCape.png'},
    {indexItem: 0, itemType: ItemTypeEnum.EPAULETTES, background: './aptitudes/EmplacementEpaulettes.png'},
    {indexItem: 0, itemType: ItemTypeEnum.CEINTURE, background: './aptitudes/EmplacementCeinture.png'},
    {indexItem: 0, itemType: ItemTypeEnum.UNE_MAIN, background: './aptitudes/EmplacementPremièreMain.png'},
  ]

  protected readonly effetsDescription: EffetDescription[] = [
    {id: 0, chasse: {color: IdChassesEnum.BLEU, lvl: 11, idAction: IdActionsEnum.MAITRISES_ELEMENTAIRES}, libelle: "enchantement.maitrise-elementaire", logos: [ItemTypeEnum.PLASTRON, ItemTypeEnum.CAPE]},
    {id: 1, chasse: {color: IdChassesEnum.BLEU, lvl: 11, idAction: IdActionsEnum.MAITRISES_SOIN}, libelle: "enchantement.maitrise-soin", logos: [ItemTypeEnum.AMULETTE, ItemTypeEnum.EPAULETTES]},
    {id: 2, chasse: {color: IdChassesEnum.ROUGE, lvl: 11, idAction: IdActionsEnum.MAITRISES_MELEE}, libelle: "enchantement.maitrise-melee", logos: [ItemTypeEnum.CASQUE, ItemTypeEnum.CAPE]},
    {id: 3, chasse: {color: IdChassesEnum.ROUGE, lvl: 11, idAction: IdActionsEnum.MAITRISES_DISTANCES}, libelle: "enchantement.maitrise-distance", logos: [ItemTypeEnum.CEINTURE, ItemTypeEnum.UNE_MAIN]},
    {id: 4, chasse: {color: IdChassesEnum.ROUGE, lvl: 11, idAction: IdActionsEnum.MAITRISES_BERZERK}, libelle: "enchantement.maitrise-berserk", logos: [ItemTypeEnum.AMULETTE, ItemTypeEnum.CAPE]},
    {id: 5, chasse: {color: IdChassesEnum.VERT, lvl: 11, idAction: IdActionsEnum.MAITRISES_CRITIQUES}, libelle: "enchantement.maitrise-critique", logos: [ItemTypeEnum.EPAULETTES, ItemTypeEnum.UNE_MAIN]},
    {id: 6, chasse: {color: IdChassesEnum.VERT, lvl: 11, idAction: IdActionsEnum.MAITRISES_DOS}, libelle: "enchantement.maitrise-dos", logos: [ItemTypeEnum.CEINTURE, ItemTypeEnum.BOTTES]},
    {id: 7, chasse: {color: IdChassesEnum.BLEU, lvl: 11, idAction: IdActionsEnum.TACLE}, libelle: "enchantement.tacle", logos: [ItemTypeEnum.ANNEAU, ItemTypeEnum.ANNEAU]},
    {id: 8, chasse: {color: IdChassesEnum.VERT, lvl: 11, idAction: IdActionsEnum.ESQUIVE}, libelle: "enchantement.esquive", logos: [ItemTypeEnum.ANNEAU, ItemTypeEnum.ANNEAU]},
    {id: 9, chasse: {color: IdChassesEnum.VERT, lvl: 11, idAction: IdActionsEnum.INITIATIVE}, libelle: "enchantement.initiative", logos: [ItemTypeEnum.AMULETTE, ItemTypeEnum.CAPE]},
    {id: 10, chasse: {color: IdChassesEnum.VERT, lvl: 11, idAction: IdActionsEnum.RESISTANCES_FEU}, libelle: "enchantement.resistance-feu", logos: [ItemTypeEnum.PLASTRON, ItemTypeEnum.CEINTURE]},
    {id: 11, chasse: {color: IdChassesEnum.BLEU, lvl: 11, idAction: IdActionsEnum.RESISTANCES_EAU}, libelle: "enchantement.resistance-eau", logos: [ItemTypeEnum.PLASTRON, ItemTypeEnum.EPAULETTES]},
    {id: 12, chasse: {color: IdChassesEnum.ROUGE, lvl: 11, idAction: IdActionsEnum.RESISTANCES_TERRE}, libelle: "enchantement.resistance-terre", logos: [ItemTypeEnum.PLASTRON, ItemTypeEnum.BOTTES]},
    {id: 13, chasse: {color: IdChassesEnum.BLEU, lvl: 11, idAction: IdActionsEnum.RESISTANCES_AIR}, libelle: "enchantement.resistance-air", logos: [ItemTypeEnum.PLASTRON, ItemTypeEnum.CAPE]},
    {id: 14, chasse: {color: IdChassesEnum.BLEU, lvl: 11, idAction: IdActionsEnum.POINT_DE_VIE}, libelle: "enchantement.vie", logos: [ItemTypeEnum.CASQUE, ItemTypeEnum.UNE_MAIN]},
  ]

  protected chooseEffet(effet: EffetDescription) {
    this.effectToApply.set(effet);
  }

  protected clearEffet() {
    this.effectToApply.set(undefined);
  }

  protected removeEffet(posX: number, posY: number) {
    this.chasseFormService.clearEffect(posX, posY);
  }

  protected changeJokerState(posX: number, posY: number) {
    this.chasseFormService.changeJokerState(posX, posY);
  }

  protected applyEffet(posX: number, posY: number) {
    if(!this.effectToApply()) {
      return;
    }
    this.chasseFormService.applyEffect(posX, posY, {
      color: this.effectToApply()!.chasse.color,
      lvl: this.effectToApply()!.chasse.lvl,
      idAction: this.effectToApply()!.chasse.idAction,
      joker: false
    });
  }

  protected cursorDestructStyle(chasse: Chasse, effetToApply: EffetDescription | undefined): string {
    const currentChasses = effetToApply?.chasse;
    if(!currentChasses || !this.equalChasses(chasse, currentChasses)) {
      return '';
    }
    return `url(cursor/chasses/destructShard.png) 16 16, auto`;
  }

  private equalChasses(c1: Chasse, c2: Chasse): boolean {
    return c1.color === c2.color && c1.lvl === c2.lvl && c1.idAction === c2.idAction;
  }

  protected effectIsDouble(effet: EffetDescription): boolean {
    return !!this.itemTypeSelected() &&  effet.logos.includes(this.itemTypeSelected()!);
  }

  protected selectItemType(itemType: ItemTypeEnum) {
    if(this.itemTypeSelected() === itemType) {
      this.itemTypeSelected.set(undefined);
    } else {
      this.itemTypeSelected.set(itemType);
    }
  }

}
