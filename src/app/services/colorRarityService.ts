import { Injectable } from "@angular/core";
import { RarityItemEnum } from "../models/enum/rarityItemEnum";

@Injectable({providedIn: 'root'})
export class ColorRarityService {
    
  private mapColors = new Map<RarityItemEnum,string>();

  constructor() {
    this.mapColors.set(RarityItemEnum.RARE,"#4c9646");
    this.mapColors.set(RarityItemEnum.MYTHIQUE,"#dd7f13");
    this.mapColors.set(RarityItemEnum.LEGENDAIRE,"#ffef64");
    this.mapColors.set(RarityItemEnum.RELIQUE,"#c570ef");
    this.mapColors.set(RarityItemEnum.SOUVENIR,"#80d6d4");
    this.mapColors.set(RarityItemEnum.EPIQUE,"#eebcd7");
  }

  public getMapColors(): Map<RarityItemEnum, string> {
    return this.mapColors;
  }
}