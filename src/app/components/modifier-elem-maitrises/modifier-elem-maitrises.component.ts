import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElemMaitrisesMecanismEnum } from '../../models/ElemMaitrisesMecanismEnum';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { ModifierElemMaitrisesFormService } from '../../services/form/modifierElemMaitrisesFormService';


@Component({
  selector: 'app-modifier-elem-maitrises',
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './modifier-elem-maitrises.component.html',
  styleUrl: './modifier-elem-maitrises.component.scss'
})
export class ModifierElemMaitrisesComponent {
    protected ElemMaitrisesMecanismEnumList = Object.values(ElemMaitrisesMecanismEnum);
    constructor(protected modifierElemMaitrisesFormService: ModifierElemMaitrisesFormService) {}
}
