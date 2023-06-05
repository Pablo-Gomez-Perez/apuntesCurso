import { Component } from '@angular/core';
import { Alumno } from './alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  datos = [
    new Alumno(1, 'Juan', 'Perez', 25),
    new Alumno(2, 'Juan', 'Perez', 25),
    new Alumno(3, 'Juan', 'Perez', 25),
    new Alumno(4, 'Juan', 'Perez', 25),
  ]
}

/**
 * show the data contents of an array of alumnos and print them in a table
 *
 */
