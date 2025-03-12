import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCheckboxComponent } from './button-checkbox.component';

describe('ButtonCheckboxComponent', () => {
  let component: ButtonCheckboxComponent;
  let fixture: ComponentFixture<ButtonCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
