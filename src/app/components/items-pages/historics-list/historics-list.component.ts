import { Component, inject } from '@angular/core';
import { ItemHistoricsService } from '../../../services/form-signal/itemHistoricsService';
import { toSignal } from '@angular/core/rxjs-interop';
import { HistoricsPieceComponent } from "../historics-piece/historics-piece.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-historics-list',
  imports: [HistoricsPieceComponent, TranslateModule],
  templateUrl: './historics-list.component.html',
  styleUrl: './historics-list.component.scss',
})
export class HistoricsListComponent {
  private readonly itemHistoricsService = inject(ItemHistoricsService);
  public readonly historics = toSignal(this.itemHistoricsService.historics$, { initialValue: [] });
}
