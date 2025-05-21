
import { Injectable } from '@angular/core';
import { ItemType } from '../../models/data/itemType';
import { ItemTypeEnum } from '../../models/enum/itemTypeEnum';
import { ImageService } from '../imageService';
import { ItemTypeDefinitionEnum } from '../../models/enum/itemTypeDefinitionEnum';

@Injectable({providedIn: 'root'})
export class ItemTypeServices {

  constructor(private readonly imageService: ImageService) {}
  
  private readonly itemTypes = new Map<ItemTypeEnum, ItemType>([    
    [ItemTypeEnum.DEUX_MAINS,{id:[
      ItemTypeDefinitionEnum.HACHE,
      ItemTypeDefinitionEnum.PELLE,
      ItemTypeDefinitionEnum.MARTEAU,
      ItemTypeDefinitionEnum.ARC,
      ItemTypeDefinitionEnum.EPEE_DEUX_MAINS,
      ItemTypeDefinitionEnum.BATON_DEUX_MAINS,
    ], title:"Deux mains"}],
    [ItemTypeEnum.UNE_MAIN,{id:[
      ItemTypeDefinitionEnum.BAGUETTE,
      ItemTypeDefinitionEnum.EPEE,
      ItemTypeDefinitionEnum.BATON,
      ItemTypeDefinitionEnum.AIGUILLE,
      ItemTypeDefinitionEnum.CARTE,
    ], title:"Une main"}],
    [ItemTypeEnum.ANNEAU,{id:[ItemTypeDefinitionEnum.ANNEAU], title:"Anneau"}],
    [ItemTypeEnum.BOTTES,{id:[ItemTypeDefinitionEnum.BOTTES], title:"Bottes"}],
    [ItemTypeEnum.AMULETTE,{id:[ItemTypeDefinitionEnum.AMULETTE], title:"Amulette"}],
    [ItemTypeEnum.CAPE,{id:[ItemTypeDefinitionEnum.CAPE], title:"Cape"}],
    [ItemTypeEnum.CEINTURE,{id:[ItemTypeDefinitionEnum.CEINTURE], title:"Ceinture"}],
    [ItemTypeEnum.CASQUE,{id:[ItemTypeDefinitionEnum.CASQUE], title:"Casque"}],
    [ItemTypeEnum.PLASTRON,{id:[ItemTypeDefinitionEnum.PLASTRON], title:"Plastron"}],
    [ItemTypeEnum.EPAULETTES,{id:[ItemTypeDefinitionEnum.EPAULETTES], title:"Epaulettes"}],
    [ItemTypeEnum.ACCESSOIRES,{id:[ItemTypeDefinitionEnum.EMBLEME], title:"Emblème"}],
    [ItemTypeEnum.BOUCLIER,{id:[ItemTypeDefinitionEnum.BOUCLIER], title:"Bouclier"}],
    [ItemTypeEnum.DAGUE,{id:[ItemTypeDefinitionEnum.DAGUE], title:"Dague"}],
    [ItemTypeEnum.FAMILIER,{id:[ItemTypeDefinitionEnum.FAMILIER], title:"Familier{[~1]?s:}"}],
  ]);

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