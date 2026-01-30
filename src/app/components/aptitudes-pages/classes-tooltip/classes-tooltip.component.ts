import { Component, inject, viewChild, effect, ElementRef } from '@angular/core';
import { LazyImageDirective } from '../../../directives/lazy-image.directive';
import { ClassIdEnum } from '../../../models/enum/classIdEnum';
import { ClasseFormService } from '../../../services/form/classeFormService';
import { ActivateDirective } from "../../../directives/activate.directive";

@Component({
  selector: 'app-classes-tooltip',
  imports: [LazyImageDirective, ActivateDirective],
  templateUrl: './classes-tooltip.component.html',
  styleUrl: './classes-tooltip.component.scss'
})
export class ClassesTooltipComponent {
  private readonly classeFormService = inject(ClasseFormService);
  protected idClasses: number[] = Object.values(ClassIdEnum).filter(value => typeof value === 'number') as number[];
  private readonly firstImage = viewChild<ElementRef<HTMLImageElement>>('firstImage');

  constructor() {
    effect(() => {
      const img = this.firstImage();
      if (img) {
        img.nativeElement.focus();
      }
    });
  }

  protected changeClasses(idClass: number): void {
    this.classeFormService.setValue(idClass as ClassIdEnum);
  }
}
