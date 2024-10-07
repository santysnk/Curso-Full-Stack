import * as rs from "readline-sync";
/*
Estructuras de Control : Eureka

    • Escribir un algoritmo que nos pida una clave y verifique que sea la correcta.
    • Tenga en cuenta que la clave es la palabra “eureka”.
    • Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará 
        un mensaje indicándonos que hemos agotado todas las oportunidades.
    • Si acertamos la clave, saldremos directamente del programa.
*/ 

const password:string = "eureka";
let counter : number = 0;
let userInput: string | null = null;
console.clear();
console.log(`Tiene tres intentos para ingresar el sistema, señor  Munt... si decide aceptar`);

while (counter < 3 && userInput !== password){
    userInput = rs.question("Ingrese password: ");
    counter++;
}

if (userInput !== password){
    console.log("\n se acabaron los intentos");
    
}else{
    console.log("\n Bienvenido!!");
    
}