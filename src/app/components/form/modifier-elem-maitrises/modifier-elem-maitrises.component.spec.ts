import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierElemMaitrisesComponent } from './modifier-elem-maitrises.component';

describe('ModifierElemMaitrisesComponent', () => {
  let component: ModifierElemMaitrisesComponent;
  let fixture: ComponentFixture<ModifierElemMaitrisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierElemMaitrisesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierElemMaitrisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
