import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService, TypedControls } from "./abstractFormService";

export interface ItemLevelForm {
  levelMin: number;
  levelMax: number;
}

@Injectable({ providedIn: 'root' })
export class ItemLevelFormService extends AbstractFormService<FormGroup<TypedControls<ItemLevelForm>>> {
  public static readonly DEFAULT_LEVEL_MIN = 200;
  public static readonly DEFAULT_LEVEL_MAX = 245;

  protected readonly selected = new BehaviorSubject<number[]>([]);
  public readonly selected$ = this.selected.asObservable();


  private readonly levelMin = new BehaviorSubject<number>(ItemLevelFormService.DEFAULT_LEVEL_MIN);
  public readonly levelMin$ = this.levelMin.asObservable();

  private readonly levelMax = new BehaviorSubject<number>(ItemLevelFormService.DEFAULT_LEVEL_MAX);
  public readonly levelMax$ = this.levelMax.asObservable();

  protected readonly keyEnum = KeyEnum.KEY_ITEM_LEVEL;
  public readonly form = new FormGroup<TypedControls<ItemLevelForm>>({
    levelMin: new FormControl(ItemLevelFormService.DEFAULT_LEVEL_MIN, { nonNullable: true }),
    levelMax: new FormControl(ItemLevelFormService.DEFAULT_LEVEL_MAX, { nonNullable: true })
  });

  constructor() {
    super();
    this.init();
  }

  /**
   * Validate if the level is a number and not null or undefined
   * @param level 
   * @returns 
   */
  private validLevel(level: number): boolean {
    if (!level || isNaN(Number(level))) {
      return false;
    }
    return true;
  }

  protected override handleChanges(value: ItemLevelForm): void {
    this.levelMin.next(this.validLevel(value.levelMin) ? value.levelMin : ItemLevelFormService.DEFAULT_LEVEL_MIN);
    this.levelMax.next(this.validLevel(value.levelMax) ? value.levelMax : ItemLevelFormService.DEFAULT_LEVEL_MAX);
  }


  public override setValue(value: ItemLevelForm | null): void {
    this.form.setValue({
      levelMin: this.validLevel(value?.levelMin ?? ItemLevelFormService.DEFAULT_LEVEL_MIN) ? value?.levelMin ?? ItemLevelFormService.DEFAULT_LEVEL_MIN : ItemLevelFormService.DEFAULT_LEVEL_MIN,
      levelMax: this.validLevel(value?.levelMax ?? ItemLevelFormService.DEFAULT_LEVEL_MAX) ? value?.levelMax ?? ItemLevelFormService.DEFAULT_LEVEL_MAX : ItemLevelFormService.DEFAULT_LEVEL_MAX
    });
  }


  public override setDefaultValue(): void {
    this.form.setValue({
      levelMin: ItemLevelFormService.DEFAULT_LEVEL_MIN,
      levelMax: ItemLevelFormService.DEFAULT_LEVEL_MAX
    });
  }
}