
function f01(){
    var edades = [10,20,30,40,50,60,70,80,90,100];
    for(var i=0;i<edades.length;i++){
        console.log(edades[i]);
    }
    console.log("Fin del ciclo");
    for(edad in edades){
        console.log(edad);
    }
}
function f02(){
    for(var i=5, j=10; i<j; i++, j--){
        console.log(i,j);
    }
}
function f03(){
    var i=5;
    for(;;){
        console.log(i);
        i++;
        if(i>10){
            break;
        }
    }
    }