import { Component, inject, input, output } from '@angular/core';
import { ColorRarityService } from '../../../services/colorRarityService';
import { ItemTypeFormServices } from '../../../services/form/itemTypeFormServices';
import { ItemChooseService } from '../../../services/itemChooseService';
import { ImageService } from '../../../services/imageService';
import { ItemTypeEnum } from '../../../models/enum/itemTypeEnum';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { filter, map, switchMap, tap } from 'rxjs';
import { ImageFallbackDirective } from '../../../directives/imageFallback.directive';

@Component({
  selector: 'app-image-item',
  imports: [ImageFallbackDirective],
  templateUrl: './image-item.component.html',
  styleUrl: './image-item.component.scss'
})
export class ImageItemComponent {
  protected readonly colorRarityService = inject(ColorRarityService);
  protected readonly itemChooseService = inject(ItemChooseService);
  protected readonly itemTypeFormServices = inject(ItemTypeFormServices);
  protected readonly imageService = inject(ImageService);

  
  public readonly backgroundItemType = input.required<string>();
  public readonly itemType = input<ItemTypeEnum>();
  public readonly indexItem = input<number>(0);
  public readonly level = output<number>();

  protected item = toSignal(toObservable(this.itemType).pipe(
    filter(x => x !== undefined),
    switchMap(x => this.itemChooseService.getObsItem(x)),
    map(x => x[this.indexItem()]),
    tap(x => this.level.emit(x?.level ?? 999))
  ), {initialValue: undefined}); 
  

}
