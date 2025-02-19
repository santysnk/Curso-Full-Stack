/*

Ejercicio 3: Reemplazar una Palabra

Descripción: Dada una cadena de texto que representa una oración, reemplaza una palabra específica con otra usando replace.

Ejemplo: */

let frase = "El gato es mi mascota favorita";
// Reemplaza "gato" por "perro"
// Resultado esperado: "El perro es mi mascota favorita"

/*
Pista: Pista: Usa replace para cambiar la palabra.*/

let newFrase = frase.replace(/gato/,"perro");

console.log(newFrase);
