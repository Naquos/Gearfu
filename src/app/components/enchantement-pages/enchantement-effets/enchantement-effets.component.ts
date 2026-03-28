import { Component, inject } from '@angular/core';
import { ImageService } from '../../../services/imageService';
import { ItemTypeEnum } from '../../../models/enum/itemTypeEnum';
import { ItemTypeServices } from '../../../services/data/ItemTypesServices';
import { TranslateModule } from '@ngx-translate/core';
import { ActivateDirective } from '../../../directives/activate.directive';
import { EnchantementStateService, EffetDescription } from '../../../services/form/enchantementStateService';

@Component({
    selector: 'app-enchantement-effets',
    imports: [TranslateModule, ActivateDirective],
    templateUrl: './enchantement-effets.component.html',
    styleUrl: './enchantement-effets.component.scss'
})
export class EnchantementEffetsComponent {

    protected readonly imageService = inject(ImageService);
    protected readonly itemTypeService = inject(ItemTypeServices);
    protected readonly stateService = inject(EnchantementStateService);

    protected effectIsDouble(effet: EffetDescription): boolean {
        const itemTypeSelected = this.stateService.itemTypeSelected();
        return !!itemTypeSelected && effet.logos.includes(itemTypeSelected as ItemTypeEnum);
    }
}
