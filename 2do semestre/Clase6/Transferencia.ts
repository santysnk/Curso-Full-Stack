import { IPago } from "./IPago";

class ErrorNombreChico extends Error {
    constructor(){
        super("El nombre es demasiado chico");
        this.name = "NombreCorto"
    }
}


export class Transferencia implements IPago{
    nombre:string;
    apellido:string;
    cbu:number

    constructor(pNombre:string,pApellido:string,pCbu:number){
        this.setNombre(pNombre);
        this.apellido = pApellido
        this.cbu = pCbu
    }

    setNombre (pNombre:string){
        try{
            if (pNombre.length > 3){
                this.nombre = pNombre
            }else{
                throw new ErrorNombreChico();
            }

        }catch(error){
            console.log((error as ErrorNombreChico).name,(error as ErrorNombreChico).message);
        }
    }

    procesar(): void {
        console.log(` El pago se ha realizado exitosamente a destino CBU: ${this.cbu}`);
        
    }

    cancelarPago(): void {
        console.log(` El pago se ha cancelado exitosamente a destino CBU: ${this.cbu}`);
    }

    generarRecibo(): void {
        console.log(`recibo a nombre de ${this.nombre}, ${this.apellido}`);
        
    }
}