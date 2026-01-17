import { Component, computed, effect, inject, input } from '@angular/core';
import { ImageService } from '../../../services/imageService';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';
import { FormControl, FormGroup } from '@angular/forms';
import { ButtonCheckboxComponent } from "../../form/button-checkbox/button-checkbox.component";
import { Item } from '../../../models/data/item';
import { ID_MAITRISES_MODIFIABLES, ID_RESISTANCES_MODIFIABLES } from '../../../models/utils/utils';
import { ItemChooseService } from '../../../services/itemChooseService';
import { ItemTypeServices } from '../../../services/data/ItemTypesServices';
import { ElementSelectorService } from '../../../services/elementSelectorService';
import { ElementSelectorEnum } from '../../../models/enum/elementSelectorEnum';

@Component({
  selector: 'app-element-selector',
  imports: [ButtonCheckboxComponent],
  templateUrl: './element-selector.component.html',
  styleUrls: ['./element-selector.component.scss'],
})
export class ElementSelectorComponent {
  public readonly item = input<Item>();
  public readonly selector = input<ElementSelectorEnum>(ElementSelectorEnum.Maitrise);

  protected readonly imageService = inject(ImageService);
  protected readonly IdActionsEnum = IdActionsEnum;
  private readonly itemTypeService = inject(ItemTypeServices);
  private readonly itemChooseService = inject(ItemChooseService);
  private readonly elementSelectorService = inject(ElementSelectorService);
  
  protected readonly nbElements = computed(() => {
    const item = this.item();
    if (!item) {
      return 0;
    }
    const selector = this.selector();
    const idReference = selector === ElementSelectorEnum.Maitrise ? ID_MAITRISES_MODIFIABLES : ID_RESISTANCES_MODIFIABLES;
    const maitrisableEffects = item.equipEffects.filter(effect => effect.id === idReference);
    return maitrisableEffects.length;
  });

  protected readonly mapElements = computed(() => {
    const selector = this.selector();
    let map = this.mapResistanceToActionId; 
    if (selector === ElementSelectorEnum.Maitrise) {
      map = this.mapElementMaitriseToActionId;
    }
    return map;
  });

  protected imageUrl = computed(() => {
    const selector = this.selector();
    if(selector === ElementSelectorEnum.Maitrise) {
      return this.imageService.getActionIdUrl(IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE);
    } else {
      return this.imageService.getActionIdUrl(IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE);
    }
  });

  private mapElementMaitriseToActionId = new Map<string, IdActionsEnum>([
    ['feu', IdActionsEnum.MAITRISES_FEU],
    ['eau', IdActionsEnum.MAITRISES_EAU],
    ['terre', IdActionsEnum.MAITRISES_TERRE],
    ['air', IdActionsEnum.MAITRISES_AIR],
  ]);

  private mapResistanceToActionId = new Map<string, IdActionsEnum>([
    ['feu', IdActionsEnum.RESISTANCES_FEU],
    ['eau', IdActionsEnum.RESISTANCES_EAU],
    ['terre', IdActionsEnum.RESISTANCES_TERRE],
    ['air', IdActionsEnum.RESISTANCES_AIR],
  ]);

  protected form = new FormGroup({
    feu: new FormControl(false) as FormControl<boolean>,
    eau: new FormControl(false) as FormControl<boolean>,
    air: new FormControl(false) as FormControl<boolean>,
    terre: new FormControl(false) as FormControl<boolean>,
  });

  constructor() {
    effect(() => {
      this.updateForm();
    });
    this.form.valueChanges.subscribe(() => {
      this.updateItemEffects();
    });
  }

  private updateItemEffects(): void {
    const item = this.item();
    const nbElements = this.nbElements();
    const selector = this.selector();
    if (!item || nbElements === 0) { return; }

    const equipEffects = [...item.equipEffects];
    const map = this.mapElements();

    // On récupère un effet comme modèle
    const effect = equipEffects.find(eff => eff.id === (selector === ElementSelectorEnum.Maitrise ? ID_MAITRISES_MODIFIABLES : ID_RESISTANCES_MODIFIABLES))!;

    // Supprimer les effets d'éléments existants
    for (const actionId of map.values()) {
      const index = equipEffects.findIndex(effect => effect.actionId === actionId);
      if (index !== -1) {
        equipEffects.splice(index, 1);
      }
    }

    // On doit créer une liste de 4 éléments, qui sera triés de la façon suivante :
    // 1. Les éléments cochés dans le formulaire
    // 2. Les éléments non cochés, jusqu'à atteindre le nombre maximum d'éléments (nbElements)
    const listeElementSelected: { element: string; actionId: IdActionsEnum }[] = [];
    const listeElementNotSelected: { element: string; actionId: IdActionsEnum }[] = [];
    for (const [element, actionId] of map.entries()) {
      const control = this.form.get(element) as FormControl<boolean>;
      if (control.value) {
        listeElementSelected.push({ element, actionId });
      } else {
        listeElementNotSelected.push({ element, actionId });
      }
    }

    const listeElementsToAdd = [...listeElementSelected, ...listeElementNotSelected];

    // Ajouter les effets d'éléments sélectionnés
    let index = 0;
    for (const elementInfo of listeElementsToAdd) {
      if (index < nbElements) {
        const newEffect: typeof effect = {
          ...effect,
          actionId: elementInfo.actionId,
        };
        equipEffects.push(newEffect);
        index++;
      } else {
        break;
      }
    }

    item.equipEffects = equipEffects;
    this.setItem();
    this.elementSelectorService.setElementsForItem(
      item.id,
      listeElementsToAdd.slice(0, nbElements).map(x => x.actionId),
      selector
    );
  }

  private updateForm(): void {
    const item = this.item();
    const nbElements = this.nbElements();
    if (!item || nbElements === 0) { return; }
    const map = this.mapElements();
    let index = 0;
    for (const [element, actionId] of map.entries()) {
      const control = this.form.get(element) as FormControl<boolean>;
      if (index < nbElements) {
        const isSelected = item.equipEffects.some(effect => effect.actionId === actionId);
        control.setValue(isSelected, { emitEvent: false });
        index+= isSelected ? 1 : 0;
      } else {
        control.setValue(false, { emitEvent: false });
      }
    }
  }

  
  private setItem() : void {
    const itemType = this.itemTypeService.getItemType(this.item()!.itemTypeId);
    if(!itemType) { return; }
    this.itemChooseService.setItem(itemType, this.item()!, false);
  }
}
