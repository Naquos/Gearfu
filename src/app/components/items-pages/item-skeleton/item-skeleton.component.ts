import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-item-skeleton',
  standalone: true,
  templateUrl: './item-skeleton.component.html',
  styleUrl: './item-skeleton.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemSkeletonComponent { }