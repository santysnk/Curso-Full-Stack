console.clear();

let palabra2: string = "hola que hasei";

console.log(palabra2);

palabra2 = palabra2.replace("s","c");
let palabra3: string = palabra2;

console.log(palabra2);

/*
function mayusculizar (algo:string):string {
    algo = algo.toLocaleUpperCase();
    return algo
}*/

function procesarCaracter (char:string):string{
    let aux: string = "";
    aux = char.toLowerCase();
    return aux
}


palabra2 = palabra2.replace(/[aeiouAEIOU]/g, function(char){ 
    if (char == "A" || char == "E"|| char == "I" || char == "O" || char == "U") { 
        return char.toLowerCase(); 
    }else{ 
        return char.toUpperCase(); 
    } 
}     
);

console.log(palabra2);

palabra3 = palabra3.replace(/[aoei]/g, function(char){ 
    if ("AEIOU".includes(char)) { 
        return char.toLowerCase(); 
    }else{ 
        return char.toUpperCase(); 
    } 
}     
);
console.log(palabra3);

