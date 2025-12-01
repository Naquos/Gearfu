import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemRouterComponent } from '../../list-item-router/list-item-router.component';

describe('ListItemRouterComponent', () => {
  let component: ListItemRouterComponent;
  let fixture: ComponentFixture<ListItemRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListItemRouterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
