// Arreglo con nombres de cantantes de ópera
const cantantesDeOpera: string[] = [
    "Luciano Pavarotti",
    "Maria Callas",
    "Placido Domingo",
    "Montserrat Caballé",
    "Andrea Bocelli",
    "Renée Fleming",
    "José Carreras",
    "Cecilia Bartoli",
    "Diana Damrau",
    "Jonas Kaufmann",
];

//for of
for (let cantante of cantantesDeOpera){
    console.log(cantante);
    
}

//forEach
cantantesDeOpera.forEach(function (cantante){
    console.log(cantante);
});

//forEach arrow
cantantesDeOpera.forEach((cantante)=>
    console.log(cantante));