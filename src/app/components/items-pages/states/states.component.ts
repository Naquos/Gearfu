import { Component, inject, Input } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { StatesDefinitionService } from '../../../services/data/statesDefinitionService';

@Component({
  selector: 'app-states',
  imports: [],
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss'
})
export class StatesComponent {
  
  protected readonly statesDefinitionService = inject(StatesDefinitionService);
  private readonly translateService = inject(TranslateService);

  @Input()
  public statesDefinitionId = 0;

  @Input()
  public nameStates = "";

  protected definition(): string | undefined {
    const definition = this.statesDefinitionService.findStatesDefinition(this.statesDefinitionId);
    if (definition) {
      return definition.description[this.translateService.currentLang as keyof typeof definition.description];
    }
    return undefined
  }

}
