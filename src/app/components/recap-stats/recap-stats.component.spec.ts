import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapStatsComponent } from './recap-stats.component';

describe('RecapStatsComponent', () => {
  let component: RecapStatsComponent;
  let fixture: ComponentFixture<RecapStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecapStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecapStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
