import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantementRouterComponent } from './enchantement-router.component';

describe('EnchantementRouterComponent', () => {
  let component: EnchantementRouterComponent;
  let fixture: ComponentFixture<EnchantementRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnchantementRouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnchantementRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
