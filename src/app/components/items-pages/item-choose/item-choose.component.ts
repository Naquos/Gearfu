import { Component, inject } from '@angular/core';
import { ItemChooseDisplayComponent } from "../item-choose-display/item-choose-display.component";
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { take } from 'rxjs';
import { IdActionsEnum } from '../../../models/enum/idActionsEnum';
import { ItemTypeEnum } from '../../../models/enum/itemTypeEnum';
import { ImageService } from '../../../services/imageService';
import { ItemChooseService } from '../../../services/itemChooseService';
import { RecapStatsService } from '../../../services/recapStatsService';
import { ZenithService } from '../../../services/zenith/zenithService';

@Component({
  selector: 'app-item-choose',
  imports: [ItemChooseDisplayComponent, MatIconModule, MatTooltipModule, TranslateModule, CommonModule],
  templateUrl: './item-choose.component.html',
  styleUrl: './item-choose.component.scss'
})
export class ItemChooseComponent {
  protected readonly itemChooseService = inject(ItemChooseService);
  private readonly zenithService = inject(ZenithService);
  private readonly recapStatsService = inject(RecapStatsService);
  protected readonly imageService = inject(ImageService);


  protected readonly maitrisesTotal = toSignal(this.recapStatsService.maitrisesTotal$, {
    initialValue: 0
  });
  protected readonly resistancesTotal = toSignal(this.recapStatsService.resistancesTotal$, {
    initialValue: 0
  });
  protected readonly ItemTypeEnum = ItemTypeEnum;
  protected readonly IdActionsEnum = IdActionsEnum;

  protected copyToClipboard(): void {
    navigator.clipboard.writeText(window.location.href).then();
  }

  protected navigateToCraftku(): void {
    this.itemChooseService.idItems$.pipe(take(1)).subscribe(idItems => {
      window.open('https://craftkfu.waklab.fr/?' + idItems, '_blank');
    });
  }

  protected navigateToWakfuIndex(): void {
    window.open('https://efusryuga.github.io/WakfuIndex/', '_blank');
  }

  protected navigateToWakfocus(): void {
    window.open('https://www.dropbox.com/scl/fo/12onmfink7n0g5wj96f3y/AAxeJABC7OSe3UkPsbspDkg?rlkey=h2w7w4wp4jer3l0uw3jmy8q0k&st=nrkw68lp&dl=0', '_blank');
  }

  protected generateBuild(): void {
    this.zenithService.createBuild().pipe(take(1)).subscribe(linkBuild => window.open('https://www.zenithwakfu.com/builder/' + linkBuild, '_blank'));
  }
}
