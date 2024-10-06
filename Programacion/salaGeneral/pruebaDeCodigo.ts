
import * as rs from "readline-sync";
let arreglo1: number[] =[];
let arreglo2: string[] =[];
function recorrerArray(arr1: number[], arr2: string[],longitud1:number, longitud2:number):void {
    const maxLongitud = Math.max(longitud1, longitud2);
    for (let i = 0; i <maxLongitud; i++) {
        if (i<longitud1) {
            arr1[i] = rs.questionInt("ingrese un numero: ");
            
        }if(i<longitud2){
            arr2[i] = rs.question("ingrese un nombre: ");
        }
    }
}
recorrerArray(arreglo1, arreglo2,3,2);
console.log(arreglo1);
console.log(arreglo2);