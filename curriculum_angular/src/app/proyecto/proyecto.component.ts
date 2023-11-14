import { Component } from '@angular/core';
import { proyectoService } from '../services/proyecto.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  proyecto:any;
  constructor(private proyectoService:proyectoService){
    this.proyectoService.obtenerProyecto().subscribe({
      next: (data) =>  {
         this.proyecto=data["proyecto"] ;
         console.log(this.proyectoService);
      },
      error: (error) => {
        alert("Error al obtener los proyectos" );
        console.error(error);
      }
    })
  }
}
