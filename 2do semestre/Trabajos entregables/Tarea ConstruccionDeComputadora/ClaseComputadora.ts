import { ComputadoraBuilder } from "./ComputadoraBuilder";

export class Computadora {
    procesador?: string;
    ram?: string;
    almacenamiento?: string;
    tarjetaGrafica?: string;
    sistemaOperativo?: string;

    constructor(builder: ComputadoraBuilder) {
        this.procesador = builder.procesador;
        this.ram = builder.ram;
        this.almacenamiento = builder.almacenamiento;
        this.tarjetaGrafica = builder.tarjetaGrafica;
        this.sistemaOperativo = builder.sistemaOperativo;
    }

    mostrarConfiguracion(): void {
        console.log("Configuración de la Computadora:");
        console.log("--------------------------------");
        console.log("   Procesador:", this.procesador ?? "No especificado");
        console.log("   RAM:", this.ram ?? "No especificado");
        console.log("   Almacenamiento:", this.almacenamiento ?? "No especificado");
        console.log("   Tarjeta Gráfica:", this.tarjetaGrafica ?? "No especificado");
        console.log("   Sistema Operativo:", this.sistemaOperativo ?? "No especificado");
    }
}
