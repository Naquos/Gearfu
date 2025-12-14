import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaitriseSelectorComponent } from './maitrise-selector.component';

describe('MaitriseSelectorComponent', () => {
  let component: MaitriseSelectorComponent;
  let fixture: ComponentFixture<MaitriseSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaitriseSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaitriseSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
