/*

Ejercicio 1: Invertir el Orden de las Palabras

Descripción: Tienes una cadena de texto que contiene una oración, pero las palabras están en el orden incorrecto. 
Utiliza split, reverse, y join para invertir el orden de las palabras. 

Ejemplo: */

let texto = "hola cómo estás";
// Debería convertirse en "estás cómo hola"

/*
Pista: Divide el texto en palabras, invierte el arreglo y luego vuelve a unirlo.*/

let textoInv = texto.split(" ").reverse().join(" ");
console.log(textoInv);

