function validar(){
    var nombre, apellido, correo, telefono, expresion, lenguaje, acepto, sexo, comentarios;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    expresion = /\w+@\w+\.+[a-z]/;
    lenguaje = document.getElementById("lenguaje").selectedIndex;



    if(nombre === "" || apellido === "" || correo === "" || telefono === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.length>30){
        alert("El nombre es muy largo");
        return false;
    }
    else if(apellido.length>80){
        alert("El apellido es muy largo");
        return false;
    }
    else if(correo.length>100){
        alert("El correo es muy largo");
        return false;
    }
    else if(telefono.length>10){
        alert("El telefono es muy largo");
        return false;
    }
    else if(isNaN(telefono)){
        alert("El telefono ingresado no es un numero");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("El correo no es valido");
        return false;
    }

    if(lenguaje === 0){
        document.getElementById("lblLenguaje").innerHTML="Debe seleccionar un lenguaje";
        //alert("Debe seleccionar un lenguaje");
        return false;
    }

    acepto = document.getElementById("acepto").value;
    sexo = document.getElementById("sexo").value;
    comentarios = document.getElementById("comentarios").value;

}

function agregarTexto(combo){
    var indice = combo.selectedIndex;
    document.getElementById("lblLenguaje").innerHTML="elemento seleccionado :"+combo[indice].text;
 
}

function f01(caja){
    caja.style="background-color: yellow";
}

function f02(caja){
    caja.style="background-color: white";
}

function insertarRegistro(){
    var nombre = document.getElementById("uname").value;
    var correo = document.getElementById("email").value;
    var fecha = document.getElementById("fechaCampo").value;
    var tabla = document.getElementById("tablaDatos");
    
    var fila = tabla.insertRow();

    var cellNombre = fila.insertCell();
    cellNombre.innerHTML = nombre;
    var cellLastName = fila.insertCell();
    cellLastName.innerHTML = ""
    var cellCorreo = fila.insertCell();
    cellCorreo.innerHTML = correo;
    var cellFecha = fila.insertCell();
    cellFecha.innerHTML = fecha;
}