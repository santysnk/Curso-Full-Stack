import { telefonoConCamara } from "./telefono-ConCamara";
import { telefonoConRadio } from "./telefono-ConRadio";

let telefono1:telefonoConCamara = new telefonoConCamara(false, 10);

let telefono2:telefonoConRadio = new telefonoConRadio(false,15,225);

console.clear();
console.log("CELULARES:\n");


console.log("Telefono 1: ", telefono1.info());
console.log("-----------------------------------------------------------");
console.log("Telefono 2: ", telefono2.info());
console.log("-----------------------------------------------------------");
console.log("");

telefono1.mandarMensaje("hola que tal");

