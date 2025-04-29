import { Injectable } from "@angular/core";
import { RarityItemEnum } from "../models/enum/rarityItemEnum";

@Injectable({providedIn: 'root'})
export class ColorRarityService {
    
  public readonly mapColors = new Map<RarityItemEnum,string>([
    [RarityItemEnum.RARE,"#4c9646"],
    [RarityItemEnum.MYTHIQUE,"#dd7f13"],
    [RarityItemEnum.LEGENDAIRE,"#ffef64"],
    [RarityItemEnum.RELIQUE,"#c570ef"],
    [RarityItemEnum.SOUVENIR,"#80d6d4"],
    [RarityItemEnum.EPIQUE,"#eebcd7"]
  ]);
}