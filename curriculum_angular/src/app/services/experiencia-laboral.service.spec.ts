import { TestBed } from '@angular/core/testing';
import { experienciaLaboralService } from './experiencia-laboral.service';

describe('ExperienciaLaboralService', () => {
  let service: experienciaLaboralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(experienciaLaboralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
