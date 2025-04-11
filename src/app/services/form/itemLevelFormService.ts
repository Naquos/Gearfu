import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { LocalStorageService } from "../data/localStorageService";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService, TypedControls } from "./abstractFormService";

interface ItemLevelForm {
    levelMin: number;
    levelMax: number;
}

@Injectable({providedIn: 'root'})
export class ItemLevelFormService extends AbstractFormService<FormGroup<TypedControls<ItemLevelForm>>> {
  public static readonly DEFAULT_LEVEL_MIN = 200;
  public static readonly DEFAULT_LEVEL_MAX = 245;    

  protected selected = new BehaviorSubject<number[]>([]);
  public selected$ = this.selected.asObservable();

    
  private levelMin = new BehaviorSubject<number>(ItemLevelFormService.DEFAULT_LEVEL_MIN);
  public levelMin$ = this.levelMin.asObservable();

  private levelMax = new BehaviorSubject<number>(ItemLevelFormService.DEFAULT_LEVEL_MAX);
  public levelMax$ = this.levelMax.asObservable();
    

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