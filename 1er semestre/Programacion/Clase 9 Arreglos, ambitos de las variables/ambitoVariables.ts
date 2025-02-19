/*
¿Qué es el ámbito (scope) de una variable?
    El ámbito o scope de una variable se refiere a dónde en el programa una variable está disponible para ser utilizada. 
    Dependiendo de cómo y dónde se declare una variable, esta puede ser accesible en todo el programa o solo en una parte específica del mismo.

Analogía: Una casa con habitaciones
    Imagina que estás en una casa con varias habitaciones, como la cocina, el baño, el dormitorio, etc. 
    Ahora, piensa en las variables como si fueran objetos en estas habitaciones. 
    Dependiendo de dónde coloques un objeto (variable), podrás usarlo en toda la casa o solo en esa habitación.

Tipos de ámbitos (scope) como habitaciones en una casa:
    
    Ámbito global (global scope): Esto es como si dejaras un objeto (variable) en el salón principal de la casa. 
    Cualquier persona en cualquier habitación puede acceder y utilizar ese objeto.
    Una variable declarada en el ámbito global puede ser utilizada en cualquier parte del programa.

    Ámbito de función (function scope): Imagina que dejas un objeto dentro de una habitación específica, por ejemplo, en la cocina. 
    Solo las personas que estén en la cocina pueden acceder y utilizar ese objeto.
    Las variables declaradas dentro de una función solo pueden ser utilizadas dentro de esa función.

    Ámbito de bloque (block scope): Es como si dejaras un objeto dentro de un cajón dentro de la cocina. 
    Solo las personas que abran ese cajón (es decir, dentro de ese bloque de código) pueden utilizar ese objeto.
    Las variables declaradas dentro de un bloque ({}), como en un if, for, o while, solo pueden ser utilizadas dentro de ese bloque.

Ejemplos con código y la analogía de la casa
    
1. Ámbito global (global scope)
    Imagina que tienes un televisor en el salón de la casa, cualquiera puede verlo y usarlo desde cualquier parte. */

let television = "Televisor en el salón";  // Variable global

function verTelevision() {
    console.log(television);  // Puedo acceder a 'television' desde aquí
}

verTelevision();  // Salida: "Televisor en el salón"
                  // Aquí, television está en el ámbito global, lo que significa que puede ser accedida desde cualquier parte del código, incluyendo dentro de funciones. 

/*                  
2. Ámbito de función (function scope)
    Ahora, imagina que tienes una receta secreta dentro de la cocina. Solo las personas que estén en la cocina pueden verla o usarla. */

function prepararComida() {
    let recetaSecreta = "Receta especial de la abuela";  // Variable de ámbito de función
    console.log(recetaSecreta);  // Se puede acceder aquí
}

prepararComida();  // Salida: "Receta especial de la abuela"
// @ts-ignore
console.log(recetaSecreta);  // Error: No se puede acceder fuera de la función
                             // La variable recetaSecreta solo existe dentro de la función prepararComida(). 
                             // No puedes acceder a ella desde fuera de la función, ya que está en el ámbito de función.    

/* 
3. Ámbito de bloque (block scope)
    Ahora, imagina que guardas los cubiertos dentro de un cajón en la cocina. Solo puedes usar los cubiertos si abres el cajón. */

function abrirCajon() {
    if (true) {
        let cubiertos = "Cuchara y tenedor";  // Variable de bloque
        console.log(cubiertos);  // Se puede acceder aquí
    }
    // @ts-ignore
    console.log(cubiertos);  // Error: No se puede acceder fuera del bloque
}

abrirCajon();  // Error: cubiertos no está definido fuera del bloque
               // La variable cubiertos está dentro de un bloque (las llaves {} del if). 
               //Solo se puede acceder a cubiertos dentro de ese bloque específico, no fuera de él. 

/* 
Importancia de entender los ámbitos

    * Controlar el acceso a variables: Saber en qué ámbito declarar las variables ayuda a evitar errores y a mantener el código organizado. 
    No quieres que una variable usada en una pequeña parte del código sea accesible desde cualquier lugar, ya que podría causar problemas o interferencias.

    * Evitar conflictos de nombres: Si declaras variables globales innecesariamente, podrías sobrescribir accidentalmente otras variables con el mismo nombre. 
    Utilizando ámbitos locales (de función o de bloque), puedes evitar estos conflictos.

    * Optimización de memoria: Las variables locales (de función o bloque) ocupan memoria solo durante la ejecución del bloque o función. 
    Una vez terminada la función o bloque, la variable desaparece y se libera la memoria.

Resumen de los tipos de ámbito (scope):

    * Global: La variable está disponible en todo el programa.
    * De función: La variable solo está disponible dentro de la función en la que se declara.
    * De bloque: La variable solo está disponible dentro de un bloque específico de código (como un if, for, etc.).  

Ejemplos adicionales en TypeScript: */

// Ejemplo de ámbito global
let fruta = "manzana"; // Global

function mostrarFruta() {
    console.log(fruta);  // Puede acceder a 'fruta' porque es global
}
mostrarFruta();  // "manzana"


// Ejemplo de ámbito de función
function mostrarVerdura() {
    let verdura = "zanahoria";  // Solo accesible dentro de la función
    console.log(verdura);  // "zanahoria"
}
mostrarVerdura();  // "zanahoria"
// @ts-ignore
console.log(verdura);  // Error: 'verdura' no está definida fuera de la función


// Ejemplo de ámbito de bloque
function prepararPostre() {
    if (true) {
        let postre = "helado";  // Solo accesible dentro de este bloque
        console.log(postre);  // "helado"
    }
    // @ts-ignore
    console.log(postre);  // Error: 'postre' no está definida fuera del bloque
}
prepararPostre();

    