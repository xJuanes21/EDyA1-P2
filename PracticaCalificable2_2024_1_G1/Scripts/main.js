import {Reparacion} from './Reparacion.js';
import {Vehiculo} from './Vehiculo.js';

// obtiene referencias a los botones y areas de texto de la pagina HTML
const btnIngresar = document.getElementById("ingresar");
const btnConsultar = document.getElementById("consultar");
let aTSalida = document.getElementById("respuesta");

let losVehiculos = [];

// se asignan eventos
btnIngresar.addEventListener('click',ingresarNuevoVehiculo);
btnConsultar.addEventListener('click',ejecutarReporte);


function ingresarNuevoVehiculo(){
    let placa = document.getElementById("laPlaca").value;
    let modelo =  parseInt(document.getElementById("elModelo").value);
    let velocidad = parseFloat(document.getElementById("laVelocidad").value);
    let reparacion = parseInt(document.getElementById("elNroReparacion").value);
    let causa = document.getElementById("laCausa").value;
    let procedimiento = document.getElementById("elProcedimiento").value;
    
    // a) crear objReparacion

    
    // b) crear objVehiculo


    // c) insertar objVehiculo al inicio del arreglo losVehiculos


    // d) usando la referencia aTSalida, desplegar el toString de objIngeniero

}

function ejecutarReporte(){   
    let laCausa = document.getElementById("laCausa").value;
    
    // a) invocar a filtrarPorCausa y almacenar el resultado en res 


    // b) usando la referencia aTSalida, desplegar el valor almacenado en res

}

function filtrarPorCausa(bd,causaDada){  
    // a) actualizar el texto inicial de la cadena res  
    let res = 'los Vehiculos reparados son:\n';

	// b) recorrer el arreglo y obtener lo solicitado


    return res;
}
