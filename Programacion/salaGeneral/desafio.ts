import * as rs from "readline-sync";

/*
*Ejercicio: Convertir una palabra ingresada por el usuario en clave, según las reglas siguientes:
    si el carácter es una vocal reemplazar aeiou por . , ; : !  respectivamente.
    si el carácter es un número o un operador matemático (+ - * / ) queda igual.
    si el carácter es una consonante minúscula pasar a mayúscula y viceversa.*
*/

let palabra: string = rs.question("Ingrese una clave: ");
let vocales: RegExp = /[aeiou]/gi;
let consonantes: RegExp = /[b-df-hj-np-tv-z]/gi;
/* 
RegExp significa "Regular Expression" (Expresión Regular), una herramienta utilizada para definir patrones de búsqueda en cadenas de texto.*

Se almacena la expresión regular: /[b-df-hj-np-tv-z]/, mas los modificadores 'g' e 'i', en la variable "consonantes"
para luego buscar esa expresión regular en una cadena de texto.

Modificadores (banderas):
    - g: Significa "global", busca **todas** las coincidencias en la cadena, no solo la primera.
    - i: Significa "insensible a mayúsculas y minúsculas" (case-insensitive), por lo que 
        ignorará si los caracteres están en mayúsculas o minúsculas.

Una expresión regular se define entre barras (/). Por ejemplo, let buscarChar: RegExp = /[afg]/ , buscarChar podrá buscar los caracteres 
'a', 'f' y 'g' de un string. En este caso solo esos caracteres exactos, solo el primero que encuentre de entre los 3 y solo en minúscula.

Atencion!: si no indicamos que es un rango '[]', por ejemplo:
    
    buscarChar = /afg/ ... buscará 'afg' como un todo en el string y no cada caracter individualmente... para ello se usa '/[afg]/'

Si quiero buscar un **rango** entre caracteres, puedo usar una expresión regular como /[a-f]/g, 
que coincidirá con cualquier carácter entre 'a' y 'f' (es decir, 'a', 'b', 'c', 'd', 'e', 'f') en cualquier parte del string 
por que tiene la bandera 'g' al final.

Cuando hay **varios rangos no consecutivos** de caracteres, estos se definen como /['desde1'-'hasta1''desde2'-'hasta2'...etc]/. 
Ejemplo (desde la 'a' hasta la 'f' y desde la 'm' hasta la 't', cada uno de ellos):

    /[a-fm-t]/  (esto buscará un solo carácter, que esté en el rango 'a' a 'f' o en el rango 'm' a 't'), solo el primero y sin incluir mayusculas.

Para la expresión regular: /[b-df-hj-np-tv-z]/gi, hay **varios rangos no consecutivos** de caracteres.
Desglosemos la expresión regular:

    - b-d: Coincide con las letras 'b', 'c', 'd'.
    - f-h: Coincide con las letras 'f', 'g', 'h'.
    - j-n: Coincide con las letras 'j', 'k', 'l', 'm', 'n'.
    - p-t: Coincide con las letras 'p', 'q', 'r', 's', 't'.
    - v-z: Coincide con las letras 'v', 'w', 'x', 'y', 'z'.

Esta expresión regular coincide con **todas las consonantes** y podrá buscar cada caracter indivialmente (por que es un rango... '[ ]'),
en todo el string (al usar la bandera 'g' de "global"). Y al usar la bandera `i` de (case-insensitive) tambien contará
todas las consonantes en **mayúsculas**.
*/

function cambiarConsonantes(palabra: string): string {
    palabra = palabra.replace(consonantes, function(char){ 
        if (char === char.toLowerCase()) {
            return char.toUpperCase();
        } else {
            return char.toLowerCase();
        }
    });
    return palabra;
}

function cambiarVocales(palabra: string): string {
    // Usamos replace con una función que revisa cada vocal y la reemplaza por el símbolo adecuado
    palabra = palabra.replace(vocales, function (vocal: string){
        switch (vocal.toLowerCase()) {
            case 'a':
                return '.';
            case 'e':
                return ',';
            case 'i':
                return ';';
            case 'o':
                return ':';
            case 'u':
                return '!';
            default:
                return vocal;
        }
    });

    return palabra;
}

function convertirPalabra(clave: string): string {
    clave = cambiarConsonantes(clave);
    clave = cambiarVocales(clave);
    return clave;
}

// Llamar a la función con la palabra ingresada por el usuario
let claveEdit: string = convertirPalabra(palabra);

console.log(claveEdit);
