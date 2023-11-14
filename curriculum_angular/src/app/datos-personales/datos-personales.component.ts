import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DatosPersonalesService } from '../services/datos-personales.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent {
  datosPersonales:any;
  constructor(private datosPersonalesService:DatosPersonalesService){
    this.datosPersonalesService.obtenerDatosPersonales().subscribe({
      next: (data) =>  {
         this.datosPersonales=data["datos-personales"] ;
         console.log(this.datosPersonales);
      },
      error: (error) =>{
        alert("Error al obtener los datos personales" );
        console.error(error);
      }
    })
  }
}
