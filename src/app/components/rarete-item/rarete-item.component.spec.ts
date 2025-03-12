import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RareteItemComponent } from './rarete-item.component';

describe('RareteItemComponent', () => {
  let component: RareteItemComponent;
  let fixture: ComponentFixture<RareteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RareteItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RareteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
