import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EstudiosAcademicosService } from '../services/estudios-academicos.service';

@Component({
  selector: 'app-estudios-academicos',
  templateUrl: './estudios-academicos.component.html',
  styleUrls: ['./estudios-academicos.component.css']
})
export class EstudiosAcademicosComponent {
  estudiosAcademicos:any;
  constructor(private estudiosAcademicosService:EstudiosAcademicosService){
    this.estudiosAcademicosService.obtenerEstudiosAcademicos().subscribe({
      next: (data) =>  {
         this.estudiosAcademicos=data["estudios-academicos"] ;
         console.log(this.estudiosAcademicos );
      },
      error: (error) =>{
        alert("Error al obtener los datos personales" );
        console.error(error);
      }
    })
  }

}
