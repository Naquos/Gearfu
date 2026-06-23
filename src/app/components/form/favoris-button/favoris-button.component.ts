import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { ButtonCheckboxComponent } from "../button-checkbox/button-checkbox.component";
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import { A11yModule } from "@angular/cdk/a11y";
import { ItemFavorisFormService } from '../../../services/form-signal/itemFavorisFormService';
import { Item } from '../../../models/data/item';
import { SublimationsDescriptions } from '../../../models/data/sublimationsDescriptions';
import { SublimationFavorisFormService } from '../../../services/form-signal/SublimationFavorisFormService';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-favoris-button',
  imports: [ButtonCheckboxComponent, TranslateModule, MatTooltipModule, MatIconModule, A11yModule],
  templateUrl: './favoris-button.component.html',
  styleUrl: './favoris-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavorisButtonComponent {
  private readonly itemFavorisFormService = inject(ItemFavorisFormService);
  private readonly sublimationFavorisFormService = inject(SublimationFavorisFormService);

  private readonly itemIds = toSignal(this.itemFavorisFormService.ids$, { initialValue: [] });
  private readonly sublimationIds = toSignal(this.sublimationFavorisFormService.ids$, { initialValue: [] });

  protected readonly control = new FormControl<boolean>(false, { nonNullable: true });

  public item = input.required<Item | SublimationsDescriptions>();
  public height = input<number | null>(null);

  private readonly isFavoris = computed(() => {
    const ids = 'maitrise' in this.item() ? this.itemIds() : this.sublimationIds();
    return ids.includes(this.item().id);
  });

  constructor() {
    effect(() => {
      this.control.setValue(this.isFavoris(), { emitEvent: false });
    });

    this.control.valueChanges.subscribe(() => this.handleClick());
  }

  private handleClick(): void {
    const service = 'maitrise' in this.item() ? this.itemFavorisFormService : this.sublimationFavorisFormService;
    const itemId = this.item().id;
    if (service.hasItem(itemId)) {
      service.removeItem(itemId);
    } else {
      service.addItem(itemId);
    }
  }

}
