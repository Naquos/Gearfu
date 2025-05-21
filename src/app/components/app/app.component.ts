import { Component } from '@angular/core';
import { ItemTypesComponent } from '../form/item-types/item-types.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { ItemLevelComponent } from "../form/item-level/item-level.component";
import { RareteItemComponent } from "../form/rarete-item/rarete-item.component";
import { FilterMaitrisesComponent } from "../form/filter-maitrises/filter-maitrises.component";
import { SortChoiceComponent } from "../form/sort-choice/sort-choice.component";
import { OnlyNoSecondaryComponent } from "../form/only-no-secondary/only-no-secondary.component";
import { ModifierElemMaitrisesComponent } from "../form/modifier-elem-maitrises/modifier-elem-maitrises.component";
import { SearchItemNameComponent } from "../form/search-item-name/search-item-name.component";
import { ItemChooseComponent } from "../item-choose/item-choose.component";
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
import { CommonModule } from '@angular/common';
import { BuildsListComponent } from "../builds-list/builds-list.component";
import { ImportBuildComponent } from "../form/import-build/import-build.component";
import { NameBuildComponent } from "../form/name-build/name-build.component";
import { RecapStatsComponent } from "../recap-stats/recap-stats.component";
import { ItemsService } from '../../services/data/itemsService';


@Component({
  selector: 'app-root',
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    ItemListComponent,
    ItemTypesComponent,
    ItemLevelComponent,
    RareteItemComponent,
    FilterMaitrisesComponent,
    FilterResistancesComponent,
    SortChoiceComponent,
    OnlyNoSecondaryComponent,
    MajorPresentComponent,
    ModifierElemMaitrisesComponent,
    SearchItemNameComponent,
    ItemChooseComponent,
    TranslateModule,
    SwipeDirective,
    CommonModule,
    BuildsListComponent,
    ImportBuildComponent,
    NameBuildComponent,
    RecapStatsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  protected displayFilter = false;
  protected filterOrBuild : "filter" | "build" = "filter";

  protected openDiscord(): void {
    window.open('https://discord.gg/fFmzBmZjSb', '_blank');
  }
  constructor(protected readonly translate: TranslateService,
    protected readonly resetFormServices: ResetFormService,
    private readonly localStorageService: LocalStorageService,
    private readonly itemService: ItemsService
  ) {
    this.itemService.init();
    this.translate.addLangs(['fr','en', 'es', 'pt']);
    this.translate.setDefaultLang('en');
    const lang = this.localStorageService.getItem<string>(KeyEnum.KEY_LANG);
    if(lang) {
      this.translate.use(lang);
    } else {
      this.translate.use(navigator.language.split("-")[0] ?? "en");
    }
    
  }

  protected setLang(value: string): void {
    this.translate.use(value);
    this.localStorageService.setItem<string>(KeyEnum.KEY_LANG, value);
  }

  protected handleFilter(value?: boolean): void {
    this.displayFilter = value !== undefined ? value : !this.displayFilter;
  }
}
