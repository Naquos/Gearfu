import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputResumeAptitudesComponent } from './input-resume-aptitudes.component';

describe('InputResumeAptitudesComponent', () => {
  let component: InputResumeAptitudesComponent;
  let fixture: ComponentFixture<InputResumeAptitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputResumeAptitudesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputResumeAptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
