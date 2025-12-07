import { Component, inject, signal } from '@angular/core';
import { ImageService } from '../../../services/imageService';
import { SublimationsDescriptions } from '../../../models/data/sublimationsDescriptions';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MonsterDrop } from '../../../models/data/monsterDrop';
import { ImageFallbackDirective } from '../../../directives/imageFallback.directive';

export interface DescriptionSublimationType {
  level: number;
  sublimationsDescriptions: SublimationsDescriptions | undefined;
}

@Component({
  selector: 'app-description-sublimation',
  imports: [MatTooltipModule, TranslateModule, ImageFallbackDirective],
  templateUrl: './description-sublimation.component.html',
  styleUrls: ['./description-sublimation.component.scss']
})
export class DescriptionSublimationComponent {

  private readonly translateService = inject(TranslateService);
  protected readonly imageService = inject(ImageService);
  
  // Signals for reactive template usage
  protected readonly levelSignal = signal<number>(1);
  protected readonly sublimationsDescriptionsSignal = signal<SublimationsDescriptions | undefined>(undefined);

  // Setters to update signals when properties are assigned by TooltipService
  public set level(value: number) {
    this.levelSignal.set(value);
  }
  
  public set sublimationsDescriptions(value: SublimationsDescriptions | undefined) {
    this.sublimationsDescriptionsSignal.set(value);
  }

  protected openEncyclopedieForMonster(monsterId: number): void {
    if(monsterId === -1) {
      return;
    }
    window.open('https://www.wakfu.com/fr/mmorpg/encyclopedie/monstres/' + monsterId);
  }

  protected getUrlMonster(monsterDrop: MonsterDrop): string {
    if(monsterDrop.idMob !== -1 && monsterDrop.idMob !== 4189) {
      return this.imageService.getMonsterUrl(monsterDrop.gfxId);
    }
    if(monsterDrop.idMob === 4189) {
      return "breche/mimic.png";
    }
    switch(monsterDrop.name.fr) {
      case 'Brèche Tainela':
        return "breche/tainela.png";
      case 'Brèche Sufokia':
        return "breche/sufokia.png";
      case 'Brèche Amakna':
        return "breche/amakna.png";
      case 'Brèche Bonta':
        return "breche/bonta.png";
      case 'Brèche Moon':
        return "breche/moon.png";
      case 'Brèche Osamosa':
        return "breche/osamosa.png";
      case 'Brèche Shukrute':
        return "breche/shukrute.png";
      case 'Brèche Shukrute Ultime':
        return "breche/shukrute-ultime.png";
      case 'Brèche Zinit Ultime':
        return "breche/zinit-ultime.png";
      case 'Brèche Frigost Ultime':
        return "breche/frigost-ultime.png";
    }
    return "";
  }

  
  protected navigateToCraftku(): void {
    window.open('https://craftkfu.waklab.fr/?' + this.sublimationsDescriptionsSignal()?.id, '_blank');
  }

  protected nameMonster(monster: MonsterDrop): string {
    return monster.name[this.translateService.currentLang as keyof typeof monster.name] ?? "";
  }

  protected getUrlSublimationImage(): string {
    if(!this.levelSignal() || !this.sublimationsDescriptionsSignal()) {
      return "";
    }
    if(this.sublimationsDescriptionsSignal()?.isEpic || this.sublimationsDescriptionsSignal()?.isRelic) {
      return this.imageService.getItemUrl(this.sublimationsDescriptionsSignal()!.gfxId);
    }
    let id = 81228822;
    switch(this.levelSignal()) {
      case 1:
        id = 81228822;
        break;
      case 2:
        id = 81228823;
        break;
      default:
        id = 81227111;
        break;
    }
    return this.imageService.getItemUrl(id);
  }

  protected getSublimationTitle() : string {
    if(!this.sublimationsDescriptionsSignal()) {
      return "";
    }
    const title = this.sublimationsDescriptionsSignal()!.title;
    return title[this.translateService.currentLang as keyof typeof title];
  }

  protected getSublimationDescription() : string {
    if(!this.sublimationsDescriptionsSignal()) {
      return "";
    }
    const description = this.sublimationsDescriptionsSignal()!.description;
    const trad = description[this.translateService.currentLang as keyof typeof description];
    return this.formatDescription(trad);
  }

  private formatDescription(description: string): string {
    if(!this.sublimationsDescriptionsSignal()) {
      return "";
    } 
    const baseEffects = this.sublimationsDescriptionsSignal()!.baseEffect;
    let formattedDescription = description;
    baseEffects.forEach((effect, index) => {
      const value = effect.baseValue + effect.pas * (this.levelSignal() - 1);
      const regex = new RegExp(`\\$\\{${index}\\}`, 'g');
      formattedDescription = formattedDescription.replace(regex, value.toString());
    });
    return formattedDescription;
  }
}
