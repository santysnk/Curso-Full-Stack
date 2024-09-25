
/*
Estructuras de Datos – Arreglos

Ejercicio – Completar Arreglo

    • Llenar un array de 10 posiciones con números
    aleatorios entre 0 y 99

    • Para obtener números aleatorios crear una función
    Azar, que se base en las funciones disponibles en el
    paquete Math:

    -Math.random() devuelve un nro al azar entre 0 y 1.
*/

console.clear()
console.log(" Llenar un array de 10 posiciones con números aleatorios entre 0 y 99");
console.log("---------------------------------------------------------------------");

let numArray:number[] = new Array(10);

function Azar (tope : number) : number {
    return Math.floor(Math.random()*tope);
    };

function mostrarNumeros (listaNumeros:number[]):void{
    console.log("\nNumeros ingresados");
    console.log("------------------");
    for (let i :number = 0; i < listaNumeros.length;i++){
        console.log(`El numero en la posicion ${i} es: ${listaNumeros[i]}`);
    }
}

function llenarArray(arrayALLenar:number[]){
    for (let i:number =0; i < arrayALLenar.length;i++){
        arrayALLenar[i] = Azar(100);
    }
}

llenarArray(numArray);
mostrarNumeros(numArray);