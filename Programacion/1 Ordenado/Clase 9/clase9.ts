
let mensaje:string = "soy una variable global"

function ambitoVariables () :void{
    mensaje="Soy una variable local";
    console.log(mensaje)
}

console.log(mensaje);
ambitoVariables();
console.log(mensaje);