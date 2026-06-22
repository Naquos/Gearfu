import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Item } from '../../../models/data/item';
import { ItemTypeBuild } from '../build/build.component';
import { ItemsService } from '../../../services/data/itemsService';
import { ItemTypeEnum } from '../../../models/enum/itemTypeEnum';
import { ItemTypeServices } from '../../../services/data/ItemTypesServices';
import { ImageService } from '../../../services/imageService';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImageFallbackDirective } from '../../../directives/imageFallback.directive';
import { ActivateDirective } from "../../../directives/activate.directive";
import { ItemHistoricsService } from '../../../services/form-signal/itemHistoricsService';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-historics-piece',
  imports: [MatTooltipModule, TranslateModule, ImageFallbackDirective, ActivateDirective],
  templateUrl: './historics-piece.component.html',
  styleUrl: './historics-piece.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoricsPieceComponent {
  private readonly itemService = inject(ItemsService);
  private readonly itemHistoricsService = inject(ItemHistoricsService);
  private readonly itemTypeServices = inject(ItemTypeServices);
  private readonly imageService = inject(ImageService);
  private readonly translateService = inject(TranslateService);
  public readonly historic = input.required<string>();
  protected readonly ItemTypeBuild = ItemTypeBuild;
  private readonly fullItems = toSignal(this.itemService.fullItems$, {
    initialValue: []
  });

  private readonly itemsState = computed(() => {
    const fullItems = this.fullItems();
    const images = new Map<ItemTypeBuild, string>([
      [ItemTypeBuild.CASQUE, "./aptitudes/EmplacementCoiffe.png"],
      [ItemTypeBuild.AMULETTE, "./aptitudes/EmplacementAmulette.png"],
      [ItemTypeBuild.PLASTRON, "./aptitudes/EmplacementPlastron.png"],
      [ItemTypeBuild.ANNEAU_DROITE, "./aptitudes/EmplacementAnneauDroite.png"],
      [ItemTypeBuild.ANNEAU_GAUCHE, "./aptitudes/EmplacementAnneauGauche.png"],
      [ItemTypeBuild.BOTTES, "./aptitudes/EmplacementBottes.png"],
      [ItemTypeBuild.CAPE, "./aptitudes/EmplacementCape.png"],
      [ItemTypeBuild.EPAULETTES, "./aptitudes/EmplacementEpaulettes.png"],
      [ItemTypeBuild.CEINTURE, "./aptitudes/EmplacementCeinture.png"],
      [ItemTypeBuild.SECONDE_MAIN, "./aptitudes/EmplacementSecondeMain.png"],
      [ItemTypeBuild.PREMIERE_MAIN, "./aptitudes/EmplacementPremièreMain.png"],
      [ItemTypeBuild.ACCESSOIRES, "./aptitudes/EmplacementEmblème.png"],
      [ItemTypeBuild.FAMILIER, "./aptitudes/EmplacementFamilier.png"],
    ]);
    const items = new Map<ItemTypeBuild, Item | null>([
      [ItemTypeBuild.CASQUE, null],
      [ItemTypeBuild.AMULETTE, null],
      [ItemTypeBuild.PLASTRON, null],
      [ItemTypeBuild.ANNEAU_DROITE, null],
      [ItemTypeBuild.ANNEAU_GAUCHE, null],
      [ItemTypeBuild.BOTTES, null],
      [ItemTypeBuild.CAPE, null],
      [ItemTypeBuild.EPAULETTES, null],
      [ItemTypeBuild.CEINTURE, null],
      [ItemTypeBuild.SECONDE_MAIN, null],
      [ItemTypeBuild.PREMIERE_MAIN, null],
      [ItemTypeBuild.ACCESSOIRES, null],
      [ItemTypeBuild.FAMILIER, null],
    ]);

    const state = { firstAnneau: true };
    this.historic().split(",").forEach(idItem => {
      const item = this.itemService.getItem(parseInt(idItem));
      if (item) {
        this.getItemType(item, state).forEach(type => {
          images.set(type, this.imageService.getItemUrl(item.idImage));
          items.set(type, item);
        });
      }
    });

    return { images, items };
  });

  protected readonly mapImageItems = computed(() => this.itemsState().images);
  protected readonly mapItems = computed(() => this.itemsState().items);

  private getItemType(item: Item, state: { firstAnneau: boolean }): ItemTypeBuild[] {
    const itemType = this.itemTypeServices.getItemType(item.itemTypeId);
    switch (itemType) {
      case ItemTypeEnum.CASQUE:
        return [ItemTypeBuild.CASQUE];
      case ItemTypeEnum.AMULETTE:
        return [ItemTypeBuild.AMULETTE];
      case ItemTypeEnum.PLASTRON:
        return [ItemTypeBuild.PLASTRON];
      case ItemTypeEnum.ANNEAU:
        if (state.firstAnneau) {
          state.firstAnneau = false;
          return [ItemTypeBuild.ANNEAU_DROITE];
        } else {
          return [ItemTypeBuild.ANNEAU_GAUCHE];
        }
      case ItemTypeEnum.BOTTES:
        return [ItemTypeBuild.BOTTES];
      case ItemTypeEnum.CAPE:
        return [ItemTypeBuild.CAPE];
      case ItemTypeEnum.EPAULETTES:
        return [ItemTypeBuild.EPAULETTES];
      case ItemTypeEnum.CEINTURE:
        return [ItemTypeBuild.CEINTURE];
      case ItemTypeEnum.DEUX_MAINS:
        return [ItemTypeBuild.PREMIERE_MAIN, ItemTypeBuild.SECONDE_MAIN];
      case ItemTypeEnum.UNE_MAIN:
        return [ItemTypeBuild.PREMIERE_MAIN];
      case ItemTypeEnum.DAGUE:
      case ItemTypeEnum.BOUCLIER:
        return [ItemTypeBuild.SECONDE_MAIN];
      case ItemTypeEnum.ACCESSOIRES:
        return [ItemTypeBuild.ACCESSOIRES];
      case ItemTypeEnum.FAMILIER:
        return [ItemTypeBuild.FAMILIER];
      default:
        return [];
    }
  }



  protected getItemName(itemTypeBuild: ItemTypeBuild): string {
    const item = this.mapItems().get(itemTypeBuild);
    return item ? item.title[this.translateService.currentLang as keyof typeof item.title] : "";
  }

  protected applyHistoric(): void {
    this.itemHistoricsService.applyHistoric(this.historic());
  }

}
