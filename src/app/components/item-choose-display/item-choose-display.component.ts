import { Component, input, OnInit } from '@angular/core';
import { ItemTypeEnum } from '../../models/itemTypeEnum';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';
import { ColorRarityService } from '../../services/colorRarityService';
import { map, Observable } from 'rxjs';
import { ItemChooseService } from '../../services/itemChooseService';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-item-choose-display',
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './item-choose-display.component.html',
  styleUrl: './item-choose-display.component.scss'
})
export class ItemChooseDisplayComponent implements OnInit {
  public backgroundItemType = input.required<string>();
  public itemType = input.required<ItemTypeEnum>();
  public indexItem = input<number>(0);
  protected $item!: Observable<Item | undefined>;

  constructor(protected colorRarityService: ColorRarityService,
              protected itemChooseService: ItemChooseService
  ) {
  }
  ngOnInit(): void {
    this.$item = this.itemChooseService.getObsItem(this.itemType()).pipe(map(x => x[this.indexItem()]));
  }
}
