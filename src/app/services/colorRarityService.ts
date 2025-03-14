import { Injectable } from "@angular/core";
import { RarityItem } from "../models/rarityItem";

@Injectable({providedIn: 'root'})
export class ColorRarityService {
    
  private mapColors:Map<RarityItem,String> = new Map();

  constructor() {
    this.mapColors.set(RarityItem.RARE,"#4c9646");
    this.mapColors.set(RarityItem.MYTHIQUE,"#dd7f13");
    this.mapColors.set(RarityItem.LEGENDAIRE,"#ffef64");
    this.mapColors.set(RarityItem.SOUVENIR,"#c570ef");
    this.mapColors.set(RarityItem.EPIQUE,"#80d6d4");
    this.mapColors.set(RarityItem.RELIQUE,"#eebcd7");
  }

  public getMapColors(): Map<RarityItem, String> {
    return this.mapColors;
  }
}