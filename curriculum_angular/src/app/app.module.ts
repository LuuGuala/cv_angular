import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilProfecionalComponent } from './perfil-profecional/perfil-profecional.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { EstudiosAcademicosComponent } from './estudios-academicos/estudios-academicos.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    PerfilProfecionalComponent,
    ExperienciaLaboralComponent,
    HabilidadesComponent,
    EstudiosAcademicosComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
