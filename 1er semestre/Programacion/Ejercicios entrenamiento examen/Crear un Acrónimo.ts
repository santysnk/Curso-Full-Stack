/*

Ejercicio 4: Crear un Acrónimo

Descripción: Tienes una frase con varias palabras, y necesitas crear un acrónimo usando solo la primera letra de cada palabra. 
Usa split, map, y join.

Ejemplo: */

let frase = "Asociación de Padres de Familia";
// Debería convertirse en "APDF"

// Pista: Divide la frase en palabras, usa map para obtener la primera letra de cada palabra, y luego únelas.

let acrónimo = frase.split(" ")
                    .map((palabra,indice) =>{ 
                        if (palabra.length > 3 || indice > 1){
                            return palabra = palabra.charAt(0).toUpperCase();
                        }else{
                            return palabra = "";
                        }    
                    })
                    .join("");

console.log(acrónimo);
