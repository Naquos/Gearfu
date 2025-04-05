import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { ItemsService } from "./itemsService";

@Injectable({providedIn: 'root'})
export class ItemLevelFormService {
    public form = new FormGroup({
        levelMin: new FormControl(200),
        levelMax: new FormControl(245)
      });
    

    protected selected = new BehaviorSubject<number[]>([]);
    public selected$ = this.selected.asObservable();
    

  constructor(private itemService: ItemsService) {
    this.form.valueChanges.subscribe(changes => {
        this.itemService.setLevelMin(changes.levelMin ?? 200);
        this.itemService.setLevelMax(changes.levelMax ?? 245);
      });
  }

    public setLevel(levelMin: number, levelMax: number) {
        this.form.setValue({
            levelMin: levelMin,
            levelMax: levelMax
        });
    }
}