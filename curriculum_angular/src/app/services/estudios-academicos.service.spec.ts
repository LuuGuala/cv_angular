import { TestBed } from '@angular/core/testing';
import { EstudiosAcademicosService } from './estudios-academicos.service';

describe('EstudiosAcademicosService', () => {
  let service: EstudiosAcademicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudiosAcademicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
