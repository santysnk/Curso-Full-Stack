import { Termo } from "./TermoClass";
import { CajaDeTermo } from "./cajaClass"

export class TapaDeTermo extends Termo{
    private material:string

    constructor (pNombre:string,pColor:string,pCapacidad:number,pPrecio:number,pDurabilidad:number=0,pCaja:CajaDeTermo,pMaterial:string){
        super(pNombre,pColor,pCapacidad,pPrecio,pDurabilidad,pCaja)
        this.material = pMaterial

    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`    MATERIAL DE LA TAPA: ${this.material}`);
    }

}
