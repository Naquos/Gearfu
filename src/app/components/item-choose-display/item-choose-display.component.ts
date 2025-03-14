import { Component, input, OnInit } from '@angular/core';
import { ItemTypeEnum } from '../../models/itemTypeEnum';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { ColorRarityService } from '../../services/colorRarityService';
import { map, Observable } from 'rxjs';
import { ItemChooseService } from '../../services/itemChooseService';

@Component({
  selector: 'app-item-choose-display',
  imports: [CommonModule],
  templateUrl: './item-choose-display.component.html',
  styleUrl: './item-choose-display.component.scss'
})
export class ItemChooseDisplayComponent implements OnInit {
  public backgroundItemType = input.required<string>();
  public itemType = input.required<ItemTypeEnum>();
  public indexItem = input<number>(0);
  protected $item!: Observable<Item | undefined>;

  constructor(protected colorRarityService: ColorRarityService,
              private itemChooseService: ItemChooseService
  ) {
  }
  ngOnInit(): void {
    this.$item = this.itemChooseService.getObsItem(this.itemType()).pipe(map(x => x[this.indexItem()]));
  }
}
