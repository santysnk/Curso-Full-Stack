

let listaNombre:string[] = [];

listaNombre[0]= "SANTIAGO";
listaNombre[1]= "vanina";


console.log("la cantidad de nombres almacenados es: " + listaNombre.length);
console.log("la cantidad de caracteres del primer nombre es: " + listaNombre[0].length);
console.log("");

console.log(listaNombre[1].toUpperCase());
console.log(listaNombre[1]);

console.log(listaNombre[0].toLowerCase().replace("n","g"));



console.log(listaNombre[0]);

//listaNombre[0] = listaNombre[0].toLowerCase().replace("n","g")


//console.log(listaNombre[0]);

let parrafo:string = `El jefe de Gabinete, Guillermo Francos, comentó que, para el Ejecutivo, 
el juez de la Corte nombrado por decreto podría seguir en su cargo hasta que se venza su comisión, el 30 de noviembre. 
También rechazó el fallo del juez Ramos Padilla y lo calificó con “intencionalidad política”. `;


listaNombre.push("laura");
listaNombre.push("mauro");
listaNombre.push("sebastian");
listaNombre.push("franco");


console.log(listaNombre);

listaNombre.splice(3,1,"luciano");

console.log(listaNombre);

console.log("donde esta laura:" + listaNombre.indexOf("laura"));











