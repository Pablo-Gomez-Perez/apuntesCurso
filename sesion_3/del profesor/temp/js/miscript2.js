function f1() {
    for(var i=1; i<=10; i++){
        var texto= document.getElementById("cab1").innerHTML;
        document.getElementById("cab1").innerHTML = texto+","+i;
    }
   
}