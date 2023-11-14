import { TestBed } from '@angular/core/testing';
import { proyectoService } from './proyecto.service';

describe('ProyectoService', () => {
  let service: proyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(proyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
