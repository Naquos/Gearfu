import { Component, inject } from '@angular/core';
import { ClassIdEnum } from '../../../models/enum/classIdEnum';
import { FilterSearchBuildFormService } from '../../../services/form/filterSearchBuildFormService';
import { ActivateDirective } from '../../../directives/activate.directive';
import { MatInputModule, MatLabel } from "@angular/material/input";
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOption, MatSelectModule } from "@angular/material/select";
import { OrderBySearchBuildEnum } from '../../../models/enum/orderBySearchBuildEnum';

@Component({
  selector: 'app-filter-search-build',
  imports: [ActivateDirective, MatFormFieldModule, MatInputModule, MatLabel, TranslateModule, ReactiveFormsModule, MatSelectModule, MatOption],
  templateUrl: './filter-search-build.component.html',
  styleUrl: './filter-search-build.component.scss',
})
export class FilterSearchBuildComponent {
  protected readonly filterSearchBuildFormService = inject(FilterSearchBuildFormService);
  protected idClasses: number[] = Object.values(ClassIdEnum).filter(value => typeof value === 'number') as number[];
  protected readonly OrderBySearchBuildEnumList = Object.values(OrderBySearchBuildEnum);


  protected changeClasses(idClass: ClassIdEnum): void {
    this.filterSearchBuildFormService.form.controls.class.setValue(idClass);
  }

}
