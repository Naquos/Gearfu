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
import { CraftableChoiceComponent } from "../form/craftable-choice/craftable-choice.component";
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
    CraftableChoiceComponent,
    TranslateModule,
    SwipeDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  protected displayFilter = false;

  protected openDiscord(): void {
    window.open('https://discord.gg/fFmzBmZjSb', '_blank');
  }
  constructor(protected translate: TranslateService,
    protected resetFormServices: ResetFormService,
    private localStorageService: LocalStorageService) {

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
