import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortsComponent } from './sorts.component';

describe('SortsComponent', () => {
  let component: SortsComponent;
  let fixture: ComponentFixture<SortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
