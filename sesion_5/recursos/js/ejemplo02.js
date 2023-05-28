function f01() {
    var d1 = 13;
    var d2 = 5;
    console.log(d1/d2);
    console.log(d1%d2);
}

function f02() {
    var d1 = 10;
    var d2 = d1++;
    var d3 = ++d1;
    console.log("se muestra " + d1);
    console.log("se muestra " + d2);//10 
    console.log("se muestra " + d3);//11   12s
}