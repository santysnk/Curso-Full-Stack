import { Telefono } from "./telefono";

export class telefonoConCamara extends Telefono {

    constructor (pEstaPrendido:boolean,pBateria:number) {
        super(pEstaPrendido,pBateria);
    }   
    
    public sacarFoto(){
        console.log(`El telefono saca una foto"`);
    }

}