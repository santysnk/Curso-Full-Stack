/*
Métodos: Ejercicio "Impresión de nombre"

Implemente un método llamado imprimirNombre que reciba un nombre y un apellido y devuelva los dos datos concatenados
en una variable de tipo string:
  • El string devuelto debe imprimirse por consola..
  • Refactorizar el método dibujarGuiones utilizado para el ejercicio de la calculadora realizado anteriormente.
*/

console.clear();


const nombre:string = "Pablo"
const apellido:string = "Lopez"
let linea: string;

let dibujarGuiones = (cantidad:number) : void =>{
    linea="";
    for (let i:number = 1; i < cantidad; i++){
        linea = linea + "-";
    }
    console.log(linea);
}

function imprimirNombre (nombre:string, apellido:string):string{
    const nombreCompleto:string = `${nombre} ${apellido}`;
    return nombreCompleto
}
console.log("IMPRESION DE NOMBRE");
dibujarGuiones(30);

console.log(imprimirNombre(nombre,apellido));
dibujarGuiones(30);