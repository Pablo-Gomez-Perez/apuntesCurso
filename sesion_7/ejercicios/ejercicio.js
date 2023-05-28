/**
 * desarrollar el codigo necesario para mostras los datos segun el siguiente caso:
 * se debe mostrar los datos de una automovil, para ellos se debe pedir los siguientes datos
 * marca, modelo, año, color, cantidad, cantidad de asientos, motor(serie,fabricante), 
 * tipo de caja de cambio (manual o automatica)
 * uego de ingresar los datos, se debe mostrar un mensaje que diga:
 * Se creo el automovil marca: xxxxx, modelo: xxxxx, año: xxxxx, color: xxxxx,
 * cantidad de puertas: xxxxx, cantidad de asientos: xxxxx, tipo de caja de cambio: xxxxx
 * motor: serie: xxxxx, fabricante: xxxxx
 */

var p_marca = document.getElementById("txtMarca").value;
var p_modelo = document.getElementById("txtModelo").value;
var p_anio = document.getElementById("txtAnio").value;
var p_cantidad = document.getElementById("txtCantidad").value;
var p_cantidadAsientos = document.getElementById("txtCantidadAsientos").value;
var p_nMotor = document.getElementById("txtNmotor").value;
var p_caja = document.getElementById("cmbCaja").value;

var automovil = {
    marca : p_marca,
    modelo : p_modelo,
    anio : p_anio,
    cantidad : p_cantidad,
    cantidadAsientos : p_cantidadAsientos,
    nMotor : p_nMotor,
    caja : p_caja
}

function mostrarDatos(){
    console.log(automovil.marca)
    console.log(automovil.modelo)
    console.log(automovil.anio)
    console.log(automovil.cantidad)
    console.log(automovil.cantidadAsientos)
    console.log(automovil.nMotor)
    console.log(automovil.caja)
}