import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListItemComponent } from './search-list-item.component';

describe('SearchListItemComponent', () => {
  let component: SearchListItemComponent;
  let fixture: ComponentFixture<SearchListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
