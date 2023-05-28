
/*
mostrar los datos de un alumno.
para describir al alumno tienes: dni, nombres, apellidos, nota1, nota2, nota3, nota4, promedio,
direccion, correo, telefono, cursos[1].
un curso tiene: id, nombre, duracion(horas).
se debe tener una funcion que  calcule y retorne el 
promedio.
un alumno solo lleva un curso

*/

var pdni = prompt("ingrese dni");
var pnombre = prompt("ingrese nombre");
var papellido = prompt("ingrese apellido");
var pnota1 = prompt("ingrese nota 1");
var pnota2 = prompt("ingrese nota 2");
var pnota3 = prompt("ingrese nota 3");
var pnota4 = prompt("ingrese nota 4");
var pdireccion = prompt("ingrese la direccion");
var pcorreo = prompt("ingrese el correo");
var ptelefono = prompt("ingrese telefono");
var pcurso = prompt("ingrese curso");
var cursos = [];
var continuar = true;

while (continuar) {
    var idCurso = prompt("Ingrese el id del curso:");
    var nombre = prompt("Ingrese el nombre del curso:");
    var duracion = prompt("Ingrese la duracion del curso:");

    var curso = {
        id : idCurso,
        nom : nombre,
        dur : duracion
    };

    cursos.push(curso);

    var respuesta = prompt("¿Desea agregar otro curso? (Sí/No)");

    if (respuesta.toLowerCase() !== "sí") {
        continuar = false;
    }
}

var Alumno = {
    dni: pdni,
    nombre: pnombre,
    apellido: papellido,
    nota1: pnota1,
    nota2: pnota2,
    nota3: pnota3,
    nota4: pnota4,
    direccion: pdireccion,
    correo: pcorreo,
    telefono: ptelefono,
    cursos : cursos,
    promedio : function () {
        var sumaNotas = parseFloat(this.nota1) + parseFloat(this.nota2) + parseFloat(this.nota3) + parseFloat(this.nota4);
        var promedio = parseFloat(sumaNotas) / 4;
        return promedio;
    }
}

console.log(Alumno.dni);
console.log(Alumno.nombre);
console.log(Alumno.apellido);
console.log(Alumno.nota1);
console.log(Alumno.nota2);
console.log(Alumno.nota3);
console.log(Alumno.nota4);
console.log(Alumno.promedio());
console.log(Alumno.correo);
console.log(Alumno.telefono);
console.log(Alumno.curso);