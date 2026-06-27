import { Component, ElementRef, HostListener, inject, input, signal, viewChild, effect, ChangeDetectionStrategy, computed } from '@angular/core';
import { ImageService } from '../../../services/imageService';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';
import { toSignal } from '@angular/core/rxjs-interop';
import { RecapStats } from '../../../models/data/recap-stats';
import { RecapStatsService } from '../../../services/recapStatsService';
import { TranslateModule } from '@ngx-translate/core';
import { FormField, FieldTree } from '@angular/forms/signals';
import { ActivateDirective } from "../../../directives/activate.directive";
import { LazyImageDirective } from '../../../directives/lazy-image.directive';

@Component({
  selector: 'app-input-resume-aptitudes',
  imports: [TranslateModule, ActivateDirective, FormField, LazyImageDirective],
  templateUrl: './input-resume-aptitudes.component.html',
  styleUrl: './input-resume-aptitudes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputResumeAptitudesComponent {
  private readonly recapStatsService = inject(RecapStatsService);
  private readonly recapStats = toSignal(this.recapStatsService.recap$, { initialValue: [] as RecapStats[] });
  private readonly elementRef = inject(ElementRef);
  private readonly inputElement = viewChild<ElementRef<HTMLInputElement>>('inputField');

  protected readonly imageService = inject(ImageService);
  protected readonly displayInput = signal<boolean>(false);
  protected readonly isChanged = signal<boolean>(false);

  protected readonly value = computed(() => {
    const id = this.idActionEnum();
    const recapStats = this.recapStats().filter(rs => rs.id === id);
    if (!recapStats.length) {
      return 0;
    }
    if (id !== IdActionsEnum.ARMURE_DONNEE_RECUE) {
      return recapStats[0].value;
    }
    return recapStats[this.isArmureDonnee() ? 0 : 1].value;
  });

  constructor() {
    effect(() => {
      if (this.displayInput() && this.inputElement()) {
        setTimeout(() => this.inputElement()?.nativeElement.focus(), 0);
      }
    });

    effect((onCleanup) => {

      this.value();
      this.isChanged.set(true);

      const timeout = setTimeout(() => {
        this.isChanged.set(false);
      }, 700);


      onCleanup(() => {
        clearTimeout(timeout);
      });

    });
  }

  protected showInput(): void {
    this.displayInput.set(true);
  }

  protected onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.displayInput.set(false);
      event.stopPropagation();
    }
  }

  @HostListener('document:click', ['$event'])
  public onClickOutside(event: MouseEvent): void {
    if (this.displayInput() && !this.elementRef.nativeElement.contains(event.target)) {
      this.displayInput.set(false);
    }
  }

  public idActionEnum = input.required<IdActionsEnum>();
  public isArmureDonnee = input<boolean>(false);
  public label = input.required<string>();
  public color = input<string>('');
  public displayResistance = input<boolean>(false);
  public fieldControl = input.required<FieldTree<number>>();


  protected calculResistance(): string {
    const resistance = this.value();
    const percentage = Math.floor((1 - Math.pow(0.8, resistance / 100)) * 100);
    return `${percentage}% (${resistance})`;
  }

  protected getClass(): string {
    const value = this.value();
    if (value > 0) {
      return 'positif';
    }
    return value < 0 ? 'negatif' : '';
  }

  protected inputValue(): number {
    return this.fieldControl()().value() ?? 0;
  }
}
