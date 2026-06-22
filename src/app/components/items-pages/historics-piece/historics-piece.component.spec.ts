import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricsPieceComponent } from './historics-piece.component';

describe('HistoricsPieceComponent', () => {
  let component: HistoricsPieceComponent;
  let fixture: ComponentFixture<HistoricsPieceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricsPieceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricsPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
