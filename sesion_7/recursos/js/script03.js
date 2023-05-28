var mnombre = ["pepito", "gardfield", "comotu"];
var medad = [4, 1, 1];
mnombre.push("pulga");
medad.push(2);

var mascotas = [
        {
            nombre: mnombre[0],
            edad: medad[0]
        },
        {
            nombre: mnombre[1],
            edad: medad[1]
        },
        {
            nombre: mnombre[2],
            edad: medad[2]
        },
        {
            nombre: mnombre[3],
            edad: medad[3]
        }
]

function mostrarMascotas() {
    var i = 1;
    for (var key in mascotas) {
        console.log("Mascota " + i + ": " + mascotas[key].nombre + " tiene " + mascotas[key].edad + " años.");
        i++;
    }
}