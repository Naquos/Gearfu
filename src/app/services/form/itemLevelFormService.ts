import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService, TypedControls } from "./abstractFormService";

export interface ItemLevelForm {
    levelMin: number;
    levelMax: number;
}

@Injectable({providedIn: 'root'})
export class ItemLevelFormService extends AbstractFormService<FormGroup<TypedControls<ItemLevelForm>>> {
  public static readonly DEFAULT_LEVEL_MIN = 200;
  public static readonly DEFAULT_LEVEL_MAX = 245;    

  protected readonly selected = new BehaviorSubject<number[]>([]);
  public readonly  selected$ = this.selected.asObservable();

    
  private readonly levelMin = new BehaviorSubject<number>(ItemLevelFormService.DEFAULT_LEVEL_MIN);
  public readonly levelMin$ = this.levelMin.asObservable();

  private readonly levelMax = new BehaviorSubject<number>(ItemLevelFormService.DEFAULT_LEVEL_MAX);
  public readonly levelMax$ = this.levelMax.asObservable();
    

  constructor(protected override localStorageService: LocalStorageService) {

    super(KeyEnum.KEY_ITEM_LEVEL, localStorageService, new FormGroup<TypedControls<ItemLevelForm>>({
        levelMin: new FormControl(ItemLevelFormService.DEFAULT_LEVEL_MIN, { nonNullable: true }),
        levelMax: new FormControl(ItemLevelFormService.DEFAULT_LEVEL_MAX, { nonNullable: true })
      }));
      this.init();
  }

  protected override handleChanges(value: ItemLevelForm): void {
    this.levelMin.next(value.levelMin ?? ItemLevelFormService.DEFAULT_LEVEL_MIN);
    this.levelMax.next(value.levelMax ?? ItemLevelFormService.DEFAULT_LEVEL_MAX);
  }

  public override setValue(value: ItemLevelForm): void {
    this.form.setValue({
      levelMin: value.levelMin ?? ItemLevelFormService.DEFAULT_LEVEL_MIN,
      levelMax: value.levelMax ?? ItemLevelFormService.DEFAULT_LEVEL_MAX
    });
  }
  

  public override setDefaultValue(): void {
    this.form.setValue({
      levelMin: ItemLevelFormService.DEFAULT_LEVEL_MIN,
      levelMax: ItemLevelFormService.DEFAULT_LEVEL_MAX
    });
  }
}