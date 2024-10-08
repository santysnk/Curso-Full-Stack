import * as rs from "readline-sync";

// Pedir la palabra al usuario
let palabra: string = rs.question("Ingrese una clave: ");
let reemplazoVocales = { 'a': '.', 'e': ',', 'i': ';', 'o': ':', 'u': '!' };
let matematicos: string = "0123456789+-*/";

function convertirPalabra(clave: string, reemplazar: { [objeto: string]: string }): string {
    // Reemplazar vocales por los respectivos símbolos
  clave = clave.replace(/[aeiou]/g, (char) => reemplazar[char]);

  clave = clave.replace(/[a-zA-Z]/g, (char) => {
    // Si es minúscula, la convertimos a mayúscula; si es mayúscula, la convertimos a minúscula
    return char == char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
});

    return clave;
}

// Llamar a la función con la palabra ingresada por el usuario
let claveEdit: string = convertirPalabra(palabra, reemplazoVocales);
console.log(claveEdit);