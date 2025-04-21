import { CajaDeTermo } from "./cajaClass"

export class Termo {
    private nombre:string
    private color:string
    private capacidad:number
    private precio:number
    private durabilidad:number
    private envoltorio:CajaDeTermo

    constructor (pNombre:string,pColor:string,pCapacidad:number,pPrecio:number,pDurabilidad:number=0,pCaja:CajaDeTermo){
        this.nombre = pNombre
        this.color = pColor
        this.capacidad = pCapacidad
        this.precio = pPrecio
        this.durabilidad = pDurabilidad
        this.envoltorio = pCaja
    }

    // getter y setter

    //get 
    getPrecio():number {
        return this.precio
    }

    //set
    setPrecio(pPrecio:number){
        this.precio = pPrecio
    }

    mostrarInfo (){
        console.log(` DATOS DEL ${this.nombre}:
    COLOR: ${this.color}
    CAPACIDAD: ${this.capacidad} Lts.
    PRECIO: $ ${this.precio}
    DURABILIDAD: ${this.durabilidad} años.
    ENVOLTORIO: MATERIAL: ${this.envoltorio.getMaterial()}, TAMAÑO: ${this.envoltorio.getDimesion()}`
    );
    }


}