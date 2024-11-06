/*
Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay. 
Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos.
La presencia de un valor verdadero (1) en el arreglo indica que la butaca está ocupada.
La presencia de un valor falso (0) en el arreglo indica que la butaca está desocupada. */

let cantidadButacas: number = 50;
let butacasDeCine: number [] = new Array(cantidadButacas);
let butacasOcupadas:number = 0;

const cargarArreglo = (arreglo:number[], Longitud: number) => {
    for (let i = 0; i < Longitud; i++){
        arreglo[i] = Math.floor(Math.random()*2);
    }
}

const evaluarButaca = (arreglo:number[], Longitud: number) => {
    for (let i = 0; i < Longitud; i++){
        if (arreglo[i] === 1){
            butacasOcupadas++;
        }
    }
    return butacasOcupadas
}

cargarArreglo(butacasDeCine,cantidadButacas);

let ocupadas: number = evaluarButaca(butacasDeCine,cantidadButacas);

console.log("cantidad de butacas ocupadas en el cine es de: ", ocupadas);



