import * as rs from "readline-sync";

// Funcion para cargar con numeros un arreglo
export function cargarArreglo (arreglo:number[],nombreArreglo:string,long:number){
    console.log(`Ingresos para ${nombreArreglo}:`);
    console.log("-----------------------------");
    for (let i:number = 0; i < long;i++){
        arreglo[i] = rs.questionInt(`Ingrese para ${nombreArreglo}, el numero ${i + 1} de ${long}: `);
    }
}

export function productoEscalar (primerArray:number[],segundoArray:number[],long:number){
    let resultado:number = 0;
    for (let i:number=0 ; i<long ; i++){
        resultado = resultado + (primerArray[i]*segundoArray[i]);
    }
    console.log("\n----------------------------------------------");
    console.log(`El producto escalar de los 2 arrays es: ${resultado}`);
}