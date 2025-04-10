import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { OnlyNoSecondaryFormService } from '../../services/form/onlyNoSecondaryFormService';

@Component({
  selector: 'app-only-no-secondary',
  imports: [MatButtonToggleModule, TranslateModule],
  templateUrl: './only-no-secondary.component.html',
  styleUrl: './only-no-secondary.component.scss'
})
export class OnlyNoSecondaryComponent {
  constructor(protected onlyNoSecondaryFormService : OnlyNoSecondaryFormService) {}
}
