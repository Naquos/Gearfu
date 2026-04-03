import { Component, computed, inject, input, signal } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Option, SearchComponent } from '../../form/search/search.component';
import { SublimationService } from '../../../services/data/sublimationService';
import { SublimationsDescriptions } from "../../../models/data/sublimationsDescriptions";
import { iif, map, switchMap, of, tap, combineLatest } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ImageService } from '../../../services/imageService';
import { ColorRarityService } from '../../../services/colorRarityService';
import { RarityItemEnum } from '../../../models/enum/rarityItemEnum';
import { toObservable } from '@angular/core/rxjs-interop';
import { FilterSearchBuildFormService } from '../../../services/form/filterSearchBuildFormService';
import { normalizeString } from '../../../models/utils/utils';


@Component({
  selector: 'app-search-sublimations',
  imports: [SearchComponent],
  templateUrl: './search-sublimations.component.html',
  styleUrl: './search-sublimations.component.scss',
})
export class SearchSublimationsComponent {

  private readonly translateService = inject(TranslateService);
  private readonly imageService = inject(ImageService);
  private readonly colorRarityService = inject(ColorRarityService);
  private readonly sublimationService = inject(SublimationService);
  private readonly filterSearchBuildFormService = inject(FilterSearchBuildFormService);

  private readonly controlSearch = computed(() => {
    const rarity = this.rarity();
    const control = rarity === RarityItemEnum.EPIQUE ? this.filterSearchBuildFormService.form.controls.sublimationEpique
      : this.filterSearchBuildFormService.form.controls.sublimationRelique;
    control.setValue('');
    return control;
  })

  public readonly rarity = input<RarityItemEnum.EPIQUE | RarityItemEnum.RELIQUE>(RarityItemEnum.EPIQUE);

  protected readonly control = new FormControl<string>('', { nonNullable: true });
  protected readonly options = signal<Option<SublimationsDescriptions>[]>([]);

  protected readonly label = computed(() => {
    const rarity = this.rarity();
    return rarity === RarityItemEnum.EPIQUE ? 'search-sublimations.epique' : 'search-sublimations.relique';
  })

  protected readonly sublimationsList$ = toObservable(this.rarity).pipe(
    switchMap(rarity => iif(() => rarity === RarityItemEnum.EPIQUE,
      this.sublimationService.sublimationsEpique$, this.sublimationService.sublimationsRelique$))
  );
  constructor() {
    this.controlSearch().setValue('');
    combineLatest([this.sublimationsList$, this.control.valueChanges]).pipe(
      switchMap(([sublimations, controlValue]) => iif(() => controlValue.length > 2, of(sublimations), of([]))),
      map(sublimations => sublimations.filter(s => normalizeString(s.title[this.translateService.currentLang as keyof typeof s.title]).includes(normalizeString(this.control.value)))),
      map(sublimations => sublimations.slice(0, 10)),
      map(sublimations => sublimations.map(sublimation => ({
        id: `${sublimation.id}`,
        label: sublimation.title[this.translateService.currentLang as keyof typeof sublimation.title],
        displayLabel: `${sublimation.title[this.translateService.currentLang as keyof typeof sublimation.title]}`,
        imgUrl: this.imageService.getItemUrl(sublimation.gfxId),
        backgroundColor: this.colorRarityService.mapColors.get(this.rarity()) ?? '',
        value: sublimation
      }))),
      tap(options => this.options.set(options)),
      tap(options => {
        const foundOption = options.find(option => option.label === this.control.value);
        this.controlSearch().setValue(foundOption ? foundOption.id : '');
      })
    ).subscribe();
  }
}
