
import * as rs from "readline-sync";

console.clear();
let frase: string = rs.question("Ingrese alguna frase: ");
//frase = " " + frase;
let lista : RegExp = / (.{1})/g;  

console.log("Frase original:", frase);

// Reemplazamos los espacios por la letra siguiente capitalizada
frase = frase.replace(lista, function(encontrado, capturado, indice) {
    console.log(`Coincidencia: "${encontrado}" en el índice ${indice}`);
    // Convertimos la siguiente letra a mayúsculas
    return capturado.toUpperCase();
});

console.log("Frase modificada:", frase);
