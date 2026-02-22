import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSearchBuildComponent } from './filter-search-build.component';

describe('FilterSearchBuildComponent', () => {
  let component: FilterSearchBuildComponent;
  let fixture: ComponentFixture<FilterSearchBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSearchBuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSearchBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
