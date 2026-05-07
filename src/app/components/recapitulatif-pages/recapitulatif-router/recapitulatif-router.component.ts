import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RecapitulatifComponent } from "../recapitulatif/recapitulatif.component";

@Component({
  selector: 'app-recapitulatif-router',
  imports: [RecapitulatifComponent],
  templateUrl: './recapitulatif-router.component.html',
  styleUrl: './recapitulatif-router.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecapitulatifRouterComponent {

}
