import { Component, input, OnInit } from '@angular/core';
import { ItemsService } from '../../services/data/itemsService';
import { ItemTypeServices } from '../../services/data/ItemTypesServices';
import { Item } from '../../models/data/item';
import { ItemTypeEnum } from '../../models/enum/itemTypeEnum';
import { ItemChooseService } from '../../services/itemChooseService';
import { Build } from '../../models/data/build';
import { SaveBuildService } from '../../services/saveBuildService';


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
  imports: [],
  templateUrl: './build.component.html',
  styleUrl: './build.component.scss'
})
export class BuildComponent implements OnInit {
  public build = input<Build |  undefined>(undefined);

  protected ItemTypeBuild = ItemTypeBuild;
  protected mapImageItems = new Map<ItemTypeBuild, string>([
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

  constructor(
    private itemService: ItemsService,
    private itemTypeService: ItemTypeServices,
    protected saveBuildService: SaveBuildService,
    protected itemChooseService: ItemChooseService) {}

  ngOnInit(): void {
    const idItemList = this.build()?.codeBuild.split(",");
    if(idItemList && idItemList.length) {
      idItemList.forEach(idItem => {
        const item = this.itemService.getItem(parseInt(idItem));
        if(item) {
          this.getItemType(item).forEach(type => {
            if(this.mapImageItems.has(type)) {
              this.mapImageItems.set(type, `items/${item.idImage}.png`);
            }
          })
        }
      })
    }
  }

  protected removeBuild(event : MouseEvent): void {
    event.stopPropagation();
    this.saveBuildService.removeBuild(this.build()?.codeBuild ?? "");
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
        return [ItemTypeBuild.ACCESSOIRES];
    }
  }
}
