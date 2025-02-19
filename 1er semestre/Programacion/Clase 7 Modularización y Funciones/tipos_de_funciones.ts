/*  FUNCIONES Y TIPOS DE SINTAXIS */


// Declaración de Función (Function Declaration), como sentencia
function nombreDeLaFuncion(): void {
    //codigo que quiero ejecutar
    console.log("Hola!")
}


// Expresión de Función (Function Expression), como si fuera una variable
let miFuncion = function(): void {
    console.log("Hola 2");
}

// Función Flecha (Arrow Function)
let miFuncion2 = () : void => {
    console.log("Hola 3")
}

nombreDeLaFuncion();
miFuncion();
miFuncion2();