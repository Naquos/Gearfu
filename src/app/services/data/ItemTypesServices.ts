
import { Injectable } from '@angular/core';
import itemTypesJson from '../../../../public/itemTypes.json';
import { ItemType } from '../../models/data/itemType';
import { ItemTypeEnum } from '../../models/enum/itemTypeEnum';

@Injectable({providedIn: 'root'})
export class ItemTypeServices {
    
  protected itemTypes = new Map<ItemTypeEnum, ItemType>([]);
  
  constructor() {
    
    this.itemTypes.set(ItemTypeEnum.DEUX_MAINS,this.findItemType("Deux mains"))
    this.itemTypes.set(ItemTypeEnum.UNE_MAIN,this.findItemType("Une main"))
    this.itemTypes.set(ItemTypeEnum.ANNEAU,this.findItemType("Anneau"))
    this.itemTypes.set(ItemTypeEnum.BOTTES,this.findItemType("Bottes"))
    this.itemTypes.set(ItemTypeEnum.AMULETTE,this.findItemType("Amulette"))
    this.itemTypes.set(ItemTypeEnum.CAPE,this.findItemType("Cape"))
    this.itemTypes.set(ItemTypeEnum.CEINTURE,this.findItemType("Ceinture"))
    this.itemTypes.set(ItemTypeEnum.CASQUE,this.findItemType("Casque"))
    this.itemTypes.set(ItemTypeEnum.PLASTRON,this.findItemType("Plastron"))
    this.itemTypes.set(ItemTypeEnum.EPAULETTES,this.findItemType("Epaulettes"))
    this.itemTypes.set(ItemTypeEnum.ACCESSOIRES,this.findItemType("Emblème"))
    this.itemTypes.set(ItemTypeEnum.BOUCLIER,this.findItemType("Bouclier"))
    this.itemTypes.set(ItemTypeEnum.DAGUE,this.findItemType("Dague"))
    this.itemTypes.set(ItemTypeEnum.FAMILIER,this.findItemType("Familier{[~1]?s:}"))
  }
  
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
        return "aptitudes/DeuxMains.png"
      case ItemTypeEnum.UNE_MAIN:
        return "aptitudes/UneMain.png"
      case ItemTypeEnum.ANNEAU:
        return "aptitudes/Anneau.png"
      case ItemTypeEnum.BOTTES:
        return "aptitudes/Bottes.png"
      case ItemTypeEnum.AMULETTE:
        return "aptitudes/Amulette.png"
      case ItemTypeEnum.CAPE:
        return "aptitudes/Cape.png"
      case ItemTypeEnum.CEINTURE:
        return "aptitudes/Ceinture.png"
      case ItemTypeEnum.CASQUE:
        return "aptitudes/Coiffe.png"
      case ItemTypeEnum.PLASTRON:
        return "aptitudes/Plastron.png"
      case ItemTypeEnum.EPAULETTES:
        return "aptitudes/Epaulettes.png"
      case ItemTypeEnum.ACCESSOIRES:
        return "aptitudes/Accessoires.png"
      case ItemTypeEnum.BOUCLIER:
        return "aptitudes/Bouclier.png"
      case ItemTypeEnum.DAGUE:
        return "aptitudes/SecondeMain.png"
      case ItemTypeEnum.FAMILIER:
        return "aptitudes/Familier.png"
      default:
        return ""
    }
  }
}