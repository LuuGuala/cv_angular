import { Component } from '@angular/core';
import { habilidadesService } from '../services/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {
  habilidades:any;
  constructor(private habilidadesService:habilidadesService){
    this.habilidadesService.obtenerHabilidades().subscribe({
      next: (data) =>  {
         this.habilidades=data["habilidades"] ;
         console.log(this.habilidades);
      },
      error: (error) =>{
        alert("Error al obtener las habilidades" );
        console.error(error);
      }
    })
  }
}
