import { Component, inject } from '@angular/core';
import { ClassIdEnum } from '../../models/enum/classIdEnum';
import { ClasseFormService } from '../../services/form/classeFormService';
import { LazyImageDirective } from '../../directives/lazy-image.directive';

@Component({
  selector: 'app-classes-tooltip',
  imports: [LazyImageDirective],
  templateUrl: './classes-tooltip.component.html',
  styleUrl: './classes-tooltip.component.scss'
})
export class ClassesTooltipComponent {
  private readonly classeFormService = inject(ClasseFormService);
  protected idClasses: number[] = Object.values(ClassIdEnum).filter(value => typeof value === 'number') as number[];

  protected changeClasses(idClass: number): void {
    this.classeFormService.setValue(idClass as ClassIdEnum);
  }
}
