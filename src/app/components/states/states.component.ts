import { Component, inject, Input } from '@angular/core';
import { StatesDefinitionService } from '../../services/data/statesDefinitionService';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-states',
  imports: [CommonModule],
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
