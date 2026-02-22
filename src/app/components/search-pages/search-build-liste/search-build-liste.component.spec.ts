import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBuildListeComponent } from './search-build-liste.component';

describe('SearchBuildListeComponent', () => {
  let component: SearchBuildListeComponent;
  let fixture: ComponentFixture<SearchBuildListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBuildListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBuildListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
