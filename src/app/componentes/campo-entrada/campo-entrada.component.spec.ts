import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoEntradaComponent } from './campo-entrada.component';

describe('CampoEntradaComponent', () => {
  let component: CampoEntradaComponent;
  let fixture: ComponentFixture<CampoEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampoEntradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
