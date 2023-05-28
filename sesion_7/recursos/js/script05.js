function convertirJsonAObjeto(){
    var json = '{"nombre":"Juan", "apellido":"Perez", "edad":25}';
    var objeto = JSON.parse(json);
    console.log(objeto.nombre);
    console.log(objeto.apellido);
    console.log(objeto.edad);
}
function convertirObjetoAJson(){
    var objeto = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 25
    };
    var json = JSON.stringify(objeto);
    console.log(json);
}