import { TestBed } from '@angular/core/testing';
import { perfilProfesionalService } from './perfil-profecional.service';


describe('PerfilProfecionalService', () => {
  let service: perfilProfesionalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(perfilProfesionalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
