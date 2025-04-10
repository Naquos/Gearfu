import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { ItemsService } from "../itemsService";
import { LocalStorageService } from "../localStorageService";
import { KeyEnum } from "../../models/keyEnum";

@Injectable({providedIn: 'root'})
export class ItemLevelFormService {

    public static readonly DEFAULT_LEVEL_MIN = 200;
    public static readonly DEFAULT_LEVEL_MAX = 245;

    public form = new FormGroup({
        levelMin: new FormControl(ItemLevelFormService.DEFAULT_LEVEL_MIN),
        levelMax: new FormControl(ItemLevelFormService.DEFAULT_LEVEL_MAX)
      });
    

    protected selected = new BehaviorSubject<number[]>([]);
    public selected$ = this.selected.asObservable();
    

  constructor(private itemService: ItemsService, private localStorageService: LocalStorageService) {
    const itemLevel = this.localStorageService.getItem<number[]>(KeyEnum.KEY_ITEM_LEVEL) ?? [ItemLevelFormService.DEFAULT_LEVEL_MIN, ItemLevelFormService.DEFAULT_LEVEL_MAX];
    this.form.valueChanges.subscribe(changes => {
        this.itemService.setLevelMin(changes.levelMin ?? ItemLevelFormService.DEFAULT_LEVEL_MIN);
        this.itemService.setLevelMax(changes.levelMax ?? ItemLevelFormService.DEFAULT_LEVEL_MAX);
        this.localStorageService.setItem<number[]>(KeyEnum.KEY_ITEM_LEVEL, [changes.levelMin ?? ItemLevelFormService.DEFAULT_LEVEL_MIN, changes.levelMax ?? ItemLevelFormService.DEFAULT_LEVEL_MAX]);
      });

    this.form.setValue({
      levelMin: itemLevel[0],
      levelMax: itemLevel[1]
    });

  }

  public setDefaultValue(): void {
    this.form.setValue({
      levelMin: ItemLevelFormService.DEFAULT_LEVEL_MIN,
      levelMax: ItemLevelFormService.DEFAULT_LEVEL_MAX
    });
  }

  public setLevel(levelMin: number, levelMax: number) {
      this.form.setValue({
          levelMin: levelMin,
          levelMax: levelMax
      });
  }
}