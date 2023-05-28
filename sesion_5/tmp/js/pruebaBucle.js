const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

function diasSemana(){
    for(let x in dias){
        console.log(dias[x]);
    }
}

var texto = "hola mundo en cJava";

function separar() {
    var miArray = texto.split(" ");
    console.log(miArray);
}

function fechas() {
    //usando fechas 
    var fecha = new Date();
    console.log(fecha);
    console.log(fecha.getDate());
    console.log(fecha.getDay());
    console.log(fecha.getFullYear());
    console.log(fecha.getHours());
    console.log(fecha.getMinutes());
    console.log(fecha.getMonth());
    console.log(fecha.getSeconds());
    console.log(fecha.getTime());
    console.log(fecha.getTimezoneOffset());
    console.log(fecha.getUTCDate());
    console.log(fecha.getUTCDay());
    console.log(fecha.getUTCFullYear());
}

function matematicas(x) {
    //usando Math
    x = parseFloat(prompt("ingrese una cantidad"));
    console.log("valor ingresado para el calculo [" + x + "]");
    console.log(Math.PI);
    console.log(Math.abs(x));  
    console.log(Math.ceil(x));
    console.log(Math.floor(x));
    console.log(Math.pow(x,2));
    console.log(Math.random());
    console.log(Math.round(x));
    console.log(Math.sqrt(x));
}