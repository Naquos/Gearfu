import { Component, inject } from '@angular/core';
import { ReverseButtonComponent } from "../../form/reverse-button/reverse-button.component";
import { SearchItemNameComponent } from "../../form/search-item-name/search-item-name.component";
import { ObtentionComponent } from "../../form/obtention/obtention.component";
import { OnlyNoSecondaryComponent } from "../../form/only-no-secondary/only-no-secondary.component";
import { OnlyNoElemComponent } from "../../form/only-no-elem/only-no-elem.component";
import { ModifierMecanismComponent } from "../../form/modifier-mecanism/modifier-mecanism.component";
import { SortChoiceComponent } from "../../form/sort-choice/sort-choice.component";
import { FilterResistancesComponent } from "../../form/filter-resistances/filter-resistances.component";
import { MajorPresentComponent } from "../../form/major-present/major-present.component";
import { FilterMaitrisesComponent } from "../../form/filter-maitrises/filter-maitrises.component";
import { RareteItemComponent } from "../../form/rarete-item/rarete-item.component";
import { ItemLevelComponent } from "../../form/item-level/item-level.component";
import { ItemTypesComponent } from "../../form/item-types/item-types.component";
import { ResetFormService } from '../../../services/resetFormService';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-filters',
  imports: [TranslateModule, ReverseButtonComponent, SearchItemNameComponent, ObtentionComponent, OnlyNoSecondaryComponent, OnlyNoElemComponent, ModifierMecanismComponent, SortChoiceComponent, FilterResistancesComponent, MajorPresentComponent, FilterMaitrisesComponent, RareteItemComponent, ItemLevelComponent, ItemTypesComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  protected readonly resetFormService = inject(ResetFormService);
}
