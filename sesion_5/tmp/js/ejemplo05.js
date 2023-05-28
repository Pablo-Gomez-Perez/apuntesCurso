
function f01() {
    var txtNombre = document.getElementById("nombre").value;
    document.getElementById("nombre").style.backgroundColor = "white";
    if (txtNombre.length > 0) {
        //alert("Hola "+txtNombre);
        document.getElementById("salida").innerHTML = "valicacion: hola " + txtNombre;
    } else {
        //alert("No has escrito tu nombre");
        document.getElementById("salida").innerHTML = "No has escrito tu nombre";
    }
}

function f02() {
    var txtedad = document.getElementById("edadMascota").value;
    if(txtedad > 15){
        document.getElementById("edadMascota").style.backgroundColor = "red";
        document.getElementById("salida").innerHTML = "La mascota no puede tener mas de 15";
    }else{
        document.getElementById("edadMascota").style.backgroundColor = "green";
    }
    
}


function f04() {
    var numEdad = document.getElementById("edad").value;
    if (isNaN(numEdad) || numEdad == "") {
        document.getElementById("salida").innerHTML = "Debes ingresar un numero.";
    } else {
        if (numEdad >= 0 && numEdad <= 100) {
            document.getElementById("salida").innerHTML = "Validacion: Edad ingresada: " + numEdad;
        } else {
            document.getElementById("salida").innerHTML = "Rango de edad no valido!";
        }
    }
}