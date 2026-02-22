import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPagesRouterComponent } from './search-pages-router.component';

describe('SearchPagesRouterComponent', () => {
  let component: SearchPagesRouterComponent;
  let fixture: ComponentFixture<SearchPagesRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPagesRouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPagesRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
