import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { ItemsService } from "../itemsService";
import { RarityItem } from "../../models/rarityItem";
import { LocalStorageService } from "../localStorageService";
import { KeyEnum } from "../../models/keyEnum";

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
    

  constructor(private itemService: ItemsService, private localStorageService: LocalStorageService) {
    this.form.valueChanges.subscribe(changes => {
      const result: number[] = [];
      if(changes.normal) { result.push(RarityItem.NORMAL)}
      if(changes.rare) { result.push(RarityItem.RARE)}
      if(changes.mythique) { result.push(RarityItem.MYTHIQUE)}
      if(changes.legendaire) { result.push(RarityItem.LEGENDAIRE)}
      if(changes.relique) { result.push(RarityItem.RELIQUE)}
      if(changes.souvenir) { result.push(RarityItem.SOUVENIR)}
      if(changes.epique) { result.push(RarityItem.EPIQUE)}
      this.itemService.setRarity(result);
      this.localStorageService.setItem<number[]>(KeyEnum.KEY_RARETE_ITEM, result ?? []);
    })
    this.setRarity(...(this.localStorageService.getItem<number[]>(KeyEnum.KEY_RARETE_ITEM) ?? []));
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

    public setDefaultValue(): void {
        this.setRarity();
    }
}