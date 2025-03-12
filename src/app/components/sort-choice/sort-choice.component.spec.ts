import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortChoiceComponent } from './sort-choice.component';

describe('SortChoiceComponent', () => {
  let component: SortChoiceComponent;
  let fixture: ComponentFixture<SortChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortChoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
