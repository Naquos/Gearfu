import { Pipe, PipeTransform } from '@angular/core';
import { EquipEffects } from '../../models/data/equipEffects';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActionsCdn } from '../../models/ankama-cdn/actionsCdn';
import { IdActionsEnum } from '../../models/enum/idActionsEnum';
import { DifferentStatsItem } from '../../models/data/differentsStatsItem';
import { ActionService } from '../../services/data/actionService';
import { AnkamaCdnFacade } from '../../services/ankama-cdn/ankamaCdnFacade';

@Pipe({
  name: 'actions'
})
export class ActionsPipe implements PipeTransform {

  constructor(private readonly ankamaCdnFacade: AnkamaCdnFacade,
    private readonly translateService: TranslateService,
    private readonly actionService: ActionService) {}

  transform(effect: EquipEffects | DifferentStatsItem): Observable<string> {
    
    return combineLatest([
      this.translateService.onLangChange.pipe(startWith({lang: this.translateService.currentLang, translations: {}})),
      this.ankamaCdnFacade.action$
    ]).pipe(
      map(([, actions]) => actions),
      map(actions => this.findAction(actions, effect)),
      map(action => this.getDefinitions(action)),
      map(definition => this.getDefinitionsComplete(definition, effect)),
    )

  }

  private getDefinitionsComplete(definition: string, effect: EquipEffects | DifferentStatsItem): string {
    let result = `${definition}`;
    result = this.replaceValues(result, effect);
    result = this.cleanHeaderDefinition(result);
    result = this.cleanRecoltEffect(result);
    result = this.singularOrPlurial(result, effect);
    result = this.atLeastSixParameters(result, effect);
    result = this.armorGivenOrReceived(result, effect);
    result = this.deleteDoubleMinus(result);
    return result;
  }

  private deleteDoubleMinus(result: string): string {
    return result.replace(/--/g, '');
  }

  private armorGivenOrReceived(definition: string, effect: EquipEffects | DifferentStatsItem): string {
    if (effect.actionId !== IdActionsEnum.ARMURE_DONNEE_RECUE && effect.actionId !== IdActionsEnum.PERTE_ARMURE_DONNEE_RECUE) { return definition; }

    const type = effect.params[4] === 120 ? this.translateService.instant("abstract.donnee") : this.translateService.instant("abstract.recue")
    const value = Math.abs(effect.params[0]);
    const isAMalus = this.actionService.isAMalus(effect.actionId); 
    const symbol = (isAMalus && effect.params[0] > 0) || (!isAMalus && effect.params[0] < 0) ? "-" : ""
    return symbol + value + this.translateService.instant("abstract.armure") + type;
  }

  private atLeastSixParameters(definition: string, effect: EquipEffects | DifferentStatsItem) {
    const regex = /{\[~3\]\?(.*):(.*)}/;
    const match = definition.match(regex);
    if (match) {
      definition = match[effect.params.length >= 6 ? 1 : 2];
    }
    return definition;
  }

  private singularOrPlurial(definition: string, effect: EquipEffects | DifferentStatsItem) {
    definition = this.singularOrPlurialWithRegex(definition, effect,  /\{\[>2\]\?([^}]){0,5}:([^}]){0,5}\}/g, 2);
    definition = this.singularOrPlurialWithRegex(definition, effect,  /\{\[>1\]\?([^}]){0,5}:([^}]){0,5}\}/g);
    return definition;
  }

  private singularOrPlurialWithRegex(definition: string, effect: EquipEffects | DifferentStatsItem, regex: RegExp, index = 0) {
    const match = [...definition.matchAll(regex)];
    if (match) {
      if (effect.params.length > index) {
        const endWords = match.map(m => m[effect.params[index] >= 2 ? 1 : 2]);
        for (let i = 0; i < match.length; i++) {
          definition = definition.replace(match[i][0], endWords[i] ?? '');
        }
      }
    }
    return definition;
  }

  private  cleanDefinition(definition: string, regex: RegExp): string {
    const match = definition.match(regex);
    if (match) {
      definition = definition.replace(match[0], '');
    }
    return definition;
  }

  
  private cleanRecoltEffect(definition: string): string {
    return this.cleanDefinition(definition, /{\[~2]?.+}/g);
  }

  private cleanHeaderDefinition(definition: string) {
    return this.cleanDefinition(definition, /(\[#.*\]) /g);
  }

  private replaceValues(definition: string, effect: EquipEffects | DifferentStatsItem) {
    const regex = /(\[#\d\])/g;
    const match = [...definition.matchAll(regex)].map(m => m[1]);
    if (match) {
      for (const m of match) {
        let index = 0;
        switch (m) {
          case '[#1]':
            index = 0;
            break;
          case '[#2]':
            index = 2;
            break;
          case '[#3]':
            index = 4;
            break;
        }

        if (effect.params.length > index) {
          definition = definition.replace(m, effect.params[index].toString());
        }
      }
    }
    return definition;
  }

  private getDefinitions(action: ActionsCdn): string {
    return action.description[this.translateService.currentLang as keyof typeof action.description] as string;
  }

  private findAction(actions: ActionsCdn[], effect: EquipEffects | DifferentStatsItem): ActionsCdn {
    return actions.filter(action => action.definition.id === effect.actionId)[0];
  }
}
