import { AnimalFactory } from "./AnimalFactory";

const fabrica = new AnimalFactory();
const tipos = ["perro", "gato", "pajaro", "pez"]; // 'pez' sirve para probar error

tipos.forEach(tipo => {
    try {
        const animal = fabrica.crearAnimal(tipo);
        animal.mover();
        animal.hacerSonido();
        console.log("-----------------------");
    } catch (error) {
        console.error(`Error al crear el animal: ${(error as Error).message}`);
    }
    
});

