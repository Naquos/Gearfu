import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SearchBuildListeComponent } from "../search-build-liste/search-build-liste.component";

@Component({
  selector: 'app-search-pages-router',
  imports: [SearchBuildListeComponent],
  templateUrl: './search-pages-router.component.html',
  styleUrl: './search-pages-router.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPagesRouterComponent {

}
