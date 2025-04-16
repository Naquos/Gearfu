import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportBuildComponent } from './import-build.component';

describe('ImportBuildComponent', () => {
  let component: ImportBuildComponent;
  let fixture: ComponentFixture<ImportBuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportBuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
