import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { ItemsService } from "../itemsService";
import { RarityItem } from "../../models/rarityItem";

@Injectable({providedIn: 'root'})
export class RareteItemFormServices {
    public form = new FormGroup({
        normal: new FormControl(),
        rare: new FormControl(),
        mythique: new FormControl(),
        legendaire: new FormControl(),
        souvenir: new FormControl(),
        relique: new FormControl(),
        epique: new FormControl()
      });

    protected selected = new BehaviorSubject<number[]>([]);
    public selected$ = this.selected.asObservable();
    

  constructor(private itemService: ItemsService) {
    this.form.valueChanges.subscribe(changes => {
      const result: number[] = [];
      if(changes.normal) { result.push(1)}
      if(changes.rare) { result.push(2)}
      if(changes.mythique) { result.push(3)}
      if(changes.legendaire) { result.push(4)}
      if(changes.relique) { result.push(5)}
      if(changes.souvenir) { result.push(6)}
      if(changes.epique) { result.push(7)}
      this.itemService.setRarity(result);
    })
  }

    public setRarity(...rarity: RarityItem[]) {
        this.form.setValue({
            normal: rarity.includes(RarityItem.NORMAL),
            rare: rarity.includes(RarityItem.RARE),
            mythique: rarity.includes(RarityItem.MYTHIQUE),
            legendaire: rarity.includes(RarityItem.LEGENDAIRE),
            relique: rarity.includes(RarityItem.RELIQUE),
            souvenir: rarity.includes(RarityItem.SOUVENIR),
            epique: rarity.includes(RarityItem.EPIQUE),
        });
    }
}