import * as fs from 'readline-sync'

/* Desarrolle un algoritmo que, de acuerdo a la altura de una persona, decida si puede entrar a un juego en un parque
de divesiones.
Para poder subirse a la montaña rusa la persona debe medir 1.30mts o mas */

const ALTURA_MINIMA :  number = 130;
console.clear()

let alturaPersona : number = fs.questionInt ("Ingrese su altura en cm.: ")

if (alturaPersona >= ALTURA_MINIMA){
    console.log("\nUsted puede subir")
}else {
    console.log("\nUsted debe medir 1.30 cm. o más para subir")
}
