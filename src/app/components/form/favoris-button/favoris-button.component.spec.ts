import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisButtonComponent } from './favoris-button.component';

describe('FavorisButtonComponent', () => {
  let component: FavorisButtonComponent;
  let fixture: ComponentFixture<FavorisButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavorisButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavorisButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
