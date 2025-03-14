import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemChooseComponent } from './item-choose.component';

describe('ItemChooseComponent', () => {
  let component: ItemChooseComponent;
  let fixture: ComponentFixture<ItemChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemChooseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
