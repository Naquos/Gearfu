import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ItemsService } from "../itemsService";
import { ElemMaitrisesMecanismEnum } from "../../models/ElemMaitrisesMecanismEnum";
import { LocalStorageService } from "../localStorageService";
import { KeyEnum } from "../../models/keyEnum";

@Injectable({providedIn: 'root'})
export class ModifierElemMaitrisesFormService {
  public form = new FormControl<string[]>([]);

  constructor(private itemService: ItemsService, private localStorageService: LocalStorageService) {
    this.form.valueChanges.subscribe(value => {
        let result = 1;
        if(value?.includes(ElemMaitrisesMecanismEnum.ABNEGATION.valueOf())) {result*=1.15}
        if(value?.includes(ElemMaitrisesMecanismEnum.ALTERNANCE.valueOf())) {result*=1.2}
        if(value?.includes(ElemMaitrisesMecanismEnum.ALTERNANCE_2.valueOf())) {result*=1.15}
        if(value?.includes(ElemMaitrisesMecanismEnum.ANATOMIE.valueOf())) {result*=1.15}
        if(value?.includes(ElemMaitrisesMecanismEnum.CONCENTRATION_ELEMENTAIRE.valueOf())) {result*=1.2}
        if(value?.includes(ElemMaitrisesMecanismEnum.INFLEXIBILITE_2.valueOf())) {result*=1.15}
        if(value?.includes(ElemMaitrisesMecanismEnum.COEUR_HUPPERMAGE.valueOf())) {result*=1.2}
        this.itemService.setMultiplicateurElem(result);
        this.localStorageService.setItem<string[]>(KeyEnum.KEY_MODIFIER_ELEM_MAITRISE, value ?? []);
    })
    this.form.setValue(this.localStorageService.getItem<string[]>(KeyEnum.KEY_MODIFIER_ELEM_MAITRISE) ?? []);
  }

  public setDefaultValue(): void {
    this.form.setValue([]);
  }
}