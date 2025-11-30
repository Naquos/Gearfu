import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesTooltipComponent } from './classes-tooltip.component';

describe('ClassesTooltipComponent', () => {
  let component: ClassesTooltipComponent;
  let fixture: ComponentFixture<ClassesTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesTooltipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
