import { TestBed } from '@angular/core/testing';

import { CampoEntradaService } from './campo-entrada.service';

describe('CampoEntradaService', () => {
  let service: CampoEntradaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampoEntradaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
