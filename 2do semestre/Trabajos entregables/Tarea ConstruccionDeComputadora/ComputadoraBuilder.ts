import { Computadora } from "./ClaseComputadora";

export class ComputadoraBuilder {
    procesador?: string;
    ram?: string;
    almacenamiento?: string;
    tarjetaGrafica?: string;
    sistemaOperativo?: string;

    setProcesador(pProcesador: string): this {
        this.procesador = pProcesador;
        return this;
    }

    setRAM(pRam: string): this {
        this.ram = pRam;
        return this;
    }

    setAlmacenamiento(pAlmacenamiento: string): this {
        this.almacenamiento = pAlmacenamiento;
        return this;
    }

    setTarjetaGrafica(pTarjetaGrafica: string): this {
        this.tarjetaGrafica = pTarjetaGrafica;
        return this;
    }

    setSistemaOperativo(pSistemaOperativo: string): this {
        this.sistemaOperativo = pSistemaOperativo;
        return this;
    }

    build(): Computadora {
        return new Computadora(this);
    }
}
