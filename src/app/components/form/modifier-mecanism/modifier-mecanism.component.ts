import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Mecanism } from '../../../models/enum/ElemMaitrisesMecanismEnum';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { ModifierMecanismFormService } from '../../../services/form/modifierElemMaitrisesFormService';


@Component({
  selector: 'app-modifier-mecanism',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './modifier-mecanism.component.html',
  styleUrl: './modifier-mecanism.component.scss'
})
export class ModifierMecanismComponent {
    protected readonly ElemMaitrisesMecanismEnumList = Object.values(Mecanism);
    constructor(protected readonly modifierMecanismFormService: ModifierMecanismFormService) {}
}
