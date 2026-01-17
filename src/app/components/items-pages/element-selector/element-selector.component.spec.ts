import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSelectorComponent } from './element-selector.component';

describe('MaitriseSelectorComponent', () => {
  let component: ElementSelectorComponent;
  let fixture: ComponentFixture<ElementSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
