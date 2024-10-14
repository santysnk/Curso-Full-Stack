/*• 

Solicite al usuario que ingrese un texto y retórnelo convertido en un nombre de variable/función con las reglas camelCase

• Por ejemplo, si el usuario ingresa:
    convertir texto según camel case el programa lo debe convertir en:
        convertirTextoSegunCamelCase
*/

import * as rs from "readline-sync";

let frase: string = rs.question("Ingrese alguna frase: ");

// Función para capitalizar la primera letra de cada palabra en un texto
function capitalizeEachWord(texto: string): string {
    // 1. Usamos 'split(' ')' para dividir la cadena de texto en un array de palabras, separando por espacios.
    //    Cada espacio en blanco indica el final de una palabra.

    return texto.split(' ').map(function(palabra) {
        palabra = palabra.charAt(0).toUpperCase() + palabra.slice(1); return palabra}).join(';'); 
}
let fraseCamelCase:string=capitalizeEachWord(frase);
console.log(fraseCamelCase);

// quiero tomar mate