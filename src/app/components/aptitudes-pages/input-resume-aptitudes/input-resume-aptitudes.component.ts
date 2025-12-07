import { Component, ElementRef, HostListener, inject, input, signal } from '@angular/core';
import { ImageService } from '../../../services/imageService';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';
import { toSignal } from '@angular/core/rxjs-interop';
import { RecapStats } from '../../../models/data/recap-stats';
import { RecapStatsService } from '../../../services/recapStatsService';
import { TranslateModule } from '@ngx-translate/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-resume-aptitudes',
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './input-resume-aptitudes.component.html',
  styleUrl: './input-resume-aptitudes.component.scss'
})
export class InputResumeAptitudesComponent {
  private readonly recapStatsService = inject(RecapStatsService);
  private readonly recapStats = toSignal(this.recapStatsService.recap$, { initialValue: [] as RecapStats[] });
  private readonly elementRef = inject(ElementRef);

  protected readonly imageService = inject(ImageService);
  protected readonly displayInput = signal<boolean>(false);

  @HostListener('document:click', ['$event'])
  public onClickOutside(event: MouseEvent): void {
    if (this.displayInput() && !this.elementRef.nativeElement.contains(event.target)) {
      this.displayInput.set(false);
    }
  }

  public idActionEnum = input.required<IdActionsEnum>();
  public label = input.required<string>();
  public color = input<string>('');
  public displayResistance = input<boolean>(false);
  public controlValue = input.required<FormControl<number>>();

  
  protected calculResistance(id: IdActionsEnum): string {
    const resistance = this.getValue(id);
    const percentage = Math.floor((1 - Math.pow(0.8, resistance / 100)) * 100);
    return `${percentage}% (${resistance})`;
  }
  
  protected getClass(id: IdActionsEnum): string {
    const value = this.getValue(id);
    if(value > 0) {
      return 'positif';
    }
    return value < 0 ? 'negatif' : '';
  }


  protected getValue(id: IdActionsEnum): number {
    const recapStats = this.recapStats().filter(rs => rs.id === id);
    if (!recapStats.length) {
      return 0;
    }
    return recapStats[0].value;
  }
}
