import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Mecanism } from '../../../models/enum/ElemMaitrisesMecanismEnum';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { ModifierMecanismFormService } from '../../../services/form-signal/modifierElemMaitrisesFormService';


@Component({
  selector: 'app-modifier-mecanism',
  imports: [MatFormFieldModule, MatSelectModule, TranslateModule],
  templateUrl: './modifier-mecanism.component.html',
  styleUrl: './modifier-mecanism.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModifierMecanismComponent {
  protected readonly modifierMecanismFormService = inject(ModifierMecanismFormService);
  protected readonly ElemMaitrisesMecanismEnumList = Object.values(Mecanism);
}
