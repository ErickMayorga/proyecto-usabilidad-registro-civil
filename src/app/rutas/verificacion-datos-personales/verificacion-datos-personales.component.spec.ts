import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionDatosPersonalesComponent } from './verificacion-datos-personales.component';

describe('VerificacionDatosPersonalesComponent', () => {
  let component: VerificacionDatosPersonalesComponent;
  let fixture: ComponentFixture<VerificacionDatosPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificacionDatosPersonalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificacionDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
