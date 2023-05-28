function f01() {
    var d1 = prompt("Ingrese un número [d1]");
    var d2 = prompt("Ingrese un número [d2]");
    var d3 = 2;
    if(d1>d2) {
        console.log("d1 es mayor que d2");
    }else if(d1<d2){
        console.log("d1 es menor que d2");
    }else{
        console.log("d1 es igual que d2");
    }
}

function f02() {
    var d1 = prompt("Ingrese una edad [d1]");
    if(d1>=18 && d1<=65) {
        console.log("Es mayor de edad");
    }else if(d1<18){
        console.log("Es menor de edad");
    }else{
        console.log("Es jubilado");
    }
}
function f03() {

    var d1 = prompt("Ingrese una edad");
    console.log(d1)
    if(d1 > 0  && d1<100){
        if(d1>= 18 && d1<=65) {
            console.log("es mayor de edad");
        }else if(d1<18){
            console.log("Es menor de edad");
        }else{
            console.log("Es jubilado");
        }
    }
    else
    {console.log("Error de dato ");}
}
function f04() {
    var d1 = prompt("Ingrese una edad [d1]");
    //el carcater /\D/ testea que el caracter ingresado sea un digito
    while (d1 == null || /\D/.test(d1) || d1 == "") {
        d1 = prompt("Entre un número VÁLIDO: ");
    };

    if(d1>=18 && d1<=65) {
        console.log("Es mayor de edad");
    }else if(d1<18){
        console.log("Es menor de edad");
    }else{
        console.log("Es jubilado");
    }
}