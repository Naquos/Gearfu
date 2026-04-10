import { Component, inject, signal } from '@angular/core';
import { SupabaseService } from '../../../services/supabase/supabaseService';
import { toSignal } from '@angular/core/rxjs-interop';
import { BuildComponent } from "../../items-pages/build/build.component";
import { FilterSearchBuildFormService } from '../../../services/form/filterSearchBuildFormService';
import { finalize, switchMap } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-search-build-liste',
  imports: [BuildComponent, TranslateModule],
  templateUrl: './search-build-liste.component.html',
  styleUrl: './search-build-liste.component.scss',
})
export class SearchBuildListeComponent {
  private readonly supabaseService = inject(SupabaseService);
  private readonly filterSearchBuildFormService = inject(FilterSearchBuildFormService);
  protected readonly isLoading = signal(true);
  protected readonly skeletonArray = Array.from({ length: 8 }, (_, i) => i);
  protected readonly skeletonSlotsArray = Array.from({ length: 14 }, (_, i) => i);

  protected builds = toSignal(
    this.filterSearchBuildFormService.result$.pipe(
      switchMap(result => {
        this.isLoading.set(true);
        return this.supabaseService.getBuildsListByFilter(
          result.levelMin,
          result.levelMax,
          result.class,
          result.orderBy,
          result.PA,
          result.PM,
          result.PW,
          result.PO,
          result.CC,
          result.parade,
          result.sublimationEpique,
          result.sublimationRelique,
          result.idItems,
          result.sublimations,
          result.name
        ).pipe(
          finalize(() => this.isLoading.set(false)),
        );
      }),
    ), { initialValue: [] });

}
