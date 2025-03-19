import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTooltipComponent } from './items-tooltip.component';

describe('ItemsTooltipComponent', () => {
  let component: ItemsTooltipComponent;
  let fixture: ComponentFixture<ItemsTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsTooltipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
