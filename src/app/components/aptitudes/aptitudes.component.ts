import { Component, inject } from '@angular/core';
import { ImageService } from '../../services/imageService';
import { IdActionsEnum } from '../../models/enum/idActionsEnum';
import { TranslateModule } from '@ngx-translate/core';
import { InputAptitudesComponent } from '../form/input-aptitudes/input-aptitudes.component';
import { AptitudesFormService } from '../../services/form/aptitudesFormService';

@Component({
  selector: 'app-aptitudes',
  imports: [TranslateModule, InputAptitudesComponent],
  templateUrl: './aptitudes.component.html',
  styleUrl: './aptitudes.component.scss'
})
export class AptitudesComponent {
  protected readonly imageService = inject(ImageService);
  protected readonly aptitudesFormService = inject(AptitudesFormService);
  protected readonly IdActionsEnum = IdActionsEnum;

}
