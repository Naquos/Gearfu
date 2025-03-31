import { Component } from '@angular/core';
import { ItemTypesComponent } from '../item-types/item-types.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { ItemLevelComponent } from "../item-level/item-level.component";
import { RareteItemComponent } from "../rarete-item/rarete-item.component";
import { FilterMaitrisesComponent } from "../filter-maitrises/filter-maitrises.component";
import { SortChoiceComponent } from "../sort-choice/sort-choice.component";
import { OnlyNoSecondaryComponent } from "../only-no-secondary/only-no-secondary.component";
import { MajorPresentComponent } from "../major-present/major-present.component";
import { ModifierElemMaitrisesComponent } from "../modifier-elem-maitrises/modifier-elem-maitrises.component";
import { SearchItemNameComponent } from "../search-item-name/search-item-name.component";
import { ItemChooseComponent } from "../item-choose/item-choose.component";
import { CraftableChoiceComponent } from "../craftable-choice/craftable-choice.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  override overrides = {
    swipe: { direction: 6 } // 6 = Hammer.DIRECTION_HORIZONTAL
  };
}

@Component({
  selector: 'app-root',
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    HammerModule,
    ItemListComponent,
    ItemTypesComponent,
    ItemLevelComponent,
    RareteItemComponent,
    FilterMaitrisesComponent,
    SortChoiceComponent,
    OnlyNoSecondaryComponent,
    MajorPresentComponent,
    ModifierElemMaitrisesComponent, 
    SearchItemNameComponent, 
    ItemChooseComponent, 
    CraftableChoiceComponent,
    TranslateModule
  ],
  providers: [ { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  protected displayFilter = false;

  protected openDiscord(): void {
    window.open('https://discord.gg/fFmzBmZjSb', '_blank');
  }
  constructor(protected translate: TranslateService) {
    this.translate.addLangs(['fr','en', 'es', 'pt']);
    this.translate.setDefaultLang('en');
    this.translate.use(navigator.language.split("-")[0] ?? "en");
  }

  protected setLang(value: string): void {
    this.translate.use(value);
  }

  protected handleFilter(): void {
    this.displayFilter = !this.displayFilter;
  }

  protected closedFilter(): void {
    this.displayFilter = false;
  }
}
