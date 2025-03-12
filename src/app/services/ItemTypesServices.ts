
import { Injectable } from '@angular/core';
import itemTypesJson from '../../../public/itemTypes.json';
import { ItemType } from '../models/itemType';

@Injectable({providedIn: 'root'})
export class ItemTypeServices {
    
  protected itemTypes:Map<String, ItemType> = new Map([]);
  
  constructor() {
    
    this.itemTypes.set("deuxMains",this.findItemType("Deux mains"))
    this.itemTypes.set("uneMain",this.findItemType("Une main"))
    this.itemTypes.set("anneau",this.findItemType("Anneau"))
    this.itemTypes.set("bottes",this.findItemType("Bottes"))
    this.itemTypes.set("amulette",this.findItemType("Amulette"))
    this.itemTypes.set("cape",this.findItemType("Cape"))
    this.itemTypes.set("ceinture",this.findItemType("Ceinture"))
    this.itemTypes.set("casque",this.findItemType("Casque"))
    this.itemTypes.set("plastron",this.findItemType("Plastron"))
    this.itemTypes.set("epaulettes",this.findItemType("Epaulettes"))
    this.itemTypes.set("accessoires",this.findItemType("Emblème"))
    this.itemTypes.set("bouclier",this.findItemType("Bouclier"))
    this.itemTypes.set("dague",this.findItemType("Dague"))
  }
  
  private findItemType(title: string): ItemType {
    return {
      id: itemTypesJson.filter(x => x.title?.fr.includes(title)).map(x => x.definition.id),
      title: title
    }
  }

  public getItemTypes(): Map<String, ItemType> {
    return this.itemTypes;
  }

}