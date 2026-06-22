import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';
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

@Component({
  selector: 'app-favoris-button',
  imports: [ButtonCheckboxComponent, TranslateModule, MatTooltipModule, MatIconModule, A11yModule],
  templateUrl: './favoris-button.component.html',
  styleUrl: './favoris-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavorisButtonComponent {
  private favorisFormService!: ItemFavorisFormService | SublimationFavorisFormService;
  private readonly itemFavorisFormService = inject(ItemFavorisFormService);
  private readonly sublimationFavorisFormService = inject(SublimationFavorisFormService);
  protected readonly control = new FormControl<boolean>(false, { nonNullable: true });

  public item = input.required<Item | SublimationsDescriptions>();
  public height = input<number | null>(null);

  constructor() {
    effect(() => {
      // Si c'est un item, on utilise le service ItemFavorisFormService,
      // Sinon c'est une sublimation et on utilise SublimationFavorisFormService
      if ('maitrise' in this.item()) {
        this.favorisFormService = this.itemFavorisFormService;
      } else {
        this.favorisFormService = this.sublimationFavorisFormService;
      }
      this.control.setValue(this.favorisFormService.hasItem(this.item().id), { emitEvent: false });
    });

    this.control.valueChanges.subscribe(() => this.handleClick());
  }

  private handleClick(): void {
    const itemId = this.item().id;
    const hasItem = this.favorisFormService.hasItem(itemId);
    if (hasItem) {
      this.favorisFormService.removeItem(itemId);
    } else {
      this.favorisFormService.addItem(itemId);
    }
  }

}
