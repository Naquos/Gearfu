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
import { filter, take } from 'rxjs';
import { ItemChooseComponent } from '../items-pages/item-choose/item-choose.component';
import { SortService } from '../../services/data/sortService';
import { SublimationService } from '../../services/data/sublimationService';
import { FamiliersService } from '../../services/data/familiersService';
import { SortLevelService } from '../../services/data/sortLevelService';
import { ElementSelectorService } from '../../services/elementSelectorService';
import { ZenithService } from '../../services/zenith/zenithService';
import { SupabaseService } from '../../services/supabase/supabaseService';
import { SaveBuildService } from '../../services/saveBuildService';
import { NO_BUILD } from '../../models/utils/utils';
import { FilterSearchBuildComponent } from "../search-pages/filter-search-build/filter-search-build.component";

type column = 'filter' | 'build' | 'aptitudes' | 'search';

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
    ResumeAptitudesComponent,
    FilterSearchBuildComponent
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
  private readonly sublimationService = inject(SublimationService);
  private readonly sortService = inject(SortService);
  private readonly router = inject(Router);
  private readonly familierService = inject(FamiliersService);
  private readonly sortLevelService = inject(SortLevelService);
  private readonly elementSelectorService = inject(ElementSelectorService);
  private readonly zenithService = inject(ZenithService);
  private readonly supabaseService = inject(SupabaseService);
  private readonly saveBuildService = inject(SaveBuildService); 

  protected displayFilter = false;
  protected filterOrBuild : column = "filter";

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
    this.elementSelectorService.init();
    this.ankamaCdnFacade.load();
    this.monsterDropService.load();
    this.itemConditionService.load();
    this.statesDefinitionService.load();
    this.sortService.load();
    this.sublimationService.load();
    this.familierService.load();
    this.sortLevelService.load();

    this.itemService.init();
    if (isPlatformBrowser(this.platformId)) {
      this.verifyToken();
      this.saveBuildService.createBuildIfNotExistsElseLoadIt(this.getBuildIdFromUrl(window.location.href));
      this.saveBuildService.listenBuildChanges();
    }


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

  /**
   * Vérifie si l'utilisateur a un token UUID, sinon en génère un et le stocke dans le localStorage
   */
  private verifyToken(): void {
    const token = this.localStorageService.getItem<string>(KeyEnum.KEY_TOKEN);
    if (!token) {
      const newToken = this.generateUuid();
      this.localStorageService.setItem<string>(KeyEnum.KEY_TOKEN, newToken);
    }
  }

  private generateUuid(): string {
    if (globalThis.crypto?.randomUUID) {
      return globalThis.crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
      const random = Math.floor(Math.random() * 16);
      const value = char === 'x' ? random : (random & 0x3) | 0x8;
      return value.toString(16);
    });
  }

  protected openDiscord(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.open('https://discord.gg/fFmzBmZjSb', '_blank');
    }
  }

  protected generateBuild(): void {
    this.zenithService.createBuild().pipe(take(1)).subscribe(linkBuild => {
      if (isPlatformBrowser(this.platformId)) {
        window.open('https://www.zenithwakfu.com/builder/' + linkBuild, '_blank');
      }
    });
  }

  private updateFilterOrBuildFromRoute(url: string): void {
    if (url.includes('/aptitudes') || url.includes('/sorts') || url.includes('/enchantements')) {
      this.filterOrBuild = 'aptitudes';
    } else if(url.includes('/search')) {
      this.filterOrBuild = 'search';
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
    const currentFragment = isPlatformBrowser(this.platformId) ? window.location.hash.substring(1) : '';
    const buildId = this.getBuildIdFromUrl(window.location.href);
    this.router.navigate(["/", buildId], {
      fragment: currentFragment || undefined
    }).then(() => this.filterOrBuild = filterOrBuild);
  }

  protected redirectToPage(page: 'aptitudes' | 'sorts' | 'enchantements' | 'search'): void {
    const currentFragment = isPlatformBrowser(this.platformId) ? window.location.hash.substring(1) : '';
    const buildId = this.getBuildIdFromUrl(window.location.href);
    this.router.navigate(['/', buildId, page], {
      fragment: currentFragment || undefined
    });
  }

  protected redirectToSearch(): void {
    this.filterOrBuild = 'search';
    this.redirectToPage('search');
  }

  protected redirectToAptitudes(): void {
    this.filterOrBuild = 'aptitudes';
    this.redirectToPage('aptitudes');
  }

  protected redirectToSorts(): void {
    this.filterOrBuild = 'aptitudes';
    this.redirectToPage('sorts');
  }

  protected redirectToEnchantements(): void {
    this.filterOrBuild = 'aptitudes';
    this.redirectToPage('enchantements');
  }

  private getBuildIdFromUrl(url: string): string {
    const match = url.match(/\/Gearfu\/(.*)/);
    return match?.[1].split('/')[0] ?? NO_BUILD;
  }

}
