import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoConfirmacionComponent } from './correo-confirmacion.component';

describe('CorreoConfirmacionComponent', () => {
  let component: CorreoConfirmacionComponent;
  let fixture: ComponentFixture<CorreoConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorreoConfirmacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorreoConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
