//si llueve y la hora es menor a 19 vamos por asfalto. En cualquier otro caso,nos detenemos.
console.clear();
const hour: number = 19;
let isRaining:boolean = false;
let weather:string = "";
if (isRaining){
    weather = "está lloviendo";
}else{
    weather = "no está lloviendo";
}

console.log(`Inicia el viaje
...................
..............
..........
.......
....
..
.
Caramba! Llegamos a una bifurcación...`);
console.log(`
    Son las ${hour} horas y ${weather}.
`);

if (hour > 19){
    console.log(
        `Tomamos la ruta asfaltada, corta, aburrida pero segura y rápida.`
    );
}else{
    console.log(
        `Tomamos la ruta de ripio, larga, no tan segura de noche, pero con
        hermosas vistas.`
    );
}
console.log("\n Fin del viaje.");