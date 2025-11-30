import { Component } from '@angular/core';
import { AptitudesComponent } from '../aptitudes/aptitudes.component';
import { SortsComponent } from "../../sorts/sorts.component";

@Component({
  selector: 'app-aptitudes-router',
  imports: [AptitudesComponent, SortsComponent],
  templateUrl: './aptitudes-router.component.html',
  styleUrl: './aptitudes-router.component.scss'
})
export class AptitudesRouterComponent {

}
