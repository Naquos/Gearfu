
import { Injectable } from '@angular/core';
import itemTypesJson from '../../../../public/itemTypes.json';
import { ItemType } from '../../models/data/itemType';
import { ItemTypeEnum } from '../../models/enum/itemTypeEnum';
import { ImageService } from '../imageService';

@Injectable({providedIn: 'root'})
export class ItemTypeServices {

  constructor(private readonly imageService: ImageService) {}
  
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
    return itemType ? this.imageService.mapUrlItemType.get(itemType) ?? "" : "";
  }
}