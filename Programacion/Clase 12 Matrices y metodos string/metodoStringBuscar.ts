import * as rs from 'readline-sync'
/* Ejercicio dado por el profesor Marcelo Bettini, miércoles, 2 de octubre:

Utilizar un método de string para buscar una palabra en un párrafo (paragraph) e indicar cuantas veces se encontró: */

console.clear();
console.log(" BUSQUEDA DE PALABRAS");
console.log("---------------------\n");

const paragraph: string =
    `Urania. Qué nombre. A la gente le gusta, le parece sonoro, original, raro. A ella también, aunque le evoca sólo cosas tristes. 
    Todo le evoca cosas tristes, ahora que ha vuelto. Pero ¿Cuándo no, desde que se fue de esta ciudad, a la que creía no volvería nunca? 
    ¿Y cómo era posible que alguien se llamara así en una familia de dominicanos católicos, que adoraban a la Virgen del Rosario y 
    a la Virgen de Altagracia? Su padre le contó que su madre era quien escogió su nombre. Urania: la Musa de la astronomía. 
    Nadie se atrevió a contradecirla. A él le parecía bien, se lo dijo como si la elección del nombre hubiera sido cosa de poca importancia. 
    En aquellos días no había problemas en la casa. Las cosas cambiaron después, claro. Cambiaron tanto.`;

//devuelve true si searchTerm se encuentra en fullText
function isTextInPara(fullText: string, searchTerm: string): boolean {
    return fullText.toLowerCase().includes(searchTerm.toLowerCase());
}

//completar la función para que devuelva la cantidad de veces que searchTerm aparece dentro de fullText
function howManyTextInPara(fullText: string, searchTerm: string): number {
    let count:number=0;
    let searchPosition:number = fullText.indexOf(searchTerm, 0);  /* dá el indice, es decir la ubicacion del primer caracter en donde ese caracter + los siguientes 
                                                                forman la palabra a buscar searchTerm. Comienza a buscar desde la posicion 0 del string fullText.
                                                                Además la declaro antes del while para ver si por lo menos existe 1 vez, devuelve -1 si no existe. */
    
    while (searchPosition != -1){   /* comparo searchPosition con != 1 es decir que sea distinto de -1 por que 
                                       ese es el valor cuando no se entontro nada en fullText.indexOf(searchTerm) */
        count++;
        searchPosition = fullText.indexOf(searchTerm, searchPosition + 1)
    }
return count
} 

let wordToFind:string = rs.question("Ingrese la palabra a buscar: ");
let matchesFound:number = howManyTextInPara(paragraph.toLocaleLowerCase(),wordToFind.toLowerCase());

console.log("----------------------------------------------------------");
console.log(`se encontraron: ${matchesFound} coincidencias`);

