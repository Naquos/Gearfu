import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAptitudesComponent } from './resume-aptitudes.component';

describe('ResumeAptitudesComponent', () => {
  let component: ResumeAptitudesComponent;
  let fixture: ComponentFixture<ResumeAptitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeAptitudesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeAptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
