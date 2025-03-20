/* EJERCICIO ENTREGABLE OBLIGATORIO - FECHA MAXIMA DE ENTREGA 26/03/2025
Se debe crear una clase Celular que represente un teléfono móvil.

Requisitos:
    * Encapsulamiento: Los atributos deben ser privados y accesibles solo mediante getters y setters.
    * Constructor con parámetros opcionales y obligatorios:
    * Obligatorios: Marca, modelo y sistema operativo.

Opcionales: Memoria RAM (por defecto 4GB), almacenamiento interno (por defecto 64GB) 
y estado de encendido (por defecto apagado).

Métodos adicionales:
    *encenderApagar(): Cambia el estado de encendido/apagado del celular.
    *mostrarInfo(): Retorna una cadena con los datos del celular.
*/

import { Celular } from "./celular";

// Instanciamos objetos y probamos los métodos
const Celular1 = new Celular("samsung","S25","Android",12,512,false);
const Celular2 = new Celular("iphone","16 pro Max","IOS",8,1024,true);
const Celular3 = new Celular("xiomi","Redmi note 13","Android",undefined,undefined,false);

console.clear();
let info:string = "";

console.log("CELULARES");
console.log("---------");
console.log("");
console.log("");
console.log(Celular1.mostrarInfo(info));
console.log("****************************");
console.log("");
console.log(Celular2.mostrarInfo(info));
console.log("");
console.log("****************************");
console.log(Celular3.mostrarInfo(info));

