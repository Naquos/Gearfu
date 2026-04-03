import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitulatifAptitudesComponent } from './recapitulatif-aptitudes.component';

describe('RecapitulatifAptitudesComponent', () => {
  let component: RecapitulatifAptitudesComponent;
  let fixture: ComponentFixture<RecapitulatifAptitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecapitulatifAptitudesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecapitulatifAptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
