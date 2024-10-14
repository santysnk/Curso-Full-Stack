/*
• Solicite al usuario que ingrese un texto y retórnelo convertido en un nombre de variable/función con las reglas camelCase

• Por ejemplo, si el usuario ingresa:
    convertir texto según camel case el programa lo debe convertir en:
        convertirTextoSegunCamelCase
*/

import * as rs from "readline-sync";
let frase: string = rs.question("Ingrese alguna frase:");

// Función para capitalizar la primera letra de cada palabra en un texto
function capitalizeEachWord(texto: string): string {
    return texto.split(' ').map(function(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    }).join(''); 
}

function toCamelCase(texto: string): string {
    let frase = capitalizeEachWord(texto); // Capitalizamos cada palabra
    // 4. Convertimos la primera letra del resultado a minúscula.
    return frase.charAt(0).toLowerCase() + frase.slice(1);
}

let fraseCamelCase:string = toCamelCase(frase);
console.log(fraseCamelCase);

/*texto.split(' ') divide el texto en un array de palabras, usando los espacios como separadores.

Luego, .map() recorre cada palabra en ese array y le aplica la función que defines dentro de 
.map() (en este caso, una función anónima function(palabra)).

El resultado de esa función para cada palabra se almacena en un nuevo array, 
que es lo que devuelve .map().
En resumen, .map() toma cada elemento de un array, ejecuta una función sobre él, y crea un nuevo array con los resultados.*/