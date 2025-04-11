import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftableChoiceComponent } from './craftable-choice.component';

describe('CraftableChoiceComponent', () => {
  let component: CraftableChoiceComponent;
  let fixture: ComponentFixture<CraftableChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraftableChoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftableChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
