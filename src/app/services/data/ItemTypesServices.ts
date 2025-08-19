
import { Injectable } from '@angular/core';
import { ItemType } from '../../models/data/itemType';
import { ItemTypeEnum } from '../../models/enum/itemTypeEnum';
import { ImageService } from '../imageService';
import { ItemTypeDefinitionEnum } from '../../models/enum/itemTypeDefinitionEnum';

@Injectable({providedIn: 'root'})
export class ItemTypeServices {

  constructor(private readonly imageService: ImageService) {}
  
  private readonly itemTypes = new Map<ItemTypeEnum, ItemType>([    
    [ItemTypeEnum.DEUX_MAINS,{ids:[
      ItemTypeDefinitionEnum.HACHE,
      ItemTypeDefinitionEnum.PELLE,
      ItemTypeDefinitionEnum.MARTEAU,
      ItemTypeDefinitionEnum.ARC,
      ItemTypeDefinitionEnum.EPEE_DEUX_MAINS,
      ItemTypeDefinitionEnum.BATON_DEUX_MAINS,
    ]}],
    [ItemTypeEnum.UNE_MAIN,{ids:[
      ItemTypeDefinitionEnum.BAGUETTE,
      ItemTypeDefinitionEnum.EPEE,
      ItemTypeDefinitionEnum.BATON,
      ItemTypeDefinitionEnum.AIGUILLE,
      ItemTypeDefinitionEnum.CARTE,
    ]}],
    [ItemTypeEnum.ANNEAU,{ids:[ItemTypeDefinitionEnum.ANNEAU]}],
    [ItemTypeEnum.BOTTES,{ids:[ItemTypeDefinitionEnum.BOTTES]}],
    [ItemTypeEnum.AMULETTE,{ids:[ItemTypeDefinitionEnum.AMULETTE]}],
    [ItemTypeEnum.CAPE,{ids:[ItemTypeDefinitionEnum.CAPE]}],
    [ItemTypeEnum.CEINTURE,{ids:[ItemTypeDefinitionEnum.CEINTURE]}],
    [ItemTypeEnum.CASQUE,{ids:[ItemTypeDefinitionEnum.CASQUE]}],
    [ItemTypeEnum.PLASTRON,{ids:[ItemTypeDefinitionEnum.PLASTRON]}],
    [ItemTypeEnum.EPAULETTES,{ids:[ItemTypeDefinitionEnum.EPAULETTES]}],
    [ItemTypeEnum.ACCESSOIRES,{ids:[ItemTypeDefinitionEnum.EMBLEME]}],
    [ItemTypeEnum.BOUCLIER,{ids:[ItemTypeDefinitionEnum.BOUCLIER]}],
    [ItemTypeEnum.DAGUE,{ids:[ItemTypeDefinitionEnum.DAGUE]}],
    [ItemTypeEnum.FAMILIER,{ids:[ItemTypeDefinitionEnum.FAMILIER]}],
  ]);

  public getItemTypes(): Map<ItemTypeEnum, ItemType> {
    return this.itemTypes;
  }

  public getItemType(itemTypeId: number): ItemTypeEnum | undefined {
    let result = undefined;
    this.itemTypes.forEach((value, key) => {
      if(value.ids.includes(itemTypeId)) {
        result = key;
      }
    })
    return result;
  }

  public getLogo(itemType: ItemTypeEnum | undefined): string {
    return itemType ? this.imageService.mapUrlItemType.get(itemType) ?? "" : "";
  }
}