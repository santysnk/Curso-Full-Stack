import * as rs from 'readline-sync'

/* Desarrolle un algoritmo que diga el precio de una compra
La compra se compone del precio del producto y la cantidad
Si el cliente gasta mas de $1000 debemos aplicarle un descuento de 10% */

console.clear()

const DESCUENTO : number = 0.1
let precio : number = rs.questionInt("Ingrese el precio del producto: ");
let cantidad :  number = rs.questionInt ("Ingrese la cantidad del producto: ");
let totalDeCompra : number = precio * cantidad;

if (totalDeCompra > 1000){
    let totalConDescuento : number = totalDeCompra * (1 - DESCUENTO);
    console.log("-------------------------------------");       
    console.log("Felicitaciones! tenes un 10% de descuento!. El total de la compra es: ", totalConDescuento);
}else {
    console.log("-------------------------------------");
    console.log("El total de la compra es: ", totalDeCompra);
}

