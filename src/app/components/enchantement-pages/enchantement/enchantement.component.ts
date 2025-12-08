import { Component, computed, inject, signal, ViewContainerRef } from '@angular/core';
import { ImageService } from '../../../services/imageService';
import { ChasseFormService } from '../../../services/form/chasseFormService';
import { toSignal } from '@angular/core/rxjs-interop';
import { ItemTypeEnum } from '../../../models/enum/itemTypeEnum';
import { ImageItemComponent } from "../image-item/image-item.component";
import { Chasse } from '../../../models/data/chasse';
import { IdChassesEnum } from '../../../models/enum/idChassesEnum';
import { ItemTypeServices } from '../../../services/data/ItemTypesServices';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { map, takeUntil } from 'rxjs';
import { Sublimation } from '../../../models/data/sublimation';
import { SublimationsEpiqueRelique } from '../../../models/data/sublimationEpiqueRelique';
import { SublimationService } from '../../../services/data/sublimationService';
import { LinkSublimation, SublimationsDescriptions } from '../../../models/data/sublimationsDescriptions';
import { TooltipService } from '../../../services/TooltipService';
import { DescriptionSublimationComponent, DescriptionSublimationType } from '../description-sublimation/description-sublimation.component';
import { LevelFormService } from '../../../services/form/levelFormService';
import { maxChasseLevel } from '../../../models/utils/utils';
import { AbstractDestroyService } from '../../../services/abstract/abstractDestroyService';

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
  imports: [ImageItemComponent, TranslateModule, MatSliderModule, MatInputModule, FormsModule],
  templateUrl: './enchantement.component.html',
  styleUrl: './enchantement.component.scss'
})
export class EnchantementComponent extends AbstractDestroyService {

  private readonly sublimationService = inject(SublimationService);
  private readonly translateService = inject(TranslateService);
  private readonly tooltipService = inject(TooltipService<DescriptionSublimationType>);
  private readonly viewContainerRef = inject(ViewContainerRef);
  
  protected readonly imageService = inject(ImageService);
  protected readonly chasseFormService = inject(ChasseFormService);
  protected readonly chasses = toSignal(this.chasseFormService.enchantement$.pipe(map(enchantement => enchantement.chasseCombinaison)));
  protected readonly enchantement = toSignal(this.chasseFormService.enchantement$);
  protected readonly itemTypeService = inject(ItemTypeServices);
  protected readonly sublimations = signal(this.sublimationService.getSublimations());
  protected readonly sublimationsEpiqueRelique = signal(this.sublimationService.getSublimationsEpiqueRelique());
  protected searchSubli = signal("");
  protected readonly ItemTypeEnum = ItemTypeEnum;
  protected readonly effectToApply = signal<EffetDescription | undefined>(undefined);
  protected readonly itemTypeSelected = signal<ItemTypeEnum | undefined>(undefined);
  protected readonly sublimationToApply = signal<SublimationsDescriptions | undefined>(undefined);
  protected readonly levelSublimationToApply = signal<number | undefined>(undefined);
  protected readonly indexItemTypeSelected = signal<number>(-1);
  protected readonly levelFormService = inject(LevelFormService);
  protected level = 11;
  protected maxLevel = 11;
  private itemLevels = new Map<number, number>();

  constructor() {
    super();
    this.levelFormService.level$.pipe(takeUntil(this.destroy$)).subscribe(level => {
      this.maxLevel = maxChasseLevel(level);
      this.level = Math.min(this.level, this.maxLevel);
    });
  }

  protected openTooltip(event: MouseEvent, sublimationDescriptions: SublimationsDescriptions | Sublimation | SublimationsEpiqueRelique | undefined, level: number): void {
    if(!sublimationDescriptions) {
      return;
    }
    let description = sublimationDescriptions;
    if('isValid' in description || 'epique' in description) {
      description = this.sublimationService.getSublimationById(sublimationDescriptions.id)!;
    }
    this.tooltipService.forceClose();
    if(sublimationDescriptions) {
      this.tooltipService.cancelClose();
      // Le 7ème paramètre active le comportement "garder ouvert au survol"
      this.tooltipService.openTooltip(
        this.viewContainerRef, 
        DescriptionSublimationComponent, 
        event, 
        {sublimationsDescriptions: description, level},
        [{
          originX: 'end', originY: 'top',
          overlayX: 'end', overlayY: 'bottom',
          offsetY: -10
        }],  // connectedPosition
        true,       // withPush
        true        // keepOpenOnHover
      );
    }
  }

