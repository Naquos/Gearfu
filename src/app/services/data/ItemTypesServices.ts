
import { Injectable } from '@angular/core';
import itemTypesJson from '../../../../public/itemTypes.json';
import { ItemType } from '../../models/data/itemType';
import { ItemTypeEnum } from '../../models/enum/itemTypeEnum';

@Injectable({providedIn: 'root'})
export class ItemTypeServices {
  
  private readonly baseUrl = "https://vertylo.github.io/wakassets/itemTypes/"; // Base URL for images
  protected readonly itemTypes = new Map<ItemTypeEnum, ItemType>([
    [ItemTypeEnum.DEUX_MAINS,this.findItemType("Deux mains")],
    [ItemTypeEnum.UNE_MAIN,this.findItemType("Une main")],
    [ItemTypeEnum.ANNEAU,this.findItemType("Anneau")],
    [ItemTypeEnum.BOTTES,this.findItemType("Bottes")],
    [ItemTypeEnum.AMULETTE,this.findItemType("Amulette")],
    [ItemTypeEnum.CAPE,this.findItemType("Cape")],
    [ItemTypeEnum.CEINTURE,this.findItemType("Ceinture")],
    [ItemTypeEnum.CASQUE,this.findItemType("Casque")],
    [ItemTypeEnum.PLASTRON,this.findItemType("Plastron")],
    [ItemTypeEnum.EPAULETTES,this.findItemType("Epaulettes")],
    [ItemTypeEnum.ACCESSOIRES,this.findItemType("Emblème")],
    [ItemTypeEnum.BOUCLIER,this.findItemType("Bouclier")],
    [ItemTypeEnum.DAGUE,this.findItemType("Dague")],
    [ItemTypeEnum.FAMILIER,this.findItemType("Familier{[~1]?s:}")],
  ]);
  
  private findItemType(title: string): ItemType {
    return {
      id: itemTypesJson.filter(x => x.title?.fr.includes(title)).map(x => x.definition.id),
      title: title
    }
  }

  public getItemTypes(): Map<ItemTypeEnum, ItemType> {
    return this.itemTypes;
  }

  public getItemType(itemTypeId: number): ItemTypeEnum | undefined {
    let result = undefined;
    this.itemTypes.forEach((value, key) => {
      if(value.id.includes(itemTypeId)) {
        result = key;
      }
    })
    return result;
  }

  public getLogo(itemType: ItemTypeEnum | undefined): string {
    switch (itemType) {
      case ItemTypeEnum.DEUX_MAINS:
        return this.baseUrl + "519.png"
      case ItemTypeEnum.UNE_MAIN:
        return this.baseUrl + "518.png"
      case ItemTypeEnum.ANNEAU:
        return this.baseUrl + "103.png"
      case ItemTypeEnum.BOTTES:
        return this.baseUrl + "119.png"
      case ItemTypeEnum.AMULETTE:
        return this.baseUrl + "120.png"
      case ItemTypeEnum.CAPE:
        return this.baseUrl + "132.png"
      case ItemTypeEnum.CEINTURE:
        return this.baseUrl + "133.png"
      case ItemTypeEnum.CASQUE:
        return this.baseUrl + "134.png"
      case ItemTypeEnum.PLASTRON:
        return this.baseUrl + "136.png"
      case ItemTypeEnum.EPAULETTES:
        return this.baseUrl + "138.png"
      case ItemTypeEnum.ACCESSOIRES:
        return this.baseUrl + "521.png"
      case ItemTypeEnum.BOUCLIER:
        return this.baseUrl + "520.png"
      case ItemTypeEnum.DAGUE:
        return this.baseUrl + "571.png"
      case ItemTypeEnum.FAMILIER:
        return this.baseUrl + "582.png"
      default:
        return ""
    }
  }
}