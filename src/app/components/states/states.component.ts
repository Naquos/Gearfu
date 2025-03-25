import { Component, Input } from '@angular/core';
import { StatesDefinitionService } from '../../services/statesDefinitionService';
import { first, map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-states',
  imports: [CommonModule],
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss'
})
export class StatesComponent {

  @Input()
  statesDefinitionId = 0;

  @Input()
  nameStates = "";

  constructor(protected statesDefinitionService: StatesDefinitionService) {}

  protected definition(): Observable<string  | undefined> {
    return this.statesDefinitionService.findStatesDefinition(this.statesDefinitionId).pipe(first(), map(x => x?.description));
  }

}
