let numeros:number []= [1, 2, 3, 4, 5, 6]; 
let resultado = contarParesEImpares(numeros);

function contarParesEImpares(numeros:number[]):number[] {
    let pares = 0;
    let impares = 0; 
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            pares += 1; 
        } else {
            impares += 1; 
        };
    }
    return [pares, impares];
}

console.log("Pares: " + resultado[0] + ", Impares: " + resultado[1]);  