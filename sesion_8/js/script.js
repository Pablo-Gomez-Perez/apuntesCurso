

var mascotasArray = [];
mascotasArray.length = 0;

function agregarMascota() {

    var mascotaId = document.getElementById("mascotaId").value;
    var mascotaNombre = document.getElementById("mascotaNombre").value;
    var mascotaRaza = document.getElementById("mascotaRaza").value;
    var mascotaEdad = document.getElementById("mascotaEdad").value;

    var mascota = {
        id: mascotaId,
        nombre: mascotaNombre,
        raza: mascotaRaza,
        edad: mascotaEdad
    }

    mascotasArray.push(mascota);

    var tabla = document.getElementById("tablaMascotas").getElementsByTagName("tbody")[0];
    var fila = tabla.insertRow();

    var celdaId = fila.insertCell();
    celdaId.innerHTML = mascotaId;

    var celdaNombre = fila.insertCell();
    celdaNombre.innerHTML = mascotaNombre;

    var celdaRaza = fila.insertCell();
    celdaRaza.innerHTML = mascotaRaza;

    var celdaEdad = fila.insertCell();
    celdaEdad.innerHTML = mascotaEdad;


}

function enviarDatos() {
    var clienteId = document.getElementById("clienteId").value;
    var clienteNombre = document.getElementById("clienteNombre").value;
    var clienteCorreo = document.getElementById("clienteCorreo").value;
    var clienteTelefono = document.getElementById("clienteTelefono").value;

    var Cliente = {
        id: clienteId,
        nombre: clienteNombre,
        correo: clienteCorreo,
        telefono: clienteTelefono,
        l_mascotas: mascotasArray
    }

    var clienteJson = JSON.stringify(Cliente);
    console.log(clienteJson);

    alert("Cliente registrado");
}