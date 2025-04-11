import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMaitrisesComponent } from './filter-maitrises.component';

describe('FilterMaitrisesComponent', () => {
  let component: FilterMaitrisesComponent;
  let fixture: ComponentFixture<FilterMaitrisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterMaitrisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterMaitrisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
