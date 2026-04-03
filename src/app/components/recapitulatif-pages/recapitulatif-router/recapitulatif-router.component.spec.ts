import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapitulatifRouterComponent } from './recapitulatif-router.component';

describe('RecapitulatifRouterComponent', () => {
  let component: RecapitulatifRouterComponent;
  let fixture: ComponentFixture<RecapitulatifRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecapitulatifRouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecapitulatifRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
