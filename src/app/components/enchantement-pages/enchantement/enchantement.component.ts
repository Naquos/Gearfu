import { Component, inject } from '@angular/core';
import { ImageService } from '../../../services/imageService';
import { ChasseFormService } from '../../../services/form/chasseFormService';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { EnchantementStateService } from '../../../services/form/enchantementStateService';
import { EnchantementChassesComponent } from '../enchantement-chasses/enchantement-chasses.component';
import { EnchantementEffetsComponent } from '../enchantement-effets/enchantement-effets.component';
import { EnchantementSublimationsComponent } from '../enchantement-sublimations/enchantement-sublimations.component';
import { EnchantementSublimationsCommunityComponent } from '../enchantement-sublimations-conseillees/enchantement-sublimations-conseillees.component';

@Component({
  selector: 'app-enchantement',
  imports: [EnchantementChassesComponent, EnchantementEffetsComponent, EnchantementSublimationsComponent, EnchantementSublimationsCommunityComponent],
  templateUrl: './enchantement.component.html',
  styleUrl: './enchantement.component.scss'
})
export class EnchantementComponent {

  protected readonly imageService = inject(ImageService);
  protected readonly stateService = inject(EnchantementStateService);
  private readonly chasseFormService = inject(ChasseFormService);

  protected readonly chasses = toSignal(this.chasseFormService.enchantement$.pipe(
    map(enchantement => enchantement.chasseCombinaison)
  ));
  protected readonly enchantement = toSignal(this.chasseFormService.enchantement$);
}
