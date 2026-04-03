import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitulatifComponent } from './recapitulatif.component';

describe('RecapitulatifComponent', () => {
  let component: RecapitulatifComponent;
  let fixture: ComponentFixture<RecapitulatifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecapitulatifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecapitulatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
