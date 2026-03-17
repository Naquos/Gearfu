import { Component, inject, signal } from '@angular/core';
import { SearchListComponent } from "../../form/search-list/search-list.component";
import { FormControl } from '@angular/forms';
import { SublimationService } from '../../../services/data/sublimationService';
import { combineLatest, iif, map, of, switchMap, tap } from 'rxjs';
import { normalizeString } from '../../../models/utils/utils';
import { TranslateService } from '@ngx-translate/core';
import { Option } from '../../form/search/search.component';
import { SublimationsDescriptions } from '../../../models/data/sublimationsDescriptions';
import { ImageService } from '../../../services/imageService';
import { ColorRarityService } from '../../../services/colorRarityService';
import { RarityItemEnum } from '../../../models/enum/rarityItemEnum';
import { FilterSearchBuildFormService } from '../../../services/form/filterSearchBuildFormService';

@Component({
  selector: 'app-search-list-sublimation',
  imports: [SearchListComponent],
  templateUrl: './search-list-sublimation.component.html',
  styleUrl: './search-list-sublimation.component.scss',
})
export class SearchListSublimationComponent {

  private readonly sublimationService = inject(SublimationService);
  private readonly translateService = inject(TranslateService);
  private readonly imageService = inject(ImageService);
  private readonly colorRarityService = inject(ColorRarityService);
  private readonly colorRarityList = [RarityItemEnum.RARE, RarityItemEnum.MYTHIQUE, RarityItemEnum.LEGENDAIRE];
  private readonly filterSearchBuildFormService = inject(FilterSearchBuildFormService);

  private readonly sublimations$ = this.sublimationService.sublimations$;
  protected readonly label = signal('search-list-sublimation.sublimation');
  protected readonly options = signal<Option<SublimationsDescriptions>[]>([]);
  protected readonly control = new FormControl<string>('', { nonNullable: true });

  constructor() {
    this.filterSearchBuildFormService.form.controls.sublimations.setValue([]);
    combineLatest([this.sublimations$, this.control.valueChanges]).pipe(
      switchMap(([sublimations, value]) => iif(() => value.length > 2, of(sublimations), of([]))))
      .pipe(
        map(sublimations => sublimations.filter(s => normalizeString(s.title[this.translateService.currentLang as keyof typeof s.title]).includes(normalizeString(this.control.value)))),
        map(sublimations => sublimations.slice(0, 30)),
        map(sublimations => sublimations.map(s => ({
          id: `${s.id}`,
          label: s.title[this.translateService.currentLang as keyof typeof s.title],
          displayLabel: s.title[this.translateService.currentLang as keyof typeof s.title],
          imgUrl: this.imageService.getSublimationImageUrl(s.linkSublimation[s.linkSublimation.length - 1]),
          backgroundColor: this.colorRarityService.mapColors.get(this.colorRarityList[s.linkSublimation[s.linkSublimation.length - 1].level - 1]) ?? '',
          value: s,
        }))),
        tap(options => this.options.set(options))
      )
      .subscribe();
  }

  onOptionsSelected(event: Set<Option<SublimationsDescriptions>>) {
    this.filterSearchBuildFormService.form.controls.sublimations.setValue(Array.from(event).map(option => `${option.value.id}`));
  }
}
