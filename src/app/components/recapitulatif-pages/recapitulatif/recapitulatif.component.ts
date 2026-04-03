import { Component } from '@angular/core';
import { EquippedSortsComponent } from "../../sorts-pages/equipped-sorts/equipped-sorts.component";
import { EnchantementChassesComponent } from "../../enchantement-pages/enchantement-chasses/enchantement-chasses.component";
import { RecapitulatifAptitudesComponent } from "../recapitulatif-aptitudes/recapitulatif-aptitudes.component";

@Component({
  selector: 'app-recapitulatif',
  imports: [EquippedSortsComponent, EnchantementChassesComponent, RecapitulatifAptitudesComponent,],
  templateUrl: './recapitulatif.component.html',
  styleUrl: './recapitulatif.component.scss',
})
export class RecapitulatifComponent {

}
