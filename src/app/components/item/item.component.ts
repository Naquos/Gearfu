import { Component, input, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { ActionService } from '../../services/actionService';
import { EquipEffects } from '../../models/equipEffects';
import { MaitrisesServices } from '../../services/maitrisesService';
import { combineLatest } from 'rxjs';
import { ItemsService } from '../../services/itemsService';
import { IdActionsEnum } from '../../models/idActionsEnum';

@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {
  public item = input.required<Item>()
  public resistances = 0;
  public maitrises = 0;
  protected mapColors:Map<number,String> = new Map();

  constructor(protected actionsService : ActionService,
    protected maitrisesService : MaitrisesServices,
    protected itemService : ItemsService
  ) {
    this.mapColors.set(2,"#4c9646");
    this.mapColors.set(3,"#dd7f13");
    this.mapColors.set(4,"#ffef64");
    this.mapColors.set(5,"#c570ef");
    this.mapColors.set(6,"#80d6d4");
    this.mapColors.set(7,"#eebcd7");
  }



  ngOnInit(): void {
    this.item().equipEffects = this.item().equipEffects.sort((a, b) => a.actionId - b.actionId);
    this.resistances = this.itemService.calculResistancesForAnItem(this.item());    
    combineLatest([this.maitrisesService.obsNbElements(), this.maitrisesService.obsIdMaitrises()])
    .subscribe(([nbElements, idMaitrises]) => 
      {this.maitrises = this.itemService.calculMaitrisesForAnItem(this.item(), nbElements, idMaitrises)})
  }


  protected displayEffect(effect: EquipEffects): string {
    const descriptionEffect = this.actionsService.getEffectById(effect.actionId).split(":");
    const symbol = this.actionsService.isBuff(effect.actionId) ? "" : "-"
      if(effect.actionId === IdActionsEnum.ARMURE_DONNEE_RECUE || effect.actionId === IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE) {
        const type = effect.params[4] === 120 ? "donnée" : "reçue"
        return symbol + effect.params[0] + "% armure " + type;
      } else if (effect.actionId === IdActionsEnum.MAITRISES_ELEMENTAIRES_NOMBRE_VARIABLE) {
        return symbol + effect.params[0] + " maîtrises dans " + effect.params[2] + " éléments";
      } else if (effect.actionId === IdActionsEnum.RESISTANCES_NOMBRE_VARIABLE) {
        return symbol + effect.params[0] + " résistances dans " + effect.params[2] + " éléments";
      }
      return symbol + effect.params[0] + descriptionEffect[1];
  }
}
