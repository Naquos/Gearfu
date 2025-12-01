import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortsRouterComponent } from './sorts-router.component';

describe('SortsRouterComponent', () => {
  let component: SortsRouterComponent;
  let fixture: ComponentFixture<SortsRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortsRouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortsRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
