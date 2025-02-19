
let hora:number = 13;
let day: string = "sunday";
let estaLloviendo:boolean = true;

//es domingo y es de mañana: sacamos al perro a pasear.

//es domingo y es de tarde o es cualquier dia y llueve: hacer tortafritas

//si no es domingo, hay que trabajar
if (day === "sunday"){
    if(hora>7 && hora < 12){
        console.log("Firulais se va de paseo... 🐶");
    }
    if(hora > 13){
        console.log("Cocinamos unas donuts... 🍩");
    }
}else{
    console.log("vayamos a trabajar");
}
