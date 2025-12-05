import { Component, inject, signal } from '@angular/core';
import { ImageService } from '../../../services/imageService';
import { SublimationsDescriptions } from '../../../models/data/sublimationsDescriptions';
import { TranslateService } from '@ngx-translate/core';

export interface DescriptionSublimationType {
  level: number;
  sublimationsDescriptions: SublimationsDescriptions | undefined;
}

@Component({
  selector: 'app-description-sublimation',
  imports: [],
  templateUrl: './description-sublimation.component.html',
  styleUrls: ['./description-sublimation.component.scss']
})
export class DescriptionSublimationComponent {

  private readonly translateService = inject(TranslateService);
  protected readonly imageService = inject(ImageService);
  
  // Signals for reactive template usage
  protected readonly levelSignal = signal<number>(1);
  public readonly sublimationsDescriptionsSignal = signal<SublimationsDescriptions | undefined>(undefined);

  // Setters to update signals when properties are assigned by TooltipService
  set level(value: number) {
    this.levelSignal.set(value);
  }
  
  set sublimationsDescriptions(value: SublimationsDescriptions | undefined) {
    this.sublimationsDescriptionsSignal.set(value);
  }

  protected getUrlSublimationImage(): string {
    if(this.levelSignal() === undefined) {
      return "";
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
    return description[this.translateService.currentLang as keyof typeof description];
  }
}
