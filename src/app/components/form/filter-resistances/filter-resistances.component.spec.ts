import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterResistancesComponent } from './filter-resistances.component';

describe('FilterResistancesComponent', () => {
  let component: FilterResistancesComponent;
  let fixture: ComponentFixture<FilterResistancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterResistancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterResistancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
