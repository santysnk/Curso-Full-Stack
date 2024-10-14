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
