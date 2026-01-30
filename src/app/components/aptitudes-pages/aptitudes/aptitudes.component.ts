import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { combineLatest, map } from 'rxjs';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';
import { CodeAptitudesService } from '../../../services/codeAptitudesService';
import { AptitudesFormService } from '../../../services/form/aptitudesFormService';
import { LevelFormService } from '../../../services/form/levelFormService';
import { ImageService } from '../../../services/imageService';
import { InputAptitudesComponent } from '../../form/input-aptitudes/input-aptitudes.component';
import { ActivateDirective } from "../../../directives/activate.directive";

@Component({
  selector: 'app-aptitudes',
  imports: [TranslateModule, InputAptitudesComponent, MatIconModule, MatTooltipModule, ActivateDirective],
  templateUrl: './aptitudes.component.html',
  styleUrl: './aptitudes.component.scss'
})
export class AptitudesComponent {
  private readonly levelFormService = inject(LevelFormService);
  private readonly codeAptitudesService = inject(CodeAptitudesService);

  protected readonly imageService = inject(ImageService);
  protected readonly aptitudesFormService = inject(AptitudesFormService);
  protected readonly IdActionsEnum = IdActionsEnum;

  protected codeAptitudes = toSignal(this.codeAptitudesService.code$, {
    initialValue: ''
  });

  protected copyToClipboardCodeAptitudes() {
    navigator.clipboard.writeText(this.codeAptitudes());
  }

  protected nbPointRestantIntelligence = toSignal(
    combineLatest([
      this.levelFormService.level$,
      this.aptitudesFormService.recapStat$
    ]).pipe(map(([level,]) => {
      return Math.floor((+level + 2) / 4) - this.aptitudesFormService.nbPointUseInIntelligence();  
    })), {
    initialValue: 0
  } );

  protected nbPointRestantForce = toSignal(
    combineLatest([
      this.levelFormService.level$,
      this.aptitudesFormService.recapStat$
    ]).pipe(map(([level,]) => {
      return Math.floor((+level + 1) / 4) - this.aptitudesFormService.nbPointUseInForce() + (level >= 230 ? 1 : 0);  
    })), {
    initialValue: 0
  } );

  protected nbPointRestantAgilite = toSignal(
    combineLatest([
      this.levelFormService.level$,
      this.aptitudesFormService.recapStat$
    ]).pipe(map(([level,]) => {
      return Math.floor((+level) / 4) - this.aptitudesFormService.nbPointUseInAgilite() + (level >= 230 ? 1 : 0);  
    })), {
    initialValue: 0
  } );

  protected nbPointRestantChance = toSignal(
    combineLatest([
      this.levelFormService.level$,
      this.aptitudesFormService.recapStat$
    ]).pipe(map(([level,]) => {
      return Math.floor((+level - 1) / 4) - this.aptitudesFormService.nbPointUseInChance() + (level >= 230 ? 1 : 0);  
    })), {
    initialValue: 0
  } );

  protected nbPointRestantMajeur = toSignal(
    combineLatest([
      this.levelFormService.level$,
      this.aptitudesFormService.recapStat$
    ]).pipe(map(([level,]) => {
      if(+level < 25) {
        return 0 - this.aptitudesFormService.nbPointUseInMajeur();
      } else if(+level < 75) {
        return 1 - this.aptitudesFormService.nbPointUseInMajeur();
      } else if(+level < 125) {
        return 2 - this.aptitudesFormService.nbPointUseInMajeur();
      } else if(+level < 175) {
        return 3 - this.aptitudesFormService.nbPointUseInMajeur();
      } else if (+level < 225) {
        return 4 - this.aptitudesFormService.nbPointUseInMajeur();
      }
      return 5 - this.aptitudesFormService.nbPointUseInMajeur();
  })), {
    initialValue: 0
  });

}
