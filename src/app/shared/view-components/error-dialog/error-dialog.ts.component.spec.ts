import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialogTsComponent } from './error-dialog.ts.component';

describe('ErrorDialogTsComponent', () => {
  let component: ErrorDialogTsComponent;
  let fixture: ComponentFixture<ErrorDialogTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorDialogTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorDialogTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
