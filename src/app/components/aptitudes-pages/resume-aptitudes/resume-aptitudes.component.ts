import { Component, inject, ViewContainerRef } from '@angular/core';
import { RecapStatsService } from '../../../services/recapStatsService';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';
import { RecapStats } from '../../../models/data/recap-stats';
import { ImageService } from '../../../services/imageService';
import { TranslateModule } from '@ngx-translate/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ParameterMajorActionEnum } from '../../../models/enum/parameterMajorActionEnum';
import { ClassIdEnum } from '../../../models/enum/classIdEnum';
import { LevelFormService } from '../../../services/form/levelFormService';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipService } from '../../../services/TooltipService';
import { ClassesTooltipComponent } from '../classes-tooltip/classes-tooltip.component';
import { ClasseFormService } from '../../../services/form/classeFormService';
import { LazyImageDirective } from '../../../directives/lazy-image.directive';
import { BonusComponent } from "../bonus/bonus.component";
import { InputResumeAptitudesComponent } from "../input-resume-aptitudes/input-resume-aptitudes.component";
import { AptitudesManualFormService } from '../../../services/form/aptitudesManualFormServices';
import { ConnectedPosition } from '@angular/cdk/overlay';
import { ActivateDirective } from "../../../directives/activate.directive";

@Component({
  selector: 'app-resume-aptitudes',
  imports: [TranslateModule, ReactiveFormsModule, LazyImageDirective, BonusComponent, InputResumeAptitudesComponent, ActivateDirective],
  templateUrl: './resume-aptitudes.component.html',
  styleUrl: './resume-aptitudes.component.scss'
})
export class ResumeAptitudesComponent {
  protected readonly recapStatsService = inject(RecapStatsService);
  protected readonly imageService = inject(ImageService);
  protected readonly IdActionsEnum = IdActionsEnum;
  protected readonly levelFormService = inject(LevelFormService);
  protected readonly aptitudesManualFormService = inject(AptitudesManualFormService);
  private readonly recapStats = toSignal(this.recapStatsService.recap$, { initialValue: [] as RecapStats[] });
  private readonly tooltipService = inject(TooltipService);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly classeFormService = inject(ClasseFormService);

  protected readonly idClasse = toSignal(this.classeFormService.classe$, { initialValue: ClassIdEnum.Eniripsa });

  constructor() {
    this.classeFormService.classe$.subscribe(() => {
      this.tooltipService.forceClose();
    });
  }

  protected getValue(id: IdActionsEnum): number {
    const recapStats = this.recapStats().filter(rs => rs.id === id);
    if (!recapStats.length) {
      return 0;
    }
    return recapStats[0].value;
  }

  protected openTooltip(event: Event): void {
    this.tooltipService.forceClose();
    this.tooltipService.cancelClose();
    let connectedPosition: ConnectedPosition[] | undefined = undefined;
    if(window.innerWidth <= 700) {
      connectedPosition = [{ 
        originX: 'start', originY: 'bottom',
        overlayX: 'start', overlayY: 'bottom',
        offsetY: 0, offsetX: 0
      }] as ConnectedPosition[];
    }
    // Le 7ème paramètre active le comportement "garder ouvert au survol"
    this.tooltipService.openTooltip(
      this.viewContainerRef, 
      ClassesTooltipComponent, 
      event as MouseEvent, 
      {},
      connectedPosition,  // connectedPosition
      true,       // withPush
      true        // keepOpenOnHover - ACTIVÉ ICI
    );
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
}
