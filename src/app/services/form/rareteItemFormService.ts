import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { RarityItemEnum } from "../../models/enum/rarityItemEnum";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService, TypedControls } from "./abstractFormService";

export interface RareteItemForm {
  normal: boolean;
  rare: boolean;
  mythique: boolean;
  legendaire: boolean;
  souvenir: boolean;
  relique: boolean;
  epique: boolean;
}

@Injectable({providedIn: 'root'})
export class RareteItemFormServices extends AbstractFormService<FormGroup<TypedControls<RareteItemForm>>> {

  protected readonly selected = new BehaviorSubject<number[]>([]);
  public readonly selected$ = this.selected.asObservable();
  
  private readonly rarity = new BehaviorSubject<number[]>([]);
  public readonly rarity$ = this.rarity.asObservable();

  constructor(protected override readonly localStorageService: LocalStorageService) {
    super(KeyEnum.KEY_RARETE_ITEM, localStorageService, new FormGroup<TypedControls<RareteItemForm>>({
        normal: new FormControl(),
        rare: new FormControl(),
        mythique: new FormControl(),
        legendaire: new FormControl(),
        souvenir: new FormControl(),
        relique: new FormControl(),
        epique: new FormControl()
      }));
    this.init();
  }

  protected override handleChanges(value: RareteItemForm): void {
    const result: number[] = [];
    if(value.normal) { result.push(RarityItemEnum.NORMAL)}
    if(value.rare) { result.push(RarityItemEnum.RARE)}
    if(value.mythique) { result.push(RarityItemEnum.MYTHIQUE)}
    if(value.legendaire) { result.push(RarityItemEnum.LEGENDAIRE)}
    if(value.relique) { result.push(RarityItemEnum.RELIQUE)}
    if(value.souvenir) { result.push(RarityItemEnum.SOUVENIR)}
    if(value.epique) { result.push(RarityItemEnum.EPIQUE)}
    this.rarity.next(result);
  }

  public override setValue(value: RareteItemForm): void {
    this.form.setValue({
      normal: value.normal ?? false,
      rare: value.rare ?? false,
      mythique: value.mythique ?? false,
      legendaire: value.legendaire ?? false,
      souvenir: value.souvenir ?? false,
      relique: value.relique ?? false,
      epique: value.epique ?? false
    });
  }

  public setRarity(...rarity: RarityItemEnum[]) {
      this.form.setValue({
          normal: rarity.includes(RarityItemEnum.NORMAL),
          rare: rarity.includes(RarityItemEnum.RARE),
          mythique: rarity.includes(RarityItemEnum.MYTHIQUE),
          legendaire: rarity.includes(RarityItemEnum.LEGENDAIRE),
          relique: rarity.includes(RarityItemEnum.RELIQUE),
          souvenir: rarity.includes(RarityItemEnum.SOUVENIR),
          epique: rarity.includes(RarityItemEnum.EPIQUE),
      });
  }

  public setDefaultValue(): void {
      this.setRarity();
  }
}