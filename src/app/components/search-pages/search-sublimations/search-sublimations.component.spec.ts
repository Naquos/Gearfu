import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSublimationsComponent } from './search-sublimations.component';

describe('SearchSublimationsComponent', () => {
  let component: SearchSublimationsComponent;
  let fixture: ComponentFixture<SearchSublimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchSublimationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchSublimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
