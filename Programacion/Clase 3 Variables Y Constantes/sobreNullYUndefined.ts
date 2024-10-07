/*Tipos básicos de variables "null" y "undefined".
--------------------------------------------------*/

//null no es un tipo de dato por sí mismo (aunque sí es un valor). Para asignar null a una variable, primero debes definir su tipo y luego asignarle null como su valor.
let variable: null = null;

/*null es considerado un tipo y un valor al mismo tiempo, pero normalmente se usa como parte de una unión de tipos. 
Por ejemplo, una variable que puede ser (number, string, boolean, etc) o null y se define así: */

// La variable "numero" puede ser un número o null (no tener un valor definido).
let numero: number | null;  

// La variable "texto3" puede ser una cadena de texto o null (no tener un valor definido).
let texto3: string | null;  

// La variable "respuesta" puede ser true, false o null (no tener un valor definido).
let respuesta: boolean | null;  


// Inicialización con null

// La variable "numeroNull" puede ser un número o null y se inicializa con el valor null.
let numeroNull: number | null = null;  

// La variable "textoNull" puede ser una cadena de texto o null y se inicializa con el valor null.
let textoNull: string | null = null;  

// La variable "respuestaNull" puede ser true, false o null y se inicializa con el valor null.
let respuestaNull: boolean | null = null;  


/* undefined:Es el valor que se asigna automáticamente a una variable que ha sido declarada pero no ha sido inicializada. 
Es decir, cuando declaras una variable sin asignarle ningún valor, su valor por defecto es undefined. 
Es el estado de "no valor asignado". 

null: Es un valor que se asigna explícitamente para indicar que una variable no tiene un valor actualmente, 
pero en este caso, se ha hecho de manera intencional. Es el estado de "ausencia de valor".*/

let ejemplo: number;   /* La variable "ejemplo" ha sido declarada pero no se le ha asignado ningún valor.
Por lo tanto, su valor es "undefined" hasta que se le asigne un valor.*/

/* console.log(ejemplo);   Imprime "undefined" porque no ha sido inicializada. */

/* ejemplo = null;   Aquí se intenta asignar "null", pero TypeScript arrojará un error porque la variable "ejemplo" no puede ser null.

Para que TypeScript permita asignar null a la variable, deberías declararla con la unión de tipos number | null, como en los ejemplos anteriores: */

let ejemplo2: number | null;
/* console.log(ejemplo2);   "undefined", porque todavía no se le ha asignado ningún valor. */

ejemplo2 = null;  // Ahora la variable puede contener "null" sin problemas.
console.log(ejemplo2);  // Imprime "null", porque hemos asignado null de manera explícita.