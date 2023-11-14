import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class experienciaLaboralService {

  constructor(private http: HttpClient) { }
  obtenerExperienciaLaboral(): Observable<any> 
  {
    return this.http.get("./assets/data.json");
  }

}
