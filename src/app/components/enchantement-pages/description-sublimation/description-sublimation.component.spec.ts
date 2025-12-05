import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionSublimationComponent } from './description-sublimation.component';

describe('DescriptionSubliComponent', () => {
  let component: DescriptionSublimationComponent;
  let fixture: ComponentFixture<DescriptionSublimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionSublimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionSublimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
