import { Component } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  //creando un arrglo de la clase curso
  cursos: Curso[] = [
    { id: '1', nombre: 'html 5', creditos: 4 },
    { id: '2', nombre: 'javascript', creditos: 4 },
    { id: '3', nombre: 'css', creditos: 4 },
    { id: '4', nombre: 'Java', creditos: 5 }
  ];
}
