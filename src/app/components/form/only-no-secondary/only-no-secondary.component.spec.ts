import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyNoSecondaryComponent } from './only-no-secondary.component';

describe('OnlyNoSecondaryComponent', () => {
  let component: OnlyNoSecondaryComponent;
  let fixture: ComponentFixture<OnlyNoSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlyNoSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyNoSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
