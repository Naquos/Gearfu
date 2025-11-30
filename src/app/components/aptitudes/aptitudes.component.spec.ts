import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudesComponent } from './aptitudes.component';

describe('AptitudesComponent', () => {
  let component: AptitudesComponent;
  let fixture: ComponentFixture<AptitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AptitudesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
