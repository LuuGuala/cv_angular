import { Component } from '@angular/core';
import { experienciaLaboralService } from '../services/experiencia-laboral.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent {
  experienciaLaboral:any;
  constructor(private experienciaLaboralService:experienciaLaboralService){
    this.experienciaLaboralService.obtenerExperienciaLaboral().subscribe({
      next: (data) =>  {
         this.experienciaLaboral=data["experiencia-laboral"] ;
         console.log(this.experienciaLaboral);
      },
      error: (error) =>{
        alert("Error al obtener los datos personales" );
        console.error(error);
      }
    })
  }
}
