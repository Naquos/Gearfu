
import { Component, inject, input, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { Build } from '../../../models/data/build';
import { Item } from '../../../models/data/item';
import { ItemTypeEnum } from '../../../models/enum/itemTypeEnum';
import { ItemsService } from '../../../services/data/itemsService';
import { ItemTypeServices } from '../../../services/data/ItemTypesServices';
import { ImageService } from '../../../services/imageService';
import { ItemChooseService } from '../../../services/itemChooseService';
import { SaveBuildService } from '../../../services/saveBuildService';

export enum ItemTypeBuild  {
  CASQUE =  "CASQUE",
  AMULETTE = "AMULETTE",
  PLASTRON = "PLASTRON",
  ANNEAU_DROITE = "ANNEAU_DROITE",
  ANNEAU_GAUCHE = "ANNEAU_GAUCHE",
  BOTTES = "BOTTES",
  CAPE = "CAPE",
  EPAULETTES = "EPAULETTES",
  CEINTURE = "CEINTURE",
  SECONDE_MAIN = "SECONDE_MAIN",
  PREMIERE_MAIN = "PREMIERE_MAIN",
  ACCESSOIRES = "ACCESSOIRES",
  FAMILIER = "FAMILIER",
}


@Component({
  selector: 'app-build',
  imports: [MatTooltipModule, TranslateModule],
  templateUrl: './build.component.html',
  styleUrl: './build.component.scss'
})
export class BuildComponent implements OnInit {

  private readonly itemService = inject(ItemsService);
  private readonly itemTypeService = inject(ItemTypeServices);
  private readonly imageService = inject(ImageService);
  protected readonly saveBuildService = inject(SaveBuildService);
  protected readonly itemChooseService = inject(ItemChooseService);

  public readonly build = input<Build |  undefined>(undefined);
  public readonly displayRemove = input<boolean>(true);

  protected readonly ItemTypeBuild = ItemTypeBuild;
  protected readonly mapImageItems = new Map<ItemTypeBuild, string>([
    [ItemTypeBuild.CASQUE, "./aptitudes/EmplacementCoiffe.png"],
    [ItemTypeBuild.AMULETTE, "./aptitudes/EmplacementAmulette.png"],
    [ItemTypeBuild.PLASTRON, "./aptitudes/EmplacementPlastron.png"],
    [ItemTypeBuild.ANNEAU_DROITE, "./aptitudes/EmplacementAnneauDroite.png"],
    [ItemTypeBuild.ANNEAU_GAUCHE, "./aptitudes/EmplacementAnneauGauche.png"],
    [ItemTypeBuild.BOTTES, "./aptitudes/EmplacementBottes.png"],
    [ItemTypeBuild.CAPE, "./aptitudes/EmplacementCape.png"],
    [ItemTypeBuild.EPAULETTES, "./aptitudes/EmplacementEpaulettes.png"],
    [ItemTypeBuild.CEINTURE, "./aptitudes/EmplacementCeinture.png"],
    [ItemTypeBuild.SECONDE_MAIN, "./aptitudes/EmplacementSecondeMain.png"],
    [ItemTypeBuild.PREMIERE_MAIN, "./aptitudes/EmplacementPremièreMain.png"],
    [ItemTypeBuild.ACCESSOIRES, "./aptitudes/EmplacementEmblème.png"],
    [ItemTypeBuild.FAMILIER, "./aptitudes/EmplacementFamilier.png"],
  ])

  private firstAnneau = true;

  ngOnInit(): void {
    const idItemList = this.build()?.itemsId?.split(",");
    if(idItemList && idItemList.length) {
      idItemList.forEach(idItem => {
        const item = this.itemService.getItem(parseInt(idItem));
        if(item) {
          this.getItemType(item).forEach(type => {
            if(this.mapImageItems.has(type)) {
              this.mapImageItems.set(type, this.imageService.getItemUrl(item.idImage));
            }
          })
        }
      })
    }
  }

  protected goToZenith(event: MouseEvent): void {
    event.stopPropagation();
    window.open('https://www.zenithwakfu.com/builder/' + this.build()?.codeZenith, '_blank')
  }

  protected removeBuild(event : MouseEvent): void {
    event.stopPropagation();
    this.saveBuildService.removeBuild(this.build()!);
  }

  protected loadBuild(): void {
    const buildData = this.build();
    if (buildData) {
      this.saveBuildService.loadBuild(buildData);
    }
  }

  private getItemType(item: Item): ItemTypeBuild[] {
    const itemType = this.itemTypeService.getItemType(item.itemTypeId);
    switch (itemType) {
      case ItemTypeEnum.CASQUE:
        return [ItemTypeBuild.CASQUE];
      case ItemTypeEnum.AMULETTE:
        return [ItemTypeBuild.AMULETTE];
      case ItemTypeEnum.PLASTRON:
        return [ItemTypeBuild.PLASTRON];
      case ItemTypeEnum.ANNEAU:
        if(this.firstAnneau) {
          this.firstAnneau = false;
          return [ItemTypeBuild.ANNEAU_DROITE];
        } else {
          return [ItemTypeBuild.ANNEAU_GAUCHE];
        }
      case ItemTypeEnum.BOTTES:
        return [ItemTypeBuild.BOTTES];
      case ItemTypeEnum.CAPE:
        return [ItemTypeBuild.CAPE];
      case ItemTypeEnum.EPAULETTES:
        return [ItemTypeBuild.EPAULETTES];
      case ItemTypeEnum.CEINTURE:
        return [ItemTypeBuild.CEINTURE];
      case ItemTypeEnum.DEUX_MAINS:
        return [ItemTypeBuild.PREMIERE_MAIN, ItemTypeBuild.SECONDE_MAIN];
      case ItemTypeEnum.UNE_MAIN:
        return [ItemTypeBuild.PREMIERE_MAIN];
      case ItemTypeEnum.DAGUE:
      case ItemTypeEnum.BOUCLIER:
        return [ItemTypeBuild.SECONDE_MAIN];
      case ItemTypeEnum.ACCESSOIRES:
        return [ItemTypeBuild.ACCESSOIRES];
      case ItemTypeEnum.FAMILIER:
        return [ItemTypeBuild.FAMILIER];
      default:
        return [];
    }
  }
}
