
function validarTxf(name){
    var txtField = document.getElementById(name).value;
    document.getElementById(name).style.backgroundColor = "white";
    if(txtField.length <= 0){
        document.getElementById(name).style.backgroundColor = "red";
        document.getElementById("salida").innerHTML = "no deje campos vacios";
    }
    if(txtField.length >= 30 ){
        document.getElementById(name).style.backgroundColor = "red";
        document.getElementById("salida").innerHTML = "no mas de 30 caracteres";
    }
}

function validarEdad(){
    var txtField = document.getElementById("edadMascota").value;
}

function onFocusTxf(name){
    document.getElementById(name).style.backgroundColor = "yellow";
}

function validar(){
    validarEdad();
    document.getElementById("salida").innerHTML = "enviado";
}