  protected readonly sublimationsList = computed(() => {
    this.chasses();
    const search = this.searchSubli().toLowerCase();
    return this.sublimations()?.filter(subli => (this.nameItem(subli).toLowerCase().includes(search)
       || this.descriptionSublimation(subli).toLowerCase().includes(search)))
    .filter(x => this.indexItemTypeSelected() === -1 
        || this.chasseFormService.canApplySublimationWithItem(this.chasses()![this.indexItemTypeSelected()], x) );
  })

  protected readonly sublimationsEpiqueReliqueList = computed(() => {
    const search = this.searchSubli().toLowerCase();
    return this.sublimationsEpiqueRelique()?.filter(subli => this.nameItem(subli).toLowerCase().includes(search) 
      || this.descriptionSublimation(subli).toLowerCase().includes(search));
  });


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

  protected onMouseLeave(): void {
    this.tooltipService.closeTooltip();
  }

  protected getUrlSublimationImage(linkSublimation: LinkSublimation): string {
    let id = -1;
    switch(linkSublimation.level) {
      case 1:
        id = 81228822;
        break;
      case 2:
        id = 81228823;
        break;
      default:
        id = 81227111;
        break;
    }
    return this.imageService.getItemUrl(id);
  }

  protected applySublimationEpicRelic() {
    if(!this.sublimationToApply() || (!this.sublimationToApply()!.isEpic && !this.sublimationToApply()!.isRelic)) {
      return;
    }
    this.chasseFormService.applySublimationEpicRelic({
      id: this.sublimationToApply()!.id,
      idImage: this.sublimationToApply()!.gfxId,
      title: this.sublimationToApply()!.title,
      epique: this.sublimationToApply()!.isEpic,
      relique: this.sublimationToApply()!.isRelic
    });
  }

  protected applySublimation(posY: number) {
    if(!this.sublimationToApply()) {
      this.chasseFormService.removeSublimation(posY);
      return;
    }
    if(this.sublimationToApply()!.isEpic || this.sublimationToApply()!.isRelic) {
      return;
    }
    this.chasseFormService.applySumblimation(posY, {
      id: this.sublimationToApply()!.id,
      title: this.sublimationToApply()!.title,
      slotColorPattern: this.sublimationToApply()!.slotColorPattern,
      isValid: false,
      level: this.levelSublimationToApply() || 1
    });
  }

  protected nameItem(sublimation: SublimationsDescriptions | undefined): string {
    if(!sublimation) {
      return "";
    }
    return sublimation.title[this.translateService.currentLang as keyof typeof sublimation.title];
  }

  protected descriptionSublimation(sublimation: SublimationsDescriptions | undefined): string {
    if(!sublimation) {
      return "";
    }
    return sublimation.description[this.translateService.currentLang as keyof typeof sublimation.description];
  }

  protected nameSublimation(sublimation: Sublimation | undefined): string {
    if(!sublimation) {
      return "";
    }
    const levelSublimation = sublimation.level === 1 ? "I" : sublimation.level === 2 ? "II" : sublimation.level === 3 ? "III" : "";
    return `${sublimation.title[this.translateService.currentLang as keyof typeof sublimation.title]} ${levelSublimation} `;
  }

  protected nameSublimationEpicRelic(sublimation: SublimationsEpiqueRelique | undefined): string {
    if(!sublimation) {
      return "";
    }
    return sublimation.title[this.translateService.currentLang as keyof typeof sublimation.title];
  }

  protected chooseSublimation(sublimation: SublimationsDescriptions, level: number) {
    this.effectToApply.set(undefined);
    this.sublimationToApply.set(sublimation);
    this.levelSublimationToApply.set(level);
  }

  protected chooseEffet(effet: EffetDescription) {
    this.levelSublimationToApply.set(undefined);
    this.sublimationToApply.set(undefined);
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

  protected applyEffet(posX: number, posY: number, levelItem: number) {
    if(!this.effectToApply()) {
      return;
    }
    this.chasseFormService.applyEffect(posX, posY, {
      color: this.effectToApply()!.chasse.color,
      lvl: Math.min(this.level, maxChasseLevel(levelItem)),
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

  protected selectItemType(itemType: ItemTypeEnum, index: number) {
    if(this.itemTypeSelected() === itemType && this.indexItemTypeSelected() === index) {
      this.indexItemTypeSelected.set(-1);
      this.itemTypeSelected.set(undefined);
    } else {
      this.indexItemTypeSelected.set(index);
      this.itemTypeSelected.set(itemType);
    }
  }

  protected setLevelItem(level: number, index: number): void {
    this.itemLevels.set(index, level);
  }

  protected getLevelItem(index: number): number {
    return this.itemLevels.get(index) || 0;
  }

}
