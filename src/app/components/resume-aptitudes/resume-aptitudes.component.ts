import { Component, inject } from '@angular/core';
import { RecapStatsService } from '../../services/RecapStatsService';
import { IdActionsEnum } from '../../models/enum/idActionsEnum';
import { RecapStats } from '../../models/data/recap-stats';
import { ImageService } from '../../services/imageService';
import { TranslateModule } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ParameterMajorActionEnum } from '../../models/enum/parameterMajorActionEnum';
import { ClassIdEnum } from '../../models/enum/classIdEnum';
import { LevelFormService } from '../../services/form/levelFormService';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-resume-aptitudes',
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './resume-aptitudes.component.html',
  styleUrl: './resume-aptitudes.component.scss'
})
export class ResumeAptitudesComponent {
  protected readonly recapStatsService = inject(RecapStatsService);
  protected readonly imageService = inject(ImageService);
  protected readonly IdActionsEnum = IdActionsEnum;
  protected readonly levelFormService = inject(LevelFormService);
  protected classChoose: ClassIdEnum = ClassIdEnum.Eniripsa;
  private readonly recapStats = toSignal(this.recapStatsService.recap$, { initialValue: [] as RecapStats[] });

  protected getValue(id: IdActionsEnum): number {
    const recapStats = this.recapStats().filter(rs => rs.id === id);
    if (!recapStats.length) {
      return 0;
    }
    return recapStats[0].value;
  }

  protected getArmureValue(id: IdActionsEnum, armureRecue: boolean): number {
    const major = armureRecue ? ParameterMajorActionEnum.ARMURE_RECUE : ParameterMajorActionEnum.ARMURE_DONNEE;
    const recapStats = this.recapStats().filter(rs => rs.id === id && rs.parameterMajorAction === major);
    if (!recapStats.length) {
      return 0;
    }
    return recapStats[0].value;
  }

  protected getClass(id: IdActionsEnum): string {
    const value = this.getValue(id);
    if(value > 0) {
      return 'positif';
    }
    return value < 0 ? 'negatif' : '';
  }

  protected calculResistance(id: IdActionsEnum): string {
    const resistance = this.getValue(id);
    const percentage = Math.floor((1 - Math.pow(0.8, resistance / 100)) * 100);
    return `${percentage}% (${resistance})`;
  }
}
