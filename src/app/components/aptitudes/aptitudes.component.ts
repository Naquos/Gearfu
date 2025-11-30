import { Component, inject } from '@angular/core';
import { ImageService } from '../../services/imageService';
import { IdActionsEnum } from '../../models/enum/idActionsEnum';
import { TranslateModule } from '@ngx-translate/core';
import { InputAptitudesComponent } from '../form/input-aptitudes/input-aptitudes.component';
import { AptitudesFormService } from '../../services/form/aptitudesFormService';
import { LevelFormService } from '../../services/form/levelFormService';
import { toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-aptitudes',
  imports: [TranslateModule, InputAptitudesComponent],
  templateUrl: './aptitudes.component.html',
  styleUrl: './aptitudes.component.scss'
})
export class AptitudesComponent {
  protected readonly imageService = inject(ImageService);
  protected readonly aptitudesFormService = inject(AptitudesFormService);
  protected readonly IdActionsEnum = IdActionsEnum;
  private readonly levelFormService = inject(LevelFormService);

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
      return Math.floor((+level + 1) / 4) - this.aptitudesFormService.nbPointUseInForce();  
    })), {
    initialValue: 0
  } );

  protected nbPointRestantAgilite = toSignal(
    combineLatest([
      this.levelFormService.level$,
      this.aptitudesFormService.recapStat$
    ]).pipe(map(([level,]) => {
      return Math.floor((+level) / 4) - this.aptitudesFormService.nbPointUseInAgilite();  
    })), {
    initialValue: 0
  } );

  protected nbPointRestantChance = toSignal(
    combineLatest([
      this.levelFormService.level$,
      this.aptitudesFormService.recapStat$
    ]).pipe(map(([level,]) => {
      return Math.floor((+level - 1) / 4) - this.aptitudesFormService.nbPointUseInChance();  
    })), {
    initialValue: 0
  } );

  protected nbPointRestantMajeur = toSignal(
    combineLatest([
      this.levelFormService.level$,
      this.aptitudesFormService.recapStat$
    ]).pipe(map(([level,]) => {
      if(+level < 25) {
        return 0;
      } else if(+level < 75) {
        return 1;
      } else if(+level < 125) {
        return 2;
      } else if(+level < 175) {
        return 3;
      }
      return 4;
  })), {
    initialValue: 0
  });

}
