function leerNombre(){
    var nombre = prompt("Ingrese su nombre");
    alert("El nombre es: " + nombre);
}

function x() {
    var edad = prompt("ingrese su edad");
    alert("la edad es: " + edad);

    if(edad <=18 ){
        alert("estas pollito");
    }else{
        alert("candidato para entrar en prision");
    }
}

function sumaDigitos() {
    var numeros = prompt("ingrese los numeros");
    var digito1 = parseInt(numeros[0]);
    var digito2 = parseInt(numeros[1]);
    var digito3 = parseInt(numeros[2]);
    var suma = digito1 + digito2 + digito3;
    alert("la suma es: " + suma);
}

function f1(){
    for (let i = 0; i < 10; i++) {
        var texto = document.getElementById("cab1").innerHTML;
        document.getElementById("cab1").innerHTML = i + ".- iteracion";
    }
}

