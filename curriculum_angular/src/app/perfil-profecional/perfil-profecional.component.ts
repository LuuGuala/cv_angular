import { Component } from '@angular/core';
import { perfilProfesionalService } from '../services/perfil-profecional.service';


@Component({
  selector: 'app-perfil-profecional',
  templateUrl: './perfil-profecional.component.html',
  styleUrls: ['./perfil-profecional.component.css']
})
export class PerfilProfecionalComponent {
  perfilProfecional:any;
  constructor(private perfilProfecionalService:perfilProfesionalService){
    this.perfilProfecionalService.obtenerPerfilProfesional().subscribe({
      next: (data) =>  {
         this.perfilProfecional=data["perfil-profesional"] ;
         console.log(this.perfilProfecionalService);
      },
      error: (error) =>{
        alert("Error al obtener el perfil profesional");
        console.error(error);
      }
    })
}
}
