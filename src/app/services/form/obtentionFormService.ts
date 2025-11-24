import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { KeyEnum } from "../../models/enum/keyEnum";
import { AbstractFormService, TypedControls } from "./abstractFormService";
import { BehaviorSubject } from "rxjs";

export interface ObtentionForm {
  DROP: boolean;
  CRAFTABLE: boolean;
  BOSS: boolean;
  ARCHI: boolean;
  PVP: boolean;
}

@Injectable({providedIn: 'root'})
export class ObtentionFormService extends AbstractFormService<FormGroup<TypedControls<ObtentionForm>>> {

  private static readonly DEFAULT_VALUE_DROP = false;
  private static readonly DEFAULT_VALUE_CRAFTABLE = false;
  private static readonly DEFAULT_VALUE_BOSS = false;
  private static readonly DEFAULT_VALUE_ARCHI = false;
  private static readonly DEFAULT_VALUE_PVP = false;

  private readonly drop = new BehaviorSubject<boolean>(ObtentionFormService.DEFAULT_VALUE_DROP);
  public readonly drop$ = this.drop.asObservable();

  private readonly craftable = new BehaviorSubject<boolean>(ObtentionFormService.DEFAULT_VALUE_CRAFTABLE);
  public readonly craftable$ = this.craftable.asObservable();

  private readonly boss = new BehaviorSubject<boolean>(ObtentionFormService.DEFAULT_VALUE_BOSS);
  public readonly boss$ = this.boss.asObservable();

  private readonly archi = new BehaviorSubject<boolean>(ObtentionFormService.DEFAULT_VALUE_ARCHI);
  public readonly archi$ = this.archi.asObservable();

  private readonly pvp = new BehaviorSubject<boolean>(false);
  public readonly pvp$ = this.pvp.asObservable();

  protected readonly keyEnum = KeyEnum.KEY_DROP_CRAFTABLE;
  public readonly form =  new FormGroup<TypedControls<ObtentionForm>>({
        DROP: new FormControl(),
        CRAFTABLE: new FormControl(),
        BOSS: new FormControl(),
        ARCHI: new FormControl(),
        PVP: new FormControl(),
      });

  constructor() {
    super();
    this.init();
  }

  protected override handleChanges(value: ObtentionForm): void {
    this.drop.next(value.DROP ?? ObtentionFormService.DEFAULT_VALUE_DROP);
    this.craftable.next(value.CRAFTABLE ?? ObtentionFormService.DEFAULT_VALUE_CRAFTABLE);
    this.boss.next(value.BOSS ?? ObtentionFormService.DEFAULT_VALUE_BOSS);
    this.archi.next(value.ARCHI ?? ObtentionFormService.DEFAULT_VALUE_ARCHI);
    this.pvp.next(value.PVP ?? ObtentionFormService.DEFAULT_VALUE_PVP);
  }

  public override setValue(value: ObtentionForm | null): void {
    this.form.setValue({
      DROP: value?.DROP ?? ObtentionFormService.DEFAULT_VALUE_DROP,
      CRAFTABLE: value?.CRAFTABLE ?? ObtentionFormService.DEFAULT_VALUE_CRAFTABLE,
      BOSS: value?.BOSS ?? ObtentionFormService.DEFAULT_VALUE_BOSS,
      ARCHI: value?.ARCHI ?? ObtentionFormService.DEFAULT_VALUE_ARCHI,
      PVP: value?.PVP ?? ObtentionFormService.DEFAULT_VALUE_PVP,
    });
  }

  public setDefaultValue(): void {
    this.setValue({ 
      DROP: ObtentionFormService.DEFAULT_VALUE_DROP,
      CRAFTABLE: ObtentionFormService.DEFAULT_VALUE_CRAFTABLE,
      BOSS: ObtentionFormService.DEFAULT_VALUE_BOSS,
      ARCHI: ObtentionFormService.DEFAULT_VALUE_ARCHI,
      PVP: ObtentionFormService.DEFAULT_VALUE_PVP 
    });
  }

}