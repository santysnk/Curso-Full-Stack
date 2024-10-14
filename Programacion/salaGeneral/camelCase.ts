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
    return texto.split(' ')
                .map(function(palabra) {
                    palabra = palabra.charAt(0).toUpperCase() + palabra.slice(1); 
                    return palabra
                    })
                .join(''); 
}

frase = capitalizeEachWord(frase);

function toCamelCase(texto: string): string {
    return texto.charAt(0)
                .toLowerCase() + texto
                .slice(1);
}

frase = toCamelCase(frase);

console.log(frase);

// quiero tomar mate