import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SortsComponent } from '../sorts/sorts.component';

@Component({
  selector: 'app-sorts-router',
  imports: [SortsComponent],
  templateUrl: './sorts-router.component.html',
  styleUrl: './sorts-router.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortsRouterComponent {

}
