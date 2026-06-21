import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';
import { ButtonCheckboxComponent } from "../button-checkbox/button-checkbox.component";
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import { A11yModule } from "@angular/cdk/a11y";
import { ItemFavorisFormService } from '../../../services/form-signal/itemFavorisFormService';
import { Item } from '../../../models/data/item';

@Component({
  selector: 'app-favoris-button',
  imports: [ButtonCheckboxComponent, TranslateModule, MatTooltipModule, MatIconModule, A11yModule],
  templateUrl: './favoris-button.component.html',
  styleUrl: './favoris-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavorisButtonComponent {
  private readonly favorisFormService = inject(ItemFavorisFormService);
  protected readonly control = new FormControl<boolean>(false, { nonNullable: true });

  public item = input.required<Item>();

  constructor() {
    effect(() => {
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
