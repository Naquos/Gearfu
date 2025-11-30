import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAptitudesComponent } from './input-aptitudes.component';

describe('InputAptitudesComponent', () => {
  let component: InputAptitudesComponent;
  let fixture: ComponentFixture<InputAptitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputAptitudesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
