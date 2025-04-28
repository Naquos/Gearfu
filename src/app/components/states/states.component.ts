import { Component, Input } from '@angular/core';
import { StatesDefinitionService } from '../../services/data/statesDefinitionService';
import { first, map, Observable } from 'rxjs';
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
    protected statesDefinitionService: StatesDefinitionService,
    private translateService: TranslateService
  ) {}

  protected definition(): Observable<string  | undefined> {
    return this.statesDefinitionService.findStatesDefinition(this.statesDefinitionId).pipe(first(), map(x => x?.description[this.translateService.currentLang as keyof typeof x.description]));
  }

}
