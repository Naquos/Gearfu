import { Component } from '@angular/core';
import { IdActionsEnum } from '../../models/enum/idActionsEnum';
import { CommonModule } from '@angular/common';
import { RecapStats } from '../../models/data/recap-stats';
import { ParameterMajorActionEnum } from '../../models/enum/parameterMajorActionEnum';
import { ActionService } from '../../services/data/actionService';
import { TranslateService } from '@ngx-translate/core';
import { RecapStatsService } from '../../services/RecapStatsService';
import { ImageService } from '../../services/imageService';

@Component({
  selector: 'app-recap-stats',
  imports: [CommonModule],
  templateUrl: './recap-stats.component.html',
  styleUrl: './recap-stats.component.scss'
})
export class RecapStatsComponent {

  constructor(private readonly actionService: ActionService,
    private readonly translateService: TranslateService,
    protected readonly recapStatsService: RecapStatsService,
    protected readonly imageService: ImageService
    ) {
  }

  protected displayEffect(effect: RecapStats): string {
    const descriptionEffect = this.actionService.getEffectById(effect.id);
    const symbol = effect.value < 0? "-" : ""
    const value = Math.abs(effect.value);
    if(effect.id === IdActionsEnum.ARMURE_DONNEE_RECUE || effect.id === IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE) {
      const type = effect.parameterMajorAction === ParameterMajorActionEnum.ARMURE_DONNEE ? 
      this.translateService.instant("abstract.donnee") : this.translateService.instant("abstract.recue")
      return symbol + value + this.translateService.instant("abstract.armure") + type;
    }
    return symbol + value + " " + descriptionEffect;
  }

  protected getEffectPng(effect : RecapStats): string {
      return this.imageService.getImageUrl(
        effect.id, 
        effect.id === IdActionsEnum.ARMURE_DONNEE_RECUE && effect.parameterMajorAction === ParameterMajorActionEnum.ARMURE_DONNEE
      );
  }



}
