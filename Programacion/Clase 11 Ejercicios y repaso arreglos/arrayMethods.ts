//Arreglo con nombres de cantantes de opera

const cantantesDeOpera: string[] = [
"Luciano Pavarotti",
"Maria Callas" ,
"Plácido Domingo",
"Montserrat Caballé ",
"Renée Fleming",
"Jonas Kaufmann",
"Cecilia Bartoli",
"Anna Netrebko",
"José Carreras",
"Elīna Garanča",
]

//Mostrar array con un for OF
for (let cantante of cantantesDeOpera){
    console.log(cantante);
}

//Mostrar array con un forEach
cantantesDeOpera.forEach((cantante) => 
    console.log(cantante));



