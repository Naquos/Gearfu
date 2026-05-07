import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AptitudesComponent } from '../aptitudes/aptitudes.component';

@Component({
  selector: 'app-aptitudes-router',
  imports: [AptitudesComponent],
  templateUrl: './aptitudes-router.component.html',
  styleUrl: './aptitudes-router.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AptitudesRouterComponent {

}
