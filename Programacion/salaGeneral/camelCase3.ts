// Extiende el prototipo de String para agregar el método toCamelCase
declare global {
    interface String {
        toCamelCase(): string;
    }
}

String.prototype.toCamelCase = function(): string {
    return this
        .toLowerCase()
        .split(' ')
        .map(function(word, index) {
            if (index === 0) {
                return word; // La primera palabra no cambia
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1); // Las siguientes palabras se capitalizan
            }
        })
        .join(''); // Une las palabras sin espacios
};


// Uso del método
import * as rs from "readline-sync";

console.clear();
let frase: string = rs.question("Ingrese alguna frase: ");

frase = frase.toCamelCase(); // Ahora debería funcionar correctamente

console.log(frase);

