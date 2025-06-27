import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMecanismComponent } from './modifier-mecanism.component';

describe('ModifierMecanismComponent', () => {
  let component: ModifierMecanismComponent;
  let fixture: ComponentFixture<ModifierMecanismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierMecanismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierMecanismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
