 
// Ejercicio 2: Capitalizar la Primera Letra de Cada Palabra
// Descripción: Tienes una cadena de texto que contiene varias palabras en minúsculas. Utiliza split, map, charAt, slice, y join para capitalizar la primera letra de cada palabra.
// Ejemplo: 

let texto = "hola mundo esto es una prueba";
// Debería convertirse en "Hola Mundo Esto Es Una Prueba"

// Pista: Divide el texto en palabras, usa map para transformar cada palabra, capitaliza la primera letra y une las palabras de nuevo.

let textoCapitalizado = texto.split(" ").map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(" ");

console.log(textoCapitalizado);
