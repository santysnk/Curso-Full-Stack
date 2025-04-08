
// computadora
console.clear();

//let palabra:string = "computadora";


//console.log("la cuarta letra es: " + palabra);


// array o arreglo o lista

// posiciones:             0         1         2             3           4     indice o index
let nombres:string[] = ["pablo" , "juan" , "francisco" , "sebastian", "pilar"];

// posiciones:           0   1   2    3    4     5   
let numeros:number[] = [ 1 , 3 , 20 , 25 , 30 , 36 ];

let lista:string[] = [];


//     0         1                2          3            4           
// [  1   ] , [  pilar  ] , [   3  ] , [   vanina  ] , [  5   ]

let indice:number = 2;

lista[0] = "pilar"
lista[1] = "emilia"
lista[2] = "vanina"
lista[3] = "juli"
lista[4] = "santi"


let tamanio = lista.length // 5

for (let i = tamanio -1 ; i >= 0 ; i-- ){
    console.log(lista[i]);
}

