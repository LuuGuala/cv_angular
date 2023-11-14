import { TestBed } from '@angular/core/testing';
import { habilidadesService } from './habilidades.service';

describe('HabilidadesService', () => {
  let service: habilidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(habilidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
