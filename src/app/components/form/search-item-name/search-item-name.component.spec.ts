import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchItemNameComponent } from './search-item-name.component';

describe('SearchItemNameComponent', () => {
  let component: SearchItemNameComponent;
  let fixture: ComponentFixture<SearchItemNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchItemNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchItemNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
