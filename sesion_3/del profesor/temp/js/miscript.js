
var edad = 20;//variable global
    function leerNombre(){
        //vairable local
        var nombre = prompt("Ingrese su nombre");
        alert("El nombre es: " + nombre);
    }
    function leerEdad(){ 
        edad = prompt("Ingrese su edad");
        alert("La edad es: " + edad);
        if(edad >= 18){
            alert("Es mayor de edad");
        }else{
            alert("Es menor de edad");
        }
        
    }
    
   
    
    //crear una funcion que lea un numero de tres digitos y
    //muestre la suma de sus digitos
    function sumaDigitos(){
        var numero = prompt("Ingrese un numero de tres digitos");
        var digito1 = parseInt(numero[0]);
        var digito2 = parseInt(numero[1]);
        var digito3 = parseInt(numero[2]);
        var suma = digito1 + digito2 + digito3;
        alert("La suma de los digitos es: " + suma);
    }