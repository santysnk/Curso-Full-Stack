import { Animal } from "./Animal";
import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Pajaro } from "./Pajaro";


export class AnimalFactory {
    crearAnimal(tipo: string): Animal {
                
        switch (tipo.toLowerCase()) {
            case "perro":
                return new Perro();
            case "gato": 
                return new Gato();
            case "pajaro":
                return new Pajaro();
            default:
                throw new AnimalNoReconocidoError(tipo);
        }
    }
}

class AnimalNoReconocidoError extends Error {
    constructor(tipo: string) {
        super(`Tipo de animal no reconocido: "${tipo}"`);
        this.name = "AnimalNoReconocidoError";
    }
}