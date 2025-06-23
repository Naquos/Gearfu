import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseButtonComponent } from './reverse-button.component';

describe('ReverseButtonComponent', () => {
  let component: ReverseButtonComponent;
  let fixture: ComponentFixture<ReverseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReverseButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
