import { Component } from '@angular/core';
import { ItemChooseDisplayComponent } from "../item-choose-display/item-choose-display.component";
import { ItemTypeEnum } from '../../models/enum/itemTypeEnum';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ItemChooseService } from '../../services/itemChooseService';
import { take } from 'rxjs';
import { ZenithService } from '../../services/zenith/zenithService';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NameBuildFormService } from '../../services/form/nameBuildFormService';

@Component({
  selector: 'app-item-choose',
  imports: [ItemChooseDisplayComponent, MatIconModule, MatTooltipModule, TranslateModule, CommonModule],
  templateUrl: './item-choose.component.html',
  styleUrl: './item-choose.component.scss'
})
export class ItemChooseComponent {
  protected ItemTypeEnum = ItemTypeEnum;

  constructor(protected itemChooseService : ItemChooseService, private zenithService: ZenithService, private saveBuildService: NameBuildFormService) {}

  protected copyToClipboard(): void {
    navigator.clipboard.writeText(window.location.href).then();
  }

  protected navigateToCraftku(): void {
    this.itemChooseService.idItems$.pipe(take(1)).subscribe(idItems => {
      window.open('https://craftkfu.waklab.fr/?' + idItems, '_blank');
    });
  }

  protected generateBuild(): void {
    this.zenithService.createBuild().pipe(take(1)).subscribe(linkBuild => window.open('https://www.zenithwakfu.com/builder/' + linkBuild, '_blank'));
  }
}
