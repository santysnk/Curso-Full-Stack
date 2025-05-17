import { IPago } from "./IPago";

// <------------- ERRORES ------------------------>
// Clase de error personalizada para nombre vacío
class NombreVacioError extends Error {
    constructor(message?: string) {
        super('No ha ingresado caracteres en el nombre');
        this.name = "NombreVacio";
    }
}

// Clase de error personalizada para apellido vacío
class ApellidoVacioError extends Error {
    constructor(message?: string) {
        super('No ha ingresado caracteres en el apellido');
        this.name = "ApellidoVacio";
    }
}

// Clase de error personalizada para DNI inválido
class DniInvalidoError extends Error {
    constructor(message?: string) {
        super('El DNI ingresado no es válido');
        this.name = "DniInvalido";
    }
}

// <------------- CLASE -------------------------->

export class MercadoPago implements IPago {
    private nombre:string;
    private apellido:string;
    private dni:number;

    constructor(pNombre:string,pApellido:string,pDni:number){
        this.setNombre(pNombre);
        this.setApellido(pApellido);
        this.setDni(pDni);
    }

    // Getter y Setter para nombre
    getNombre(): string {
        return this.nombre;
    }

    setNombre(pNombre: string) {
        try {
            if (pNombre.trim().length === 0) {
                throw new NombreVacioError();
            }else {
                this.nombre = pNombre;
            }

        } catch (error) {
            console.log( (error as NombreVacioError).name, (error as NombreVacioError).message);
        }
                
    }

    // Getter y Setter para apellido
    getApellido(): string {
        return this.apellido;
    }

    setApellido(pApellido: string) {
        try {
            if (pApellido.trim().length === 0) {
                throw new ApellidoVacioError();
            } else {
                this.apellido = pApellido;
            }
        } catch (error) {
            console.log((error as ApellidoVacioError).name, (error as ApellidoVacioError).message);
        }
    }

    // Getter y Setter para DNI
    getDni(): number {
        return this.dni;
    }

    setDni(pDni: number) {
        try {
            if (isNaN(pDni) || pDni <= 31000000) {
                throw new DniInvalidoError();
            } else {
                this.dni = pDni;
            }
        } catch (error) {
            console.log((error as DniInvalidoError).name, (error as DniInvalidoError).message);
        }
    }


    procesar(): void {
        console.log(` El pago se ha realizado exitosamente`);
        
    }

    cancelarPago(): void {
        console.log(` El pago se ha cancelado exitosamente`);
    }

    generarRecibo(): void {
        console.log(`recibo a nombre de ${this.getNombre()}, ${this.getApellido()}`);
        
    }

}




