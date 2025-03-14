import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChooseDisplayComponent } from './item-choose-display.component';

describe('ItemChooseDisplayComponent', () => {
  let component: ItemChooseDisplayComponent;
  let fixture: ComponentFixture<ItemChooseDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemChooseDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemChooseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
