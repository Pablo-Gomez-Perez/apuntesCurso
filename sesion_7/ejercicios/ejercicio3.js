/*
convertir el objeto alumno del ejercicio en un objeto JSON y mostrarlo en consola.

*/


function agregarCurso() {
    var nuevoElemento = document.getElementById('txtNombreCurso').value;
    var miSelect = document.getElementById('cmbCurso');

    var opcion = document.createElement('option');
    opcion.text = nuevoElemento;
    opcion.value = nuevoElemento;

    miSelect.add(opcion);
}

var curso = {
    id: idCurso,
    nom: nombre,
    dur: duracion
};

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
    cursos: curso,
    promedio: function () {
        var sumaNotas = parseFloat(this.nota1) + parseFloat(this.nota2) + parseFloat(this.nota3) + parseFloat(this.nota4);
        var promedio = parseFloat(sumaNotas) / 4;
        return promedio;
    }
}



function insertarDatos() {

    var pdni = document.getElementById("txtDni").value
    var pnombre = document.getElementById("txtNombre").value
    var papellido = document.getElementById("txtApellido").value
    var pnota1 = document.getElementById("txtNota1").value
    var pnota2 = document.getElementById("txtNota2").value
    var pnota3 = document.getElementById("txtNota3").value
    var pnota4 = document.getElementById("txtNota4").value
    var pdireccion = document.getElementById("txtDireccion").value
    var pcorreo = document.getElementById("txtTelefono").value
    var ptelefono = document.getElementById("txtDni").value    

    var curso = {
        id: idCurso,
        nom: nombre,
        dur: duracion
    };

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
        cursos: curso,
        promedio: function () {
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
    console.log(Alumno.cursos);

    var tabla = document.getElementById("tablaAlumno");
    var fila = tabla.insertRow();

    var d_dni = fila.insertCell();
    var c_nombre = fila.insertCell();
    var c_apellido = fila.insertCell();
    var c_nota1 = fila.insertCell();
    var c_nota2 = fila.insertCell();
    var c_nota3 = fila.insertCell();
    var c_nota4 = fila.insertCell();
    var c_promedio = fila.insertCell();
    var c_direccion = fila.insertCell();
    var c_correo = fila.insertCell();
    var c_telefono = fila.insertCell();

    d_dni.innerHTML = Alumno.dni;
    c_nombre.innerHTML = Alumno.nombre;
    c_apellido.innerHTML = Alumno.apellido;
    c_nota1.innerHTML = Alumno.nota1;
    c_nota2.innerHTML = Alumno.nota2;
    c_nota3.innerHTML = Alumno.nota3;
    c_nota4.innerHTML = Alumno.nota4;
    c_promedio.innerHTML = Alumno.promedio();
    c_direccion.innerHTML = Alumno.direccion;
    c_correo.innerHTML = Alumno.correo;
    c_telefono.innerHTML = Alumno.telefono;

}



//con este método se convierte el objeto a un json
var AlumnoJson = JSON.stringify(Alumno);
console.log(AlumnoJson);