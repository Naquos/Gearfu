import { Injectable } from "@angular/core";
import { RarityItem } from "../models/rarityItem";

@Injectable({providedIn: 'root'})
export class ColorRarityService {
    
  private mapColors = new Map<RarityItem,string>();

  constructor() {
    this.mapColors.set(RarityItem.RARE,"#4c9646");
    this.mapColors.set(RarityItem.MYTHIQUE,"#dd7f13");
    this.mapColors.set(RarityItem.LEGENDAIRE,"#ffef64");
    this.mapColors.set(RarityItem.RELIQUE,"#c570ef");
    this.mapColors.set(RarityItem.SOUVENIR,"#80d6d4");
    this.mapColors.set(RarityItem.EPIQUE,"#eebcd7");
  }

  public getMapColors(): Map<RarityItem, string> {
    return this.mapColors;
  }
}