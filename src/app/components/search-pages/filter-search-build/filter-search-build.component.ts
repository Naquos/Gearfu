import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ClassIdEnum } from '../../../models/enum/classIdEnum';
import { FilterSearchBuildFormService } from '../../../services/form-signal/filterSearchBuildFormService';
import { ActivateDirective } from '../../../directives/activate.directive';
import { MatInputModule, MatLabel } from "@angular/material/input";
import { TranslateModule } from '@ngx-translate/core';
import { Field } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOption, MatSelectModule } from "@angular/material/select";
import { OrderBySearchBuildEnum } from '../../../models/enum/orderBySearchBuildEnum';
import { RarityItemEnum } from '../../../models/enum/rarityItemEnum';
import { SearchListItemComponent } from "../search-list-item/search-list-item.component";
import { SearchListSublimationComponent } from "../search-list-sublimation/search-list-sublimation.component";

@Component({
  selector: 'app-filter-search-build',
  imports: [ActivateDirective,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    TranslateModule,
    Field,
    MatSelectModule,
    MatOption,
    SearchListItemComponent, SearchListSublimationComponent],
  templateUrl: './filter-search-build.component.html',
  styleUrl: './filter-search-build.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSearchBuildComponent {
  protected readonly filterSearchBuildFormService = inject(FilterSearchBuildFormService);
  protected idClasses: number[] = Object.values(ClassIdEnum).filter(value => typeof value === 'number') as number[];
  protected readonly OrderBySearchBuildEnumList = Object.values(OrderBySearchBuildEnum);
  protected readonly RarityItemEnum = RarityItemEnum;


  protected changeClasses(idClass: ClassIdEnum): void {
    const current = this.filterSearchBuildFormService.form.class().value();
    this.filterSearchBuildFormService.form.class().value.set(current === idClass ? null : idClass);
  }

}
