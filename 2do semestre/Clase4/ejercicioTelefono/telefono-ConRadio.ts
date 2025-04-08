import { Telefono } from "./telefono";

export class telefonoConRadio extends Telefono {
    private _frecuenciaActual: number;

    constructor (pEstaPrendido:boolean,pBateria:number,pFrecuencia:number) {
        super(pEstaPrendido,pBateria);
        this._frecuenciaActual = pFrecuencia;
    }   
    

    public get frecuenciaActual(): number {
        return this._frecuenciaActual;
    }
    public set frecuenciaActual(value: number) {
        this._frecuenciaActual = value;
    }


    public verFrecuaenciaActual(){
        console.log(`la frecuencia actual es: ${this._frecuenciaActual}"`);
    }

}