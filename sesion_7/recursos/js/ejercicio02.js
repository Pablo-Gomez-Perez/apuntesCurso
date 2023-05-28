
function mostrarDatos(){
    var p_nombre = document.getElementById("txtNombre").value;
    var p_apellido = document.getElementById("txtApellido").value;
    var p_edad = document.getElementById("txtApellido").value;

    var tabla = document.getElementById('cuerpoTabla');

    var Persona = {
        nombre : p_nombre,
        apellido : p_apellido,
        edad : p_edad
    }

    var tabla = document.getElementById('cuerpoTabla');
    var fila = tabla.insetRow();

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = Persona.nombre;

    var celdaApellido = fila.insertCell();
    celdaApellido.innerHTML = Persona.apellido;

    var celdaEdad = fila.insertCell();
    celdaEdad.innerHTML = Persona.edad;
}