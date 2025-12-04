import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantementComponent } from './enchantement.component';

describe('EnchantementComponent', () => {
  let component: EnchantementComponent;
  let fixture: ComponentFixture<EnchantementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnchantementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnchantementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
