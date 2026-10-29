import { TestBed } from '@angular/core/testing';
import { GastosDatos } from './gastos-datos';

describe('GastosDatos', () => {
  let service: GastosDatos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GastosDatos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
