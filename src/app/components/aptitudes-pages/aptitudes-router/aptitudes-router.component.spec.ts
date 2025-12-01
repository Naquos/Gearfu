import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudesRouterComponent } from './aptitudes-router.component';

describe('AptitudesRouterComponent', () => {
  let component: AptitudesRouterComponent;
  let fixture: ComponentFixture<AptitudesRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AptitudesRouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AptitudesRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
