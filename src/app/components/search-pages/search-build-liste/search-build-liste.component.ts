import { Component, inject } from '@angular/core';
import { SupabaseService } from '../../../services/supabase/supabaseService';
import { toSignal } from '@angular/core/rxjs-interop';
import { BuildComponent } from "../../items-pages/build/build.component";
import { FilterSearchBuildFormService } from '../../../services/form/filterSearchBuildFormService';
import { debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-build-liste',
  imports: [BuildComponent],
  templateUrl: './search-build-liste.component.html',
  styleUrl: './search-build-liste.component.scss',
})
export class SearchBuildListeComponent {
  private readonly supabaseService = inject(SupabaseService);
  private readonly filterSearchBuildFormService = inject(FilterSearchBuildFormService);

  protected builds = toSignal(
    this.filterSearchBuildFormService.result$.pipe(
      debounceTime(300),
      switchMap(result => this.supabaseService.getBuildsListByFilter(
        result.levelMin,
        result.levelMax,
        result.class,
        result.orderBy,
        result.PA,
        result.PM,
        result.PW,
        result.PO,
        result.CC,
        result.parade
      ))), { initialValue: [] });

}
