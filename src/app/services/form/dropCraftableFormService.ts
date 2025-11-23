import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService, TypedControls } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";

export interface DropCraftableForm {
  DROP: boolean;
  CRAFTABLE: boolean;

}

@Injectable({providedIn: 'root'})
export class DropCraftableFormService extends AbstractFormService<FormGroup<TypedControls<DropCraftableForm>>> {

  private static readonly DEFAULT_VALUE_DROP = false;
  private static readonly DEFAULT_VALUE_CRAFTABLE = false;

  private readonly drop = new BehaviorSubject<boolean>(DropCraftableFormService.DEFAULT_VALUE_DROP);
  public readonly drop$ = this.drop.asObservable();

  private readonly craftable = new BehaviorSubject<boolean>(DropCraftableFormService.DEFAULT_VALUE_CRAFTABLE);
  public readonly craftable$ = this.craftable.asObservable();

  protected readonly keyEnum = KeyEnum.KEY_DROP_CRAFTABLE;
  public readonly form =  new FormGroup<TypedControls<DropCraftableForm>>({
        DROP: new FormControl(),
        CRAFTABLE: new FormControl(),
      });

  constructor() {
    super();
    this.init();
  }

  protected override handleChanges(value: DropCraftableForm): void {
    this.drop.next(value.DROP ?? DropCraftableFormService.DEFAULT_VALUE_DROP);
    this.craftable.next(value.CRAFTABLE ?? DropCraftableFormService.DEFAULT_VALUE_CRAFTABLE);
  }

  public override setValue(value: DropCraftableForm | null): void {
    this.form.setValue({
      DROP: value?.DROP ?? DropCraftableFormService.DEFAULT_VALUE_DROP,
      CRAFTABLE: value?.CRAFTABLE ?? DropCraftableFormService.DEFAULT_VALUE_CRAFTABLE,
    });
  }

  public setDefaultValue(): void {
    this.setValue({ DROP: DropCraftableFormService.DEFAULT_VALUE_DROP, CRAFTABLE: DropCraftableFormService.DEFAULT_VALUE_CRAFTABLE });
  }

}