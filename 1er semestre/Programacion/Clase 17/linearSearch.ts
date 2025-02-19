/**
* LINEAR SEARCH (Búsqueda Lineal)
Recorre cada elemento de una lista o arreglo uno por uno hasta que encuentra el elemento buscado y devuelve su índice.

Si llega al final del arreglo o lista sin haber encontrado el elemento, devuelve -1.

Ventaja: Es simple y no requiere que los elementos estén ordenados.

Desventaja: Puede ser ineficiente en listas grandes ya que revisa cada elemento de forma secuencial.

Complejidad: O(n) donde n es el número de elementos de la lista. En el peor caso, deberá revisar todos los elementos.

* Linear Search
* @param arr - El arreglo en el que vamos a hacer la búsqueda
* @param target - El elemento que deseo encontrar
* @returns number - el índice del elemento encontrado, o -1 si no se encuentra
*/

const array:number[] = [10,13,15,9,50,36];
const target:number = 2;

// Tipo de funcion de busqueda lineal de un elemento con for
function buscarEnArray (arr:number[],target:number):number{
    let iAux:number = -1;
        for (let i = 0; i < arr.length ;i++){
            if (arr[i] === target){
                iAux = i;
            }
        }
    return iAux
}

// Tipo de funcion de busqueda lineal de un elemento con forEach
function buscarEnArray2(arr: number[], target: number): number {
    let iAux: number = -1;
    arr.forEach((valor, indice) => {
        if (valor === target) {
            iAux = indice;
        }
    });
    return iAux;
}

// Tipo de funcion de busqueda lineal de un elemento con findIndex
function buscarEnArray3(arr: number[], target: number): number {
    return arr.findIndex(valor => valor === target);
}

let resultado = buscarEnArray3(array,target);
//Mostrar mensaje por consola con if segun el valor encontrado o no
if (resultado === -1){
    console.log("Elemento no se encuentra en el array");
    }else{
        console.log(`El numero ${target} se encuentra en la posicion ${resultado + 1} del array`);
        
    }


    resultado = buscarEnArray2(array,target);
//Mostrar mensaje por consola con ternario  segun el valor encontrado o no
console.log(resultado === -1 
    ? "Elemento no se encuentra en el array" 
    : `El número ${target} se encuentra en la posición ${resultado + 1} del array`);


resultado = buscarEnArray(array,target);
//Mostrar mensaje por consola con ternario  segun el valor encontrado o no
console.log(resultado === -1 
    ? "Elemento no se encuentra en el array" 
    : `El número ${target} se encuentra en la posición ${resultado + 1} del array`);


/**
 * Linear Search
 * @param arr - El arreglo en el que vamos a hacer la búsqueda
 * @param target - El elemento que deseo encontrar
 * @returns number - El índice del elemento encontrado, o -1 si no se encuentra
 */

const names2: string[] =
    [
        "Alejo",
        "Valentina",
        "Santiago",
        "Camila",
        "Mateo",
        "Lucía",
        "Sofía",
        "Lucas",
        "Isabella",
        "Sebastián",
        "Martina",
        "Diego",
        "Fernanda",
        "Gabriel",
        "Emilia",
        "Juan",
        "Lucía",
        "Carlos",
        "Paula",
        "Ricardo",
        "Mariana"
    ];

function linearSearch(arr: string[], target: string): number {
    const len: number = arr.length
    for (let i = 0; i < len; i++) {
        if (arr[i] === target) return i
    }
    return -1
}


console.log(linearSearch(names2, "Lucía")) //15
console.log(names.findIndex((name) => name === "Lucía")) //15