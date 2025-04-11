import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTypesComponent } from './item-types.component';

describe('ItemTypesComponent', () => {
  let component: ItemTypesComponent;
  let fixture: ComponentFixture<ItemTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
