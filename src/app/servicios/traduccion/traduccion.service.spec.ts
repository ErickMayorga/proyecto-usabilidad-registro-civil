import {async, TestBed} from '@angular/core/testing';

import { TraduccionService } from './traduccion.service';

describe('TraduccionService', () => {
  let translate: TraduccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    translate = TestBed.inject(TraduccionService);
  });

  it('should be created', () => {
    expect(translate).toBeTruthy();
  });

});
