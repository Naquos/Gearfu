import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EnchantementComponent } from "../enchantement/enchantement.component";

@Component({
  selector: 'app-enchantement-router',
  imports: [EnchantementComponent],
  templateUrl: './enchantement-router.component.html',
  styleUrl: './enchantement-router.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnchantementRouterComponent {

}
