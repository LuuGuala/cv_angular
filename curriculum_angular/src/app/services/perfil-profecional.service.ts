import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class perfilProfesionalService {

  constructor(private http: HttpClient) { }
  obtenerPerfilProfesional(): Observable<any> 
  {
    return this.http.get("./assets/data.json");
  }

}
