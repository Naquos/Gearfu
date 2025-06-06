import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { OnlyNoElemFormService } from '../../../services/form/onlyNoElemFormService';

@Component({
  selector: 'app-only-no-elem',
  imports: [MatButtonToggleModule, TranslateModule],
  templateUrl: './only-no-elem.component.html',
  styleUrl: './only-no-elem.component.scss'
})
export class OnlyNoElemComponent {
  constructor(protected readonly onlyNoElemFormService : OnlyNoElemFormService) {}
}
