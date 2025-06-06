import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyNoElemComponent } from './only-no-elem.component';

describe('OnlyNoSecondaryComponent', () => {
  let component: OnlyNoElemComponent;
  let fixture: ComponentFixture<OnlyNoElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlyNoElemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyNoElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
