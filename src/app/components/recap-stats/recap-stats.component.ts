import { Component, inject } from '@angular/core';
import { IdActionsEnum } from '../../models/enum/idActionsEnum';
import { CommonModule } from '@angular/common';
import { RecapStats } from '../../models/data/recap-stats';
import { ParameterMajorActionEnum } from '../../models/enum/parameterMajorActionEnum';
import { RecapStatsService } from '../../services/RecapStatsService';
import { ImageService } from '../../services/imageService';

@Component({
  selector: 'app-recap-stats',
  imports: [CommonModule],
  templateUrl: './recap-stats.component.html',
  styleUrl: './recap-stats.component.scss'
})
export class RecapStatsComponent {

  protected readonly recapStatsService = inject(RecapStatsService);
  protected readonly imageService = inject(ImageService);

  private static readonly RESISTANCES_LIST = [
    IdActionsEnum.RESISTANCES_FEU,
    IdActionsEnum.RESISTANCES_EAU,
    IdActionsEnum.RESISTANCES_TERRE,
    IdActionsEnum.RESISTANCES_AIR
  ];

  protected displayEffect(effect: RecapStats): string {
    const symbol = effect.value < 0? "-" : ""
    const value = Math.abs(effect.value);

    if(RecapStatsComponent.RESISTANCES_LIST.includes(effect.id)) {
      const percentage = Math.floor((1 - Math.pow(0.8, value / 100)) * 100);
      return `${symbol}${percentage}% (${value})`;
    }

    return symbol + value;
  }

  protected getEffectPng(effect : RecapStats): string {
      return this.imageService.getActionIdUrl(
        effect.id, 
        effect.id === IdActionsEnum.ARMURE_DONNEE_RECUE && effect.parameterMajorAction === ParameterMajorActionEnum.ARMURE_RECUE
      );
  }



}
