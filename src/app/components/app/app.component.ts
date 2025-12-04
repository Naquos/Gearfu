import { Component, inject, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ItemTypesComponent } from '../form/item-types/item-types.component';
import { ItemLevelComponent } from "../form/item-level/item-level.component";
import { RareteItemComponent } from "../form/rarete-item/rarete-item.component";
import { FilterMaitrisesComponent } from "../form/filter-maitrises/filter-maitrises.component";
import { SortChoiceComponent } from "../form/sort-choice/sort-choice.component";
import { OnlyNoSecondaryComponent } from "../form/only-no-secondary/only-no-secondary.component";
import { ModifierMecanismComponent } from "../form/modifier-mecanism/modifier-mecanism.component";
import { SearchItemNameComponent } from "../form/search-item-name/search-item-name.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SwipeDirective } from '../../directives/swipe.directive';
import { KeyEnum } from '../../models/enum/keyEnum';
import { LocalStorageService } from '../../services/data/localStorageService';
import { ResetFormService } from '../../services/resetFormService';
import { FilterResistancesComponent } from '../form/filter-resistances/filter-resistances.component';
import { MajorPresentComponent } from '../form/major-present/major-present.component';
import { BuildsListComponent } from "../items-pages/builds-list/builds-list.component";
import { ImportBuildComponent } from "../form/import-build/import-build.component";
import { NameBuildComponent } from "../form/name-build/name-build.component";
import { ItemsService } from '../../services/data/itemsService';
import { AnkamaCdnFacade } from '../../services/ankama-cdn/ankamaCdnFacade';
import { OnlyNoElemComponent } from '../form/only-no-elem/only-no-elem.component';
import { ReverseButtonComponent } from '../form/reverse-button/reverse-button.component';
import { ObtentionComponent } from "../form/obtention/obtention.component";
import { MonsterDropService } from '../../services/data/monsterDropService';
import { ItemConditionService } from '../../services/data/itemConditionService';
import { StatesDefinitionService } from '../../services/data/statesDefinitionService';
import { DisplayFilterService } from '../../services/displayFilterService';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { ResumeAptitudesComponent } from "../aptitudes-pages/resume-aptitudes/resume-aptitudes.component";
import { filter } from 'rxjs';
import { ItemChooseComponent } from '../items-pages/item-choose/item-choose.component';
import { SortService } from '../../services/data/sortService';

type column = 'filter' | 'build' | 'aptitudes';

@Component({
  selector: 'app-root',
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    ItemTypesComponent,
    ItemLevelComponent,
    RareteItemComponent,
    FilterMaitrisesComponent,
    FilterResistancesComponent,
    SortChoiceComponent,
    OnlyNoElemComponent,
    OnlyNoSecondaryComponent,
    MajorPresentComponent,
    ModifierMecanismComponent,
    SearchItemNameComponent,
    ItemChooseComponent,
    TranslateModule,
    SwipeDirective,
    BuildsListComponent,
    ImportBuildComponent,
    NameBuildComponent,
    ReverseButtonComponent,
    ObtentionComponent,
    RouterOutlet,
    ResumeAptitudesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  protected readonly resetFormServices = inject(ResetFormService);
  protected readonly translate = inject(TranslateService);
  protected readonly displayFilterService = inject(DisplayFilterService);
  private readonly localStorageService = inject(LocalStorageService);
  private readonly itemService = inject(ItemsService);
  private readonly ankamaCdnFacade = inject(AnkamaCdnFacade);
  private readonly monsterDropService = inject(MonsterDropService);
  private readonly itemConditionService = inject(ItemConditionService);
  private readonly statesDefinitionService = inject(StatesDefinitionService);
  private readonly sortService = inject(SortService);
  private readonly router = inject(Router);

  protected displayFilter = false;
  protected filterOrBuild : column = "filter";

  protected openDiscord(): void {
    window.open('https://discord.gg/fFmzBmZjSb', '_blank');
  }

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.translate.addLangs(['fr','en', 'es', 'pt']);
    this.translate.setDefaultLang('en');
    const lang = this.localStorageService.getItem<string>(KeyEnum.KEY_LANG);
    if(lang) {
      this.translate.use(lang);
    } else {
      // Vérifier si on est dans le navigateur avant d'accéder à navigator
      if (isPlatformBrowser(this.platformId)) {
        this.translate.use(navigator.language.split("-")[0] ?? "en");
      } else {
        this.translate.use("en");
      }
    } 
  }

  public ngOnInit(): void {
    this.ankamaCdnFacade.load();
    this.monsterDropService.load();
    this.itemConditionService.load();
    this.statesDefinitionService.load();
    this.sortService.load();
    this.itemService.init();

    this.displayFilterService.isDisplayed$.subscribe((value: boolean) => {
      this.displayFilter = value;
    });

    // Définir filterOrBuild en fonction de la route actuelle
    this.updateFilterOrBuildFromRoute(this.router.url);

    // Écouter les changements de route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateFilterOrBuildFromRoute(event.urlAfterRedirects);
    });

    // Supprimer le loader quand les items sont chargés
    if (isPlatformBrowser(this.platformId)) {
      // Observer le signal isLoading
      const checkLoading = setInterval(() => {
        if (!this.itemService.isLoading()) {
          this.removeLoader();
          clearInterval(checkLoading);
        }
      }, 100);

      // Timeout de sécurité après 10 secondes
      setTimeout(() => {
        clearInterval(checkLoading);
        this.removeLoader();
      }, 10000);
    }
  }

  private updateFilterOrBuildFromRoute(url: string): void {
    if (url.includes('/aptitudes') || url.includes('/sorts') || url.includes('/enchantements')) {
      this.filterOrBuild = 'aptitudes';
    } else {
      this.filterOrBuild = 'filter';
    }
  }

  private removeLoader(): void {
    const loader = document.getElementById('app-loader');
    if (loader) {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.5s ease-out';
      setTimeout(() => {
        loader.remove();
      }, 500);
    }
  }

  protected setLang(value: string): void {
    this.translate.use(value);
    this.localStorageService.setItem<string>(KeyEnum.KEY_LANG, value);
  }

  protected redirectToListItems(filterOrBuild: column): void {
    this.router.navigate(["/"], {
      queryParamsHandling: 'preserve'
    }).then(() => this.filterOrBuild = filterOrBuild);
  }

  protected redirectToAptitudes(): void {
    this.filterOrBuild = 'aptitudes';
    this.router.navigate(['/aptitudes'], {
      queryParamsHandling: 'preserve'
    });
  }

  protected redirectToSorts(): void {
    this.filterOrBuild = 'aptitudes';
    this.router.navigate(['/sorts'], {
      queryParamsHandling: 'preserve'
    });
  }

  protected redirectToEnchantements(): void {
    this.filterOrBuild = 'aptitudes';
    this.router.navigate(['/enchantements'], {
      queryParamsHandling: 'preserve'
    });
  }

}
