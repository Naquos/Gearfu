import { Component, Input } from '@angular/core';
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

  @Input()
  public statesDefinitionId = 0;

  @Input()
  public nameStates = "";

  constructor(
    protected readonly statesDefinitionService: StatesDefinitionService,
    private readonly translateService: TranslateService
  ) {}

  protected definition(): string | undefined {
    const definition = this.statesDefinitionService.findStatesDefinition(this.statesDefinitionId);
    if (definition) {
      return definition.description[this.translateService.currentLang as keyof typeof definition.description];
    }
    return undefined
  }

}
