import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos/cursos.component';
import { AlumnosComponent } from './alumnos/alumnos.component';



@NgModule({
  declarations: [
    CursosComponent//,
    //AlumnosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent//,
    //AlumnosComponent
  ]
})
export class Modulo1Module { }
