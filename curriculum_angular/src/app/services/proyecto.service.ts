import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class proyectoService {

  constructor(private http: HttpClient) { }
  obtenerProyecto(): Observable<any> 
  {
    return this.http.get("./assets/data.json");
  }

}
