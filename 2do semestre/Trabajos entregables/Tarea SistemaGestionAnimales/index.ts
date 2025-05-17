/*
Ejercicio: Sistema de Gestión de Animales

Consigna
    Definir la Interfaz:
        Crea una interfaz llamada IAnimal que tenga los siguientes métodos:
            emitirSonido(): void: un método que no recibe parámetros y no devuelve nada, que simula el sonido que hace el animal.
            moverse(): void: un método que simula el movimiento del animal.

    Crear la Clase Abstracta:
        Crea una clase abstracta llamada Animal que implemente la interfaz IAnimal y que tenga:
            Un constructor que reciba el nombre del animal (tipo string).
            Un método concreto moverse() que imprima en consola el mensaje: ${this.name} se mueve..
            Un método abstracto tipoDeDieta() que las subclases deberán implementar.

    Crear Subclases:
        Crea al menos dos subclases que extiendan la clase Animal, por ejemplo, Perro y Gato.
        En cada subclase, implementa el método emitirSonido() para que imprima el sonido correspondiente:
            Perro: "¡Guau!"
            Gato: "¡Miau!"

    Instanciar y Probar:
        Crea instancias de Perro y Gato y llama a los métodos emitirSonido(), moverse() y tipoDeDieta() en cada uno de ellos.

*/

import { Perro } from "./ClasePerro";
import { Gato } from "./ClaseGato"; 

const perro = new Perro("Firulais");
const gato = new Gato("Mishi");

perro.emitirSonido();
perro.moverse();
perro.tipoDeDieta();

gato.emitirSonido();
gato.moverse();
gato.tipoDeDieta();