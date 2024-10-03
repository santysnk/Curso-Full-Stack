/*
Variables:
Declaradas con (let)

Puedes cambiar el valor de una variable después de haberla declarado.

Ejemplo del código: */


let nombre: string;
nombre = "Pepe";
console.log(nombre);  // Imprime: Pepe

nombre = "María";
console.log(nombre);  // Imprime: María

/*Como puedes ver, el valor de nombre cambia de "Pepe" a "María" sin ningún problema, ya que las variables son mutables.

Constantes:
Declaradas con (const)

No puedes cambiar el valor de una constante una vez que ha sido asignado.

Ejemplo del código: */

const nombre2 = "Pepe";
console.log(nombre2);  // Imprime: Pepe

/* nombre2 = "María";  // ERROR: No puedes reasignar una constante.

En este caso, se produce un error al intentar cambiar el valor de nombre después de haber sido inicializado, ya que las constantes son inmutables.

Diferencias clave:
Variables (let): Pueden cambiar su valor después de la inicialización.
Constantes (const): No pueden cambiar su valor después de la inicialización.
Este es un concepto clave en la programación para mantener la integridad de ciertos valores en el código. */