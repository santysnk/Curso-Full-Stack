/*

Ejercicio 5: Formatear Texto para un Informe

Descripción: Imagina que tienes una cadena de texto que contiene un párrafo escrito en minúsculas, 
sin puntuación y con palabras clave que deben ser resaltadas. 

Tu tarea es transformar este párrafo en un formato de informe adecuado, realizando los siguientes pasos:

    1. Mayúscula en la Primera Letra de Cada Oración: Cada oración debe comenzar con una letra en mayúscula. 
    Las oraciones están separadas por la palabra "fin".

    2. Reemplazo de Palabras Clave: Si el texto contiene ciertas palabras clave 
    (por ejemplo, "importante" y "urgente"), debes resaltarlas con mayúsculas. 
    También puedes definir otras palabras clave que necesiten ser resaltadas.

    3. Eliminar Palabras Cortas Innecesarias: Cualquier palabra de menos de 3 letras que no sea la palabra "es" debe ser eliminada.

    4. Formateo de Salida: Las oraciones deben separarse por un punto y un espacio (". "), y el texto final no debe contener la palabra "fin".

Ejemplo: */

let texto = "este es un informe importante fin este mensaje es urgente y requiere atención fin debes leerlo";

// "Este es un informe IMPORTANTE. Este mensaje es URGENTE y requiere atención. Debes leerlo."


/* Pista: Pistas para Resolverlo
        Paso 1: Divide el texto en oraciones usando la palabra "fin" como separador. 

        Paso 2: Usa map para trabajar en cada oración por separado.
            * Mayúscula en la primera letra de cada oración.
            * Reemplaza las palabras clave usando replace.
            * Elimina palabras cortas usando split, filter, y join.
            *
        Paso 3: Une las oraciones de nuevo con un punto y un espacio (". ").
*/

let formatText =  texto.split(" fin ")
                    .map(oracion => {
                        return oracion = oracion.charAt(0).toUpperCase() + oracion.slice(1) + ".";
                    })
                    .join(" ")
                    .replace(/importante|urgente/gi, (match) => match.toUpperCase());


console.log(formatText);
                    
                    
