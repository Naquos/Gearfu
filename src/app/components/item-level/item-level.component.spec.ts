import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLevelComponent } from './item-level.component';

describe('ItemLevelComponent', () => {
  let component: ItemLevelComponent;
  let fixture: ComponentFixture<ItemLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemLevelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
