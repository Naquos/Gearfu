import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListSublimationComponent } from './search-list-sublimation.component';

describe('SearchListSublimationComponent', () => {
  let component: SearchListSublimationComponent;
  let fixture: ComponentFixture<SearchListSublimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchListSublimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchListSublimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
