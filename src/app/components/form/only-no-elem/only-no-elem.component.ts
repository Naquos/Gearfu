import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { OnlyNoElemFormService } from '../../../services/form/onlyNoElemFormService';

@Component({
  selector: 'app-only-no-elem',
  imports: [MatButtonToggleModule, TranslateModule],
  templateUrl: './only-no-elem.component.html',
  styleUrl: './only-no-elem.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnlyNoElemComponent {
  protected readonly onlyNoElemFormService = inject(OnlyNoElemFormService);
}
