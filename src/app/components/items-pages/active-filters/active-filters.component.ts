import { ChangeDetectionStrategy, Component, computed, inject, WritableSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { ItemLevelFormService } from '../../../services/form-signal/itemLevelFormService';
import { MaitrisesFormService } from '../../../services/form-signal/maitrisesFormService';
import { RareteItemFormServices } from '../../../services/form-signal/rareteItemFormService';
import { ResistancesFormService } from '../../../services/form-signal/resistancesFormService';
import { ResetFormService } from '../../../services/resetFormService';
import { MajorPresentFormService } from '../../../services/form-signal/majorPresentFormService';

interface BooleanField {
  (): { value: WritableSignal<boolean> };
}

interface ActiveChip {
  id: string;
  label: string;
  prefix?: string;
  remove: () => void;
}

const MAITRISE_KEYS = ['feu', 'eau', 'terre', 'air', 'melee', 'distance', 'critique', 'dos', 'soin', 'berzerk'];
const RESISTANCE_KEYS = ['feu', 'eau', 'terre', 'air'];
const RARITY_KEYS = ['normal', 'rare', 'mythique', 'legendaire', 'souvenir', 'epique', 'relique'];
const MAJOR_PRESENT_KEYS = ['PA', 'PM', 'PW', 'PO',
  'ARMURE_DONNEE', 'ARMURE_RECUE', 'CRITIQUE', 'PARADE',
  'RESISTANCE_DOS', 'RESISTANCE_CRITIQUE', 'TACLE', 'ESQUIVE',
  'PERTE_PA', 'PERTE_PM', 'PERTE_PW', 'PERTE_PO',
  'PERTE_ARMURE_DONNEE', 'PERTE_ARMURE_RECUE', 'PERTE_CRITIQUE', 'PERTE_PARADE',
  'PERTE_RESISTANCE_DOS', 'PERTE_RESISTANCE_CRITIQUE',
  'PERTE_MAITRISES_MELEE', 'PERTE_MAITRISES_DISTANCE', 'PERTE_MAITRISES_CRITIQUE', 'PERTE_MAITRISES_DOS', 'PERTE_MAITRISES_SOIN', 'PERTE_MAITRISES_BERZERK',
  'PERTE_TACLE', 'PERTE_ESQUIVE'
];

@Component({
  selector: 'app-active-filters',
  imports: [TranslateModule, MatIconModule],
  templateUrl: './active-filters.component.html',
  styleUrl: './active-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActiveFiltersComponent {
  private readonly rareteService = inject(RareteItemFormServices);
  private readonly maitrisesService = inject(MaitrisesFormService);
  private readonly resistancesService = inject(ResistancesFormService);
  private readonly levelService = inject(ItemLevelFormService);
  private readonly majorPresentFormService = inject(MajorPresentFormService);
  protected readonly resetFormService = inject(ResetFormService);

  protected readonly chips = computed<ActiveChip[]>(() => {
    const result: ActiveChip[] = [];
    this.collect(result, 'rarete-item.', RARITY_KEYS, this.rareteService.form as unknown as Record<string, BooleanField>, 'rarity');
    this.collect(result, 'filter-maitrises.', MAITRISE_KEYS, this.maitrisesService.form as unknown as Record<string, BooleanField>, 'maitrise', 'filter-maitrises.maitrises-elementaires');
    this.collect(result, 'filter-maitrises.', RESISTANCE_KEYS, this.resistancesService.form as unknown as Record<string, BooleanField>, 'resistance', 'filter-resistances.resistances-elementaires');
    this.collect(result, 'major-present.', MAJOR_PRESENT_KEYS, this.majorPresentFormService.form as unknown as Record<string, BooleanField>, 'major-present');

    const min = Number(this.levelService.form.levelMin().value());
    const max = Number(this.levelService.form.levelMax().value());
    if (min !== ItemLevelFormService.DEFAULT_LEVEL_MIN || max !== ItemLevelFormService.DEFAULT_LEVEL_MAX) {
      result.push({
        id: 'level',
        label: `${min} – ${max}`,
        prefix: 'item.niveau-court',
        remove: () => {
          this.levelService.form.levelMin().value.set(String(ItemLevelFormService.DEFAULT_LEVEL_MIN));
          this.levelService.form.levelMax().value.set(String(ItemLevelFormService.DEFAULT_LEVEL_MAX));
        },
      });
    }
    return result;
  });

  private collect(result: ActiveChip[], i18nPrefix: string, keys: string[], form: Record<string, BooleanField>,
    group: string, prefix?: string): void {
    for (const key of keys) {
      const field = form[key]();
      if (field.value()) {
        result.push({ id: `${group}-${key}`, label: i18nPrefix + key, prefix, remove: () => field.value.set(false) });
      }
    }
  }
}
