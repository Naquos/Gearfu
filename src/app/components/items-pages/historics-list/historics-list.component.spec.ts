import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricsListComponent } from './historics-list.component';

describe('HistoricsListComponent', () => {
  let component: HistoricsListComponent;
  let fixture: ComponentFixture<HistoricsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
