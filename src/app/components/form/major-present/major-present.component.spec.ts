import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorPresentComponent } from './major-present.component';

describe('MajorPresentComponent', () => {
  let component: MajorPresentComponent;
  let fixture: ComponentFixture<MajorPresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MajorPresentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajorPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
